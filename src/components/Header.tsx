import { Link } from "react-router-dom";
import "../styles/header.scss";

export default function Header() {
    return (
        <header id="header">
            <div className="center">
                <div className="container-header">
                    <div className="logo-header">
                        <h1>Restaurante</h1>
                    </div>
                    <nav>
                        <ul>
                            <li>Home</li>
                            <li><Link to="/cadastrar/garcom">Garçom</Link></li>
                            <li><Link to="/cadastrar/cozinheiro">Cozinheiro</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}