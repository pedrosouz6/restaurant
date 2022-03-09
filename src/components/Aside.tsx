import { Link } from "react-router-dom";

export default function Aside() {
    return (
        <aside id="waiter-aside">
            <nav>
                <ul>
                    <li> <Link to="/garcom" >Fazer Pedido</Link> </li>
                    <li> <Link to="/pedido">Ver os pedidos</Link> </li>
                </ul>
            </nav>

            <div className="aside-footer">
                <Link to="/">Sair da conta</Link>
            </div>
        </aside>
    )
}