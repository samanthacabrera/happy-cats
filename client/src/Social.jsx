import React, { useState, useEffect } from 'react';

const samplePosts = [
  {
    id: 1,
    image_url: 'https://via.placeholder.com/400',
    caption: 'Happy cat enjoying the sun! #happycats',
    likes: 150,
  },
  {
    id: 2,
    image_url: 'https://via.placeholder.com/400',
    caption: 'Another happy cat with a toy. #happycats',
    likes: 200,
  },
  {
    id: 3,
    image_url: 'https://via.placeholder.com/400',
    caption: 'Cat having a great time in the garden. #happycats',
    likes: 250,
  },
];

const Social = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Simulate fetch with sample data
    const fetchPosts = async () => {
      try {
        // Simulate a fetch delay
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setPosts(samplePosts);
      } catch (error) {
        console.error('Error fetching Instagram posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="w-1/2 mx-auto my-12">
      <h2 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem', textAlign: 'center' }}>Share The Love</h2>
      <p style={{ fontSize: '1.25rem', textAlign: 'center', marginBottom: '2rem' }}>
        This is a place dedicated to highlighting the friendships and happy moments made through this platform. 
        Enjoy these heartwarming moments shared by our community with the hashtag #happycats.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
        {posts.map((post) => (
          <div key={post.id} style={{ borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
            <img src={post.image_url} alt={post.caption} style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
            <div style={{ padding: '16px' }}>
              <p style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '8px' }}>{post.caption}</p>
              <p style={{ color: '#666', marginBottom: '0' }}>Likes: {post.likes}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Social;
