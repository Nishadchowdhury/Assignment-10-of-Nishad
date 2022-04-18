import './App.css';
import Header from './Components/Shared/Header/Header';
import { Route, Routes } from 'react-router';
import Home from './Components/Home/Home';
import Checkout from './Components/Checkout/Checkout';
import Login from './Components/Authentication/Login';
import SignUp from './Components/Authentication/SignUp';
import RequireAuth from './Components/Authentication/RequireAuth';
import NotFound from '../src/Components/NotFound/NotFound';



function App() {
  // const X = useContext(ErrorPassContext);

  // console.log(X);

  return (
    <>


        <Header />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />


          <Route path='/checkout' element={
            <RequireAuth>
              <Checkout />
            </RequireAuth>
          } />



          <Route path='*' element={<NotFound />} />
        </Routes>
    </>
  );
}

export default App;
