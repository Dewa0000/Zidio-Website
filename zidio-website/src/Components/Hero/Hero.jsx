import React from 'react';

const Hero = () => {
  return (
    <section className="bg-blue-600 text-white h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Learn Web Development with Zidio</h1>
        <p className="text-lg mb-6">Master the skills to build modern, responsive websites with industry experts.</p>
        <button className="bg-white text-blue-600 px-6 py-2 font-bold rounded hover:bg-gray-200">Explore Courses</button>
      </div>
    </section>
  );
};

export default Hero;
