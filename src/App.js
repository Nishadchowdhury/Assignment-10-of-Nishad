import './App.css';
import Header from './Components/Shared/Header/Header';
import { Route, Routes } from 'react-router';
import Home from './Components/Home/Home';
import Checkout from './Components/Checkout/Checkout';
import Login from './Components/Authentication/Login';
import SignUp from './Components/Authentication/SignUp';
import RequireAuth from './Components/Authentication/RequireAuth';
import LoadingSpinner from './Components/Shared/LoadingSpinner/LoadingSpinner';

function App() {
  return (
    <div className="">

      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signupo' element={<LoadingSpinner />} />


        <Route path='/checkout' element={
          <RequireAuth>
            <Checkout />
          </RequireAuth>
        } />



      </Routes>

    </div>
  );
}

export default App;
