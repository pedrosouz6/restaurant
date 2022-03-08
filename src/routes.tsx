import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Waiter from "./pages/Waiter";
import Home from "./components/Header";

export default function Routess() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/garcom" element={ <Waiter /> } />
            </Routes>
        </Router>
    )
}