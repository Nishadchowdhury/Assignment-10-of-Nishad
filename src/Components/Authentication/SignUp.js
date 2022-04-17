import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { useUpdateProfile } from 'react-firebase-hooks/auth';

import auth from '../../firebase.init'
import LoadingSpinner from '../Shared/LoadingSpinner/LoadingSpinner';

const SignUp = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');

    const [updateProfile, updating, errorUpdate] = useUpdateProfile(auth);
    const [sendEmailVerification, sending, errorVerify] = useSendEmailVerification(auth);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        hookError,
    ] = useCreateUserWithEmailAndPassword(auth);



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
        if (hookError) {
            setError(hookError.message);
            return
        }

    }, [hookError])

    const handleSubmit = async event => {
        event.preventDefault();

        console.log(111);

        // setError('')

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
        alert('Create profile successfully');

    }





    if (loading) {
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

                        {error && <p> {error} </p>}

                        <div className="mb-4">
                            <input type="submit" value="Create" className="w-full px-3 py-4 text-white bg-red-500 rounded-md hover:bg-red-400  focus:outline-dotted outline-red-400 duration-100 ease-in-out" />
                        </div>
                        <p className="text-sm text-center text-gray-400">
                            Already have an account yet?
                            <Link to='/signin' className="font-semibold text-indigo-500 focus:text-indigo-600 focus:outline-none focus:underline">Sign In</Link>.
                        </p>
                    </form>

                    <div className="flex flex-row justify-center mb-4">
                        <span className="absolute bg-white px-4 text-gray-500">or continue with</span>
                        <div className="w-full bg-gray-200 mt-3 h-px"></div>
                    </div>

                    <div className="flex flex-row gap-2">
                        <button className="bg-green-500 text-white w-full p-2 flex flex-row justify-center gap-2 items-center rounded-sm hover:bg-green-600 duration-100 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-5" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12c6.627 0 12-5.373 12-12S18.627 0 12 0zm.14 19.018c-3.868 0-7-3.14-7-7.018 0-3.878 3.132-7.018 7-7.018 1.89 0 3.47.697 4.682 1.829l-1.974 1.978v-.004c-.735-.702-1.667-1.062-2.708-1.062-2.31 0-4.187 1.956-4.187 4.273 0 2.315 1.877 4.277 4.187 4.277 2.096 0 3.522-1.202 3.816-2.852H12.14v-2.737h6.585c.088.47.135.96.135 1.474 0 4.01-2.677 6.86-6.72 6.86z" fill="currentColor" /></svg>
                            Google
                        </button>

                        <button className="bg-gray-700 text-white w-full p-2 flex flex-row justify-center gap-2 items-center rounded-sm hover:bg-gray-800 duration-100 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-5" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" fill="currentColor" /></svg>
                            Github
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default SignUp;