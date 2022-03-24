import Header from "../../components/HeaderWaiter";
import Search from '../../components/SearchDish';
import { useRequest } from '../../context/requests';

import { useState } from 'react';
import Axios from 'axios';

import '../../styles/see.scss';

export default function Waiter() {

    const { requests, loopApi, setLoopApi } = useRequest();

    const [ dish, setDish ] = useState('');
    const [ table, setTable ] = useState('');


    function sendRequest(e) {
        e.preventDefault();

        const validate = dish.trim() === '' || table.trim() === '';

        if(validate) {
            return console.log('vazio');
        }

        const getUser = localStorage.getItem('user');
        const user = JSON.parse(getUser);
        const userId = user.user.id;

        Axios.post('http://localhost:3333/add/request', {
            userId,
            dish,
            table
        });

        setLoopApi(!loopApi);
    } 

    return (
        <div id="page-waiter">
            <Header/>
            <main>
                <div className="container-search-global">
                    <div className="center">
                        <div className="container-search">
                            <h1>Fazer pedido</h1>
                            <Search /> 
                        </div>
                    </div>
                </div>
                <div className="center">
                    <div className="container">
                        <section id="section-request">

                            <div className="container-form">
                                <form onSubmit={sendRequest}>
                                    <input id="dish" 
                                    type="text" 
                                    placeholder="Digite o prato"
                                    value={dish}
                                    onChange={e => setDish(e.target.value)} />

                                    <input id="table" 
                                    type="number"
                                    placeholder="Mesa"
                                    value={table}
                                    onChange={e => setTable(e.target.value)} />
                                    <input id="submit" type="submit" value="Enviar" />
                                </form>
                            </div>

                            <article>
                                <div className="article-header">
                                    <h2>Estatísticas dos pedidos</h2>
                                </div>
                                <div className="container-cards">
                                    <div className="cards" id="finishid" >
                                        <span>110</span>
                                        <p>Pedidos finalizados</p>
                                    </div>
                                    <div className="cards" id="in-progress" >
                                        <span>110</span>
                                        <p>Em andamento</p>
                                    </div>
                                    <div className="cards" id="request" >
                                        <span>{ requests.length }</span>
                                        <p>Pedidos feitos</p>
                                    </div>
                                </div>
                            </article>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    )
}