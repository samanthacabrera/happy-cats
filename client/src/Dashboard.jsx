import React from 'react';

const UserDashboard = ({ user }) => {
user = { name: 'Alice', cats: [], messages: [] };
  return (
    <section className="w-screen h-screen flex flex-col justify-center items-center">
      <h2 >Welcome, {user.name}!</h2>
        <h6>Your Cat Profiles</h6>
        <ul className="">
          {user.cats.map((cat) => (
            <li key={cat.id} className="py-4">
              <p className="text-gray-800">{cat.name}</p>

            </li>
          ))}
        </ul>
        <button>Add a cat</button>
      </section>
  );
};

export default UserDashboard;
