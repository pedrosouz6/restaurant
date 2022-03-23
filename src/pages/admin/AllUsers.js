import { useEffect, useState } from 'react';
import Axios from 'axios';

import { FaTrash } from 'react-icons/fa';

import Header from '../../components/HeaderAdmin';
import Search from '../../components/SearchDish';

import  '../../styles/Admin/allUsers.scss';

export default function AllUsers() {

    const [ users, setUsers ] = useState([]);
    const [ valueSelect, setValueSelect ] = useState('');
    const [ message, setMessage ] = useState(false);
    const [ apiCall, setApiCall ] = useState(false);

    useEffect(() => {
        Axios.get(`http://localhost:3333/get/users/${valueSelect === '' ? 'none' : valueSelect}`)
        .then(response => {
            if(response.data.message) {
                return setMessage(true);
            }

            setMessage(false);
            setUsers(response.data);
        });
        
    }, [apiCall]);

    function getValues(e) {
        setValueSelect(e);
        setApiCall(!apiCall);
    }

    function deleteUser(id) {
        Axios.delete(`http://localhost:3333/delete/user/${valueSelect}/${id}`)
        .then(response => {
            if(response.data.message) {
                console.log(response.data.message);
                setApiCall(!apiCall);
            }
        });
    }

    return (
        <section id="all-users">
            <Header/>
            <div className="container-search-global">
                <div className="center">
                    <div className="container-search">
                        <h1>Ver todos usuários</h1>
                            <select onChange={e => getValues(e.target.value)}>
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

                            {!message ? users.map((item, key) => (
                                <ul key={key}>
                                    <li>
                                        <span>{item.name} | {item.email} </span> 
                                        <span className='actions'><i onClick={() => deleteUser(item.id)}><FaTrash /></i></span>
                                    </li>
                                </ul>
                            )) : (
                                <p>Escolha o tipo de usuario</p>
                            )}
                        
                    </div>
                </div>
        </section>
    )
}