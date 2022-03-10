import { Link } from "react-router-dom";
import { useState, FormEvent } from "react";

import "../../styles/login.scss";

export default function RegisterCooker () {

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const validateDatas = (e: FormEvent) => {
        e.preventDefault();
    }

    return (
        <div id="page-login">
            <div className="container">
                <div className="choose-login">
                    <Link to="/cadastrar/garcom">Garçom</Link>
                    <Link to="/cadastrar/cozinheiro">Cozinheiro</Link>
                </div>
                <h2>Criar conta como cozinheiro</h2>
                <form onSubmit={validateDatas}>
                    <input type="text" placeholder="Email" />
                    <input type="text" placeholder="Senha" />
                    <input type="submit" value="Criar conta" />

                    <span><Link to="/login/garcom">Já tenho conta</Link></span>
                </form> 
            </div>
        </div>
    )
}