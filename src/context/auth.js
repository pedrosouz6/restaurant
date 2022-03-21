import { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export default function AuthProvider({ children }) {

    const navigate = useNavigate();

    const [ authUser, setAuthUser ] = useState(false);
    const [ datasUser, setDatasUser ] = useState([]);
    const [ loading, setLoading ] = useState(false);

    useEffect(() => {
        const user = localStorage.getItem('user');
        
        if(user) {
            const userObj = JSON.parse(user);
            const typeUser = userObj.user.type;
            
            if(typeUser === '1') {
                setAuthUser(true);
                navigate('/cozinheiro/ver-pedidos');
            } else if(typeUser === '2'){
                setAuthUser(true);
                navigate('/garcom/fazer-pedidos');
            } else if(typeUser === '3') {
                setAuthUser(true);
                navigate('/admin/cardapio');
            }

        } else {
            setAuthUser(false);
        }
    }, []);
        

    return (
        <AuthContext.Provider value={{
            authUser,
            setAuthUser,
            datasUser,
            setDatasUser,
            loading,
            setLoading,
        }}>

            { children }

        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    const { authUser, setAuthUser, setDatasUser, datasUser, setLoading, loading } = context;
    return { authUser, setAuthUser, setDatasUser, datasUser, setLoading, loading };
} 
    