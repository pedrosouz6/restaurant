import { Link } from "react-router-dom";
import { BsBoxArrowInLeft } from "react-icons/bs";
import { MdMenuBook } from "react-icons/md";
import { FaBookReader } from "react-icons/fa";

import '../styles/aside.scss';

export default function Aside() {
    return (
        <aside id="waiter-aside">
            <nav>
                <ul>
                    <li> <Link to="/garcom/fazer-pedidos" >Fazer Pedido</Link> </li>
                    <li> <Link to="/garcom/ver-pedidos"> <i> <FaBookReader /> </i> Ver os pedidos</Link> </li>
                    <li> <Link to="/garcom/ver-pedidos"> <i> <MdMenuBook /> </i> Cardapio</Link> </li>
                </ul>
            </nav>

            <div className="aside-footer">
                <Link to="/"> <BsBoxArrowInLeft /> Sair da conta</Link>
            </div>
        </aside>
    )
}