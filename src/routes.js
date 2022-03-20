import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthCooker } from './context/auth';
import AuthProvider from './context/auth';

import See from './pages/waiter/See';
import Home from './pages/home/Home';
import RequestWaiter from './pages/waiter/Request';
import Menu from './pages/menu/Menu';
import SeeCooker from './pages/cooker/See';
import AddDish from './pages/admin/AddDish';
import RegisterCooker from './pages/register/cooker';
import RegisterWaiter from './pages/register/waiter';

import LoginAdmin from './pages/login/admin';
import LoginCooker from './pages/login/cooker';
import LoginWaiter from './pages/login/waiter';

import MenuAdmin from './pages/menu/MenuAdmin';
import MenuWaiter from './pages/menu/MenuWaiter';
import MenuCooker from './pages/menu/MenuCooker';

export default function Routess() {

    const Private = ({children}) => {
        const { authCooker } = AuthCooker();
        
        if(authCooker) {
            return children;
        }

        return <Navigate to='/'/>
    }

    return (
        <Router>
            <AuthProvider>
                <Routes>
                    {/* Route Public */}
                    <Route path='/' element={ <Home /> } />
                    <Route path='/login/cozinheiro' element={ <LoginCooker /> } />
                    <Route path='/login/garcom' element={ <LoginWaiter /> } />
                    <Route path='/login/admin' element={ <LoginAdmin /> } />

                    <Route path='/cardapio' element={ <Menu /> } />
                    <Route path='/admin/add-dish' element={ <AddDish /> } />
                    <Route path='/garcom/fazer-pedidos' element={ <Private> <RequestWaiter /> </Private> } />
                    <Route path='/garcom/ver-pedidos' element={ <Private>  <See /> </Private> } />
                    <Route path='/cozinheiro/ver-pedidos' 
                    element= { <Private> <SeeCooker /> </Private> } />
                    <Route path='/cadastrar/cozinheiro' element={ <RegisterCooker /> } />
                    <Route path='/cadastrar/garcom' element={ <RegisterWaiter /> } />
                    <Route path='*' element={ <Home /> } />

                    {/* Menu */}
                    <Route path='/admin/cardapio' element={ <Private><MenuAdmin /></Private> } />
                    <Route path='/garcom/cardapio' element={ <Private> <MenuWaiter /> </Private> } />
                    <Route path='/cozinheiro/cardapio' element={ <Private> <MenuCooker /> </Private> } />
                </Routes>
            </AuthProvider>
        </Router>
    )
}