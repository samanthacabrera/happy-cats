import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const UserDashboard = ({ user_id }) => {
  const [user, setUser] = useState(null);
  const [cats, setCats] = useState([]);

  useEffect(() => {
    // Fetch user data
    fetch(`api/users/${user_id}`)
      .then(response => {
        console.log('Fetching user data...');
        return response.json();
      })
      .then(data => {
        console.log('User data received:', data);
        setUser(data);
      })
      .catch(error => console.error('Error fetching user:', error));

    // Fetch cats data
    fetch(`api/users/${user_id}/cats`)
      .then(response => {
        console.log('Fetching cats data...');
        return response.json();
      })
      .then(data => {
        console.log('Cats data received:', data);
        setCats(data);
      })
      .catch(error => console.error('Error fetching cats:', error));
  }, [user_id]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <section style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f8f9fa' }}>
      <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#3b82f6', marginBottom: '1rem' }}>Welcome, {user.name}!</h2>
      <h6 style={{ fontSize: '1.125rem', color: '#3b82f6', marginBottom: '0.5rem' }}>Your Cat Profiles:</h6>
      <ul style={{ marginBottom: '1rem' }}>
        {cats.map((cat) => (
          <li key={cat.id} style={{ paddingBottom: '0.5rem'}}>
            <Link to={`/cats/${cat.id}`} style={{ color: '#1f2937', textDecoration: 'none' }}>
              {cat.name}
            </Link>
          </li>
        ))}
      </ul>
      <button style={{ marginTop: '1rem', backgroundColor: '#3b82f6', color: '#fff', fontWeight: 'bold', padding: '0.5rem 1rem', borderRadius: '0.375rem', cursor: 'pointer', border: 'none' }}>
        Add a Cat
      </button>
    </section>
  );
};

export default UserDashboard;
