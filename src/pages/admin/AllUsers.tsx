import { useEffect, useState } from 'react';
import Axios from 'axios';

import { FaTrash } from 'react-icons/fa';
import { GrUpdate } from 'react-icons/gr';
import { IoMdSettings } from 'react-icons/io';

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
                            <select onChange={e => setValueSelect(e.target.value)}>
                                <option value='none'>Escolha o tipo de usuario</option>
                                <option value='waiter'>Garçom</option>
                                <option value='cooker'>Cozinheiro</option>
                            </select>
                        <Search />
                    </div>
                </div>
            </div>
                <div className="center">
                    <div className="container-users">
                            {!message ? users.map((item : TypeUsers, key : string) => (
                                <ul key={key}>
                                    <li><span>{item.name} | {item.email} </span> <span className='actions'><i><FaTrash /></i> <i><GrUpdate /></i> <i><IoMdSettings /></i></span></li>
                                </ul>
                            )) : 

                            (<p>Escolha o tipo de usuario</p>)}
                        
                    </div>
                </div>
        </section>
    )
}