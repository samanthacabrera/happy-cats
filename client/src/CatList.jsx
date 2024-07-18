import React, { useState, useEffect } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

const CatsList = () => {
  const [cats, setCats] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const goToPreviousCat = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? cats.length - 1 : prevIndex - 1));
  };

  const goToNextCat = () => {
    setCurrentIndex(prevIndex => (prevIndex === cats.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="w-full flex items-center justify-center my-12">
      <div className="relative overflow-hidden w-full md:w-1/2">

        <div className="absolute top-1/2 transform -translate-y-1/2 left-0 z-10">
          <button onClick={goToPreviousCat} className="text-gray-700 rounded-full p-2 bg-white shadow-md hover:bg-gray-200">
            <AiOutlineLeft className="h-8 w-8 transition duration-300 ease-in-out transform hover:scale-110" />
          </button>
        </div>

        <div className="flex justify-center space-x-4 p-4">
          {cats.map((cat, index) => (
            <div
              key={cat.id}
              className={`min-w-80 min-h-96 bg-white text-slate-700 rounded-lg shadow-md p-4 flex flex-col justify-between flex-shrink-0 ${index === currentIndex ? 'scale-105' : 'scale-100'}`}
              style={{ display: index === currentIndex ? 'block' : 'none' }}
            >
              <h3 className="text-lg font-semibold mb-2">{cat.name}</h3>
              <h4 className="bg-blue-500 text-white py-2 px-4 rounded"><span className="font-semibold">Compatibility Score: </span> 87%</h4>
              <div className="my-2 space-y-2">
                <p><span className="font-semibold">Activity Level:</span> {cat.activity_level}</p>
                <p><span className="font-semibold">Temperament:</span> {cat.temperament}</p>
                <p><span className="font-semibold">Affection Level:</span> {cat.affection_level}</p>
                <p><span className="font-semibold">Energy Level:</span> {cat.energy_level}</p>
                <p><span className="font-semibold">Socialization:</span> {cat.socialization}</p>
                <p><span className="font-semibold">Independence:</span> {cat.independence}</p>
                <p><span className="font-semibold">Curiosity:</span> {cat.curiosity}</p>
                <p><span className="font-semibold">Cuddliness:</span> {cat.cuddliness}</p>
              </div>
              <button className="my-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 text-base">See Profile</button>
            </div>
          ))}
        </div>

        <div className="absolute top-1/2 transform -translate-y-1/2 right-0 z-10">
          <button onClick={goToNextCat} className="text-gray-700 rounded-full p-2 bg-white shadow-md hover:bg-gray-200">
            <AiOutlineRight className="h-8 w-8 transition duration-300 ease-in-out transform hover:scale-110" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CatsList;
