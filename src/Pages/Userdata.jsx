import { Shield, Settings, Eye, User, Trash2 } from "lucide-react";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

const Userdata = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [folders, setFolders] = useState([]);
  const [passwordEntries, setPasswordEntries] = useState([]);
  const [editFolderId, setEditFolderId] = useState(null);
  const [editFolderName, setEditFolderName] = useState(""); 
  const [newFolderName, setNewFolderName] = useState("");

  
  useEffect(() => {
    const fetchFolders = async () => {
      try {
        const response = await api.get("/folders");
        console.log("API Response:", JSON.stringify(response.data, null, 2)); 

        if (response.data && Array.isArray(response.data.results)) {
          setFolders(response.data.results);
        } else {
          console.error("Unexpected response format:", JSON.stringify(response.data, null, 2));
          setFolders([]);
        }
      } catch (error) {
        if (error.response) {
          console.error("Error fetching folders:", JSON.stringify(error.response.data, null, 2));
        } else {
          console.error("Error fetching folders:", error.message);
        }
        setFolders([]);
      }
    };
    fetchFolders();
  }, []);

  
  const addFolder = async () => {
    if (!newFolderName.trim()) {
      alert("Folder name cannot be empty!");
      return;
    }

    try {
      const response = await api.post(
        "/folders/",
        { title: newFolderName },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Folder Created Response:", JSON.stringify(response.data, null, 2));

      if (response.data && response.data.id) {
        setFolders((prevFolders) => [...prevFolders, response.data]);
        setNewFolderName(""); 
      } else {
        console.error("Unexpected response format:", JSON.stringify(response.data, null, 2));
        alert("Folder creation was successful but the response format is incorrect.");
      }
    } catch (error) {
      if (error.response) {
        console.error("Error adding folder:", JSON.stringify(error.response.data, null, 2));
      } else {
        console.error("Error adding folder:", error.message);
      }
      alert("Failed to add folder. Check the console for details.");
    }
  };

  
  const updateFolder = async (folderId) => {
    if (!editFolderName.trim()) {
      alert("Folder name cannot be empty!");
      return;
    }
  
    try {
      const response = await api.put(
        `/folders/${folderId}/`,
        { title: editFolderName }, 
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            "Content-Type": "application/json",
          },
        }
      );
  
      console.log("Folder Updated Response:", JSON.stringify(response.data, null, 2));
  
      if (response.data && response.data.id) {
        setFolders((prevFolders) =>
          prevFolders.map((folder) =>
            folder.id === folderId ? { ...folder, title: editFolderName } : folder 
          )
        );
  
        setEditFolderId(null); 
        setEditFolderName(""); 
      } else {
        console.error("Unexpected response format:", JSON.stringify(response.data, null, 2));
        alert("Folder update was successful but the response format is incorrect.");
      }
    } catch (error) {
      if (error.response) {
        console.error("Error updating folder:", JSON.stringify(error.response.data, null, 2));
      } else {
        console.error("Error updating folder:", error.message);
      }
      alert("Failed to update folder. Check the console for details.");
    }
  };
  

 
  const deleteFolder = async (folderId) => {
    try {
      const response = await api.delete(`/folders/${folderId}/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      });

      console.log("Folder Deleted Response:", JSON.stringify(response.data, null, 2));

      if (response.status === 204) { // HTTP status code for successful deletion
        setFolders((prevFolders) => prevFolders.filter((folder) => folder.id !== folderId));
      } else {
        console.error("Unexpected response format:", JSON.stringify(response.data, null, 2));
        alert("Folder deletion was successful but the response format is incorrect.");
      }
    } catch (error) {
      if (error.response) {
        console.error("Error deleting folder:", JSON.stringify(error.response.data, null, 2));
      } else {
        console.error("Error deleting folder:", error.message);
      }
      alert("Failed to delete folder. Check the console for details.");
    }
  };

  return (
    <div className="bg-[#0E1A60] min-h-screen text-white p-4 md:p-6 w-screen">
      <header className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center space-x-3">
          <Shield className="text-white" size={40} />
          <h1 className="text-xl font-bold cursor-pointer" onClick={() => navigate("/")}>Password Manager</h1>
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
          <button className="bg-purple-500 p-2 rounded-full" onClick={() => navigate("/generate")}> <Settings className="text-gray-300" size={20} /> </button>
          <button className="bg-purple-500 p-2 rounded-full" onClick={() => navigate("/login")}> <Eye className="text-gray-300" size={20} /> </button>
          <button className="bg-purple-500 p-2 rounded-full"> <User className="text-gray-300" size={20} /> </button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
        <aside className="bg-[#101E71] p-4 rounded-lg hidden md:block">
          <h2 className="font-bold mb-4">Folders</h2>
          <div className="mb-4 flex space-x-2">
            <input
              type="text"
              placeholder="Enter folder name"
              value={newFolderName}
              onChange={(e) => setNewFolderName(e.target.value)}
              className="bg-gray-200 text-black p-1 rounded-md flex-1"
            />
            <button onClick={addFolder} className="bg-green-500 px-3 py-1 rounded-md text-white"> Add </button>
          </div>

          <ul>
  {folders.length > 0 ? (
    folders.map((folder) => (
      <li key={folder.id} className="flex justify-between items-center mb-2">
        {editFolderId === folder.id ? (
          <input
            type="text"
            value={editFolderName}
            onChange={(e) => setEditFolderName(e.target.value)}
            className="bg-gray-200 text-black p-1 rounded-md"
          />
        ) : (
          
          <span>{folder.title}</span> 
        )}

                  <div className="flex items-center space-x-2">
                    <button
                      className="text-blue-400"
                      onClick={() => {
                        if (editFolderId === folder.id) {
                          updateFolder(folder.id); 
                        } else {
                          setEditFolderId(folder.id);
                          setEditFolderName(folder.title); 
                        }
                      }}
                    >
                      {editFolderId === folder.id ? "Save" : "Edit"}
                    </button>
                    <button className="text-red-400" onClick={() => deleteFolder(folder.id)}> 
                      <Trash2 size={16} /> 
                    </button>
                  </div>
                </li>
              ))
            ) : (
              <p>No folders available</p>
            )}
          </ul>
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
                passwordEntries
                  .filter((entry) => entry.title.toLowerCase().includes(searchQuery.toLowerCase()))
                  .map((entry, index) => (
                    <tr key={index} className="border-b hover:bg-[#0E1A60]">
                      <td className="p-2">🔒</td>
                      <td className="p-2">{entry.title}</td>
                      <td className="p-2">{entry.username}</td>
                      <td className="p-2"> <a href={entry.url} className="text-blue-400"> {entry.url} </a> </td>
                      <td className="p-2">{entry.notes}</td>
                      <td className="p-2">{entry.modified}</td>
                    </tr>
                  ))
              ) : (
                <tr><td colSpan="6" className="text-center p-4">No password entries available</td></tr>
              )}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
};

export default Userdata;
