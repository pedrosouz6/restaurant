import { createContext, useState, useContext, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

type AuthChildrenType = {
    children: ReactNode
}

type useStateType = {
    password: string | undefined;
}

type AuthContextType = {
    authCooker: boolean;
    AuthCookerPage: () => void;
    setPassword: useStateType | undefined
}

const AuthContext = createContext({} as AuthContextType);

export default function AuthProvider({ children } : AuthChildrenType) {

    const navigate = useNavigate();

    const [ authCooker, setAuthCooker ] = useState(false);
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState<useStateType>();
 
    function AuthCookerPage() {
        console.log(authCooker);
        setAuthCooker(true);
        navigate('/cozinheiro/ver-pedidos');
    }

    return (
        <AuthContext.Provider value={{
            authCooker: authCooker,
            AuthCookerPage,
            setPassword
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
    