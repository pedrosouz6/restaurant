import '../styles/components/headerWaiter.scss';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header id='header-waiter'>
            <div className="center">
                <div className="header-page">
                    <div className="header-left">
                        <div className="logo">
                            <h1>Restaurant Waiter</h1>
                        </div>
                        <nav>
                            <ul>
                                <li><Link to="/garcom/fazer-pedidos">Fazer o pedido</Link></li>
                                <li><Link to="/garcom/ver-pedidos">Ver os pedidos</Link></li>
                                <li><Link to="/cardapio">Ver o cardápio</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="header-right">
                        <button>Sign out</button>
                        <p>Pedro Souza</p>
                    </div>
                </div>
            </div>
        </header>
    )
}