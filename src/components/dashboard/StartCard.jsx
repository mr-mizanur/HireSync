import React from 'react';
import { FileText, Users, Zap, CheckCircle } from 'lucide-react'; // Make sure to install lucide-react

const StatCard = ({ title, count, icon: Icon }) => (
  <div className="bg-[#1a1a1a] p-6 rounded-2xl border border-gray-800 w-full">
    <div className="bg-[#262626] w-fit p-2 rounded-lg mb-4">
      <Icon className="text-white w-5 h-5" />
    </div>
    <p className="text-gray-400 text-sm mb-1">{title}</p>
    <h3 className="text-white text-3xl font-semibold">{count}</h3>
  </div>
);

const StartCard = () => {
  const stats = [
    { title: 'Total Job Posts', count: '48', icon: FileText },
    { title: 'Total Applicants', count: '1,284', icon: Users },
    { title: 'Active Jobs', count: '18', icon: Zap },
    { title: 'Jobs Closed', count: '32', icon: CheckCircle },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-8 bg-[#0f0f0f] min-h-screen">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
};

export default StartCard;