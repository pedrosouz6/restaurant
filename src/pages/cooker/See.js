import { useEffect, useState } from "react";
import { useAuth } from "../../context/auth";
import Search from '../../components/SearchDish';
import Axios from 'axios';

import Header from "../../components/HeaderCooker";
import "../../styles/seeCooker.scss";

import { useRequest } from '../../context/requests';

export default function Request () {

    const { setDatasUser } = useAuth();
    const { loopApi } = useRequest();
    const [ datas, setDatas ] = useState([]);
    const [ status, setStatus ] = useState(null);

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

    return (
        <div id="page-cooker">
            <Header />
                <div className="container">
                    <section className="section-cooker">
                        <div className="container-search-global">
                            <div className="center">
                                <div className="container-search">
                                    <h1>Ver pedido</h1>
                                    <Search /> 
                                </div>
                            </div>
                        </div>
                        <div className="center">
                            <div className="table">
                                <table>
                                    <thead>
                                        <tr>
                                            <td>Prato</td>
                                            <td>Mesa</td>
                                            <td>Status do pedido</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        { datas.map((item, key) => (
                                            <tr key={key}>
                                                <td>{ item.name_request }</td>
                                                <td className="number-table">{ item.table_request }</td>
                                                <td> 
                                                    <select>
                                                        <option>Visto</option>
                                                        <option>Em andamento</option>
                                                        <option>Pronto</option>
                                                    </select> 
                                                </td>
                                            </tr>
                                        )) }
                                        <tr>
                                            <td>Feijoda</td>
                                            <td className="number-table">04</td>
                                            <td className="in-process">Em andamento</td>
                                        </tr>
                                        <tr>
                                            <td>Baião de 2</td>
                                            <td className="number-table">09</td>
                                            <td className="delivered">Entregue</td>
                                        </tr>
                                        <tr>
                                            <td>Avenida paulista</td>
                                            <td className="number-table">12</td>
                                            <td className="finishid">Pronto</td>
                                        </tr>
                                        <tr>
                                            <td>Churrasco</td>
                                            <td className="number-table">05</td>
                                            <td className="finishid">Pronto</td>
                                        </tr>
                                    </tbody>
                                </table>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}