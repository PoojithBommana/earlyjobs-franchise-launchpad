
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProblemSolution from '@/components/ProblemSolution';
import WhyFranchise from '@/components/WhyFranchise';
import EarningModel from '@/components/EarningModel';
import SetupRequirements from '@/components/SetupRequirements';
import FranchiseRoadmap from '@/components/FranchiseRoadmap';
import Testimonials from '@/components/Testimonials';
import LimitedOffer from '@/components/LimitedOffer';
import FAQ from '@/components/FAQ';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ProblemSolution />
      <WhyFranchise />
      <EarningModel />
      <SetupRequirements />
      <FranchiseRoadmap />
      <Testimonials />
      <LimitedOffer />
      <FAQ />
    </div>
  );
};

export default Index;
