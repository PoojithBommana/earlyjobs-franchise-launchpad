
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import WhyFranchise from './components/WhyFranchise';
import LimitedOffer from './components/LimitedOffer';
import SetupRequirements from './components/SetupRequirements';
// import Testimonials from './components/Testimonials';
import LeadForm from './components/LeadForm';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <ProblemSolution />
        <WhyFranchise />
        <LimitedOffer />
        <SetupRequirements />
        <LeadForm />
      </main>
    </div>
  );
}

export default App;
