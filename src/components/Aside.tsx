import { Link } from "react-router-dom";
import { BsBoxArrowInLeft } from "react-icons/bs";
import { MdMenuBook } from "react-icons/md";
import { FaBookReader } from "react-icons/fa";
import { BsPencilSquare } from "react-icons/bs";

import { AuthCooker } from "../context/auth"; 

import '../styles/aside.scss';

export default function Aside() {

    const { setAuthCooker } = AuthCooker();

    function signOut() {
        setAuthCooker(false);
        localStorage.removeItem('user');

        console.log('teste')
    }

    return (
        <aside id="waiter-aside">
            <nav>
                <ul>
                    <li> <Link to="/garcom/fazer-pedidos" > <i> <BsPencilSquare /> </i> Fazer Pedido</Link> </li>
                    <li> <Link to="/garcom/ver-pedidos"> <i> <FaBookReader /> </i> Ver os pedidos</Link> </li>
                    <li> <Link to="/garcom/menu"> <i> <MdMenuBook /> </i> Cardapio</Link> </li>
                </ul>
            </nav>

            <div className="aside-footer">
                <Link to="/" onClick={signOut}> <BsBoxArrowInLeft /> Sair da conta</Link>
            </div>
        </aside>
    )
}