import React, { useState, useEffect } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const Services = () => {
    const [services, setServices] = useState([]);
    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        axiosPublic.get('/services')
            .then(res => {
                setServices(res.data);
            })
    }, [])

    return (
        <div className="px-4 sm:px-6 md:px-12 lg:px-20 py-16 bg-white">
            {/* Title and Border */}
            <div className="text-center mb-8">
                <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-4">
                    Our Expert Services
                </h1>
                <hr className="border-t-2 border-indigo-300 w-36 mx-auto" />
            </div>

            {/* Services Grid */}
            <div className="services grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
                {services.map((service) => (
                    <div
                        key={service._id}
                        className="group flex flex-col items-center justify-start p-4 bg-blue-100 hover:bg-black/70 shadow-lg hover:shadow-2xl rounded-lg transform transition-all duration-300 ease-in-out cursor-pointer hover:translate-y-1 "
                    >
                        {/* Image Section */}
                        <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24">
                            <img
                                className="w-full h-full rounded-full object-cover"
                                src={service.image}
                                alt={service.title}
                            />
                        </div>

                        {/* Text Section */}
                        <h3 className="text-lg sm:text-sm font-medium text-center mt-3 text-gray-700 group-hover:text-white">{service.title}</h3>
                    </div>
                ))}
            </div>
            <div className="text-center">
                <button className="bg-gradient-to-b from-blue-500 to-blue-700 text-white font-semibold py-2 px-4 sm:py-2.5 sm:px-5 md:py-3 md:px-6 rounded-lg shadow-md transform hover:scale-105 active:translate-y-1 transition-all duration-200 mt-5 sm:mt-10 mx-auto ">
                    View More
                </button>
            </div>
        </div>
    );
};

export default Services;
