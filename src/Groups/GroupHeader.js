import React from 'react';
import { CiSearch } from "react-icons/ci";
import { CiFilter } from "react-icons/ci";
import './GroupHeader.css'
function GroupHeader() {
  return (
    <div className="flex items-center justify-between p-4 bg-white">
      <h2 className="text-xl font-semibold text-gray-800">Group</h2>
      <div className="flex items-center space-x-2">
        <div className="relative">
          <input 
            type="text" 
            className="pl-10 pr-4 py-2 w-64 bg-gray-100 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
            placeholder="Search here."
          />
          <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>
        <button className="p-2 bg-gray-100 rounded-md hover:bg-gray-200">
          <CiFilter className="text-gray-600" size={20} />
        </button>
      </div>
    </div>
  );
}

export default GroupHeader;