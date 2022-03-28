import Header from "../../components/HeaderWaiter";

import { useRequest } from '../../context/requests';

import '../../styles/see.scss';

export default function Waiter() {

    const { requests } = useRequest();

    return (
        <div id="page-waiter">
            <Header/>
            <main>
                <div className="container">
                    <section id="section-see" >
                        <div className="container-search-global">
                            <div className="center">
                                <div className="container-search">
                                    <h2>Ver os pedidos</h2>
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
                                            { requests.map((item, key) => (
                                                <tr key={key}>
                                                    <td>{ item.name_request }</td>
                                                    <td className="number-table">{ item.table_request }</td>
                                                    <td className={ 
                                                        item.status_request === 1 ? 'delivered' : item.status_request === 2 ? 'in-process' :
                                                        item.status_request === 3 ? 'finishid' : 'finishid'}>

                                                        { item.status_request === 1 ? 'Pedidos Feito' : item.status_request === 2 ? 'Fazendo Pedido' :
                                                        item.status_request === 3 ? 'pronto' : 'err'}
                                                    </td>
                                                </tr>
                                            )) }
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
                            </div>
                    </section>
                </div>
            </main>
        </div>
    )
}