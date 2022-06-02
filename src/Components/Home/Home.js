import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import banner from '../../images/home/homepage.svg'
import Services from '../Services/Services';
import Footer from '../Shared/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

    const [user] = useAuthState(auth);


    useEffect(() => {
        AOS.init({ duration: 700 });
    }, []);


    return (
        <>

            <div className='grid lg:grid-cols-2 lg:px-24 px-5 shadow-md' >

                <div className=' text-left text-black flex flex-col justify-center lg:order-1 order-2'>
                    <p

                        data-aos="zoom-in-right"
                        // data-aos-delay="200"

                        className='font-bold lg:leading-[3rem] lg:text-5xl text-3xl text-left text-blac  ' >
                        <span className='text-red-500  ' >Hi Im Sikshaa .</span> <br />
                        <span className='lg:text-5xl text-2xl ' > I am a private tutor </span>

                    </p>

                    <p
                        data-aos="zoom-in-right"
                        data-aos-delay="200"

                        className='text-gray-500 lg:mt-3' >
                        I teach student by Skype. Google Meet. Zoom. LiveBoard But i suggest Skype and student can knock me first of all and student need to me 5th class or higher class , specially i teaching by the books of Advanced library for English .
                    </p>

                    <div className='mt-7'
                        data-aos="zoom-in-right"
                        data-aos-delay="400"
                    >
                        <Link to='about' className='bg-red-500 hover:bg-red-400 text-white px-3 py-2 rounded-md inline-block mb-4' >
                            know About me

                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 inline " viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>

                        </Link>
                    </div>
                </div>


                <div className='order-1' >
                    <img src={banner} alt="" />
                </div>

            </div>

            <Services />

            <Footer />

        </>
    );
};

export default Home;