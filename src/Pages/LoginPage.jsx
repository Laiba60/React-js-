import { useNavigate } from 'react-router-dom';

import React from 'react';
import { generateToken } from '../api';

const LoginPage = () => {
  const [keySeed, setKeySeed] = useState('');
  const [passPhrase, setPassPhrase] = useState('');
  const navigate = useNavigate();


  const handleLogin = async () => {
    try {
     
      const tokenData = await generateToken(keySeed);
      console.log('Token:', tokenData);
      
     
      localStorage.setItem('authToken', tokenData.token);

     
      navigate('/userdata');
    } catch (error) {
      console.error('Failed to generate token:', error);
      alert('Invalid Key Seed. Please try again.');
    }
  };

  const handleGeneratePassPhrase = async () => {
    try {
      const response = await generatePassPhrase();
      setPassPhrase(response.passphrase); // Update state with the generated passphrase
      console.log('Generated Passphrase:', response.passphrase);
    } catch (error) {
      console.error('Failed to generate passphrase:', error);
      alert('Error generating passphrase. Please try again.');
    }
  };
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
          </div>
        </div>

        <div className="w-1/2 p-8 bg-blue-800 text-white flex flex-col justify-center rounded-r-2xl">
          <div className="flex justify-center mb-6">
            <svg className="w-20 h-20 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 2a10 10 0 00-10 10v7a3 3 0 003 3h14a3 3 0 003-3v-7a10 10 0 00-10-10zm0 2a8 8 0 018 8v7a1 1 0 01-1 1H5a1 1 0 01-1-1v-7a8 8 0 018-8zm0 4a3 3 0 00-3 3v3a3 3 0 006 0v-3a3 3 0 00-3-3zm0 2a1 1 0 011 1v3a1 1 0 01-2 0v-3a1 1 0 011-1z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold mb-6 text-center">Log In</h2>
          <label className="text-blue-300 font-semibold">Key Seed</label>
          <input type="text" placeholder="Enter your key seed..." className="w-full px-4 py-2 mt-2 mb-4 bg-blue-700 text-white border border-blue-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600" />
          <button className="w-full py-2 mt-4 bg-gradient-to-r from-purple-500 to-purple-700 text-white font-bold rounded-lg hover:opacity-90"   onClick={handleLogin}>Next</button>
          <button
            className="w-full py-2 mt-4 bg-gradient-to-r from-green-500 to-green-700 text-white font-bold rounded-lg hover:opacity-90"
            onClick={handleGeneratePassPhrase}
          >
            Generate Passphrase
          </button>
          {passPhrase && (
            <p className="text-green-300 mt-4 text-center">
              Generated Passphrase: {passPhrase}
            </p>
          )}
          <p className="text-gray-300 mt-4 text-center">Don’t you have any account? <a href="#" className="text-purple-400 hover:underline"onClick={() => navigate('/register')}>Register</a></p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;