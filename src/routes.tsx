import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import See from "./pages/waiter/See";
import Home from "./components/Header";
import RequestWaiter from "./pages/waiter/Request";
import Menu from "./pages/waiter/Menu";
import SeeCooker from "./pages/cooker/See";

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
            </Routes>
        </Router>
    )
}