import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useAuth } from './context/auth';

import AuthProvider from './context/auth';
import DatasDishProvider from './context/dish';
import RequestProvider from './context/requests';
import SearchFilter from './context/search';
import ForgotProvider from './context/forgot';

import See from './pages/waiter/See';
import Home from './pages/home/Home';
import RequestWaiter from './pages/waiter/Request';
import SeeCooker from './pages/cooker/See';
import AddDish from './pages/admin/AddDish';
import RegisterCooker from './pages/register/cooker';
import RegisterWaiter from './pages/register/waiter';

import AllUsers from './pages/admin/AllUsers';

import LoginAdmin from './pages/login/admin';
import LoginCooker from './pages/login/cooker';
import LoginWaiter from './pages/login/waiter';

import MenuAdmin from './pages/menu/MenuAdmin';
import MenuWaiter from './pages/menu/MenuWaiter';
import MenuCooker from './pages/menu/MenuCooker';

import ForgotCooker from './pages/forgot/cooker/email';
import NewPasswordCooker from './pages/forgot/cooker/password';
import ForgotWaiter from './pages/forgot/waiter/email';
import NewPasswordWaiter from './pages/forgot/waiter/password';
import ForgotAdmin from './pages/forgot/admin/email';
import NewPasswordAdmin from './pages/forgot/admin/password';

export default function Routess() {

    const Private = ({children}) => {
        const { authUser } = useAuth();
        
        if(authUser) {
            return children;
        }

        return <Navigate to='/'/>
    }

    return (
        <Router>
            <SearchFilter>
                <DatasDishProvider>
                    <RequestProvider>
                        <AuthProvider>
                            <ForgotProvider>
                                <Routes>
                                    <Route path='*' element={ <Home /> } />

                                    {/* Route Public */}
                                    <Route path='/' element={ <Home /> } />
                                    <Route path='/login/cooker' element={ <LoginCooker /> } />
                                    <Route path='/login/waiter' element={ <LoginWaiter /> } />
                                    <Route path='/login/admin' element={ <LoginAdmin /> } />

                                    <Route path='/register/cooker' element={ <RegisterCooker /> } />
                                    <Route path='/register/waiter' element={ <RegisterWaiter /> } />

                                    {/* Forgot */}
                                    <Route path='/forgot/cooker' element={ <ForgotCooker /> } />
                                    <Route path='/password/cooker' element={ <NewPasswordCooker /> } />

                                    <Route path='/forgot/waiter' element={ <ForgotWaiter /> } />
                                    <Route path='/password/waiter' element={ <NewPasswordWaiter /> } />

                                    <Route path='/forgot/admin' element={ <ForgotAdmin /> } />
                                    <Route path='/password/admin' element={ <NewPasswordAdmin /> } />

                                    {/* Route Private */}
                                    <Route path='/admin/menu' element={ <Private><MenuAdmin /></Private> } />
                                    <Route path='/admin/add-dish' element={ <Private> <AddDish /> </Private>} />
                                    <Route path='/admin/all-users' element={<Private> <AllUsers /> </Private>} />

                                    <Route path='/waiter/menu' element={ <Private> <MenuWaiter /> </Private> } />
                                    <Route path='/waiter/make-requests' element={ <Private> <RequestWaiter /> </Private> } />
                                    <Route path='/waiter/see-requests' element={ <Private>  <See /> </Private> } />

                                    <Route path='/cooker/menu' element={ <Private> <MenuCooker /> </Private> } />
                                    <Route path='/cooker/see-request' element= { <Private> <SeeCooker /> </Private> } />

                                </Routes>
                            </ForgotProvider>
                        </AuthProvider>
                    </RequestProvider>
                </DatasDishProvider>
            </SearchFilter>
        </Router>
    )
}