import { FaSearch, FaUserMd, FaCalendarAlt, FaCogs } from "react-icons/fa";
import howItWorks from "../../../assets/how_it_works.png";

const Explore = () => {
    return (
        <section className="bg-white px-4 sm:px-6 md:px-12 lg:px-20 py-16">
            <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center gap-12">
                {/* Left side image */}
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
                    <img
                        src={howItWorks}
                        alt="How it Works"
                        className="w-3/4 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg "
                    />
                </div>

                {/* Right side content */}
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                        Explore Your Health
                    </h2>
                    <p className="text-sm font-semibold sm:text-sm text-gray-600 mb-8">
                        Explore Your Journey to Better Health in 4 Simple Steps
                    </p>

                    <div className="space-y-8">
                    
                        <div className="flex flex-col md:flex-row items-center md:items-start space-x-0 md:space-x-4">
                            <FaSearch className="text-4xl text-blue-600 flex-shrink-0 mb-2 md:mb-0" />
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800">
                                    Discover Your Health Options
                                </h3>
                                <p className="text-gray-600">
                                    Explore various health services and find the right fit for you.
                                </p>
                            </div>
                        </div>

                       
                        <div className="flex flex-col md:flex-row items-center md:items-start space-x-0 md:space-x-4">
                            <FaUserMd className="text-4xl text-blue-600 flex-shrink-0 mb-2 md:mb-0" />
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800">
                                    Consult with a Doctor
                                </h3>
                                <p className="text-gray-600">
                                    Get personalized advice from a qualified healthcare professional.
                                </p>
                            </div>
                        </div>

                      
                        <div className="flex flex-col md:flex-row items-center md:items-start space-x-0 md:space-x-4">
                            <FaCalendarAlt className="text-4xl text-blue-600 flex-shrink-0 mb-2 md:mb-0" />
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800">
                                    Schedule Your Visit
                                </h3>
                                <p className="text-gray-600">
                                    Book an appointment at a time that suits you best.
                                </p>
                            </div>
                        </div>

                    
                        <div className="flex flex-col md:flex-row items-center md:items-start space-x-0 md:space-x-4">
                            <FaCogs className="text-4xl text-blue-600 flex-shrink-0 mb-2 md:mb-0" />
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800">
                                    Take Control of Your Health
                                </h3>
                                <p className="text-gray-600">
                                    Implement your personalized health plan and track your progress.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Explore;
