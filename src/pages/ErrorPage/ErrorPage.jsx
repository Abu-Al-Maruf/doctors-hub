import React from 'react';
import errorImg from '../../assets/404.png'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const ErrorPage = () => {
    return (
        <div className="relative flex flex-col items-center justify-center h-screen">
             <Helmet>
                <title>Page Not Found</title>
            </Helmet>
            <img className='w-full sm:w-2/3 lg:w-1/2' src={errorImg} alt="Error 404" />
            <Link to="/" className="absolute bottom-20 left-1/2 -translate-x-1/2  bg-gradient-to-b from-red-500 to-red-700 text-white font-semibold py-2 px-4 sm:py-2.5 sm:px-5 md:py-3 md:px-6 rounded-lg shadow-md transform hover:scale-105 active:translate-y-1 transition-all duration-200">
                Go Back Home
            </Link>
        </div>
    );
};

export default ErrorPage;