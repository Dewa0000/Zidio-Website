import React from 'react';

const events = [
  { year: "2020", title: "Zidio Founded", description: "Zidio was established to provide innovative learning solutions." },
  { year: "2021", title: "First Major Project", description: "Delivered the first major project for a Fortune 500 company." },
  { year: "2022", title: "Team Expansion", description: "Zidio expanded its team with industry leaders." },
  { year: "2023", title: "Award Recognition", description: "Zidio won the Best Tech Startup award." }
];

const Timeline = () => {
  return (
    <section className="bg-gray-100 py-12">
      <h2 className="text-3xl font-bold text-center mb-12">Zidio's Journey</h2>
      <div className="container mx-auto">
        {events.map((event, index) => (
          <div key={index} className="mb-8 flex flex-col md:flex-row items-center">
            <div className="flex justify-center items-center w-12 h-12 bg-blue-600 text-white rounded-full">
              {event.year}
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold">{event.title}</h3>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
