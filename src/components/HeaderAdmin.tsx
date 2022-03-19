import '../styles/components/headerAdmin.scss';

export default function Header() {
    return (
        <header id='header-admin'>
            <div className="center">
                <div className="header-page">
                    <div className="header-left">
                        <div className="logo">
                            <h1>Restaurant</h1>
                        </div>
                        <nav>
                            <ul>
                                <li><a href="#">Ver os pedidos</a></li>
                                <li><a href="/cardapio">Ver o cardapio</a></li>
                                <li><a href="/admin/add-dish">Adicionar prato</a></li>
                                <li><a href="#">Usuários</a></li>
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