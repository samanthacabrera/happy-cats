import React from 'react';

const CatProfile = ({ cat }) => {
  if (!cat) {
    return <div>Loading...</div>; // or handle differently based on your UI/UX needs
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">{cat.name}</h2>
        <span className="text-gray-600">{cat.age} years old</span>
      </div>
      <div className="mb-4">
        <img src={cat.image} alt={cat.name} className="rounded-lg w-full h-auto" />
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-700 mb-2">About {cat.name}</h3>
        <p className="text-gray-600">{cat.description}</p>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-700 mb-2">Owner Information</h3>
        <p className="text-gray-600">Owner: {cat.owner}</p>
        <p className="text-gray-600">Location: {cat.location}</p>
        {/* Add more owner details as needed */}
      </div>
      <div className="mt-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md">
          Contact Owner
        </button>
      </div>
    </div>
  );
};

export default CatProfile;
