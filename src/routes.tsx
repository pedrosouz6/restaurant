import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Waiter from "./pages/waiter/Waiter";
import Home from "./components/Header";
import Resquest from "./pages/waiter/Resquest";

export default function Routess() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/garcom/fazer-pedidos" element={ <Waiter /> } />
                <Route path="/garcom/ver-pedidos" element={ <Resquest /> } />
            </Routes>
        </Router>
    )
}