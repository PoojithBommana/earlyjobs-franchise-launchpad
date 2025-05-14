
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProblemSolution from '@/components/ProblemSolution';
import WhyFranchise from '@/components/WhyFranchise';
import EarningModel from '@/components/EarningModel';
import SetupRequirements from '@/components/SetupRequirements';
import Testimonials from '@/components/Testimonials';
import LimitedOffer from '@/components/LimitedOffer';
import FranchiseRoadmap from '@/components/FranchiseRoadmap';
import FAQ from '@/components/FAQ';
import LeadForm from '@/components/LeadForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ProblemSolution />
      <WhyFranchise />
      <EarningModel />
      <SetupRequirements />
      <Testimonials />
      <LimitedOffer />
      <FranchiseRoadmap />
      <FAQ />
      <LeadForm />
      <Footer />
    </div>
  );
};

export default Index;
