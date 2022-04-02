import Header from "../../components/HeaderWaiter";

import { useRequest } from '../../context/requests';

import '../../styles/see.scss';

export default function Waiter() {

    const { requests } = useRequest();
    console.log(requests);

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
                                                        item.status_request === 3 ? 'Pronto' : ''}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>

                                    { requests.length < 1 && ( <p>Nenhum pedido</p> ) }

                                </div>
                            </div>
                    </section>
                </div>
            </main>
        </div>
    )
}