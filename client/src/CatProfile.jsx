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
    <h2 className="flex justify-center">Meet {cat.name}</h2>
  );
};

export default CatProfile;
