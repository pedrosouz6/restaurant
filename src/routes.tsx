import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import See from "./pages/waiter/See";
import Home from "./components/Header";
import RequestWaiter from "./pages/waiter/Request";
import Menu from "./pages/waiter/Menu";
import SeeCooker from "./pages/cooker/See";
import Admin from "./pages/admin/Admin";
import LoginCooker from "./pages/login/cooker";
import LoginWaiter from "./pages/login/waiter";
import RegisterCooker from "./pages/register/cooker";
import RegisterWaiter from "./pages/register/waiter";

export default function Routess() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/garcom/fazer-pedidos" element={ <RequestWaiter /> } />
                <Route path="/garcom/fazer-pedidos" element={ <RequestWaiter /> } />
                <Route path="/garcom/menu" element={ <Menu /> } />
                <Route path="/garcom/ver-pedidos" element={ <See /> } />
                <Route path="/cozinheiro/ver-pedidos" element={ <SeeCooker /> } />
                <Route path="/admin" element={ <Admin /> } />
                <Route path="/login/cozinheiro" element={ <LoginCooker /> } />
                <Route path="/login/garcom" element={ <LoginWaiter /> } />
                <Route path="/cadastrar/cozinheiro" element={ <RegisterCooker /> } />
                <Route path="/cadastrar/garcom" element={ <RegisterWaiter /> } />
            </Routes>
        </Router>
    )
}