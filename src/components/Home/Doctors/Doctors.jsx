import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { FaUserMd } from "react-icons/fa";
import { Link } from "react-router";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";

const Doctors = () => {
    const [showAll, setShowAll] = useState(false);
    const axiosPublic = useAxiosPublic();

    const { data: doctors = [] } = useQuery({
        queryKey: ["doctors"],
        queryFn: async () => {
            const { data } = await axiosPublic.get("/doctors");
            return data;
        },
    });
                


    return (
        <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-16 bg-indigo-50">

            <div className="text-center mb-8">
                <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-4">
                    Our Doctors
                </h1>
                <hr className="border-t-2 border-indigo-300 w-36 mx-auto" />
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {doctors.slice(0, showAll ? doctors.length : 8).map((doctor) => (
                    <div
                        key={doctor._id}
                        className="bg-white shadow-sm border border-black/20 rounded-lg p-6 hover:shadow-md transition-shadow hover:bg-gray-100 duration-1000 "
                    >
                        <div className="flex flex-col items-center">
                            {/* Doctor's Image */}
                            <div className="bg-blue-100 rounded-full w-32 h-32 flex items-center justify-center overflow-hidden mb-4">
                                <img
                                    src={doctor.image}
                                    alt={doctor.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Doctor's Info */}
                            <h3 className="text-xl font-semibold text-gray-800 text-center">
                                {doctor.name}
                            </h3>
                            <p className="text-sm text-blue-600 font-medium text-center">
                                {doctor.designation}
                            </p>
                            {/* View Profile Button */}
                            <Link to={`/doctor-profile/${doctor._id}`} className="mt-4 flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 hover:translate-y-1 active:bg-blue-800 transition-all">
                                <FaUserMd className="mr-2" />
                                View Profile
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center">
                <button
                    className="bg-gradient-to-b from-blue-500 to-blue-700 text-white font-semibold py-2 px-4 sm:py-2.5 sm:px-5 md:py-3 md:px-6 rounded-lg shadow-md transform hover:scale-105 active:translate-y-1 transition-all duration-200 mt-5 sm:mt-10 mx-auto "
                    onClick={() => setShowAll(!showAll)}
                >
                    {showAll ? "Show Less" : "Show All"}
                </button>
            </div>
        </section>
    );
};

export default Doctors;
