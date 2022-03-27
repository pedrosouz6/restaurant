import { Link } from 'react-router-dom';
import { useEffect } from 'react';

import { useAuth } from '../context/auth';

import BtnSignOut from './SignOut';
import '../styles/components/headerAdmin.scss';

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
        <header id='header-admin'>
            <div className="center">
                <div className="header-page">
                    <div className="header-left">
                        <div className="logo-header">
                            <Link to='/'>Restaurante</Link>
                        </div>
                        <nav>
                            <ul>
                                <li><Link to="#">Ver os pedidos</Link></li>
                                <li><Link to="/admin/cardapio">Ver o cardapio</Link></li>
                                <li><Link to="/admin/add-dish">Adicionar prato</Link></li>
                                <li><Link to="/admin/todos-usuarios">Usuários</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="header-right">
                        <BtnSignOut />
                        <p>{ datasUser.name }</p>
                    </div>
                </div>
            </div>
        </header>
    )
}