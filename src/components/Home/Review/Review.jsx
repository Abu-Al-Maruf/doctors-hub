import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Rating, Star } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { use } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const Review = () => {
    const axiosPublic = useAxiosPublic();


    // Fetch reviews from DB
    const { data: reviews = [] } = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
            const { data } = await axiosPublic.get('/reviews');
            return data;
        }
    });
    console.log(reviews);

    return (
        <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-16 bg-gray-100">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800">
                    What Our Patients Say
                </h2>
                <p className="text-gray-600">Real reviews from our valued patients</p>
            </div>

            <Swiper
                slidesPerView={1}
                spaceBetween={20}
                navigation
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
                modules={[Navigation]}
                className="mySwiper"
            >
                {reviews.map((review) => (
                    <SwiperSlide key={review._id}>
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <img
                                src={review.photo}
                                alt={review.name}
                                className="w-20 h-20 mx-auto rounded-full mb-4 border-2 border-blue-500"
                            />
                            <h3 className="text-lg font-semibold text-center text-gray-800">
                                {review.name}
                            </h3>
                            <p className="text-center text-gray-500 text-sm">{review.location}</p>
                            <p className="mt-4 text-gray-700 text-center">
                                "{review.testimonial}"
                            </p>
                            <div className="flex justify-center items-center mt-4">
                                {/* stars */}
                                <Rating style={{ maxWidth: 170 }} value={review.rating} itemStyles={{
                                    itemShapes: Star,
                                    activeFillColor: '#ffb700',
                                    inactiveFillColor: '#fbf1a9'
                                }} readOnly />

                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Review;
