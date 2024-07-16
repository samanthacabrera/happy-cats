import React from 'react';

const Messages = ({ messages }) => {
  return (
    <div className="mt-6 w-full max-w-md bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold text-blue-500 mb-4">Your Messages</h3>
      <ul className="divide-y divide-gray-200">
        {messages.map((message) => (
          <li key={message.id} className="py-4">
            <p className="text-gray-800 font-semibold">From: {message.sender}</p>
            <p className="text-gray-600">{message.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const UserDashboard = ({ user }) => {
  user = {
    name: 'Alice',
    cats: [
      { id: 1, name: 'Whiskers' },
      { id: 2, name: 'Fluffy' }
    ],
    messages: [
      { id: 1, sender: 'Bob', content: 'Hey Alice, let’s schedule a playdate!' },
      { id: 2, sender: 'Eve', content: 'Your cats are adorable!' }
    ]
  }; // Sample user data

  return (
    <section className="w-screen h-screen flex flex-col justify-center items-center bg-gray-50">
      <h2 className="text-3xl font-bold text-blue-500 mb-4">Welcome, {user.name}!</h2>
      <h6 className="text-lg text-blue-500 mb-2">Your Cat Profiles:</h6>
      <ul className="space-y-2 mb-4">
        {user.cats.map((cat) => (
          <li key={cat.id} className="py-2">
            <p className="text-gray-800">{cat.name}</p>
          </li>
        ))}
      </ul>
      <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md mb-6">
        Add a Cat
      </button>

      {/* Include Messages component */}
      <Messages messages={user.messages} />
    </section>
  );
};

export default UserDashboard;
