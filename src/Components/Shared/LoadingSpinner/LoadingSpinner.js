import React from 'react';
import img from '../../../images/loading-spinner.gif'

const LoadingSpinner = () => {
    return (
        <div className='h-screen flex justify-center items-center ' >
            <img className='w-24' src={img} alt="" />
        </div>
    );
};

export default LoadingSpinner;