import { useAuth } from '../context/auth';
import { useNavigate } from 'react-router-dom';
import '../styles/components/btnSignOut.scss';

export default function BtnSignOut() {

    const navigate = useNavigate();
    const { setAuthUser } = useAuth();

    const signOut = () => {
        localStorage.removeItem('user');
        setAuthUser(false);

        navigate('/');
    }

    return (
        <button onClick={signOut} id='signOut'>Sair</button>
    )
}