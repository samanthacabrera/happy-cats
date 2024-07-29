import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineCalendar, AiOutlineMessage, AiOutlineUser } from 'react-icons/ai';

const UserDashboard = ({ user_id }) => {
  const [user, setUser] = useState(null);
  const [cats, setCats] = useState([]);
  const [messages, setMessages] = useState([]);
  const [availability, setAvailability] = useState([]);

  useEffect(() => {
    // Fetch user data
    fetch(`api/users/${user_id}`)
      .then(response => response.json())
      .then(data => setUser(data))
      .catch(error => console.error('Error fetching user:', error));

    // Fetch cats data
    fetch(`api/users/${user_id}/cats`)
      .then(response => response.json())
      .then(data => setCats(data))
      .catch(error => console.error('Error fetching cats:', error));
  }, [user_id]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full h-full min-h-screen flex flex-col items-center bg-gray-100 p-8">
      <h2 className="text-5xl font-extrabold text-blue-600 my-8">Welcome, {user.name}!</h2>
  
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl">
        <div className="bg-white rounded-lg shadow-md p-10">
          <h3 className="text-3xl font-bold text-gray-800 mb-6 flex items-center"><AiOutlineUser className="mr-2"/> Your Cat Profiles</h3>
          <ul className="space-y-4">
            {cats.map((cat) => (
              <li key={cat.id} className="flex justify-between items-center">
                <Link to={`/cats/${cat.id}`} className="text-xl text-gray-700 hover:text-blue-600 font-semibold">
                  {cat.name}
                </Link>
                <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 text-md">Delete</button>
              </li>
            ))}
          </ul>
          <Link to="/add-cat" className="mt-6 inline-block bg-blue-500 text-white font-bold py-3 px-6 rounded hover:bg-blue-700 text-center text-lg">
            Add a Cat
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
