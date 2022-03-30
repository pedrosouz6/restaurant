import { useNavigate } from "react-router-dom";
import { useState, FormEvent } from "react";
import { useAuth } from "../../context/auth";
import Axios from "axios";

import Header from '../../components/HeaderPublic';

import "../../styles/pages/login.scss";

export default function ForgotCooker() {

    const { setDatasUser, setAuthUser } = useAuth();
    const navigate = useNavigate()

    const [ password, setPassword ] = useState('');
    const [ message, setMessage ] = useState('');

    function submitForgot(e : FormEvent) {
        e.preventDefault();

        if(password === '') {
            return setMessage('Preencha o campo acima');
        }

        Axios.post(`http://localhost:3333/forgot/cooker`, {
            password, 
        })
        .then(response => {
            if(response.data.message) {
                return setMessage('Esse usuário não existe');
            }

            setDatasUser(response.data.user);
            localStorage.setItem('user', JSON.stringify(response.data));
            setAuthUser(true);
            navigate('/cozinheiro/ver-pedidos');
        });
    }

    return (
        <div id="page-login">
            <Header />
            <div className="container">
                <div className="container-form">
                    <h2>Nova senha</h2>
                    <form onSubmit={submitForgot}>
                        <input type="text" 
                        placeholder="Senha"
                        onChange={e => setPassword(e.target.value)} />

                        { !(message === '') && (<p className='message-erro'>{message}</p>) }

                        <input type="submit" value="Nova senha" />
                    </form>
                </div>
            </div>
        </div>
    )
}