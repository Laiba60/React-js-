import React from "react";
import { Shield, Settings, Eye, User } from "lucide-react";
import  { useState } from "react";
import { useNavigate } from "react-router-dom";

const PasswordManager = () => {
  const navigate = useNavigate();
  const [title, setTitle]=useState("");
  const [username, setUsername]=useState("");
  const [password, setPassword]=useState("");
  const [url, setUrl]=useState();
  const [selectedEmoji, setSelectedEmoji]=useState("");
  const [selectedFolder, setSelectedFolder] = useState("");
  const [notes, setNotes] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      title,
      username,
      password,
      url,
      selectedEmoji,
      selectedFolder,
      notes,
    };
    console.log("Saved Data:", formData);
  };

  return (
    <div className="min-h-screen bg-[#0A1A60] flex items-center justify-center p-4 w-screen">
      <div className="w-full max-w-6xl bg-[#0E1A60] text-white p-6 rounded-2xl shadow-lg">
        
       
        <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
        <Shield className="text-white " size={40} />
          <div className="text-2xl font-bold cursor-pointer " onClick={() => navigate("/")}>
            Password Manager
          </div>
          <input
            type="text"

            placeholder="Search..."
            className="flex-1 min-w-[200px] p-2 rounded-lg bg-blue-900 border border-blue-950 text-white focus:outline-none"
          />
          <div className="flex gap-2 flex-wrap">
            <button className="text-white border border-white px-4 py-1 rounded-lg" onClick={() => navigate('/generate')}>
            <Settings className="text-gray-300" size={20} />
            </button>
            <button className="bg-[#101E71] px-4 py-1 rounded-lg">
            <Eye className="text-gray-300" size={20} />
            </button>
            <button className="bg-white p-2 rounded-full hover:bg-gray-200" onClick={() => navigate("/userdata")}>
            <User className="text-gray-300" size={20} />
            </button>
          </div>
        </div>

        
        <h2 className="text-2xl font-bold mb-4">Root • Add Entry</h2>
        <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1">Title</label>
            <input type="text"  value={title} 
                onChange={(e) => setTitle(e.target.value)} className="w-full p-2 rounded bg-[#101E71] border border-[#374CC4] focus:outline-none" />
          </div>
          <div>
            <label className="block text-sm mb-1">Username</label>
            <input type="text"  value={username} 
                onChange={(e) => setUsername(e.target.value)} className="w-full p-2 rounded bg-[#101E71] border border-[#374CC4] focus:outline-none" />
          </div>
          <div>
            <label className="block text-sm mb-1">Password</label>
            <input type="password"  value={password} 
                  onChange={(e) => setPassword(e.target.value)} className="w-full p-2 rounded bg-[#101E71] border border-[#374CC4] focus:outline-none" />
          </div>
          <div>
            <label className="block text-sm mb-1">URL</label>
            <input type="text" placeholder="https://example.com"value={url} 
                onChange={(e) => setUrl(e.target.value)} className="w-full p-2 rounded bg-[#101E71] border border-[#374CC4] focus:outline-none" />
          </div>
          <div>
            <label className="block text-sm mb-1">Select Emoji</label>
            <select value={selectedEmoji} 
                onChange={(e) => setSelectedEmoji(e.target.value)} className="w-full p-2 rounded bg-[#101E71] border border-[#374CC4] focus:outline-none">
              <option>🔒 Lock</option>
              <option>🔑 Key</option>
              <option>💾 Save</option>
            </select>
          </div>
          <div>
            <label className="block text-sm mb-1">Choose your folder</label>
            <input type="text" placeholder="Click to choose folder here"  value={selectedFolder} 
                onChange={(e) => setSelectedFolder(e.target.value)} className="w-full p-2 rounded bg-[#101E71] border border-[#374CC4] focus:outline-none" />
          </div>
        </div>

        
        <div className="mt-4">
          <label className="block text-sm mb-1">Notes</label>
          <textarea  value={notes} 
              onChange={(e) => setNotes(e.target.value)} className="w-full p-2 rounded bg-[#101E71] border border-[#374CC4] focus:outline-none" rows="3"></textarea>
        </div>

       
        <div className="flex flex-wrap justify-end gap-4 items-center mt-6">
          <button className="bg-[#101E71] text-black py-2 px-4 rounded-lg">Cancel</button>
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-lg">
            OK
          </button>
        </div>
        </form>
      </div>
    </div>
  );
};

export default PasswordManager;
