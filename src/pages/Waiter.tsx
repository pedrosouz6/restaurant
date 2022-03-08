import { Link } from "react-router-dom";
import Header from "../components/Header";

import '../styles/waiter.scss';

export default function Waiter() {
    return (
        <div id="page-waiter">
            <Header/>
            <main>
                <div className="center">
                    <div className="container">
                        <aside>
                            <nav>
                                <ul>
                                    <li>Fazer Pedido</li>
                                    <li>Ver os pedidos</li>
                                </ul>
                            </nav>

                            <div className="aside-footer">
                                <Link to="/">Sair da conta</Link>
                            </div>
                        </aside>
                        <section>
                            <div className="section-header">
                                <h1>Fazer o pedido</h1>
                            </div>

                            <div className="container-form">
                                <form>
                                    <input id="dish" type="text" placeholder="Digite o prato" />
                                    <input id="table" type="number" placeholder="Mesa" />
                                    <input id="submit" type="submit" value="Enviar" />
                                </form>
                            </div>

                            <article>
                                <div className="article-header">
                                    <h2>Estatísticas dos pedidos</h2>
                                </div>
                                <div className="container-cards">
                                    <div className="cards">
                                        <span>110</span>
                                        <p>Pedidos finalizados</p>
                                    </div>
                                    <div className="cards">
                
                                    </div>
                                    <div className="cards">
                
                                    </div>
                                </div>
                            </article>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    )
}