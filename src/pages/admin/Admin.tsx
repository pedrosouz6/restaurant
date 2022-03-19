import '../../styles/Admin/admin.scss';
import AddDish from './AddDish';

export default function Admin () {
    return (
        <div id="page-admin">
            <header>
                <div className="center">
                    <div className="header-page">
                        <div className="header-left">
                            <div className="logo">
                                <h1>Restaurant</h1>
                            </div>
                            <nav>
                                <ul>
                                    <li><a href="#">Ver os pedidos</a></li>
                                    <li><a href="#">Ver o cardapio</a></li>
                                    <li><a href="#">Adicionar prato</a></li>
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

            <main>
                <AddDish />
            </main>
        </div>
    )
}