import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
import { useState, FormEvent } from "react";
import { useAuth } from "../../context/auth";

import Header from '../../components/HeaderPublic';

import "../../styles/pages/login.scss";

export default function RegisterCooker () {

    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ message, setMessage ] = useState('');

    const { setDatasUser, setAuthUser } = useAuth();

    const navigate = useNavigate();

    const validateDatas = (e: FormEvent) => {
        e.preventDefault();

        const validate = name.trim() === '' || email.trim() === '' || password.trim() === '';

        if(!validate) {
            Axios.post('http://localhost:3333/register/cooker', {
                name,
                email, 
                password
            })
            .then(response => {
                console.log(response);
                if(response.data.message) {
                    return setMessage('Esse e-mail já está em uso');
                }
                    
                localStorage.setItem('user', JSON.stringify(response.data));
                setDatasUser(response.data.user);
                setAuthUser(true);
                navigate('/cooker/see-requests');
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

                    <h2>Criar conta como cozinheiro</h2>

                    <form onSubmit={validateDatas}>

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

                        <span><Link to="/login/cooker">Já tenho conta</Link></span>
                    </form> 
                </div>
            </div>
        </div>
    )
}