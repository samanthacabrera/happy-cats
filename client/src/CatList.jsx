import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineClose, AiOutlineHeart } from 'react-icons/ai'; 

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

  const handleSwipe = (direction) => {
    if (direction === 'left') {
      setCurrentIndex(prevIndex => (prevIndex === 0 ? cats.length - 1 : prevIndex - 1));
    } else if (direction === 'right') {
      setCurrentIndex(prevIndex => (prevIndex === cats.length - 1 ? 0 : prevIndex + 1));
    }
  };

  // Touch swipe gesture logic
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      handleSwipe('right');
    }

    if (touchEndX.current - touchStartX.current > 50) {
      handleSwipe('left');
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div className="w-full flex items-center justify-center my-12">
      <div className="relative overflow-hidden w-full md:w-1/2">
        {/* Arrows for larger screens */}
        <div className="hidden md:flex absolute top-1/2 transform -translate-y-1/2 left-4 z-10">
          <button onClick={() => handleSwipe('left')} className="text-gray-700 rounded-full p-2 bg-white shadow-md hover:bg-gray-200">
            <AiOutlineClose className="h-8 w-8 transition duration-300 ease-in-out transform hover:scale-110" />
          </button>
        </div>
        <div className="hidden md:flex absolute top-1/2 transform -translate-y-1/2 right-4 z-10">
          <button onClick={() => handleSwipe('right')} className="text-gray-700 rounded-full p-2 bg-white shadow-md hover:bg-gray-200">
            <AiOutlineHeart className="h-8 w-8 transition duration-300 ease-in-out transform hover:scale-110" />
          </button>
        </div>

        {/* Swipeable cards for small devices */}
        <div
          className="md:hidden flex justify-center p-4 overflow-x-scroll"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {cats.map((cat, index) => (
            <div
              key={cat.id}
              className={`min-w-80 min-h-96 bg-white rounded-lg shadow-md p-12 flex flex-col justify-between flex-shrink-0 transition duration-300 ease-in-out transform ${index === currentIndex ? 'translate-x-0 scale-105' : 'translate-x-full scale-100'}`}
              style={{ display: index === currentIndex ? 'block' : 'none' }}
            >
              <h3 className="text-xl mb-2">{cat.name}</h3>
              <p className="text-gray-700">Age: {cat.age}</p>
              <p className="text-gray-700">Breed: {cat.breed}</p>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Message Owner!</button>
            </div>
          ))}
        </div>

        {/* Static cards for larger screens */}
        <div className="hidden md:flex justify-center space-x-4 p-4">
          {cats.map((cat, index) => (
            <div
              key={cat.id}
              className={`min-w-80 min-h-96 bg-white rounded-lg shadow-md p-12 flex flex-col justify-between flex-shrink-0 ${index === currentIndex ? 'scale-105' : 'scale-100'}`}
              style={{ display: index === currentIndex ? 'block' : 'none' }}
            >
              <h3 className="text-xl mb-2">{cat.name}</h3>
              <p className="text-gray-700">Age: {cat.age}</p>
              <p className="text-gray-700">Breed: {cat.breed}</p>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Message Owner!</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CatsList;
