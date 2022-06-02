import React, { useContext, useEffect, useState } from 'react';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router';
import auth from '../../firebase.init';
import LoadingSpinner from '../Shared/LoadingSpinner/LoadingSpinner';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignInWithSocial from './SignInWithSocial';
import { ErrorPassContext } from '../../App';




const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const [errorContext, setErrorContext] = useContext(ErrorPassContext);

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

    const [sendPasswordResetEmail, sending, errorOfReset] = useSendPasswordResetEmail(auth);

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        hookError,
    ] = useSignInWithEmailAndPassword(auth);

    if (user) {
        setError('')
        navigate(from, { replace: true })
    }

    //input handler
    const handleEmail = event => {
        setEmail(event.target.value);
    }

    const handlePassword = event => {
        setPassword(event.target.value);
    }

    console.log(email, password);


    useEffect(() => {
        if (hookError || errorContext) {
            setError(hookError?.message || errorContext);
            return;
        }

    }, [hookError, errorContext]);

    const handleSubmit = event => {
        event.preventDefault();

        setError('');
        signInWithEmailAndPassword(email, password);

    }

    const handlePasswordReset = async () => {

        await sendPasswordResetEmail(email);

        const test = (/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(email);

        if (!test || !email) {
            toast('please write a valid email ')
        }

        if (email && test) {
            toast('send Email to ' + email)
        }

    };


    if (loading) {
        return <LoadingSpinner />
    }


    return (
        <div>


            <div className="flex justify-center   ">
                <div className="container mt-20 my-2 shadow-xl max-w-md border-2 border-gray-200 p-3 bg-white">

                    <div className="text-center my-6">
                        <h1 className="text-3xl font-semibold text-gray-700">Sign in</h1>
                        <p className="text-gray-500">Sign in to access your account</p>
                    </div>

                    <div className="m-6">
                        <form onSubmit={handleSubmit} className="mb-4">
                            <div className="mb-6">
                                <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Email Address</label>
                                <input onBlur={handleEmail} required type="email" name="email" id="email" placeholder="Your email address" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                            </div>
                            <div className="mb-6">
                                <div className="flex justify-between mb-2">
                                    <label htmlFor="password" className="text-sm text-gray-600 dark:text-gray-400">Password</label>

                                    <a onClick={handlePasswordReset} className="text-sm text-gray-400 focus:outline-none focus:text-indigo-500 hover:text-indigo-500 dark:hover:text-indigo-300">Forgot password?</a>

                                </div>
                                <input onBlur={handlePassword} required type="password" name="password" id="password" placeholder="Your password" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                            </div>

                            {error && <p className='text-red-600 my-1' > {error} </p>}

                            <div className="mb-6">
                                <input type="submit" value="Sign in" className='w-full px-3 py-4 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none duration-100 ease-in-out' />
                            </div>
                            <p className="text-sm text-center text-gray-400">
                                Don&#x27;t have an account yet?
                                <Link to='/signup' className="font-semibold text-indigo-500 focus:text-indigo-600 focus:outline-none focus:underline">Sign up</Link>.
                            </p>
                        </form>

                        <SignInWithSocial />

                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;