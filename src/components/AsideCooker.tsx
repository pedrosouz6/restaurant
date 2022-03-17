import { Link } from "react-router-dom";
import { BsBoxArrowInLeft } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";

import { AuthCooker } from "../context/auth"; 

import '../styles/aside.scss';

export default function AsideCooker() {

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
                    <li> <Link to="/cozinheiro/ver-pedidos" > <i> <BsPencilSquare /> </i> Fazer Pedido </Link> </li>
                </ul>
            </nav>

            <div className="aside-footer">
                <Link to="/" onClick={signOut}> <BsBoxArrowInLeft /> Sair da conta</Link>
            </div>
        </aside>
    )
}