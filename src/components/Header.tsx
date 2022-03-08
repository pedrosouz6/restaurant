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
                            <li>Garçom</li>
                            <li>Cozinheiro</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}