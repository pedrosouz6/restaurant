import { Link, useNavigate } from "react-router-dom";
import { useState, FormEvent } from "react";
import { useAuth } from "../../context/auth";
import Axios from "axios";

import Header from '../../components/HeaderPublic';

import "../../styles/pages/login.scss";

export default function FormCooker() {

    const { setDatasUser, setAuthUser } = useAuth();
    const navigate = useNavigate()

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ token, setToken ] = useState('');
    const [ message, setMessage ] = useState('');

    function submitLogin(e : FormEvent) {
        e.preventDefault();

        if(email === '' || password === '') {
            return setMessage('Preencha o(s) campo(s) acima');
        }

        Axios.post(`http://localhost:3333/login/cooker`, {
            email, 
            password
        })
        .then(response => {
            if(response.data.message) {
                return setMessage('Esse usuário não existe');
            }

            setDatasUser(response.data.user);
            localStorage.setItem('user', JSON.stringify(response.data));
            setAuthUser(true);
            navigate('/cooker/see-requests');
        });
    }

    return (
        <div id="page-login">
            <Header />
            <div className="container">
                <div className="container-form">
                    <div className="choose-login">
                        <Link to="/login/waiter">Garçom</Link>
                        <Link to="/login/cooker">Cozinheiro</Link>
                    </div>
                    <h2>Logar como Cozinheiro</h2>
                    <form onSubmit={submitLogin}>
                        <input type="text" 
                        placeholder="Email"
                        autoFocus
                        value={email}
                        onChange={e => setEmail(e.target.value)} />

                        <input type="text" 
                        placeholder="Senha"
                        value={password}
                        onChange={e => setPassword(e.target.value)} />

                        { !(message === '') && (<p className='message-erro'>{message}</p>) }

                        <input type="submit" value="Entrar" />

                        <span><Link to="/forgot/cooker">Esqueceu a senha?</Link></span>
                    </form>
                </div>
            </div>
        </div>
    )
}