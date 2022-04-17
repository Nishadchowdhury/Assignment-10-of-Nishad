import { signOut } from '@firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/home/logo.png';



const Header = () => {

  const [user] = useAuthState(auth);

  const [navbarOpen, setNavbarOpen] = React.useState(false);

  const active = 'p-2  border-y-2 border-red-500 m-4 text-red-500 rounded-lg bg-red-50 ';
  const notActive = 'p-2 border-b-2 m-4 ';

  return (

    <nav className="relative flex flex-wrap items-center justify-between shadow-md mb-3 ">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link to="/"
            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
            href="#pablo"
          >
            <img className='h-9' src={logo} alt="" />

          </Link>
          <button
            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <div className='text-yellow-400' >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </div>

          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
          id="example-navbar-danger"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto gap-7 ">
            <NavLink to='/' className={({ isActive }) => isActive ? active : notActive} > Home </NavLink>
            <NavLink to='/about' className={({ isActive }) => isActive ? active : notActive} > About </NavLink>
            <NavLink to='/blogs' className={({ isActive }) => isActive ? active : notActive} > Blogs </NavLink>
          
            {/* {user ? <button className={notActive} onClick={()=> signOut(auth)} > Sing Out </button> : */}
            {user ? <NavLink to='/signin' onClick={()=> signOut(auth)} className={({ isActive }) => isActive ? active : notActive} > Sing Out </NavLink> :

              <NavLink to='/signin' className={({ isActive }) => isActive ? active : notActive} > Sign in </NavLink>

            }

          </ul>
        </div>
      </div>
    </nav>

  );
};

export default Header;