import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { generateToken, clearExpiredToken } from "../api";

const LoginPage = () => {
  const [keySeed, setKeySeed] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!keySeed.trim()) {
      alert("⚠️ Key Seed is required.");
      return;
    }

    try {
      const tokenData = await generateToken(keySeed);
      console.log("✅ Token:", tokenData);

      if (!tokenData || !tokenData.token) {
        throw new Error("Invalid response from API.");
      }

      localStorage.setItem("authToken", tokenData.token);
      navigate("/userdata");
    } catch (error) {
      console.error("❌ Failed to generate token:", error);

      // If token error occurs, clear storage & ask user to retry
      if (error.response?.data?.code === "token_not_valid") {
        clearExpiredToken();
      }

      alert("⚠️ Invalid Key Seed or Expired Token. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-blue-800">
      <div className="flex rounded-2xl shadow-lg overflow-hidden w-3/4 lg:w-2/3">
        <div className="w-1/2 p-8 text-white bg-blue-900 relative">
          <h1 className="text-3xl font-bold mb-4 flex items-center">
            <svg
              className="w-10 h-10 mr-2 text-purple-500"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 2a10 10 0 00-10 10v7a3 3 0 003 3h14a3 3 0 003-3v-7a10 10 0 00-10-10zm0 2a8 8 0 018 8v7a1 1 0 01-1 1H5a1 1 0 01-1-1v-7a8 8 0 018-8z" />
            </svg>
            Password Manager
          </h1>
          <p className="mb-6">
            Login to your account with a seed. We handle security in a 
            privacy-focused, cloud-free, ad-free manner.
          </p>
        </div>

        <div className="w-1/2 p-8 bg-blue-800 text-white flex flex-col justify-center rounded-r-2xl">
          <h2 className="text-3xl font-bold mb-6 text-center">Log In</h2>
          <label className="text-blue-300 font-semibold">Key Seed</label>
          <input
            type="text"
            placeholder="Enter your key seed..."
            className="w-full px-4 py-2 mt-2 mb-4 bg-blue-700 text-white border border-blue-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            value={keySeed}
            onChange={(e) => setKeySeed(e.target.value)}
          />

          <button
            className="w-full py-2 mt-4 bg-gradient-to-r from-purple-500 to-purple-700 text-white font-bold rounded-lg hover:opacity-90"
            onClick={handleLogin}
          >
            Next
          </button>
          <p className="text-gray-300 mt-4 text-center">
            Don’t have an account?
            <a href="#" className="text-purple-400 hover:underline" onClick={() => navigate("/register")}>
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
