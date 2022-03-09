import Aside from "../../components/Aside";
import Header from "../../components/Header";

import '../../styles/request.scss';

export default function Waiter() {
    return (
        <div id="page-waiter">
            <Header/>
            <main>
                <div className="center">
                    <div className="container">
                        <Aside />

                        <section id="section-see" >
                            <div className="section-header">
                                <h1>Ver os pedidos</h1>
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
                                            <td>Feijoada</td>
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
            </main>
        </div>
    )
}