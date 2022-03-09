import { Link } from "react-router-dom";
import { BsBoxArrowInLeft } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";

import '../styles/aside.scss';

export default function AsideCooker() {
    return (
        <aside id="waiter-aside">
            <nav>
                <ul>
                    <li> <Link to="/cozinheiro/ver-pedidos" > <i> <BsPencilSquare /> </i> Fazer Pedido </Link> </li>
                </ul>
            </nav>

            <div className="aside-footer">
                <Link to="/"> <BsBoxArrowInLeft /> Sair da conta</Link>
            </div>
        </aside>
    )
}