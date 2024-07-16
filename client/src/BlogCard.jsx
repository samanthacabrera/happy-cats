import React from 'react';

const BlogCard = ({ title, description, imageUrl, link }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <a
          href={link}
          className="inline-block text-blue-500 hover:text-blue-700 font-semibold"
        >
          Read more
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
