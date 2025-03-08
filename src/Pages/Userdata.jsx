import { Shield, Settings, Eye, User, Trash2 } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader"; 
import { useFetchFolders } from "../hooks/useFetchFolders";
import { useAddFolder } from "../hooks/useAddFolder";
import { useUpdateFolder } from "../hooks/useUpdateFolder";
import { useDeleteFolder } from "../hooks/useDeleteFolder";

const Userdata = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [editFolderId, setEditFolderId] = useState(null);
  const [editFolderName, setEditFolderName] = useState("");
  const [newFolderName, setNewFolderName] = useState("");

  const { data: folders = [], isLoading } = useFetchFolders();
  const addFolderMutation = useAddFolder();
  const updateFolderMutation = useUpdateFolder();
  const deleteFolderMutation = useDeleteFolder();

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
           <button 
  onClick={() => {
    if (newFolderName.trim() !== "") { 
      addFolderMutation.mutate(newFolderName, {
        onSuccess: () => {
          setNewFolderName("");  
        }
      });
    }
  }} 
  className="bg-green-500 px-3 py-1 rounded-md text-black"
> 
  Add 
</button>

          </div>
          <table className="w-full border-collapse border border-gray-300 text-white">
            <thead>
              <tr className="bg-gray-700">
                <th className="border border-gray-300 p-2">Folder Name</th>
                <th className="border border-gray-300 p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr><td colSpan="2" className="text-center p-2">Loading...</td></tr>
              ) : folders.length > 0 ? (
                folders.map((folder) => (
                  <tr key={folder.id} className="border border-gray-300">
                    <td className="border border-gray-300 p-2">
                      {editFolderId === folder.id ? (
                        <input
                          type="text"
                          value={editFolderName}
                          onChange={(e) => setEditFolderName(e.target.value)}
                          className="bg-gray-200 text-black p-1 rounded-md"
                        />
                      ) : (
                        folder.title
                      )}
                    </td>
                    <td className="border border-gray-300 p-2 flex items-center space-x-2">
                      {editFolderId === folder.id ? (
                        <button
                          className="text-blue-400 flex items-center"
                          onClick={() => {
                            updateFolderMutation.mutate(
                              { folderId: folder.id, title: editFolderName },
                              {
                                onSuccess: () => {
                                  setEditFolderId(null); 
                                },
                              }
                            );
                          }}
                          disabled={updateFolderMutation.isPending}
                        >
                          {updateFolderMutation.isPending ? (
                            <ClipLoader size={12} color="#fff" />
                          ) : (
                            "Save"
                          )}
                        </button>
                      ) : (
                        <button
                          className="text-blue-400"
                          onClick={() => {
                            setEditFolderId(folder.id);
                            setEditFolderName(folder.title);
                          }}
                        >
                          Edit
                        </button>
                      )}
                      <button className="text-red-400" onClick={() => deleteFolderMutation.mutate(folder.id)}> 
                        <Trash2 size={16} /> 
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr><td colSpan="2" className="text-center p-2">No folders available</td></tr>
              )}
            </tbody>
          </table>
        </aside>
      </div>
    </div>
  );
};

export default Userdata;
