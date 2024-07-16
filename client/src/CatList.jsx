import React, { useState, useEffect } from 'react';

const CatsList = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const fetchCats = async () => {
      try {
        const response = await fetch('api/cats'); 
        if (!response.ok) {
          throw new Error('Failed to fetch cats');
        }
        const catsData = await response.json();
        setCats(catsData);
      } catch (error) {
        console.error('Error fetching cats:', error);
      }
    };

    fetchCats();
  }, []);

  return (
    <div className="w-1/2">
      <h2 className="text-3xl mb-4">Cats Looking for Friends:</h2>
      <div className="flex overflow-x-scroll space-x-4 p-4">
        {cats.map(cat => (
          <div key={cat.id} className="min-w-80 min-h-96 bg-white rounded-lg shadow-md p-12 flex flex-col justify-between flex-shrink-0 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <h3 className="text-xl mb-2">{cat.name}</h3>
            <p className="text-gray-700">Age: {cat.age}</p>
            <p className="text-gray-700">Breed: {cat.breed}</p>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Message Owner!</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatsList;
