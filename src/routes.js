import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { AuthCooker } from './context/auth';
import AuthProvider from './context/auth';

import See from "./pages/waiter/See";
import Home from "./components/Header";
import RequestWaiter from "./pages/waiter/Request";
import Menu from "./pages/menu/Menu";
import SeeCooker from "./pages/cooker/See";
import Admin from "./pages/admin/Admin";
import LoginCooker from "./pages/login/cooker";
import LoginWaiter from "./pages/login/waiter";
import RegisterCooker from "./pages/register/cooker";
import RegisterWaiter from "./pages/register/waiter";

export default function Routess() {

    const Private = ({children}) => {
        const { authCooker } = AuthCooker();
        
        if(authCooker) {
            return children;
        }

        return <Navigate to="/"/>
    }

    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={ <Home /> } />
                    <Route path="/garcom/fazer-pedidos" element={ <Private> <RequestWaiter /> </Private> } />
                    <Route path="/menu" element={ <Menu /> } />
                    <Route path="/garcom/ver-pedidos" element={ <Private>  <See /> </Private> } />
                    <Route path="/cozinheiro/ver-pedidos" 
                    element= { <Private> <SeeCooker /> </Private> } />
                    <Route path="/admin" element={ <Admin /> } />
                    <Route path="/login/cozinheiro" element={ <LoginCooker /> } />
                    <Route path="/login/garcom" element={ <LoginWaiter /> } />
                    <Route path="/cadastrar/cozinheiro" element={ <RegisterCooker /> } />
                    <Route path="/cadastrar/garcom" element={ <RegisterWaiter /> } />
                </Routes>
            </AuthProvider>
        </Router>
    )
}