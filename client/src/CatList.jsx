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
    <div className="">
      <h2 className="text-3xl mb-4">Cats List</h2>
      <ul>
        {cats.map(cat => (
          <li key={cat.id} className="bg-white rounded-lg shadow-md p-4 mb-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-1.02">
            <h3 className="text-xl font-bold text-gray-800">{cat.name}</h3>
            <p className="text-gray-600">Age: {cat.age}</p>
            <p className="text-gray-600">Breed: {cat.breed}</p>
            <p className="text-gray-600">Description: {cat.description}</p>
            <p className="text-gray-600">Owner ID: {cat.owner_id}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CatsList;
