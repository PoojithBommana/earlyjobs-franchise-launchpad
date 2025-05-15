
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-28 pb-20 md:pt-32 md:pb-28 overflow-hidden bg-gradient-to-br from-white via-white to-ejobs-gray-light">
      {/* Orange diagonal shape in background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-ejobs-orange transform -rotate-6 translate-x-1/3 -translate-y-1/4 z-0 opacity-10"></div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Build Your Own <span className="text-ejobs-orange">Recruitment Business</span> with EarlyJobs 🚀
            </h1>
            
            <p className="text-xl md:text-2xl text-ejobs-black-light">
              Join India's fastest-growing HRTech platform and launch a high-ROI franchise in your city
            </p>
            
            <div className="pt-4">
              <Button 
                onClick={scrollToContact}
                className="btn-primary text-lg group"
              >
                Start Your Franchise Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <div className="pt-8 border-t border-gray-200 mt-8">
              <p className="text-sm font-medium text-gray-500 mb-4">AS SEEN IN</p>
              <div className="flex flex-wrap items-center gap-6">
                <img src="https://via.placeholder.com/120x40?text=BusinessStandard" alt="Business Standard" className="h-8 grayscale hover:grayscale-0 transition-all" />
                <img src="https://via.placeholder.com/120x40?text=FranchiseIndia" alt="Franchise India" className="h-8 grayscale hover:grayscale-0 transition-all" />
                <img src="https://via.placeholder.com/120x40?text=YourStory" alt="YourStory" className="h-8 grayscale hover:grayscale-0 transition-all" />
              </div>
              
              <p className="text-sm font-medium text-gray-500 mt-6 mb-3">TRUSTED BY</p>
              <div className="flex flex-wrap items-center gap-5">
                <img src="https://via.placeholder.com/80x25?text=Flipkart" alt="Flipkart" className="h-6 grayscale hover:grayscale-0 transition-all" />
                <span className="text-gray-300">|</span>
                <img src="https://via.placeholder.com/80x25?text=StarHealth" alt="Star Health" className="h-6 grayscale hover:grayscale-0 transition-all" />
                <span className="text-gray-300">|</span>
                <img src="https://via.placeholder.com/80x25?text=Frankfinn" alt="Frankfinn" className="h-6 grayscale hover:grayscale-0 transition-all" />
                <span className="text-gray-300">|</span>
                <img src="https://via.placeholder.com/80x25?text=HDFC" alt="HDFC" className="h-6 grayscale hover:grayscale-0 transition-all" />
              </div>
            </div>
          </div>
          
          <div className="relative rounded-xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-ejobs-orange/20 to-transparent z-10"></div>
            <img 
              src="https://via.placeholder.com/600x400?text=Franchisee+Success" 
              alt="Franchisee Success" 
              className="w-full h-auto object-cover rounded-xl" 
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white z-20">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-ejobs-orange rounded-full p-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 12.5a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 1 0v7a.5.5 0 0 1-.5.5Z"/>
                    <path d="M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5Z"/>
                  </svg>
                </div>
                <span className="font-medium">Watch Success Story</span>
              </div>
              <h3 className="text-xl font-semibold">How Shalini built a ₹7L/month franchise in Pune</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
