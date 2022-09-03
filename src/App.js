import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import AuthProvider from './context/AuthProvider';
import Shipping from './components/ProtectedRoute/Shipping';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Cart from './components/Cart/Cart';
import CreditCard from './components/CreditCart/CreditCard';
import NotFound from './components/NotFound/NotFound';
import ReactForm from './components/ReactForm/ReactForm';


function App({ children, ...rest }) {

    return (
        <div className="App">
            <AuthProvider>
                <BrowserRouter>
                    <Header></Header>
                    <Routes>

                        <Route path='/' element={<Home />} />

                        <Route path='/home' element={<Home />} />

                        <Route path='/shipping' element={<Shipping />} />


                        <Route path='/cart'
                            element={
                                <PrivateRoute>
                                    <Cart />
                                </PrivateRoute>} >
                        </Route>


                        <Route path='/creditCard'
                            element={
                                <PrivateRoute>
                                    <CreditCard />
                                </PrivateRoute>
                            }
                        ></Route>


                        <Route path='/form'
                            element={
                                <PrivateRoute>
                                    <ReactForm />
                                </PrivateRoute>
                            }
                        ></Route>
                        

                        <Route path='/login' element={<Login />} />

                        <Route path='/registration' element={<Registration />} />

                        <Route path='*' element={<NotFound />} />

                    </Routes>
                </BrowserRouter>
            </AuthProvider>

        </div>
    );
}

export default App;
