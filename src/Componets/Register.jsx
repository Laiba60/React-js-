
import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
    const navigation=useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-blue-800">
      <div className="flex rounded-2xl shadow-lg overflow-hidden w-3/4 lg:w-2/3">
        <div className="w-1/2 p-8 text-white bg-blue-900 relative">
          <h1 className="text-3xl font-bold mb-4 flex items-center">
            <svg className="w-10 h-10 mr-2 text-purple-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 2a10 10 0 00-10 10v7a3 3 0 003 3h14a3 3 0 003-3v-7a10 10 0 00-10-10zm0 2a8 8 0 018 8v7a1 1 0 01-1 1H5a1 1 0 01-1-1v-7a8 8 0 018-8z" />
            </svg>
            Password Manager
          </h1>
          <p className="mb-6">
            Login to your account with seed. We do the heavy lifting in a no-nonsense, ad-free,
            tracker-free, and cloud-free manner. Free and open source.
          </p>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
            <svg className="w-48 h-48 text-blue-800" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 2a10 10 0 00-10 10v7a3 3 0 003 3h14a3 3 0 003-3v-7a10 10 0 00-10-10zm0 2a8 8 0 018 8v7a1 1 0 01-1 1H5a1 1 0 01-1-1v-7a8 8 0 018-8zm0 4a3 3 0 00-3 3v3a3 3 0 006 0v-3a3 3 0 00-3-3zm0 2a1 1 0 011 1v3a1 1 0 01-2 0v-3a1 1 0 011-1z" />
            </svg>
          <button className="w-full py-2 mt-4 bg-gradient-to-r from-purple-500 to-purple-700 text-white font-bold rounded-lg hover:opacity-90">I understand, show me my seed</button>
</div>
</div>

        <div className="w-1/2 p-8 bg-blue-800 text-white flex flex-col justify-center rounded-r-2xl">
          <div className="flex justify-center mb-6">
            <svg className="w-20 h-20 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 2a10 10 0 00-10 10v7a3 3 0 003 3h14a3 3 0 003-3v-7a10 10 0 00-10-10zm0 2a8 8 0 018 8v7a1 1 0 01-1 1H5a1 1 0 01-1-1v-7a8 8 0 018-8zm0 4a3 3 0 00-3 3v3a3 3 0 006 0v-3a3 3 0 00-3-3zm0 2a1 1 0 011 1v3a1 1 0 01-2 0v-3a1 1 0 011-1z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold mb-6 text-center">Register Account</h2>
          <label className="text-blue-300 font-semibold">Important Note</label>
          <input type="text" placeholder="On the next page you will see a series of 16 words. This is your unique and private seed and it is the ONLY way to recover your wallet in case of loss or manifestation. It is your responsibility to write it down and store it in a safe place outside of the password manager app." className="w-full px-4 py-2 mt-2 mb-4 bg-blue-700 text-white border border-blue-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600" />
          <button className="w-full py-2 mt-4 bg-gradient-to-r from-purple-500 to-purple-700 text-white font-bold rounded-lg hover:opacity-90" onClick={() => navigate("/login")}>Next</button>
          <p className="text-gray-300 mt-4 text-center">Already have an account? <Link to="/login" className="text-purple-400 hover:underline">Login here</Link></p>
        </div>
      </div>
    </div>
  );
};



export default RegisterPage;
