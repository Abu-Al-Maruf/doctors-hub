import { FaGithub, FaEye, FaEyeSlash } from 'react-icons/fa';
import loginImage from '../../../src/assets/login.png'
import { FcGoogle } from 'react-icons/fc';
import { useState } from 'react';
import { Link } from 'react-router';
const Login = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };


    return (
        <section className='px-4 sm:px-6 md:px-16 py-20 bg-[#ECF0FF]'>
            <div className='flex flex-col sm:flex-row justify-between items-center gap-10'>
                <div className='w-full sm:w-1/2'>
                    <img className='w-full' src={loginImage} alt="" />
                </div>

                <div className="w-full sm:w-1/2 bg-white border border-gray-300 rounded-lg p-8 max-w-[500px] mx-auto">
                    <h2 className="text-3xl font-extrabold text-center text-blue-600 mb-6 drop-shadow-md">
                        Login
                    </h2>
                    <form className="space-y-6">

                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type={passwordVisible ? "text" : "password"}
                                    id="password"
                                    name="password"
                                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    placeholder="Enter your password"
                                    required
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-0 px-3 flex items-center"
                                    onClick={togglePasswordVisibility}
                                >
                                    {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <input
                                id="terms"
                                name="terms"
                                type="checkbox"
                                className="h-4 w-4 cursor-pointer  text-blue-600 border-gray-300 rounded"
                                required
                            />
                            <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                                I agree to the{" "}
                                <a href="#" className="text-blue-600 underline">
                                    Terms and Conditions
                                </a>
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 px-4 rounded-lg shadow-lg transform transition hover:scale-[.98]"
                        >
                            Login
                        </button>
                    </form>
                    <hr className="my-6 border-gray-300" />
                    <div className="flex flex-col space-y-3">
                        <button
                            className="flex items-center justify-center w-full py-2 px-4 border border-gray-300 rounded-lg shadow-md bg-white text-gray-700 hover:bg-gray-100 transform transition hover:scale-[.98]"
                        >
                            <FcGoogle className="h-5 w-5 mr-2 text-red-500" />
                            Login with Google
                        </button>
                        <button
                            className="flex items-center justify-center w-full py-2 px-4 border border-gray-300 rounded-lg shadow-md bg-white text-gray-700 hover:bg-gray-100 transform transition hover:scale-[.98]"
                        >
                            <FaGithub className="h-5 w-5 mr-2 text-gray-900" />
                            Login with GitHub
                        </button>
                    </div>
                    <p className="text-center text-sm text-gray-600 mt-4">
                        Already have an account?{" "}
                        <Link to="/register" className="text-blue-600 underline">
                            Register
                        </Link>
                    </p>
                </div>

            </div>

        </section>
    );
};

export default Login;