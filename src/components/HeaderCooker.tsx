import { Link } from 'react-router-dom';
import { useEffect } from 'react';

import BtnSignOut from './SignOut';
import '../styles/components/headerCooker.scss';
import { useAuth } from '../context/auth';

export default function Header() {
    
    const { setDatasUser, datasUser } = useAuth();

    useEffect(() => {
        const user = localStorage.getItem('user');

        if(user) {
            const userd = JSON.parse(user);
            const datas = userd.user;
            setDatasUser(datas);

            const tokenUser = JSON.parse(user);
            const token = tokenUser.token;
        }
    }, []);

    return (
        <header id='header-cooker'>
            <div className="center">
                <div className="header-page">
                    <div className="header-left">
                        <div className="logo">
                            <h1>Restaurant</h1>
                        </div>
                        <nav>
                            <ul>
                                <li><Link to="/cozinheiro/cardapio">Ver os pedidos</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="header-right">
                        <BtnSignOut />
                        <p>{datasUser.name}</p>
                    </div>
                </div>
            </div>
        </header>
    )
}