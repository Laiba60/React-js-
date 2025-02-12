import React from "react";
import { useNavigate } from "react-router-dom";

const Userdata = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#0E1A60] min-h-screen text-white p-4 md:p-6 w-screen">
      {/* Header */}
      <header className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center space-x-3">
          <h1 className="text-xl font-bold cursor-pointer" onClick={() => navigate("/")}>
            Password Manager
          </h1>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-1/3">
          <input
            type="text"
            placeholder="Search..."
            className="bg-[#101E71] text-white p-2 rounded-md w-full outline-none"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2">
          <button className="bg-purple-500 p-2 rounded-full" onClick={() => navigate("/generate")}>
            +
          </button>
          <button className="bg-purple-500 p-2 rounded-full" onClick={() => navigate("/login")}>
            📁
          </button>
          <button className="bg-purple-500 p-2 rounded-full">📁</button>
        </div>
      </header>

      {/* Main Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
        {/* Sidebar */}
        <aside className="bg-[#101E71] p-4 rounded-lg hidden md:block">
          <h2 className="font-bold mb-4">Folders</h2>
          <button className="text-purple-500">+ Add Folder</button>
        </aside>

        {/* Password Table */}
        <section className="bg-[#101E71] p-4 rounded-lg col-span-3 w-full overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b bg-[#010E59]">
                <th className="p-2">✔</th>
                <th className="p-2">Title</th>
                <th className="p-2">Username</th>
                <th className="p-2">URL</th>
                <th className="p-2">Notes</th>
                <th className="p-2">Modified</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-[#0E1A60]">
                <td className="p-2">🔒</td>
                <td className="p-2">Example</td>
                <td className="p-2">User123</td>
                <td className="p-2">
                  <a href="https://example.com" className="text-blue-400">
                    example.com
                  </a>
                </td>
                <td className="p-2">Some notes</td>
                <td className="p-2">Today</td>
              </tr>
            </tbody>
          </table>

          {/* Empty State Message */}
          <div className="flex flex-col items-center mt-10 text-center">
            <h2 className="text-lg font-bold mt-2">Secure Your First Password with Us</h2>
            <p className="text-sm text-gray-400 max-w-lg mt-2">
              Take the first step towards safeguarding your digital world. Add your first password now and experience top-notch security, ease of access, and peace of mind.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Userdata;
