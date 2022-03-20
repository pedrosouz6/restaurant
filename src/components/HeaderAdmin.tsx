import '../styles/components/headerAdmin.scss';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header id='header-admin'>
            <div className="center">
                <div className="header-page">
                    <div className="header-left">
                        <div className="logo">
                            <h1>Restaurant</h1>
                        </div>
                        <nav>
                            <ul>
                                <li><Link to="#">Ver os pedidos</Link></li>
                                <li><Link to="/admin/cardapio">Ver o cardapio</Link></li>
                                <li><Link to="/admin/add-dish">Adicionar prato</Link></li>
                                <li><Link to="#">Usuários</Link></li>
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