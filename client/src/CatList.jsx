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
      <h2 className="text-3xl mb-4">Cat's looking for Friends:</h2>
      <ul>
        {cats.map(cat => (
          <li key={cat.id} className="bg-white rounded-lg shadow-md p-4 mb-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-1.02">
            <h3 className="text-xl"> {cat.name}</h3>
            <p>Age: {cat.age}</p>
            <p>Breed: {cat.breed}</p>
            <button>Message Owner !</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CatsList;
