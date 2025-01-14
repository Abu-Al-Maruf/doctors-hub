import React from 'react';

const AppoinmentModal = ({ handleSubmit, selectedService, date, time }) => {
    return (
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
    );
};

export default AppoinmentModal;