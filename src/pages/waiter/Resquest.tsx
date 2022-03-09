import Aside from "../../components/Aside";
import Header from "../../components/Header";

import '../../styles/waiter.scss';

export default function Waiter() {
    return (
        <div id="page-waiter">
            <Header/>
            <main>
                <div className="center">
                    <div className="container">
                        <Aside />
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
                                    <div className="cards" id="finishid" >
                                        <span>110</span>
                                        <p>Pedidos finalizados</p>
                                    </div>
                                    <div className="cards" id="in-progress" >
                                        <span>110</span>
                                        <p>Em andamento</p>
                                    </div>
                                    <div className="cards" id="request" >
                                        <span>110</span>
                                        <p>Pedidos feitos</p>
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