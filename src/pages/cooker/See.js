import { useEffect, useState } from "react";
import { useAuth } from "../../context/auth";
import Axios from 'axios';

import Header from "../../components/HeaderCooker";
import "../../styles/seeCooker.scss";

import { useRequest } from '../../context/requests';

export default function Request () {

    const { setDatasUser } = useAuth();
    const { loopApi } = useRequest();
    const [ datas, setDatas ] = useState([]);

    useEffect(() => {
        const user = localStorage.getItem('user');

        if(user) {
            const userd = JSON.parse(user);
            const datas = userd.user;
            setDatasUser(datas);

            const tokenUser = JSON.parse(user);
            const token = tokenUser.token;

            Axios.get('http://localhost:3333/get/all/request')
            .then(response => setDatas(response.data))
        }
    }, [loopApi]);

    function updateStatus(id, status) {
        Axios.put(`http://localhost:3333/update/request/${id}/${status}`);
    };

    return (
        <div id="page-cooker">
            <Header />
            <div className="container">
                <section className="section-cooker">
                    <div className="container-search-global">
                        <div className="center">
                            <div className="container-search">
                                <h2>Ver pedido</h2>
                            </div>
                        </div>
                    </div>
                    <div className="center">
                        <div className="table">
                            <table>
                                <thead>
                                    <tr>
                                        <td>Prato</td>
                                        <td>Quem fez o pedido</td>
                                        <td>Mesa</td>
                                        <td>Status do pedido</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    { datas.map((item, key) => (
                                        <tr key={key}>
                                            <td>{ item.name_request }</td>
                                            <td>{ item.name_user ? item.name_user : 'Usuário não identificado' }</td>
                                            <td className="number-table">{ item.table_request }</td>
                                            <td> 
                                                <select onChange={e => updateStatus(item.id_request, e.target.value)} >
                                                    { item.status_request === 1 && (
                                                        <>
                                                        <option value='1' selected>Recebido</option>
                                                        <option value='2'>Em andamento</option>
                                                        <option value='3'>Pronto</option>
                                                        </>
                                                    )}
                                                    { item.status_request === 2 && (
                                                        <>
                                                        <option value='1' >Recebido</option>
                                                        <option value='2' selected>Em andamento</option>
                                                        <option value='3'>Pronto</option>
                                                        </>
                                                    )}
                                                    { item.status_request === 3 && (
                                                        <>
                                                        <option value='1' >Recebido</option>
                                                        <option value='2'>Em andamento</option>
                                                        <option value='3' selected>Pronto</option>
                                                        </>
                                                    )}
                                                  
                                                </select>
                                            </td>
                                        </tr>
                                    )) }
                                </tbody>
                            </table>
                            { datas.length < 1 && ( <p>Nenhum pedido feito</p> ) }
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}