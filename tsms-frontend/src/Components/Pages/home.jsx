import React from 'react';
import ClassroomImage from "../../assets/classroom.jpg"; // Replace with actual image path
import Navbar from "../Common/NavBar";

const Home = () => {
  return (
    <div className="flex flex-col text-center dark:bg-white bg-gray-900">
      <Navbar />
      {/* Main Content */}
      <div className="py-16 px-6">
        <h1 className="text-5xl font-bold dark:text-black text-white">
          Teacher Student Management System
        </h1>
        <p className="text-xl italic mt-3 dark:text-black text-white">
          “Made Learning Easy…”
        </p>

        <div className="flex flex-col md:flex-row items-center mt-8 max-w-6xl mx-auto space-y-8 md:space-y-0">
          {/* Left Content */}
          <div className="md:w-1/2 text-left space-y-5">
            <p className="text-lg dark:text-black text-white font-semibold">
              TSMS is a student-teacher management system made for schools, colleges, tuition centers, etc.
            </p>
            <button onClick={() => window.location.href = '/login'} className="dark:bg-black dark:text-white px-6 py-3 mx-52 rounded-lg shadow-md dark:hover:bg-gray-800 transition bg-gray-700 text-white hover:bg-gray-600 cursor-pointer">
              Join Us
            </button>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 mt-6 md:mt-0">
            <img src={ClassroomImage} alt="Classroom" className="rounded-lg shadow-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
