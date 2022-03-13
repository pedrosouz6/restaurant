import { createContext, useState, useContext, ReactNode } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export default function AuthProvider({ children }) {

    const navigate = useNavigate();

    const [ authCooker, setAuthCooker ] = useState(false);
 
    function AuthCookerPage() {
        setAuthCooker(true);
        navigate('/cozinheiro/ver-pedidos')

        Axios.post('http://localhost:3333/register/cooker', {
            email, 
            password
        })
        .then(response => setDatas(response.data));
        
    }

    function test() {
            
    }

    return (
        <AuthContext.Provider value={{
            authCooker: authCooker,
            AuthCookerPage
        }}>

            { children }

        </AuthContext.Provider>
    )
}

export const AuthCooker = () => {
    const context = useContext(AuthContext);
    const { authCooker, AuthCookerPage } = context;
    return { authCooker, AuthCookerPage };
} 
    