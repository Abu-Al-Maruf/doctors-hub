import React from 'react';
import { FaUserMd, FaClipboardList } from 'react-icons/fa'; // Icons for features
import { BsFillCalendarCheckFill } from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Background images
import bg1 from '../../../assets/home/bg-1.jpg';
import bg2 from '../../../assets/home/bg-2.jpg';
import bg3 from '../../../assets/home/bg-3.jpg';
import bg4 from '../../../assets/home/bg-4.jpg';
import bg5 from '../../../assets/home/bg-5.jpg';
import bg6 from '../../../assets/home/bg-6.jpg';
import { Link } from 'react-router';

const Banner = () => {
    const backgroundImages = [bg1, bg2, bg3, bg4, bg5, bg6];

    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            speed={700}
            className="h-[calc(80vh-4rem)] sm:h-[calc(100vh-4rem)] sm:max-h-[700px]"
        >
            {backgroundImages.map((bg, index) => (
                <SwiperSlide key={index}>
                    <section
                        className="px-4 sm:px-6 md:px-12 lg:px-20 relative bg-cover bg-right sm:bg-top text-white h-full flex items-center "
                        style={{
                            backgroundImage: `url(${bg})`,
                        }}
                    >
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-black/50 sm:bg-black/30"></div>

                        {/* Content */}
                        <div className="relative z-10 max-w-2xl space-y-6 text-center sm:text-left">
                            {/* Headline */}
                            <h1 className="text-xl sm:text-2xl md:text-5xl font-extrabold leading-tight">
                                Your Trusted <span className="text-blue-400">Health Partner</span>
                            </h1>

                            {/* Description */}
                            <p className="text-xs sm:text-sm md:text-lg leading-relaxed">
                                Comprehensive healthcare at your fingertips. Consult with expert doctors, access personalized treatments, and book your appointments with ease.
                            </p>

                            {/* Features with Icons */}
                            <div className="text-xs sm:text-sm md:text-base text-gray-300 space-y-3">
                                <div className="flex items-center gap-2 sm:gap-3 justify-center sm:justify-start font-medium">
                                    <FaUserMd className="text-blue-400 text-lg sm:text-xl" />
                                    <span>Experienced & Caring Doctors</span>
                                </div>
                                <div className="flex items-center gap-2 sm:gap-3 justify-center sm:justify-start font-medium">
                                    <FaClipboardList className="text-blue-400 text-lg sm:text-xl" />
                                    <span>Comprehensive Medical Services</span>
                                </div>
                                <div className="flex items-center gap-2 sm:gap-3 justify-center sm:justify-start font-medium">
                                    <BsFillCalendarCheckFill className="text-blue-400 text-lg sm:text-xl" />
                                    <span>Hassle-Free Online Booking</span>
                                </div>
                            </div>

                            {/* Call-to-Action Buttons */}
                            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center sm:justify-start ">
                                <Link to='/appoinment' className="bg-gradient-to-b from-blue-500 to-blue-700 text-white font-semibold py-2 px-4 sm:py-2.5 sm:px-5 md:py-3 md:px-6 rounded-lg shadow-md transform hover:scale-105 active:translate-y-1 transition-all duration-200">
                                    Book an Appointment
                                </Link>
                                <button className="bg-gradient-to-b from-gray-100 to-gray-300 text-gray-700 font-semibold py-2 px-4 sm:py-2.5 sm:px-5 md:py-3 md:px-6 rounded-lg shadow-md transform hover:scale-105 active:translate-y-1 transition-all duration-200">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </section>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Banner;
