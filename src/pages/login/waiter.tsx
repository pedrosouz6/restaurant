import { Link, useNavigate } from 'react-router-dom';
import { AuthCooker } from '../../context/auth';
import { useState, FormEvent } from 'react';
import Axios from 'axios';

import '../../styles/login.scss';

export default function FormCooker() {

    const { setDatas, datas, setAuthCooker } = AuthCooker();
    const navigate = useNavigate()

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    function submitLogin(e : FormEvent) {
        e.preventDefault();

        if(email === '' || password === '') {
            return console.log('campo vazio(login cozinheiro)');
        }

        Axios.post(`http://localhost:3333/login/waiter`, {
            email, 
            password
        })
        .then(response => {
            if(response.data.message) {
                return console.log('Usuario não existe')
            }

            console.log(response);

            setDatas(response.data.user);
            localStorage.setItem('user', JSON.stringify(response.data));
            setAuthCooker(true);
            navigate('/garcom/ver-pedidos');
        });
    }

    console.log(datas)

    return (
        <div id='page-login'>
            <div className='container'>
                <div className='choose-login'>
                    <Link to='/login/garcom'>Garçom</Link>
                    <Link to='/login/cozinheiro'>Cozinheiro</Link>
                </div>
                <h2>Logar como Garçom</h2>
                <form onSubmit={submitLogin}>
                    <input type='text' 
                    placeholder='Email'
                    value={email}
                    onChange={e => setEmail(e.target.value)} />
                    <input type='text'
                    placeholder='Senha'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                     />
                    <input type='submit' value='Entrar' />

                    <span><Link to='/'>Esqueceu a senha?</Link></span>
                </form> 
            </div>
        </div>
    )
}