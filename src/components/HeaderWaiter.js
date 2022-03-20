import { Link } from 'react-router-dom';
import { useEffect } from 'react';

import { AuthCooker } from '../context/auth';
import '../styles/components/headerWaiter.scss';

export default function Header() {

    const { setDatas, datas } = AuthCooker();

    useEffect(() => {
        const user = localStorage.getItem('user');

        if(user) {
            const userd = JSON.parse(user);
            const datas = userd.user;
            setDatas(datas);

            const tokenUser = JSON.parse(user);
            const token = tokenUser.token;
        }
    }, []);

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
                                <li><Link to="/garcom/cardapio">Ver o cardápio</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="header-right">
                        <button>Sign out</button>
                        <p>{datas.name}</p>
                    </div>
                </div>
            </div>
        </header>
    )
}