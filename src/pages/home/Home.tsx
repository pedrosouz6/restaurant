import Header from '../../components/HeaderPublic';
import { useNavigate } from 'react-router-dom';

import '../../styles/pages/home.scss';

export default function Home() {

    const navigate = useNavigate();

    return (
        <div id="page-home">
            <Header />
            <div className="center">
                <div className="container-cards">
                    <div className="cards">
                        <div className="header-card">
                            <h3>Admin</h3>
                        </div>
                        <div className="content-card">
                            <nav>
                                <ul>
                                    <li>Poderá excluir qualquer usuário(Garçom ou Cozinheiro);</li>
                                    <li>Adicionar pratos ao cardápio;</li>
                                    <li>Remover pratos do cardápio;</li>
                                    <li>Ver o cardápio.</li>
                                </ul>
                            </nav>
                        </div>
                        <div className="footer-card">
                            <button className='btn-login' onClick={() => navigate('/login/admin')}>Entrar</button>
                        </div>
                    </div>
                    <div className="cards">
                        <div className="header-card">
                            <h3>Garçom</h3>
                        </div>
                        <div className="content-card">
                            <nav>
                                <ul>
                                    <li>Fazer os pedidos;</li>
                                    <li>Ver o cardápio.</li>
                                </ul>
                            </nav>                            
                        </div>
                        <div className="footer-card">
                            <button className='btn-login' onClick={() => navigate('/login/waiter')}>Entrar</button>
                            <button className='btn-create' onClick={() => navigate('/register/waiter')}>Criar conta</button>
                        </div>
                    </div>
                    <div className="cards">
                        <div className="header-card">
                            <h3>Cozinheiro</h3>
                        </div>
                        <div className="content-card">
                            <nav>
                                <ul>
                                    <li>Vai receber todos os pedidos que o garçom fazer;</li>
                                    <li>Indicar se o status do pedido(recebido, em andamento ou pronto);</li>
                                    <li>Ver o cardápio.</li>
                                </ul>
                            </nav>
                        </div>
                        <div className="footer-card">
                            <button className='btn-login' onClick={() => navigate('/login/cooker')}>Entrar</button>
                            <button className='btn-create' onClick={() => navigate('/register/cooker')} >Criar conta</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}