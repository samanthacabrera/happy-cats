import React, { useState } from 'react';
import { FaHome, FaSmile, FaEye, FaGamepad } from 'react-icons/fa';

const Tips = () => {
  const [hoveredTip, setHoveredTip] = useState(null);

  const tips = [
    {
      icon: <FaHome className="text-5xl text-blue-600 mb-4 mx-auto" />,
      title: "Safe Spaces",
      brief: "Ensure each cat has a safe space to retreat to.",
      detail: "Providing a safe space helps cats feel secure. This can be a separate room or a high perch where they can observe without being directly involved."
    },
    {
      icon: <FaSmile className="text-5xl text-blue-600 mb-4 mx-auto" />,
      title: "Comfort Items",
      brief: "Bring familiar items to help your cat feel at ease.",
      detail: "Items like their favorite blanket, toy, or even your scent on a piece of clothing can make a new environment less stressful for your cat."
    },
    {
      icon: <FaEye className="text-5xl text-blue-600 mb-4 mx-auto" />,
      title: "Body Language",
      brief: "Pay attention to the cats' body language.",
      detail: "Cats communicate a lot through their body language. Understanding signs of stress or comfort can help you manage their interactions better."
    },
    {
      icon: <FaGamepad className="text-5xl text-blue-600 mb-4 mx-auto" />,
      title: "Parallel Play",
      brief: "Set up activities where cats can play near each other.",
      detail: "Parallel play involves engaging cats in separate but nearby activities. This helps them get used to each other's presence without direct confrontation."
    }
  ];

  return (
    <div className="max-w-5xl mx-auto p-8 bg-white rounded-lg shadow-lg mt-20">
      <h2 className="text-3xl font-semibold text-gray-900 mb-10 text-center">Tips for Socializing Cats</h2>
      <div className="flex flex-wrap justify-around text-center text-xl text-gray-700">
        {tips.map((tip, index) => (
          <div
            key={index}
            className="w-1/5 mb-8 relative transition-transform transform hover:scale-105"
            onMouseEnter={() => setHoveredTip(index)}
            onMouseLeave={() => setHoveredTip(null)}
          >
            {tip.icon}
            <p className="font-semibold text-slate-700 mb-4">{tip.title}</p>
            <p className="text-sm">{tip.brief}</p>

            {hoveredTip === index && (
              <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-64 p-4 bg-white border border-gray-300 rounded-lg shadow-lg text-left text-gray-700">
                <p className="text-2xl font-extralight">{tip.detail}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tips;
