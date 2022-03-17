import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
import { useState, FormEvent } from "react";
import { AuthCooker } from "../../context/auth";

import "../../styles/login.scss";

export default function RegisterCooker () {

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const { setDatas } = AuthCooker();

    const navigate = useNavigate();

    const { setAuthCooker } = AuthCooker();

    const validateDatas = (e: FormEvent) => {
        e.preventDefault();

        if(email.trim() === '' || password.trim() === '') {
            return console.log("Errado")
        }

        Axios.post('http://localhost:3333/register/cooker', {
            email, 
            password
        })
        .then(response => {
            console.log(response);
            if(response.data.message) {
                return console.log(response.data.message);
            }
                
            localStorage.setItem('user', JSON.stringify(response.data));
            setDatas(response.data.user);
            setAuthCooker(true);
            navigate('/cozinheiro/ver-pedidos');
        });


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

                    <input type="text" 
                    placeholder="Email"
                    onChange={e => setEmail(e.target.value)} />

                    <input type="text" 
                    placeholder="Senha" 
                    onChange={e => setPassword(e.target.value)} />
                    <input type="submit" value="Criar conta" />

                    <span><Link to="/login/cozinheiro">Já tenho conta</Link></span>
                </form> 
            </div>
        </div>
    )
}