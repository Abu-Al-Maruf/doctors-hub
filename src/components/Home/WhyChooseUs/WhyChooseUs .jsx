import React from "react";
import {
    FaHeartbeat,
    FaUserMd,
    FaLaptopMedical,
    FaHandsHelping,
    FaMedkit,
} from "react-icons/fa";

const whyChooseUsData = [
    {
        id: 1,
        icon: <FaHeartbeat className="text-blue-600 text-3xl flex-shrink-0" />,
        title: "Compassionate Care",
        description:
            "We prioritize your health and well-being with personalized, patient-focused services.",
    },
    {
        id: 2,
        icon: <FaUserMd className="text-blue-600 text-3xl flex-shrink-0" />,
        title: "Expert Doctors",
        description:
            "Our team includes highly skilled and experienced medical professionals committed to excellence.",
    },
    {
        id: 3,
        icon: <FaLaptopMedical className="text-blue-600 text-3xl flex-shrink-0" />,
        title: "Advanced Technology",
        description:
            "We use state-of-the-art equipment and innovative techniques to ensure accurate diagnoses and effective treatments.",
    },
    {
        id: 4,
        icon: <FaHandsHelping className="text-blue-600 text-3xl flex-shrink-0" />,
        title: "Comprehensive Support",
        description:
            "From consultation to recovery, our team is here to support you every step of the way.",
    },
    {
        id: 5,
        icon: <FaMedkit className="text-blue-600 text-3xl flex-shrink-0" />,
        title: "Holistic Approach",
        description:
            "We treat the whole person, addressing both physical and emotional health needs.",
    },

];

const WhyChooseUs = () => {
    return (
        <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-16 bg-gradient-to-r from-blue-100 to-blue-200 text-gray-800">
            <div >
                <h2 className="text-4xl font-bold text-blue-600 text-center mb-8">
                    Why Choose Us
                </h2>
                <p className="text-lg text-gray-700 text-center mb-12">
                    Discover why Doctor's Hub is the trusted choice for healthcare. Our
                    commitment to excellence ensures you receive the best care possible.
                </p>

                {/* Two-Column Layout */}
                <div className="grid md:grid-cols-2 gap-8">
                    {whyChooseUsData.map((item) => (
                        <div key={item.id} className="flex items-start space-x-4">
                            {item.icon}
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
