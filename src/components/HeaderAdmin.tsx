import { Link } from 'react-router-dom';

import Profile from './Profile';
import '../styles/components/headerAdmin.scss';

export default function HeaderAdmin() {
    return (
        <header id='header-admin'>
            <div className="center">
                <div className="header-page">
                    <div className="header-left">
                        <div className="logo-header">
                            <Link to='/'>Restaurante</Link>
                        </div>
                        <nav>
                            <ul>
                                <li><Link to="/admin/cardapio">Ver o cardapio</Link></li>
                                <li><Link to="/admin/add-dish">Adicionar prato</Link></li>
                                <li><Link to="/admin/todos-usuarios">Usuários</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <Profile />
                </div>
            </div>
        </header>
    )
}