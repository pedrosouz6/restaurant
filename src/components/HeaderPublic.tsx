import { Link } from "react-router-dom";
import "../styles/components/headerPublic.scss";

export default function Header() {
    return (
        <header id="header-public">
            <div className="center">
                <div className="container-header">
                    <div className="logo-header">
                        <Link to='/'>Restaurante</Link>
                    </div>
                    <nav>
                        <ul>
                            <li><Link to="/login/admin">Admin</Link></li>
                            <li><Link to="/register/cooker">Cozinheiro</Link></li>
                            <li><Link to="/register/waiter">Garçom</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}