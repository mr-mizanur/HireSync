import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-[#0a0a0a] text-white py-20 px-6 overflow-hidden">
      {/* Background Globe Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-blue-900/20 to-transparent"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#1a1a1a] px-4 py-1 rounded-full border border-gray-800 text-sm mb-6">
          <span>💼 78,280+ NEW JOBS THIS MONTH</span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Find Your Dream Job Today</h1>
        <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
          With 178,200+ new jobs this month, HireSync connects you with top-tier companies globally. Browse curated opportunities and land your next role.
        </p>

        {/* Search Bar */}
        <div className="flex flex-col md:flex-row bg-[#1a1a1a] p-2 rounded-2xl border border-gray-800 mb-8 max-w-2xl mx-auto gap-2">
          <input type="text" placeholder="Job title, skill or company" className="bg-transparent px-4 py-3 outline-none flex-1" />
          <div className="w-px bg-gray-700 hidden md:block"></div>
          <input type="text" placeholder="Location or Remote" className="bg-transparent px-4 py-3 outline-none flex-1" />
          <button className="bg-indigo-600 px-6 py-3 rounded-xl hover:bg-indigo-700 transition">Search</button>
        </div>

        {/* Trending Tags */}
        <div className="flex justify-center gap-4 text-sm text-gray-500 mb-20">
          <span>Trending Position:</span>
          <button className="hover:text-white">Product Designer</button>
          <button className="hover:text-white">AI Engineering</button>
          <button className="hover:text-white">Dev-ops Engineer</button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
        {[
          { label: 'Active Jobs', value: '78.2K' },
          { label: 'Companies', value: '12K' },
          { label: 'Job Seekers', value: '2M' },
          { label: 'Satisfaction Rate', value: '97%' },
        ].map((stat, index) => (
          <div key={index} className="bg-[#111] p-6 rounded-2xl border border-gray-800 hover:border-indigo-500 transition">
            <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
            <p className="text-gray-500 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;