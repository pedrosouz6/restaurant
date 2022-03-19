import Aside from "../../components/Aside";
import Header from "../../components/HeaderWaiter";

import '../../styles/menu.scss';

export default function Waiter() {
    return (
        <div id="page-menu">
            <Header/>
            <main>
                <div className="center">
                    <div className="container">
                        <Aside />
                        <section id="section-menu">
                            <div className="section-header">
                                <h1>Cardápio</h1>
                            </div>

                            <div className="menu-filter">
                                <form>
                                    <input type="text" placeholder="Pesquisar por prato" />
                                </form>
                            </div>

                            <div className="menu">
                                <div className="menu-dish">
                                    <div className="name-dish">
                                        <h4>Avenida Paulista - R$ 23,99</h4>
                                        <span>arroz, tutu de feijão, bisteca de porco, linguiça, torresmo, couve e um ovo frito</span>
                                    </div>
                                    <div className="name-dish">
                                        <h4>Avenida Paulista - R$ 23,99</h4>
                                        <span>arroz, tutu de feijão, bisteca de porco, linguiça, torresmo, couve e um ovo frito</span>
                                    </div>
                                    <div className="name-dish">
                                        <h4>Avenida Paulista - R$ 23,99</h4>
                                        <span>arroz, tutu de feijão, bisteca de porco, linguiça, torresmo, couve e um ovo frito</span>
                                    </div>  
                                </div>
                            </div>

                        </section>
                    </div>
                </div>
            </main>
        </div>
    )
}