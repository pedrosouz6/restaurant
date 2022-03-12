import { createContext, useState, useContext, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

type AuthChildrenType = {
    children: ReactNode
}

type AuthContextType = {
    authCooker: boolean;
    AuthCookerPage: () => void;
}

const AuthContext = createContext({} as AuthContextType);

export default function AuthProvider({ children } : AuthChildrenType) {

    const navigate = useNavigate();

    const [ authCooker, setAuthCooker ] = useState(false);
 
    function AuthCookerPage() {
        console.log(authCooker)
        setAuthCooker(true);
        navigate('/cozinheiro/ver-pedidos')
    }

    function 

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
    