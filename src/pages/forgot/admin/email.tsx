import { useNavigate } from "react-router-dom";
import { useState, FormEvent } from "react";

import Axios from "axios";

import { useForgot } from '../../../context/forgot';

import Header from '../../../components/HeaderPublic';

import "../../../styles/pages/login.scss";

export default function ForgotAdmin() {

    const navigate = useNavigate();
    const { setEmailForgot, emailForgot } = useForgot();

    const [ message, setMessage ] = useState('');

    function submitForgot(e : FormEvent) {
        e.preventDefault();

        if(emailForgot === '') {
            return setMessage('Preencha o campo acima');
        }

        Axios.post(`http://localhost:3333/forgot/admin`, {
            emailForgot,
        })
        .then(response => {
            if(response.data.exist) {
                return navigate('/password/admin');
            }
            
            return setMessage('Esse usuário não existe');
        });
    }

    return (
        <div id="page-login">
            <Header />
            <div className="container">
                <div className="container-form">
                    <h2>Recuperar senha - Admin</h2>
                    <form onSubmit={submitForgot}>
                        <input type="text" 
                        placeholder="Email"
                        autoFocus 
                        onChange={e => setEmailForgot(e.target.value)} />

                        { !(message === '') && (<p className='message-erro'>{message}</p>) }

                        <input type="submit" value="Recuperar" />
                    </form>
                </div>
            </div>
        </div>
    )
}