import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import ReactStars from "react-stars";

const Review = () => {
    const [reviews, setReviews] = useState([]);

    // Fetch reviews from the JSON file
    useEffect(() => {
        fetch("/reviews.json")
            .then((response) => response.json())
            .then((data) => setReviews(data))
            .catch((error) => console.error("Error loading reviews:", error));
    }, []);

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
                    <SwiperSlide key={review.id}>
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
                                <ReactStars
                                    count={5}
                                    value={review.rating}
                                    edit={false}
                                    size={24}
                                    color2={'#ffd700'}
                                />

                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Review;