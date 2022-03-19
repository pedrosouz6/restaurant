import '../styles/components/headerCooker.scss';

export default function Header() {
    return (
        <header id='header-cooker'>
            <div className="center">
                <div className="header-page">
                    <div className="header-left">
                        <div className="logo">
                            <h1>Restaurant Cooker</h1>
                        </div>
                        <nav>
                            <ul>
                                <li><a href="/cozinheiro/ver-pedidos">Ver os pedidos</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="header-right">
                        <button>Sign out</button>
                        <p>Pedro Souza</p>
                    </div>
                </div>
            </div>
        </header>
    )
}