import React from 'react';
// import { FaPaw, FaCog, FaUsers } from 'react-icons/fa';

const Approach = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-1 px-40">
      {/* Text Section 1 */}
      <div className="p-8 md:h-screen flex items-center">
        <div className="mb-8 text-left">
          <h2 className="text-8xl font-semibold mb-4">Tailored for Cats</h2>
          <p className="text-2xl">
            Our app understands the unique needs of cats, from their territorial instincts to their independent nature, ensuring every playdate is enjoyable and stress-free.
          </p>
        </div>
      </div>
      {/* Icon Section 1 */}
      <div className="md:h-screen flex items-center justify-center hidden md:block">
        <div className="text-center">
          {/* <FaPaw className="text-9xl text-slate-700" /> */}
        </div>
      </div>
      {/* Icon Section 2 */}
      <div className="md:h-screen flex items-center justify-center hidden md:block">
        <div className="text-center">
          {/* <FaCog className="text-9xl text-slate-700" /> */}
        </div>
      </div>
      {/* Text Section 2 */}
      <div className="p-8 md:h-screen flex items-center">
        <div className="mb-8 text-left pr-12">
          <h2 className="text-8xl font-semibold mb-4">Personalized Experience</h2>
          <p className="text-2xl">
            Customize playdates based on your cat’s preferences and personality traits, ensuring each interaction is tailored to their comfort and enjoyment.
          </p>
        </div>
      </div>
      {/* Text Section 3 */}
      <div className="p-8 md:h-screen flex items-center">
        <div className="mb-8 text-left">
          <h2 className="text-8xl font-semibold mb-4">Community Support</h2>
          <p className="text-2xl">
            Join a supportive community of cat enthusiasts who share tips, stories, and advice on socializing and caring for cats.
          </p>
        </div>
      </div>
      {/* Icon Section 3 */}
      <div className="md:h-screen flex items-center justify-center hidden md:block">
        <div className="text-center">
          {/* <FaUsers className="text-9xl text-slate-700" /> */}
        </div>
      </div>
    </div>
  );
};

export default Approach;
