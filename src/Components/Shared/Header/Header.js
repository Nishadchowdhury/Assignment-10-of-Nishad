import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/home/logo.png';



const Header = () => {

  const [navbarOpen, setNavbarOpen] = React.useState(false);

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
            <Link to='/about' > About </Link>
            <Link to='/blogs' > Blogs </Link>
            <Link to='/login' > Log in </Link> 
          </ul>
        </div>
      </div>
    </nav>

  );
};

export default Header;