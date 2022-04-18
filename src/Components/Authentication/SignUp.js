import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import LoadingSpinner from '../Shared/LoadingSpinner/LoadingSpinner';
import SignInWithSocial from './SignInWithSocial';
import { useNavigate } from 'react-router';
import { ErrorPassContext } from '../../App';

const SignUp = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');

    const [updateProfile, updating, errorUpdate] = useUpdateProfile(auth);
    const [sendEmailVerification, sending, errorVerify] = useSendEmailVerification(auth);
    const  [errorContext, setErrorContext] = useContext(ErrorPassContext);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        hookError,
    ] = useCreateUserWithEmailAndPassword(auth);
  
    
    const navigate = useNavigate();

    if (user) {
        setError('')
        navigate('/')
    }

    //input handler
    const handleEmail = event => {
        setEmail(event.target.value);
    }

    const handlePassword = event => {
        setPassword(event.target.value);
    }

    const handleConfirmPassword = event => {
        setConfirmPassword(event.target.value);
    }

    const handleName = event => {
        setName(event.target.value);
    }

    useEffect(() => {
        if (hookError || errorContext) {
            setError(hookError?.message || errorContext);
            return;
        }

    }, [hookError, errorContext])

    const handleSubmit = async event => {
        event.preventDefault();

        console.log(111);


        setError('');
        if (password != confirmPassword) {
            setError('your password is not same');
            return;
        }

        if (password.length < 6) {
            setError('')
            setError('your password is lessthen 6 corrector ');
            return;
        }

        setError('');

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        await sendEmailVerification();

    }

    // console.log(sending);


    if (loading || updating) {
        return <LoadingSpinner />
    }


    return (


        <div className="flex justify-center  bg-gray-100">
            <div className="container sm:mt-4 mt-4 my-2 max-w-md border-2 border-gray-200 px-3 bg-white">

                <div className="text-center my-6">
                    <h1 className="text-3xl font-semibold text-gray-700">Sign up</h1>
                    <p className="text-gray-500">Sign in to create an account</p>
                </div>

                <div className="m-6">
                    <form onSubmit={handleSubmit} className="mb-2">
                        <div className="mb-2">
                            <label htmlFor="name" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Your Name</label>
                            <input onBlur={handleName} required type="text" name="name" id="name" placeholder="Your Name" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Email Address</label>
                            <input onBlur={handleEmail} required type="email" name="email" id="email" placeholder="Your email address" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                        </div>

                        <div className="mb-4">
                            <div className="flex justify-between mb-2">
                                <label htmlFor="password" className="text-sm text-gray-600 dark:text-gray-400">Password</label>

                            </div>
                            <input onBlur={handlePassword} required type="password" name="password" id="password" placeholder="Your password" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                        </div>  <div className="mb-4">
                            <div className="flex justify-between mb-2">
                                <label htmlFor="password" className="text-sm text-gray-600 dark:text-gray-400">Confirm Password</label>

                            </div>
                            <input onBlur={handleConfirmPassword} required type="password" name="password" placeholder="Re type password" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                        </div>

                        {error && <p className='text-red-500 mb-2' > {error} </p>}

                        <div className="mb-4">
                            <input type="submit" value="Create Profile" className="w-full px-3 py-4 text-white bg-red-500 rounded-md hover:bg-red-400  focus:outline-dotted outline-red-400 duration-100 ease-in-out" />
                        </div>
                        <p className="text-sm text-center text-gray-400">
                            Already have an account ?
                            <Link to='/signin' className="font-semibold text-indigo-500 focus:text-indigo-600 focus:outline-none focus:underline">Sign In</Link>.
                        </p>
                    </form>

        {/*  */} <SignInWithSocial/>

                </div>
            </div>

        </div>

    );
};

export default SignUp;