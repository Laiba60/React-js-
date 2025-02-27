import { Shield,Settings, Eye, User } from "lucide-react";
import React from "react";
import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import  {  useEffect } from "react";
import api from "../api";

const Userdata = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  
  
  const [passwordEntries, setPasswordEntries] = useState([
    { title: "Example", username: "User123", url: "https://example.com", notes: "Some notes", modified: "Today" }
  ]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/folders");
        setPasswordEntries(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const addFolder = async () => {
    if (!newFolderName.trim()) {
      alert("Folder name cannot be empty!");
      return;
    }
  
    try {
      const response = await api.post(
        "/folders/",
        { name: newFolderName },  
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            "Content-Type": "application/json"
          }
        }
      );
  
      
      setFolders([...folders, response.data]);
      setNewFolderName("");  
    } catch (error) {
      console.error("Error creating folder:", error);
    }
  };
  

 
  return (
    <div className="bg-[#0E1A60] min-h-screen text-white p-4 md:p-6 w-screen">
     
      <header className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center space-x-3">
        <Shield className="text-white " size={40} />
          <h1 className="text-xl font-bold cursor-pointer" onClick={() => navigate("/")}>
            Password Manager
          </h1>
        </div>

       
        <div className="relative w-full md:w-1/3">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-[#101E71] text-white p-2 rounded-md w-full outline-none"
          />
        </div>

        
        <div className="flex space-x-2">
          <button className="bg-purple-500 p-2 rounded-full" onClick={() => navigate("/generate")} >
            <Settings className="text-gray-300" size={20} />
          </button>
          <button className="bg-purple-500 p-2 rounded-full" onClick={() => navigate("/login")}>
            <Eye className="text-gray-300" size={20} />
          </button>
          <button className="bg-purple-500 p-2 rounded-full">
            <User className="text-gray-300" size={20} />
          </button>
        </div>
      </header>

     
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
       
        <aside className="bg-[#101E71] p-4 rounded-lg hidden md:block">
          <h2 className="font-bold mb-4">Folders</h2>
          <button className="text-purple-500">+ Add Folder</button>
        </aside>

        
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
              {passwordEntries.length > 0 ? (
                passwordEntries.filter(entry =>
                  entry.title.toLowerCase().includes(searchQuery.toLowerCase())
                ).map((entry, index) => (
                  <tr key={index} className="border-b hover:bg-[#0E1A60]">
                    <td className="p-2">🔒</td>
                    <td className="p-2">{entry.title}</td>
                    <td className="p-2">{entry.username}</td>
                    <td className="p-2">
                      <a href={entry.url} className="text-blue-400">{entry.url}</a>
                    </td>
                    <td className="p-2">{entry.notes}</td>
                    <td className="p-2">{entry.modified}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center p-4">No passwords saved yet.</td>
                </tr>
              )}
            </tbody>
          </table>

          
          {passwordEntries.length === 0 && (
            <div className="flex flex-col items-center mt-10 text-center">
              <h2 className="text-lg font-bold mt-2">Secure Your First Password with Us</h2>
              <p className="text-sm text-gray-400 max-w-lg mt-2">
                Take the first step towards safeguarding your digital world. Add your first password now and experience top-notch security, ease of access, and peace of mind.
              </p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Userdata;
