

import { X, Eye, RefreshCcw, Copy } from "lucide-react"; 

const Generate = () => {
  return (
    <div className="bg-[#101E71] text-white w-full max-w-full mx-auto p-6 rounded-lg shadow-lg relative border border-blue-500">
     
      <div className="flex justify-between items-center border-b border-gray-700 pb-3 mb-4 ">
        <h2 className="text-lg font-semibold flex items-center gap-2">
           Generate Password
        </h2>
        <X className="cursor-pointer text-gray-400 hover:text-white" />
      </div>

      
      <div className="mb-4">
        <label className="block text-sm text-gray-300 mb-2 mr-240">
          Password Quality: <strong className="text-purple-400">Excellent</strong>
        </label>
        <div className="relative bg-[#161B49] p-3 rounded-lg flex items-center">
          <input
            type="password"
            value="••••••••••••••••"
            readOnly
            className="bg-transparent w-full text-lg tracking-widest text-gray-300"
          />
          <div className="absolute right-3 flex gap-2">
            <Eye className="cursor-pointer text-gray-400 hover:text-white" />
            <RefreshCcw className="cursor-pointer text-gray-400 hover:text-white" />
            <Copy className="cursor-pointer text-gray-400 hover:text-white" />
          </div>
        </div>
        <div className="h-1 bg-purple-500 mt-2 rounded-full"></div>
      </div>

   
      <div className="mb-4">
        <p className="text-sm font-medium text-gray-400 mr-240">Password Settings</p>
      </div>

     
      <div className="flex items-center gap-3 mb-4">
        <div>
        <label className="text-sm text-gray-300">Length</label>
        </div>
        <input type="text"  className="w-90 bg-[#101E71]" />
        <input
          type="number"
          value="8"
          className="w-30 text-center bg-[#161B49] text-white rounded-lg p-1"
          readOnly
        />
      </div>

      
      <div className="mb-4">
        <label className="block text-sm text-gray-300 mb-2 mr-250">Character Type</label>
        <div className="grid grid-cols-5 gap-2">
          <button className="p-1 bg-[#0E1a60] rounded-lg text-black font-medium">
            A - Z
          </button>
          <button className="p-2 bg-[#0E1A60] rounded-lg text-black font-medium">
            a - z
          </button>
          <button className="p-2 bg-[#0E1A60] rounded-lg text-black font-medium">
            0 - 9
          </button>
          <button className="p-2 bg-[#0E1A60] rounded-lg text-black font-medium">
            \*_&
          </button>
          <button className="w-full mt-3 p-2 bg-purple-600 hover:bg-purple-700 text-black font-semibold rounded-lg">
          Extended ASCII
        </button>
        </div>
       
      </div>

    
      <div className="flex justify-between mt-4">
        <button className="bg-[#0E1A60] px-4 py-2 rounded-lg text-black ml-220">
          Close
        </button>
        <button className="bg-[#0E1A60] px-4 py-2 rounded-lg text-black">
          Apply Password
        </button>
      </div>
    </div>
  );
};

export default Generate;
