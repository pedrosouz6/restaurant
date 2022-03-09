import { Link } from "react-router-dom";

import '../styles/aside.scss';

export default function Aside() {
    return (
        <aside id="waiter-aside">
            <nav>
                <ul>
                    <li> <Link to="/garcom/fazer-pedidos" >Fazer Pedido</Link> </li>
                    <li> <Link to="/garcom/ver-pedidos">Ver os pedidos</Link> </li>
                </ul>
            </nav>

            <div className="aside-footer">
                <Link to="/">Sair da conta</Link>
            </div>
        </aside>
    )
}