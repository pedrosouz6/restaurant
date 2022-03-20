import { AuthCooker } from '../context/auth';
import { useNavigate } from 'react-router-dom';
import '../styles/components/btnSignOut.scss';

export default function BtnSignOut() {

    const navigate = useNavigate();
    const { setAuthCooker } = AuthCooker();

    const signOut = () => {
        localStorage.removeItem('user');
        setAuthCooker(false);

        navigate('/');
    }

    return (
        <button onClick={signOut} id='signOut'>Sair</button>
    )
}