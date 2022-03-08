import Profile from '../images/profile.jpg';

import '../styles/waiter.scss'

export default function Waiter() {
    return (
        <main id="page-waiter">
            <div className="center">
                <div className="container">
                    <aside id="waiter-aside">

                        <div className="waiter-logo">
                            <h1>Restarante</h1>
                        </div>

                        <div className="waiter-profile">
                            <img src={Profile} alt="" />
                            <span>Pedro Souza</span>
                        </div>

                        <nav>
                            <ul>
                                <li>Fazer Pedido</li>
                                <li>Ver os pedidos</li>
                            </ul>
                        </nav>

                        <div className="aside-footer">
                            Sair da conta
                        </div>

                    </aside>
                </div>
            </div>
        </main>
    )
}