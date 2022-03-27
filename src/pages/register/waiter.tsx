import { Link, useNavigate } from "react-router-dom";
import { FormEvent, useState } from "react";
import Axios from "axios";

import { useAuth } from "../../context/auth";

import "../../styles/pages/login.scss";

export default function RegisterCooker () {

    const { setAuthUser, setDatasUser } = useAuth();
    const navigate = useNavigate();

    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    function registerWaiter(e : FormEvent){
        e.preventDefault();
        
        const validate = name.trim() === '' || email.trim() === '' || password.trim() === '';
        
        if(!validate) {
            console.log(name, password, email);
            Axios.post(`http://localhost:3333/register/waiter`, {
                name, 
                email,
                password,
            })
            .then(response => {
                console.log(response);

                if(response.data.message) {
                    return console.log(response.data.message);
                }
                    
                localStorage.setItem('user', JSON.stringify(response.data));
                setDatasUser(response.data.user);
                setAuthUser(true);
                navigate('/garcom/fazer-pedidos');
            });
        } else {
            console.log('campo(s) vazio(s)')    
        }

    }

    return (
        <div id="page-login">
            <div className="container">
                <div className="choose-login">
                    <Link to="/cadastrar/garcom">Garçom</Link>
                    <Link to="/cadastrar/cozinheiro">Cozinheiro</Link>
                </div>
                <h2>Criar conta como garçom</h2>

                <form onSubmit={registerWaiter}>
                    <input type="text" 
                    placeholder="Nome"
                    value={name}
                    onChange={e => setName(e.target.value)} />

                    <input type="text" 
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)} />

                    <input type="text" 
                    placeholder="Senha"
                    value={password}
                    onChange={e => setPassword(e.target.value)} />
                    <input type="submit" value="Criar conta" />

                    <span><Link to="/login/garcom">Já tenho conta</Link></span>
                </form> 
            </div>
        </div>
    )
}