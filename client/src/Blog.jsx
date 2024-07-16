import React from 'react';
import BlogCard from './BlogCard';

const Blog = () => {
  const blogPosts = [
    {
      title: "Understanding Cat Social Behavior for Playdates",
      description: "Learn the key differences in how cats and dogs socialize and get tips for arranging successful cat playdates.",
      imageUrl: "https://example.com/image.jpg",
      link: "/ask-an-expert/1",
    },

  ];

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="heading uppercase text-18xl text-justify font-bold">Resources</h1>
        {blogPosts.map((post, index) => (
          <BlogCard
            key={index}
            title={post.title}
            description={post.description}
            imageUrl={post.imageUrl}
            link={post.link}
          />
        ))}
      </div>
  );
};

export default Blog;
