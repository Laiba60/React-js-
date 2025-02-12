import React from "react";
import { useNavigate } from "react-router-dom";

const PasswordManager = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0A1A60] flex items-center justify-center p-4 w-screen">
      <div className="w-full max-w-6xl bg-[#0E1A60] text-white p-6 rounded-2xl shadow-lg">
        
        {/* Header Section */}
        <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
          <div className="text-2xl font-bold cursor-pointer" onClick={() => navigate("/")}>
            Password Manager
          </div>
          <input
            type="text"
            placeholder="Search..."
            className="flex-1 min-w-[200px] p-2 rounded-lg bg-blue-900 border border-blue-950 text-white focus:outline-none"
          />
          <div className="flex gap-2 flex-wrap">
            <button className="text-white border border-white px-4 py-1 rounded-lg" onClick={() => navigate('/generate')}>
              Login
            </button>
            <button className="bg-[#101E71] px-4 py-1 rounded-lg">
              Sign Up
            </button>
            <button className="bg-white p-2 rounded-lg hover:bg-gray-200" onClick={() => navigate("/userdata")}>
              📁
            </button>
          </div>
        </div>

        {/* Form Section */}
        <h2 className="text-2xl font-bold mb-4">Root • Add Entry</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1">Title</label>
            <input type="text" className="w-full p-2 rounded bg-[#101E71] border border-[#374CC4] focus:outline-none" />
          </div>
          <div>
            <label className="block text-sm mb-1">Username</label>
            <input type="text" className="w-full p-2 rounded bg-[#101E71] border border-[#374CC4] focus:outline-none" />
          </div>
          <div>
            <label className="block text-sm mb-1">Password</label>
            <input type="password" className="w-full p-2 rounded bg-[#101E71] border border-[#374CC4] focus:outline-none" />
          </div>
          <div>
            <label className="block text-sm mb-1">URL</label>
            <input type="text" placeholder="https://example.com" className="w-full p-2 rounded bg-[#101E71] border border-[#374CC4] focus:outline-none" />
          </div>
          <div>
            <label className="block text-sm mb-1">Select Emoji</label>
            <select className="w-full p-2 rounded bg-[#101E71] border border-[#374CC4] focus:outline-none">
              <option>🔒 Lock</option>
              <option>🔑 Key</option>
              <option>💾 Save</option>
            </select>
          </div>
          <div>
            <label className="block text-sm mb-1">Choose your folder</label>
            <input type="text" placeholder="Click to choose folder here" className="w-full p-2 rounded bg-[#101E71] border border-[#374CC4] focus:outline-none" />
          </div>
        </div>

        {/* Notes Section */}
        <div className="mt-4">
          <label className="block text-sm mb-1">Notes</label>
          <textarea className="w-full p-2 rounded bg-[#101E71] border border-[#374CC4] focus:outline-none" rows="3"></textarea>
        </div>

        {/* Buttons Section */}
        <div className="flex flex-wrap justify-end gap-4 items-center mt-6">
          <button className="bg-[#101E71] text-white py-2 px-4 rounded-lg">Cancel</button>
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-lg">
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordManager;
