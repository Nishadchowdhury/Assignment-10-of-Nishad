import logo from './logo.svg';
import './App.css';
import Header from './Components/Shared/Header/Header';
import { Route, Routes } from 'react-router';
import Home from './Components/Home/Home';
import Checkout from './Components/Checkout/Checkout';

function App() {
  return (
    <div className="App">
      <Header/>

     <Routes>
       <Route path='/' element={<Home/>} />

       <Route path='/checkout' element={<Checkout/>} />

     </Routes>

    </div>
  );
}

export default App;
