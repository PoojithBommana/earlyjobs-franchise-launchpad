
import React from 'react';
import { Users, DollarSign, Building, Briefcase } from 'lucide-react';

const ProblemSolution = () => {
  return (
    <section className="section bg-white" id="problem">
      <div className="container">
        <h2 className="section-heading text-center">Hiring is Broken. We're Fixing It.</h2>
        
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-lg md:text-xl text-center text-ejobs-black-light">
            Startups and enterprises struggle with costly, slow hiring. At the same time, thousands of HR professionals, especially women, want flexible work opportunities. EarlyJobs bridges this gap with a tech-powered freelance recruiter model — and now you can run your own recruitment hub under our brand.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="stat-card hover:border-ejobs-orange hover:border group animate-fade-in">
            <DollarSign className="w-12 h-12 text-ejobs-orange mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl md:text-3xl font-bold text-ejobs-black mb-1">₹50,000 Cr+</h3>
            <p className="text-ejobs-black-light">Recruitment Industry</p>
          </div>
          
          <div className="stat-card hover:border-ejobs-orange hover:border group animate-fade-in" style={{ animationDelay: "100ms" }}>
            <Building className="w-12 h-12 text-ejobs-orange mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl md:text-3xl font-bold text-ejobs-black mb-1">1,300+</h3>
            <p className="text-ejobs-black-light">Hires Done in 12 Months</p>
          </div>
          
          <div className="stat-card hover:border-ejobs-orange hover:border group animate-fade-in" style={{ animationDelay: "200ms" }}>
            <Users className="w-12 h-12 text-ejobs-orange mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl md:text-3xl font-bold text-ejobs-black mb-1">80%</h3>
            <p className="text-ejobs-black-light">of Recruiters are Women</p>
          </div>
          
          <div className="stat-card hover:border-ejobs-orange hover:border group animate-fade-in" style={{ animationDelay: "300ms" }}>
            <Briefcase className="w-12 h-12 text-ejobs-orange mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl md:text-3xl font-bold text-ejobs-black mb-1">50+</h3>
            <p className="text-ejobs-black-light">Top Companies Served</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
