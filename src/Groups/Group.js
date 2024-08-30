import React from 'react';
import { BsCameraVideo } from 'react-icons/bs';
import profile from '../assets/images/5097611.jpg'

function Group (){
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
            <img src={profile} alt="Profile" className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Victor Exrixon</h2>
            <p className="text-sm text-gray-500">support@gmail.com</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button className="p-2 rounded-full bg-blue-100 text-blue-600">
            <BsCameraVideo size={20} />
          </button>
          <button className="px-4 py-2 rounded-full bg-blue-600 text-white font-medium text-sm">
            FOLLOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Group;