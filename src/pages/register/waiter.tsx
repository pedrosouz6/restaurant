import { Link, useNavigate } from "react-router-dom";
import { FormEvent, useState } from "react";
import Axios from "axios";

import Header from '../../components/HeaderPublic';

import { useAuth } from "../../context/auth";

import "../../styles/pages/login.scss";

export default function RegisterCooker () {

    const { setAuthUser, setDatasUser } = useAuth();
    const navigate = useNavigate();

    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ message, setMessage ] = useState('');

    function registerWaiter(e : FormEvent){
        e.preventDefault();
        
        const validate = name.trim() === '' || email.trim() === '' || password.trim() === '';
        
        if(!validate) {
            Axios.post(`http://localhost:3333/register/waiter`, {
                name, 
                email,
                password,
            })
            .then(response => {
                if(response.data.message) {
                    return setMessage('Esse e-mail já está em uso');
                }
                    
                localStorage.setItem('user', JSON.stringify(response.data));
                setDatasUser(response.data.user);
                setAuthUser(true);
                navigate('/waiter/make-requests');
            });
        } else {
            setMessage('Preencha o(s) campo(s) acima');
        }

    }

    return (
        <div id="page-login">
            <Header />
            <div className="container">
                <div className="container-form">
                    <div className="choose-login">
                        <Link to="/register/waiter">Garçom</Link>
                        <Link to="/register/cooker">Cozinheiro</Link>
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
                        
                        { !(message == '') && ( <p className='message-erro'>{message}</p> ) }

                        <input type="submit" value="Criar conta" />


                        <span><Link to="/login/waiter">Já tenho conta</Link></span>
                    </form> 
                </div>
            </div>
        </div>
    )
}