import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import See from "./pages/waiter/See";
import Home from "./components/Header";
import Resquest from "./pages/waiter/Resquest";

export default function Routess() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/garcom/fazer-pedidos" element={ <Resquest /> } />
                <Route path="/garcom/ver-pedidos" element={ <See /> } />
            </Routes>
        </Router>
    )
}