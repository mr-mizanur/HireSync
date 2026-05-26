import React from 'react';
import { FiCheck } from 'react-icons/fi';

const plans = [
  {
    name: "Starter",
    price: "$0",
    features: ["Daily AI match brief (top 5)", "Verified salary bands", "Company insight dashboards", "1-click apply, unlimited"]
  },
  {
    name: "Growth",
    price: "$17",
    features: ["Daily AI match brief (top 5)", "Verified salary bands", "Company insight dashboards", "1-click apply, unlimited"],
    highlight: true
  },
  {
    name: "Premium",
    price: "$99",
    features: ["Everything in Pro", "Multi-profile career portfolios", "Shared talent rooms", "Recruiter view (read-only)"]
  }
];

const Pricing = () => {
  return (
    <section className="bg-[#0a0a0a] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-gray-400 font-semibold mb-4 tracking-widest uppercase text-sm">Pricing</h2>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-10">Pay for the leverage,<br/> not the listings</h1>
        
        {/* Toggle */}
        <div className="inline-flex bg-[#1a1a1a] p-1 rounded-full mb-16 border border-gray-800">
          <button className="px-6 py-2 rounded-full bg-white text-black font-medium">Monthly</button>
          <button className="px-6 py-2 rounded-full text-gray-400">Yearly <span className="text-indigo-400 text-xs">25%</span></button>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`p-8 rounded-3xl border ${plan.highlight ? 'bg-[#111] border-indigo-500' : 'bg-[#111] border-gray-800'} text-left transition-transform hover:-translate-y-2`}>
              <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="text-4xl font-bold text-white mb-8">{plan.price}<span className="text-sm font-normal text-gray-500">/month</span></div>
              
              <p className="text-gray-400 mb-6 text-sm">Start building your insights hub:</p>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                    <span className="bg-gray-800 p-1 rounded-full"><FiCheck size={12}/></span> {feature}
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-3 rounded-xl font-semibold ${plan.highlight ? 'bg-white text-black' : 'bg-[#1a1a1a] text-white'} hover:opacity-90`}>
                Choose This Plan →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;