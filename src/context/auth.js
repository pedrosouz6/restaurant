import { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export default function AuthProvider({ children }) {

    const navigate = useNavigate();

    const [ authCooker, setAuthCooker ] = useState(false);
    const [ datas, setDatas ] = useState([]);
    const [ loading, setLoading ] = useState(false);

    useEffect(() => {
        const user = localStorage.getItem('user');

        if(user) {
            setAuthCooker(true);
            navigate('/cozinheiro/ver-pedidos')
        } else {
            setAuthCooker(false);
        }
    }, [])
        

    return (
        <AuthContext.Provider value={{
            authCooker,
            setAuthCooker,
            setDatas,
            setLoading,
            loading,
            datas,
        }}>

            { children }

        </AuthContext.Provider>
    )
}

export const AuthCooker = () => {
    const context = useContext(AuthContext);
    const { authCooker, setAuthCooker, setDatas, datas, setLoading, loading } = context;
    return { authCooker, setAuthCooker, setDatas, datas, setLoading, loading };
} 
    