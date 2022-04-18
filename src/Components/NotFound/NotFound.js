import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    const img = 'https://i.ibb.co/vBcs1gw/png-transparent-boredom-boring-bored-sleepy-overwhelmed-sad-tired-indifferent-student-man-removebg-p.png';

    return (
        <div className='grid lg:grid-cols-2 justify-center items-end lg:h-[90vh] h-[93vh] shadow-2xl ' >
            <div >
                
                <div
                    class="flex flex-col items-center justify-center md:py-24 lg:py-32"
                >
                    <h1 class="font-bold text-blue-600 text-9xl">4<span className='animate-spin  inline-block' >0</span>4</h1>
                    <p
                        class="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl"
                    >
                        <span class="text-red-500">Oops!</span> Page not found
                    </p>
                    <p class="mb-8 text-center text-gray-500 md:text-lg">
                        The page you’re looking for doesn’t exist.
                    </p>
                    <Link
                       to='/'
                        class="px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-100"
                    >Go home</Link
                    >
                </div>
            </div>
            <div className='order-2 '><img className='w-full rounded-3xl rounded-3xl animate-pulse ' src={img} alt="" /></div>
        </div>
    );
};

export default NotFound;