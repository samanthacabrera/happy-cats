import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CatProfile = () => {
  const { cat_id } = useParams();
  const [cat, setCat] = useState(null);

  useEffect(() => {
    const fetchCat = async () => {
      try {
        const response = await fetch(`/api/cats/${cat_id}`);
        if (!response.ok) {
          throw new Error('Cat not found');
        }
        const catData = await response.json();
        setCat(catData);
      } catch (error) {
        console.error('Error fetching cat:', error);
      }
    };

    fetchCat();
  }, [cat_id]);

  if (!cat) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div className="w-full h-full flex flex-col justify-center items-center bg-gray-100 p-4">
      <h2 className="text-3xl font-bold text-blue-500 mb-4">Cat Profile</h2>
      <p className="text-xl text-gray-800 mb-2">Name: {cat.name}</p>
      <p className="text-xl text-gray-800 mb-2">Age: {cat.age}</p>
      <p className="text-xl text-gray-800 mb-2">Breed: {cat.breed}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default CatProfile;
