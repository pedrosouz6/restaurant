import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/components/headerPublic.scss";

export default function Header() {

    const [ datas, setDatas ] = useState([]);
    const [ loading, setLoading ] = useState(false);

    useEffect(() => {
        const datasLocal = localStorage.getItem('user');
        if(datasLocal) {
            const datasUser = JSON.parse(datasLocal);
            setDatas(datasUser.user);
            setLoading(true);
        } else {
            setLoading(false);
        }
    }, []);

    return (
        <header id="header-public">
            <div className="center">
                <div className="container-header">
                    <div className="logo-header">
                        <h1>Restaurante</h1>
                    </div>
                    <nav>
                        <ul>
                            { !loading ? (<> 

                            <li><Link to="/cozinheiro/ver-pedidos">Ver pedidos cozinheiro</Link></li>
                            <li><Link to="/cadastrar/garcom">Garçom</Link></li>
                            <li><Link to="/cadastrar/cozinheiro">Cozinheiro</Link></li> </>) : 

                            datas.name }
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}