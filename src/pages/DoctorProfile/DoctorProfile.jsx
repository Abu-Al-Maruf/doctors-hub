import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useEffect } from "react";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const DoctorProfile = () => {
    const { id } = useParams();
    const axiosPublic = useAxiosPublic();
 
   
    const { data: doctor= {}, isLoading } = useQuery({
        queryKey: ["doctor", id],
        queryFn: async () => {
            const { data } = await axiosPublic.get(`/doctors/${id}`);
            return data;
        },
    });


    if(isLoading) return <LoadingSpinner />;
 

    return (
        <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-16 bg-indigo-50">
            <Helmet>
                <title>Doctor's Profile</title>
            </Helmet>
            <div className="text-center mb-10">
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                    Doctor's Profile
                </h1>
                <p className="text-lg sm:text-xl text-gray-700 font-medium">
                    Learn more about our specialist: <span className="text-blue-600 font-semibold">{doctor.name}</span>
                </p>
                <hr className="border-t-2 border-indigo-400 w-36 mx-auto mt-4" />
            </div>
            <div className="bg-white shadow-md border border-gray-200 rounded-lg p-8 max-w-5xl mx-auto">
                <div className="flex flex-col items-center text-center mb-8">
                    <div className="bg-blue-100 rounded-full w-36 h-36 flex items-center justify-center overflow-hidden mb-6">
                        <img
                            src={doctor.image}
                            alt={doctor.name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800">{doctor.name}</h2>
                    <p className="text-base text-blue-500 font-medium mt-1">{doctor.designation}</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                    <div>
                        <h3 className="text-lg font-bold text-gray-700 mb-2">Specialization</h3>
                        <p className="text-gray-600">{doctor.specialization}</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-gray-700 mb-2">Experience</h3>
                        <p className="text-gray-600">{doctor.experience} years</p>
                    </div>
                    <div className="sm:col-span-2">
                        <h3 className="text-lg font-bold text-gray-700 mb-2">Education</h3>
                        <p className="text-gray-600 leading-relaxed">{doctor.education}</p>
                    </div>
                    <div className="sm:col-span-2">
                        <h3 className="text-lg font-bold text-gray-700 mb-2">Awards</h3>
                        <p className="text-gray-600 leading-relaxed">{doctor.awards}</p>
                    </div>
                    <div className="sm:col-span-2">
                        <h3 className="text-lg font-bold text-gray-700 mb-2">Description</h3>
                        <p className="text-gray-600 leading-relaxed">{doctor.description}</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-gray-700 mb-2">Appointment Fee:</h3>
                        <p className="text-blue-600 font-semibold">{doctor.appointmentFee}</p>
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <button className="bg-gradient-to-b from-blue-500 to-blue-700 text-white font-semibold py-2 px-4 sm:py-2.5 sm:px-5 md:py-3 md:px-6 rounded-lg shadow-md transform hover:scale-105 active:translate-y-1 transition-all duration-200">
                        Book an appointment
                    </button>
                </div>
            </div>
        </section>
    );
};

export default DoctorProfile;
