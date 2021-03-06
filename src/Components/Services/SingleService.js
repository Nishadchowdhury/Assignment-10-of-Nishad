import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';

const SingleService = ({ data, i }) => {

    const { Type, about, picture, price } = data;


    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);


    console.log(i);

    return (
        <div data-aos={`${(i == 0 || i == 3) && 'zoom-in-right'}`}>
            <div data-aos={`${(i == 1 || i == 4) && 'zoom-out'}`}>
                <div data-aos={`${(i == 2 || i == 5) && 'zoom-in-left'}`}>

                    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">

                        <img className="rounded-t-lg w-full " src={picture} alt="" />

                        <div className="p-5 text-left ">
                            <div href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{Type}</h5>
                            </div>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{about}</p>

                            <p className="mb-3 font-normal text-black dark:text-gray-400"> <span className='font-extrabold text-3xl' >{price}</span> BDT. </p>

                            <Link to='/checkout' className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-400 dark:focus:ring-blue-800">
                                Read more
                                <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SingleService;