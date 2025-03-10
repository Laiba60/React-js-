import { useState } from "react";
import { X, Eye, RefreshCcw, Copy } from "lucide-react";

const Generate = () => {
  const [password, setPassword] = useState("••••••••••••");
  const [length, setLength] = useState(8);
  const [showPassword, setShowPassword] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState("");
  const [selectedFolder, setSelectedFolder] = useState("");

  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  const folders = ["Work", "Personal", "Finance", "Others"];

  const generatePassword = () => {
    let characters = "";
    if (includeUppercase) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeLowercase) characters += "abcdefghijklmnopqrstuvwxyz";
    if (includeNumbers) characters += "0123456789";
    if (includeSymbols) characters += "!@#$%^&*()";

    if (characters === "") {
      alert("Please select at least one character type.");
      return;
    }

    let newPassword = "";
    for (let i = 0; i < length; i++) {
      newPassword += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setPassword(newPassword);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert("Password copied to clipboard!");
  };

  if (!isVisible) return null;

  return (
    <div className="bg-[#101E71] text-white w-screen max-w-full mx-auto p-6 rounded-lg shadow-lg relative border border-blue-500">
      <div className="flex justify-between items-center border-b border-gray-700 pb-3 mb-4">
        <h2 className="text-lg font-semibold flex items-center gap-2">Generate Password</h2>
        <X className="cursor-pointer text-gray-400 hover:text-white" onClick={() => setIsVisible(false)} />
      </div>

      <div className="mb-4">
        <label className="block text-sm text-gray-300 mb-2">Password Quality: <strong className="text-purple-400">Excellent</strong></label>
        <div className="relative bg-[#161B49] p-3 rounded-lg flex items-center">
          <input type={showPassword ? "text" : "password"} value={password} readOnly className="bg-transparent w-full text-lg tracking-widest text-gray-300" />
          <div className="absolute right-3 flex gap-2">
            <Eye className="cursor-pointer text-gray-400 hover:text-white" onClick={() => setShowPassword(!showPassword)} />
            <RefreshCcw className="cursor-pointer text-gray-400 hover:text-white" onClick={generatePassword} />
            <Copy className="cursor-pointer text-gray-400 hover:text-white" onClick={copyToClipboard} />
          </div>
        </div>
        <div className="h-1 bg-purple-500 mt-2 rounded-full"></div>
      </div>

      <div className="mb-4">
        <label className="text-sm text-gray-300">Title</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full bg-[#161B49] text-white rounded-lg p-2" placeholder="Password Title" />
      </div>

      <div className="mb-4">
        <label className="text-sm text-gray-300">Notes</label>
        <textarea value={notes} onChange={(e) => setNotes(e.target.value)} className="w-full bg-[#161B49] text-white rounded-lg p-2" placeholder="Additional notes" />
      </div>

      <div className="mb-4">
        <label className="text-sm text-gray-300">Select Folder</label>
        <select value={selectedFolder} onChange={(e) => setSelectedFolder(e.target.value)} className="w-full bg-[#161B49] text-white rounded-lg p-2">
          <option value="">Select Folder</option>
          {folders.map((folder, index) => (
            <option key={index} value={folder}>{folder}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Generate;
