import React from "react";
// import Information from "./Information"; // remove if not used

const Feedback = () => {
  return (
    <div className="min-h-screen  flex items-center ">
      <div className="w-full  bg-white rounded-2xl shadow-lg grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        {/* Left Section (Info / Design) */}
        <div className="hidden md:flex flex-col justify-center items-center bg-blue-500 text-white p-10">
          <h2 className="text-3xl font-bold mb-4">Let’s Talk</h2>
          <p className="text-center text-sm opacity-90">
            Have a question or feedback? Fill out the form and we’ll get back to you soon.
          </p>
        </div>

        {/* Right Section (Form) */}
        <div className="p-8">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Talk to Us
          </h1>

          <form className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full h-10 border rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full h-10 border rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Enter your message"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-blue-500
              text-white font-semibold py-2 rounded-lg hover:bg-amber-600 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
