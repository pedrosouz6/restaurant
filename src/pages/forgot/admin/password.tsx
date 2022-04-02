import { useNavigate } from "react-router-dom";
import { useState, FormEvent, useEffect } from "react";
import Axios from "axios";

import { useForgot } from '../../../context/forgot';

import Header from '../../../components/HeaderPublic';

import "../../../styles/pages/login.scss";

export default function ForgotAdmin() {

    const { emailForgot } = useForgot();

    const navigate = useNavigate()

    const [ password, setPassword ] = useState('');
    const [ message, setMessage ] = useState('');

    function submitForgot(e : FormEvent) {
        e.preventDefault();

        if(password === '') {
            return setMessage('Preencha o campo acima');
        }

        Axios.put(`http://localhost:3333/password/admin`, {
            emailForgot,
            password, 
        })
        .then(response => {
            if(response.data.success === true) {
                setMessage(response.data.message);
                return navigate('/login/admin');
            }

            return setMessage(response.data.message);
        });
    }

    useEffect(() => {
        if(emailForgot === '') {
            navigate('/login/admin');
        }
    }, [])

    return (
        <div id="page-login">
            <Header />
            <div className="container">
                <div className="container-form">
                    <h2>Nova senha - Admin</h2>
                    <form onSubmit={submitForgot}>
                        <input type="text" 
                        placeholder="Senha"
                        autoFocus
                        onChange={e => setPassword(e.target.value)} />

                        { !(message === '') && (<p className='message-erro'>{message}</p>) }

                        <input type="submit" value="Nova senha" />
                    </form>
                </div>
            </div>
        </div>
    )
}