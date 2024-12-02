import React, { useEffect, useState } from "react";
import bgImg from "../../assets/appoinment-bg.png";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { Calendar } from "react-date-range";

const Appointment = () => {
  const [services, setServices] = useState([]);
  const [date, setDate] = useState(new Date());
  const [selectedService, setSelectedService] = useState("");
  const [time, setTime] = useState("");
  const [error, setError] = useState("");


  // load services data from json file
  useEffect(() => {
    fetch("services.json")
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])

  const timeSlots = [
    "10:00 AM - 10:30 AM",
    "11:00 AM - 11:30 AM",
    "12:00 PM - 12:30 PM",
    "2:00 PM - 2:30 PM",
    "3:00 PM - 3:30 PM",
  ];

  const handleAppointment = () => {
    if (!time || !selectedService || !date) {
      setError("Please Select a Time, Service, and Date to continue.");
      return;
    }
    setError("");
    document.getElementById('my_modal_1').showModal();
  };

  // handle submit form data
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name.value, e.target.email.value, e.target.mobile.value);
    document.getElementById('my_modal_1').close();
  }



  return (
    <div className="relative ">

      {/* Hero-style Appointment Banner with Background Color */}
      <div
        className="relative bg-cover bg-right sm:bg-center w-full h-[60vh] flex flex-col items-center justify-center text-center text-white"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

        {/* Content on top */}
        <div className="w-full sm:w-1/2 p-3  z-10">
          <h1 className=" text-4xl sm:text-5xl font-extrabold mb-4">Book Your Appointment</h1>
          <p className="text-base sm:text-lg mb-6">Choose the best service and schedule your appointment at your convenience. Our team is dedicated to providing you with a personalized experience tailored to your needs.</p>

        </div>
      </div>

      <div className="px-4 sm:px-6 md:px-12 lg:px-20 py-16  mx-auto ">
        <div className="w-full flex flex-col md:flex-row gap-5 sm:gap-10 justify-around items-center">

          {/* Select a Date */}
          <div className="1/3">
            <Calendar
              date={date}
              onChange={(date) => setDate(date)}
              rangeColors={["#3d91ff"]}
              minDate={new Date()}
              maxDate={new Date(new Date().setFullYear(new Date().getFullYear() + 1))}
            />
          </div>


          {/* Display Services */}
          <div className="mb-6 w-full">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Select a Service:
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setSelectedService(service.title)}
                  className={`flex items-center justify-center gap-2 p-4 border rounded-lg shadow-md transition-all ${selectedService === service.title
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-blue-100"
                    }`}
                >
                  <img className="w-10 h-10 rounded-full" src={service.image} alt={service.title} />
                  <span className="font-medium">{service.title}</span>
                </button>
              ))}
            </div>
          </div>

        </div>
        {/* Show Time Slots */}

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Select a Time Slot:
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {timeSlots.map((slot, index) => (
              <button
                key={index}
                onClick={() => setTime(slot)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${time === slot
                  ? "bg-blue-600 text-white"
                  : "bg-blue-100 text-blue-700 hover:bg-blue-200"
                  }`}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>
        {error && <p className="text-red-500 text-center p-2 font-semibold">{error}</p>}

        <button
          onClick={handleAppointment}
          className="flex mx-auto bg-gradient-to-b from-blue-500 to-blue-700 text-white font-semibold py-2 px-4 sm:py-2.5 sm:px-5 md:py-3 md:px-6 rounded-lg shadow-md transform hover:scale-105 active:translate-y-1 transition-all duration-200"
        >
          Book Appointment
        </button>
        {/* booking  appointment modal */}

        <dialog id="my_modal_1" className="modal">
          <div className="modal-box max-w-lg w-full p-6 rounded-lg shadow-lg bg-gray-200">
            <div>
              <h3 className="text-xl font-semibold text-center mb-4 text-blue-700">
                Confirm Your Appointment
              </h3>
              <p className="text-gray-600 mb-4">
                <strong>Service:</strong> {selectedService}
                <br />
                <strong>Date:</strong> {new Date(date).toLocaleDateString('en-GB')}
                <br />
                <strong>Time:</strong> {time}
              </p>
            </div>
            <div>
              <form onSubmit={handleSubmit} method="dialog">

                {/* name input field */}
                <div className="mb-4">
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="w-full px-4 py-2  border rounded-md "
                    placeholder="Enter your name"
                    required
                  />
                </div>
                {/* email input field */}
                <div className="mb-4">
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="w-full px-4 py-2  border rounded-md "
                    placeholder="Enter your email"
                    required
                  />
                </div>
                {/* mobile number input field */}
                <div className="mb-4">
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Mobile Number
                  </label>
                  <input
                    type="number"
                    name="mobile"
                    className="w-full px-4 py-2 border rounded-md "
                    placeholder="Enter your mobile number"
                    required
                  />
                </div>
                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={() => document.getElementById('my_modal_1').close()}
                    className="px-4 py-2 bg-red-700 text-white rounded-md font-medium transition-all  hover:scale-95"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-green-700 text-white rounded-md font-medium transition-all hover:scale-95"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </dialog>

      </div>
    </div>
  );
};

export default Appointment;
