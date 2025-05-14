
import React from 'react';

const FranchiseRoadmap = () => {
  const steps = [
    {
      number: "01",
      title: "Submit Your Interest",
      description: "Fill out our application form to express interest"
    },
    {
      number: "02",
      title: "Application & Call",
      description: "Review your application and discuss opportunities"
    },
    {
      number: "03",
      title: "Agreement & Deposit",
      description: "Complete documentation and secure your territory"
    },
    {
      number: "04",
      title: "Onboarding & Training",
      description: "Comprehensive training program for success"
    },
    {
      number: "05",
      title: "Franchise Launch",
      description: "Grand opening with marketing support"
    },
    {
      number: "06",
      title: "Ongoing Support & Growth",
      description: "Regular check-ins and business development"
    }
  ];
  
  return (
    <section className="section bg-ejobs-gray-light">
      <div className="container">
        <h2 className="section-heading text-center">From Application to Launch – We're With You</h2>
        
        <div className="mt-12 relative">
          {/* Timeline connector (desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-ejobs-orange/20 -translate-x-1/2"></div>
          
          <div className="space-y-12 md:space-y-0 relative">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`md:grid md:grid-cols-2 gap-8 md:gap-16 relative md:mb-20 ${
                  index % 2 === 0 ? '' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot (desktop) */}
                <div className="hidden md:block absolute left-1/2 top-8 w-6 h-6 bg-ejobs-orange rounded-full -translate-x-1/2 z-10"></div>
                
                {/* Step content */}
                <div className={`${index % 2 === 0 ? 'md:text-right md:col-start-1' : 'md:col-start-2'} flex md:block items-start`}>
                  {/* Step number (mobile) */}
                  <div className="md:hidden flex-shrink-0 w-10 h-10 rounded-full bg-ejobs-orange text-white flex items-center justify-center font-bold text-lg mr-4">
                    {step.number}
                  </div>
                  
                  <div>
                    <span className="hidden md:inline-block text-3xl font-bold text-ejobs-orange/30 mb-2">
                      STEP {step.number}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold mb-2">{step.title}</h3>
                    <p className="text-ejobs-black-light">{step.description}</p>
                  </div>
                </div>
                
                {/* Empty cell to maintain grid structure */}
                <div className={`hidden md:block ${index % 2 === 0 ? 'md:col-start-2' : 'md:col-start-1'}`}></div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <button className="btn-primary">Book Intro Call</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FranchiseRoadmap;
