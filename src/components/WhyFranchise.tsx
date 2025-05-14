
import React from 'react';
import { Briefcase, Brain, DollarSign, TrendingUp, Users } from 'lucide-react';

const WhyFranchise = () => {
  const franchiseReasons = [
    {
      icon: <Briefcase className="h-10 w-10 text-ejobs-orange group-hover:scale-110 transition-transform" />,
      title: "Proven Model",
      description: "Built-in success — 200+ recruiters onboarded, 50+ clients"
    },
    {
      icon: <Brain className="h-10 w-10 text-ejobs-orange group-hover:scale-110 transition-transform" />,
      title: "No HR Experience Needed",
      description: "We train you on hiring, operations & sales"
    },
    {
      icon: <DollarSign className="h-10 w-10 text-ejobs-orange group-hover:scale-110 transition-transform" />,
      title: "Low Setup, High ROI",
      description: "Start with just ₹1L deposit + minimal infra"
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-ejobs-orange group-hover:scale-110 transition-transform" />,
      title: "Recurring Monthly Income",
      description: "Earn from placements, assessments & partnerships"
    },
    {
      icon: <Users className="h-10 w-10 text-ejobs-orange group-hover:scale-110 transition-transform" />,
      title: "Community Impact",
      description: "Empower job seekers & drive hiring locally"
    }
  ];

  return (
    <section id="whyFranchise" className="section bg-ejobs-gray-light">
      <div className="container">
        <h2 className="section-heading text-center">Why Franchise with EarlyJobs?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {franchiseReasons.map((reason, index) => (
            <div 
              key={index} 
              className="card bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all group hover:border hover:border-ejobs-orange"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4">{reason.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-ejobs-black">{reason.title}</h3>
              <p className="text-ejobs-black-light">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyFranchise;
