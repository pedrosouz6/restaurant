import { Link } from 'react-router-dom';

import Profile from './Profile';
import '../styles/components/headerWaiter.scss';

export default function HeaderWaiter() {
    return (
        <header id='header-waiter'>
            <div className="center">
                <div className="header-page">
                    <div className="header-left">
                        <div className="logo-header">
                            <Link to='/'>Restaurant</Link>
                        </div>
                        <nav>
                            <ul>
                                <li><Link to="/waiter/make-requests">Fazer o pedido</Link></li>
                                <li><Link to="/waiter/see-requests">Ver os pedidos</Link></li>
                                <li><Link to="/waiter/menu">Ver o cardápio</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <Profile />
                </div>
            </div>
        </header>
    )
}