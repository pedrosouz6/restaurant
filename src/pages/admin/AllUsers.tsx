import { useEffect, useState } from 'react';
import Axios from 'axios';

import Header from '../../components/HeaderAdmin';
import Search from '../../components/SearchDish';

import  '../../styles/Admin/allUsers.scss';

type TypeUsers = {
    name: string,
    email: string
}

export default function AllUsers() {

    const [ users, setUsers ] = useState([] as any);
    const [ valueSelect, setValueSelect ] = useState('');
    const [ message, setMessage ] = useState(false);

    useEffect(() => {
        Axios.get(`http://localhost:3333/get/users/${valueSelect === '' ? 'none' : valueSelect}`)
        .then(response => {
            if(response.data.message) {
                return setMessage(true);
            }

            setMessage(false);
            setUsers(response.data);
        });
        
    }, [valueSelect]);

    return (
        <section id="all-users">
            <Header/>
            <div className="container-search-global">
                <div className="center">
                    <div className="container-search">
                        <h1>Ver todos usuários</h1>
                        <Search />
                    </div>
                </div>
                <div className="select">
                    <select onChange={e => setValueSelect(e.target.value)}>
                        <option value='none'>Escolha o tipo de usuario</option>
                        <option value='waiter'>Garçom</option>
                        <option value='cooker'>Cozinheiro</option>
                    </select>
                </div>
            </div>
                <div className="center">
                    <div className="container-users">
                            {!message ? users.map((item : TypeUsers, key : string) => (
                                <ul key={key}>
                                    <li><span>{item.name} | {item.email} </span> <span>Del, Uptd, Right</span></li>
                                </ul>
                            )) : 

                            'Escolha o tipo de usuario'}
                        
                    </div>
                </div>
        </section>
    )
}