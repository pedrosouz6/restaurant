import { Link } from "react-router-dom";
import "../styles/components/headerPublic.scss";

export default function Header() {
    return (
        <header id="header-public">
            <div className="center">
                <div className="container-header">
                    <div className="logo-header">
                        <h1>Restaurante</h1>
                    </div>
                    <nav>
                        <ul>
                            <li><Link to="/cozinheiro/ver-pedidos">Ver pedidos cozinheiro</Link></li>
                            <li><Link to="/cadastrar/garcom">Garçom</Link></li>
                            <li><Link to="/login/admin">Admin</Link></li>
                            <li><Link to="/cadastrar/cozinheiro">Cozinheiro</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}