import { useNavigate } from "react-router-dom";
import { useState, FormEvent, useEffect } from "react";
import Axios from "axios";

import { useForgot } from '../../../context/forgot';

import Header from '../../../components/HeaderPublic';

import "../../../styles/pages/login.scss";

export default function ForgotCooker() {

    const { emailForgot } = useForgot();

    const navigate = useNavigate()

    const [ password, setPassword ] = useState('');
    const [ message, setMessage ] = useState('');

    function submitForgot(e : FormEvent) {
        e.preventDefault();

        if(password === '') {
            return setMessage('Preencha o campo acima');
        }

        Axios.put(`http://localhost:3333/password/cooker`, {
            emailForgot,
            password, 
        })
        .then(response => {
            if(response.data.success === true) {
                return setMessage(response.data.message);
            }   

            setMessage(response.data.message);
            navigate('/login/cooker');
        });
    }

    console.log(emailForgot)

    useEffect(() => {
        if(emailForgot === '') {
            navigate('/login/cooker');
        }
    }, [])

    return (
        <div id="page-login">
            <Header />
            <div className="container">
                <div className="container-form">
                    <h2>Nova senha - Cozinheiro</h2>
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