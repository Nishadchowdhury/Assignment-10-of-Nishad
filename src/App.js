import './App.css';
import Header from './Components/Shared/Header/Header';
import { Route, Routes } from 'react-router';
import Home from './Components/Home/Home';
import Checkout from './Components/Checkout/Checkout';
import Login from './Components/Authentication/Login';
import SignUp from './Components/Authentication/SignUp';
import RequireAuth from './Components/Authentication/RequireAuth';
import NotFound from '../src/Components/NotFound/NotFound';
import Blogs from './Components/Blogs/Blogs';
import { createContext, useState } from 'react';
import About from './Components/About/About';
import 'aos/dist/aos.css';

export const ErrorPassContext = createContext();

function App() {

  const [error, setError] = useState('');

  return (
    <div className='max-w-[100rem] m-auto'>

      <ErrorPassContext.Provider value={[error, setError]} >

        <Header />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/about' element={<About />} />


          <Route path='/checkout' element={
            <RequireAuth>
              <Checkout />
            </RequireAuth>
          } />



          <Route path='*' element={<NotFound />} />
        </Routes>
      </ErrorPassContext.Provider>
    </div>
  );
}

export default App;
