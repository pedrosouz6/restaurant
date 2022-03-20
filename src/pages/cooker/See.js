import { useEffect } from "react";
import { AuthCooker } from "../../context/auth";

import Header from "../../components/HeaderCooker";
import "../../styles/seeCooker.scss";

// type UserType = {
//     user: {
//         email: string;
//         password: string
//     };
//     token: string
// }

export default function Request () {

    const { setDatas, datas } = AuthCooker();

    useEffect(() => {
        const user = localStorage.getItem('user');

        if(user) {
            const userd = JSON.parse(user);
            const datas = userd.user;
            setDatas(datas);

            const tokenUser = JSON.parse(user);
            const token = tokenUser.token;
        }

    }, []);

    return (
        <div id="page-cooker">
            <Header />
            <div className="center">
                <div className="container">
                    <section className="section-cooker">
                        <div className="section-header">
                            <h1>Ver pedidos {datas.email} </h1>
                        </div>
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
                    </section>
                </div>
            </div>
        </div>
    )
}