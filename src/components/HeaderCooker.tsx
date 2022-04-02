import { Link } from 'react-router-dom';

import Profile from './Profile';

import '../styles/components/headerCooker.scss';

export default function HeaderCooker() {
    return (
        <header id='header-cooker'>
            <div className="center">
                <div className="header-page">
                    <div className="header-left">
                        <div className="logo-header">
                            <Link to='/'>Restaurante</Link>
                        </div>
                        <nav>
                            <ul>
                                <li><Link to="/cooker/see-requests">Ver os pedidos</Link></li>
                                <li><Link to="/cooker/menu">Cardápio</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <Profile />
                </div>
            </div>
        </header>
    )
}