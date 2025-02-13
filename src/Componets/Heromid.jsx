const Heromid = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center min-h-screen bg-gradient-to-r from-purple-950 to-blue-950 p-6 sm:p-12">
      
      
      <div className="max-w-4xl w-full text-black text-center sm:text-left">
        <button className="px-4 py-2 border rounded-lg mb-6">Try our Additional Solution</button>
        <h1 className="text-3xl sm:text-5xl font-bold leading-tight">Password without saving password</h1>
        <p className="mt-4 text-base sm:text-lg text-gray-300">
          Let us store your passwords and auto-fill them instantly for a seamless and secure experience.
        </p>
        <p className="mt-4 text-base sm:text-lg text-gray-300">
          We securely store your passwords and auto-fill them into your favorite apps. No ads, no trackers, cloud-free.
        </p>
      </div>

      
      <div className="bg-blue-950 p-6 rounded-2xl shadow-lg w-full max-w-lg mt-10 sm:mt-0 sm:ml-10">
        <label className="block text-gray-300 mb-1">Your Full Name</label>
        <input type="text" placeholder="Name" className="w-full p-3 rounded-lg bg-blue-900 text-white mb-4" />

        <label className="block text-gray-300 mb-1">Your Spectre Secret</label>
        <input type="text" placeholder="Secret Key" className="w-full p-3 rounded-lg bg-blue-900 text-white mb-4" />

        <label className="block text-gray-300 mb-1">Site Domain</label>
        <input type="text" placeholder="https://example.com" className="w-full p-3 rounded-lg bg-blue-900 text-white mb-4" />

        <label className="block text-gray-300 mb-1">Site Password</label>
        <input type="password" placeholder="Password" className="w-full p-3 rounded-lg bg-blue-900 text-white mb-4" />
        
        <p className="text-gray-300 text-center mt-4">The information never leaves this page</p>
      </div>

    </div>
  );
};

export default Heromid;
