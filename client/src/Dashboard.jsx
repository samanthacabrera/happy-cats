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

    // Fetch messages
    fetch(`api/users/${user_id}/messages`)
      .then(response => response.json())
      .then(data => setMessages(data))
      .catch(error => console.error('Error fetching messages:', error));

    // Fetch availability
    fetch(`api/users/${user_id}/availability`)
      .then(response => response.json())
      .then(data => setAvailability(data))
      .catch(error => console.error('Error fetching availability:', error));
  }, [user_id]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full h-full min-h-screen flex flex-col items-center bg-gray-100 p-8">
      <h2 className="text-5xl font-extrabold text-blue-600 my-8">Welcome, {user.name}!</h2>
      <p className="text-2xl text-gray-700 mb-12">Here's an overview of your cat profiles, availability, and messages.</p>
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

        <div className="bg-white rounded-lg shadow-md p-10">
          <h3 className="text-3xl font-bold text-gray-800 mb-6 flex items-center"><AiOutlineCalendar className="mr-2"/> Availability Info</h3>
          <p className="text-lg text-gray-600 mb-6">Manage your availability for cat playdates. Update your calendar to let others know when you're free.</p>
          <div className="space-y-4">
            {availability.map((slot, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-lg text-gray-700">{slot.date} - {slot.time}</span>
                <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 text-md">Remove</button>
              </div>
            ))}
          </div>
          <button className="mt-6 bg-blue-500 text-white font-bold py-3 px-6 rounded hover:bg-blue-700 text-lg">
            Add Availability
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-10">
          <h3 className="text-3xl font-bold text-gray-800 mb-6 flex items-center"><AiOutlineMessage className="mr-2"/> Messages</h3>
          <p className="text-lg text-gray-600 mb-6">Check your messages to see who wants to schedule a playdate with your cat.</p>
          <ul className="space-y-4">
            {messages.map((message, index) => (
              <li key={index} className="border-b border-gray-300 pb-4 mb-4">
                <h4 className="text-xl font-semibold text-gray-700">{message.sender}</h4>
                <p className="text-lg text-gray-600">{message.content}</p>
                <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 text-md">Reply</button>
              </li>
            ))}
          </ul>
          <button className="mt-6 bg-blue-500 text-white font-bold py-3 px-6 rounded hover:bg-blue-700 text-lg">
            View All Messages
          </button>
        </div>

      </div>
    </div>
  );
};

export default UserDashboard;
