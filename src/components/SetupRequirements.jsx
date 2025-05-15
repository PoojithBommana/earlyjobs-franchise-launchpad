
import React from 'react';
import { Building, Globe, Check, Rocket } from 'lucide-react';

const SetupRequirements = () => {
  const requirements = [
    {
      icon: <Building className="h-10 w-10 text-ejobs-orange" />,
      title: "Office Space",
      description: "200–400 sq ft (or home office in Tier 2/3)"
    },
    {
      icon: <Globe className="h-10 w-10 text-ejobs-orange" />,
      title: "Infrastructure",
      description: "Laptop, broadband, phone"
    },
    {
      icon: <Rocket className="h-10 w-10 text-ejobs-orange" />,
      title: "Branding",
      description: "EarlyJobs signage, CRM & marketing kit"
    },
    {
      icon: <Check className="h-10 w-10 text-ejobs-orange" />,
      title: "Franchise Deposit",
      description: "₹1L (limited-time 50% risk-sharing offer)"
    }
  ];

  return (
    <section id="setup" className="section bg-ejobs-gray-light">
      <div className="container">
        <h2 className="section-heading text-center">What You Need to Get Started</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {requirements.map((req, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md flex items-start gap-5 group hover:border-ejobs-orange hover:border transition-all"
            >
              <div className="bg-white p-3 rounded-full shadow-md group-hover:bg-ejobs-orange/10 transition-colors">
                {req.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{req.title}</h3>
                <p className="text-gray-700">{req.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-white p-8 rounded-lg shadow-md border-l-4 border-ejobs-orange">
          <h3 className="text-xl font-bold mb-4">Total Investment Breakdown</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3">Item</th>
                  <th className="text-right py-3">Cost Range</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3">Franchise Deposit</td>
                  <td className="text-right">₹1,00,000</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3">Office Setup & Equipment</td>
                  <td className="text-right">₹1,00,000 - ₹1,50,000</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3">Branding & Signage</td>
                  <td className="text-right">₹50,000</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3">Working Capital</td>
                  <td className="text-right">₹1,00,000 - ₹2,00,000</td>
                </tr>
                <tr className="font-bold">
                  <td className="py-3">Total Setup Investment</td>
                  <td className="text-right text-ejobs-orange">₹3,00,000 - ₹5,00,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SetupRequirements;
