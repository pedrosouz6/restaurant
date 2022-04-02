import { createContext, useState, useContext, useEffect, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import Axios from 'axios'

type TypeChildren = {
    children: ReactNode
}

type TypeDatasUser = {
    datasUser: {
        name: string;
        email: string;
        password: string
    };
}

type TypeAuthContext = {
    datasUser: any;
    authUser: boolean;
    loading: boolean;
    setAuthUser: any;
    setDatasUser: any;
    setLoading: any;
}

const AuthContext = createContext({} as TypeAuthContext);

export default function AuthProvider({ children } : TypeChildren) {

    const navigate = useNavigate();

    const [ authUser, setAuthUser ] = useState(false);
    const [ datasUser, setDatasUser ] = useState({} as TypeDatasUser);
    const [ loading, setLoading ] = useState(false);

    useEffect(() => {
        const user = localStorage.getItem('user');
        
        if(user) {
            const userObj = JSON.parse(user);
            const typeUser = userObj.user.type;

            if(userObj.token) {
                const token = userObj.token;

                if(typeUser === '1') {
                    Axios.get('http://localhost:3333/login/cooker/jwt', {
                        headers: {
                            'Authorization' : `Bearer ${token}`
                        }
                    })
                    .then(response => {
                        if(response.data.error === false) {
                            setAuthUser(true);
                            navigate('/cooker/see-requests');
                        }
                    })
                } else if(typeUser === '2'){
                    Axios.get('http://localhost:3333/login/cooker/jwt', {
                        headers: {
                            'Authorization' : `Bearer ${token}`
                        }
                    })
                    .then(response => {
                        if(response.data.error === false) {
                            setAuthUser(true);
                            navigate('/waiter/make-requests');
                        }
                    })
                } else if(typeUser === '3') {
                    Axios.get('http://localhost:3333/login/cooker/jwt', {
                        headers: {
                            'Authorization' : `Bearer ${token}`
                        }
                    })
                    .then(response => {
                        if(response.data.error === false) {
                            setAuthUser(true);
                            navigate('/admin/menu');
                        }
                    })
                }
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
    