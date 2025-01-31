import { FaEye, FaEyeSlash, FaFacebook } from "react-icons/fa";
import loginImage from "../../assets/login.png";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Register = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { createUser, googleLogin, facebookLogin, updateUserProfile } = useAuth();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic()


  // submit the form data 
  const onSubmit = async (data) => {
    const loadingToast = toast.loading('Creating your account...');

    try {
      const res = await createUser(data.email, data.password);
      console.log(res);


      const userInfo = {
        email: data.email,
        name: data.name,
        role: "Guest",
        timestamp: new Date().toLocaleString(),
      }

      axiosPublic.post("/user", userInfo)
        .then(res => {
          console.log(res.data);

          if (res.data.insertedId) {
            // update user 
            updateUserProfile(data.name, data.email);
            toast.success('Account created successfully!', {
              id: loadingToast,
            });
            navigate('/');
          }

        })
        .catch(err => {
          console.log(err);
          toast.error(err.message, {
            id: loadingToast,
          });
        });

    } catch (error) {
      console.error(error);

      if (error.code === 'auth/email-already-in-use') {
        toast.error('This email is already registered.', {
          id: loadingToast,
        });
      } else {
        toast.error('Failed to create account. Please try again.', {
          id: loadingToast,
        });
      }
    }
  };

  // login with google 
  const handleGoogleLogin = async () => {
    const loadingToast = toast.loading('Logging in with Google...');
    try {
      const result = await googleLogin();
      console.log(result.user);

      const userInfo = {
        email: result?.user?.email,
        name: result?.user?.displayName,
        role: "Guest",
        status: "Verified",
        timestamp: new Date().toLocaleString(),
      }

      axiosPublic.post("/user", userInfo)
        .then(res => {
          console.log(res.data);
          // update user 
          updateUserProfile(result?.user?.displayName, result?.user?.email);
          toast.success('Logged in with Google successfully!', {
            id: loadingToast,
          });
          navigate('/');
        }).catch(err => {
          console.log(err);
          toast.error('Failed to log in with Google. Please try again.', {
            id: loadingToast
          });
        })

    } catch (error) {
      console.log(error);
      toast.error('Failed to log in with Google. Please try again.', {
        id: loadingToast
      });
    }
  }

  // login with facebook
  const handleFacebookLogin = async () => {
    const loadingToast = toast.loading('Logging in with Facebook...');
    try {
      const result = await facebookLogin();
      console.log(result.user);
      const userInfo = {
        uid: result?.user?.uid,
        name: result?.user?.displayName,
        role: "Guest",
        status: "Verified",
        timestamp: new Date().toLocaleString(),
      }
      axiosPublic.post("/user", userInfo)
        .then(res => {
          console.log(res.data);
          // update user 
          updateUserProfile(result?.user?.displayName, result?.user?.email);
          toast.success('Logged in with Facebook successfully!', {
            id: loadingToast,
          });
          navigate('/');
        })
        .catch(err => {
          console.log(err);
          toast.error('Failed to log in with Facebook. Please try again.', {
            id: loadingToast
          });
        })
    } catch (error) {
      console.log(error);
      toast.error('Failed to log in with Facebook. Please try again.', {
        id: loadingToast
      });
    }
  }

  // password visibility toggle
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <section className="px-4 sm:px-6 md:px-16 py-20 bg-[#ECF0FF]">
      <Helmet>
        <title>Register</title>
      </Helmet>
      <div className="flex flex-col sm:flex-row justify-between items-center gap-10">
        <div className="w-full sm:w-1/2">
          <img className="w-full" src={loginImage} alt="Login" />
        </div>

        <div className="w-full sm:w-1/2 bg-white border border-gray-300 rounded-lg p-8 max-w-[500px] mx-auto">
          <h2 className="text-3xl font-extrabold text-center text-blue-600 mb-6 drop-shadow-md">
            Register
          </h2>

          {/* Register Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Full Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                {...register("name", { required: "Name is required" })}
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter your full name"
              />
              {errors.name && (
                <p className="text-red-500  text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

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
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                    message: "Enter a valid email address",
                  },
                })}
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Mobile Number Field */}
            <div>
              <label
                htmlFor="number"
                className="block text-sm font-medium text-gray-700"
              >
                Mobile Number
              </label>
              <input
                type="tel"
                id="number"
                {...register("number", {
                  required: "Mobile number is required",
                  minLength: {
                    value: 10,
                    message: "Number must be at least 10 digits",
                  },
                })}
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter your phone number"
              />
              {errors.number && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.number.message}
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
                  type={passwordVisible ? "text" : "password"}
                  id="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                    pattern: {
                      value: /[!@#$%^&*(),.?":{}|<>]/,
                      message: "Password must have one special character",
                    },
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
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-center">
              <input
                id="terms"
                type="checkbox"
                className="h-4 w-4 cursor-pointer text-blue-600 border-gray-300 rounded"
                {...register("terms", {
                  required: "You must agree to the terms and conditions",
                })}
              />
              <label
                htmlFor="terms"
                className="ml-2 block text-sm text-gray-700"
              >
                I agree to the{" "}
                <a href="#" className="text-blue-600 underline">
                  Terms and Conditions
                </a>
              </label>
            </div>
            {errors.terms && (
              <p className="text-red-500 text-sm mt-1">
                {errors.terms.message}
              </p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 px-4 rounded-lg shadow-lg transform transition hover:scale-[.98]"
            >
              Register
            </button>
          </form>

          <div className="flex items-center justify-center gap-2">
            <hr className="my-6 w-full border-gray-300" />
            <span className="text-gray-500">or</span>
            <hr className="my-6 w-full border-gray-300" />
          </div>

          {/* Social Login Buttons */}
          <div className="flex flex-col space-y-3">
            <button onClick={handleGoogleLogin} className="flex items-center justify-center w-full py-2 px-4 border border-gray-300 rounded-lg shadow-md bg-white text-gray-700 hover:bg-gray-100 transform transition hover:scale-[.98]">
              <FcGoogle className="h-5 w-5 mr-2 text-red-500" />
              Continue with Google
            </button>
            <button onClick={handleFacebookLogin} className="flex items-center justify-center w-full py-2 px-4 border border-gray-300 rounded-lg shadow-md bg-white text-gray-700 hover:bg-gray-100 transform transition hover:scale-[.98]">
              <FaFacebook className="h-5 w-5 mr-2 text-blue-600" />
              Continue with Facebook
            </button>
          </div>

          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;
