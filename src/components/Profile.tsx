import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import '../styles/components/profile.scss';
import { useAuth } from '../context/auth';

import { IoIosArrowUp } from 'react-icons/io'
import { IoIosArrowDown } from 'react-icons/io';
import { GoSignOut } from 'react-icons/go';

export default function Profile() {

    const navigate = useNavigate();

    const { setDatasUser, datasUser, setAuthUser } = useAuth();
    const [ modalProfile, setModalProfile ] = useState(false);

    useEffect(() => {
        const user = localStorage.getItem('user');

        if(user) {
            const userd = JSON.parse(user);
            const datas = userd.user;
            setDatasUser(datas);

            const tokenUser = JSON.parse(user);
            const token = tokenUser.token;
        }
    }, []);

    function signOut() {
        localStorage.removeItem('user');
        setAuthUser(false);

        navigate('/');
    }

    return (
        <div className="header-right">

            <p onClick={() => setModalProfile(!modalProfile)}>
                {datasUser.name} { modalProfile ? <IoIosArrowUp /> : <IoIosArrowDown/> }
            </p>

            { modalProfile && 
                <nav>
                    <ul>
                        <li onClick={() => signOut()}> <GoSignOut /> Sign out</li>
                    </ul>
                </nav> 
            }

        </div>
    )
}