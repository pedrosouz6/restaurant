import Header from "../../components/Header";
import AsideCooker from "../../components/AsideCooker";

import "../../styles/seeCooker.scss";

export default function Request () {
    return (
        <div id="page-cooker">
            <Header />
            <div className="center">
                <div className="container">
                    <AsideCooker />

                    <section className="section-cooker">
                        <div className="section-header">
                            <h1>Ver pedidos</h1>
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