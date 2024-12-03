// src/pages/AboutUs.jsx
import React from "react";
import { FaStethoscope, FaRegHeart, FaHandsHelping } from "react-icons/fa";

const AboutUs = () => {
    return (
        <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-16  bg-blue-100 text-gray-800">
            {/* Header Section */}
            <div className="py-5 text-center">
                <h1 className="text-4xl font-bold text-blue-600 mb-4">About Us</h1>
                <p className="text-lg text-gray-700">
                    Doctor's Hub is your dedicated partner in healthcare, combining
                    compassion, innovation, and expertise to deliver exceptional medical
                    services. Our team of highly skilled professionals is committed to
                    providing the best possible care for our patients. We believe in
                    treating each patient with respect and compassion, and we strive to
                    create a warm, welcoming environment for all. Our goal is to help
                    our patients achieve and maintain their best health, and we are
                    dedicated to providing the highest quality care in a friendly,
                    supportive setting.
                </p>
            </div>

            {/* Our Commitment Section */}
            <div className="container mx-auto px-6 py-8">
                <h2 className="text-3xl font-semibold text-blue-700 mb-4 text-center">
                    Our Commitment
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {/* Commitment 1 */}
                    <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                        <FaStethoscope className="text-blue-600 text-4xl mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            Personalized Care
                        </h3>
                        <p className="text-gray-600">
                            Every patient is unique, and so is our approach to their care.
                        </p>
                    </div>
                    {/* Commitment 2 */}
                    <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                        <FaRegHeart className="text-blue-600 text-4xl mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            Compassionate Service
                        </h3>
                        <p className="text-gray-600">
                            We treat every individual with kindness, dignity, and respect.
                        </p>
                    </div>
                    {/* Commitment 3 */}
                    <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                        <FaHandsHelping className="text-blue-600 text-4xl mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            Reliable Support
                        </h3>
                        <p className="text-gray-600">
                            Our team is always ready to guide you through your healthcare
                            journey.
                        </p>
                    </div>
                </div>
            </div>


        </section>
    );
};

export default AboutUs;
