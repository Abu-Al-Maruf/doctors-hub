import { FaEye, FaEyeSlash, FaFacebook } from 'react-icons/fa';
import loginImage from '../../../src/assets/login.png';
import { FcGoogle } from 'react-icons/fc';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';

const Login = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { loginUser, googleLogin, facebookLogin } = useAuth();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        const loadingToast = toast.loading('Logging in...');
        try {
            await loginUser(data.email, data.password);
            toast.success('Logged in successfully!', {
                id: loadingToast
            });

            navigate('/');
        } catch (error) {
            console.error(error.message);
            toast.error('You entered the wrong password', {
                id: loadingToast
            });
        }
    };

    // login with google 
    const handleGoogleLogin = async () => {
        try {
            const result = await googleLogin();
            console.log(result.user);
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }

    // login with facebook
    const handleFacebookLogin = async () => {
        try {
            const result = await facebookLogin();
            console.log(result.user);
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }


    // password visibility toggle
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <section className="px-4 sm:px-6 md:px-16 py-20 bg-[#ECF0FF]">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-10">
                <div className="w-full sm:w-1/2">
                    <img className="w-full" src={loginImage} alt="" />
                </div>

                <div className="w-full sm:w-1/2 bg-white border border-gray-300 rounded-lg p-8 max-w-[500px] mx-auto">
                    <h2 className="text-3xl font-extrabold text-center text-blue-600 mb-6 drop-shadow-md">
                        Login
                    </h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        {/* Email Field */}
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
                                {...register('email', {
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                        message: 'Invalid email format',
                                    },
                                })}
                                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                placeholder="Enter your email"
                            />
                            {errors.email && (
                                <p className="text-sm text-red-600 mt-1">
                                    {errors.email.message}
                                </p>
                            )}
                        </div>

                        {/* Password Field */}
                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type={passwordVisible ? 'text' : 'password'}
                                    id="password"
                                    {...register('password', {
                                        required: 'Password is required',

                                    })}
                                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    placeholder="Enter your password"
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-0 px-3 flex items-center"
                                    onClick={togglePasswordVisibility}
                                >
                                    {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                            {errors.password && (
                                <p className="text-sm text-red-600 mt-1">
                                    {errors.password.message}
                                </p>
                            )}
                        </div>

                        {/* Terms Checkbox */}
                        <div className="flex items-center">
                            <input
                                id="terms"
                                type="checkbox"
                                {...register('terms', {
                                    required: 'You must agree to the terms and conditions',
                                })}
                                className="h-4 w-4 cursor-pointer text-blue-600 border-gray-300 rounded"
                            />
                            <label
                                htmlFor="terms"
                                className="ml-2 block text-sm text-gray-700"
                            >
                                I agree to the{' '}
                                <a href="#" className="text-blue-600 underline">
                                    Terms and Conditions
                                </a>
                            </label>
                        </div>
                        {errors.terms && (
                            <p className="text-sm text-red-600 mt-1">
                                {errors.terms.message}
                            </p>
                        )}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 px-4 rounded-lg shadow-lg transform transition hover:scale-[.98]"
                        >
                            Login
                        </button>
                    </form>

                    {/* Alternative Login Options */}
                    <div className="flex items-center justify-center gap-2">
                        <hr className="my-6 w-full border-gray-300" />
                        <span className="text-gray-500">or</span>
                        <hr className="my-6 w-full border-gray-300" />
                    </div>
                    <div className="flex flex-col space-y-3">
                        <button
                            onClick={handleGoogleLogin}
                            className="flex items-center justify-center w-full py-2 px-4 border border-gray-300 rounded-lg shadow-md bg-white text-gray-700 hover:bg-gray-100 transform transition hover:scale-[.98]"
                        >
                            <FcGoogle className="h-5 w-5 mr-2 text-red-500" />
                            Continue with Google
                        </button>
                        <button onClick={handleFacebookLogin} className="flex items-center justify-center w-full py-2 px-4 border border-gray-300 rounded-lg shadow-md bg-white text-gray-700 hover:bg-gray-100 transform transition hover:scale-[.98]">
                            <FaFacebook className="h-5 w-5 mr-2 text-blue-600" />
                            Continue with Facebook
                        </button>
                    </div>
                    <p className="text-center text-sm text-gray-600 mt-4">
                        Don't have an account?{' '}
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
