import React from 'react';

const Footer = () => {


    const date = new Date().getFullYear();


    return (
        <div className='h-32 bg-gray-400 rounded-t-2xl flex justify-center items-center'>
            <h1> <span className='' >&copy;</span>  Copyright {date}</h1>
        </div>
    );
};

export default Footer;