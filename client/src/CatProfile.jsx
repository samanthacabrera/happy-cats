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
    return <div className="flex justify-center items-center h-screen text-2xl font-bold text-blue-500">Loading...</div>;
  }

  return (
    <div className="w-full h-full flex flex-col justify-center items-center bg-gray-100 p-6">
      <div className="max-w-lg w-full bg-white shadow-md rounded-lg overflow-hidden mb-6">
        <div className="p-6">
          <h2 className="text-4xl text-gray-800 my-4">Meet {cat.name}</h2>
          <div className="flex flex-col items-center mb-6">
            <div className="w-36 h-36 bg-gray-300 rounded-full mb-6 flex items-center justify-center">
              <span className="text-gray-500 text-lg">Cat Image</span>
            </div>
            <div className="w-full text-left">
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-gray-700 mb-4">Basic Information</h3>
                <p className="text-xl text-gray-600 mb-4"><span className="font-bold">Name:</span> {cat.name}</p>
                <p className="text-xl text-gray-600 mb-4"><span className="font-bold">Age:</span> {cat.age}</p>
                <p className="text-xl text-gray-600 mb-4"><span className="font-bold">Breed:</span> {cat.breed}</p>
              </div>
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-gray-700 mb-4">Personality Traits</h3>
                <p className="text-xl text-gray-600 mb-4"><span className="font-bold">Activity Level:</span> {cat.activity_level}</p>
                <p className="text-xl text-gray-600 mb-4"><span className="font-bold">Temperament:</span> {cat.temperament}</p>
                <p className="text-xl text-gray-600 mb-4"><span className="font-bold">Affection Level:</span> {cat.affection_level}</p>
                <p className="text-xl text-gray-600 mb-4"><span className="font-bold">Energy Level:</span> {cat.energy_level}</p>
                <p className="text-xl text-gray-600 mb-4"><span className="font-bold">Socialization:</span> {cat.socialization}</p>
                <p className="text-xl text-gray-600 mb-4"><span className="font-bold">Independence:</span> {cat.independence}</p>
                <p className="text-xl text-gray-600 mb-4"><span className="font-bold">Curiosity:</span> {cat.curiosity}</p>
                <p className="text-xl text-gray-600 mb-4"><span className="font-bold">Cuddliness:</span> {cat.cuddliness}</p>
              </div>
            </div>
          </div>
          <button className="w-full bg-blue-500 text-white text-xl font-bold py-3 rounded-lg hover:bg-blue-600 transition duration-300">
            Message Owner
          </button>
        </div>
      </div>
      <p className="text-md text-gray-600">Message {cat.name}'s owner to learn more!</p>
    </div>
  );
};

export default CatProfile;
