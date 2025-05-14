
import React from 'react';
import { AlarmClock, Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LimitedOffer = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12">
      <div className="container">
        <div className="bg-gradient-to-r from-ejobs-orange to-ejobs-orange-dark rounded-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 transform rotate-45 translate-x-1/4"></div>
          
          <div className="p-8 md:p-12 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:w-2/3">
                <div className="flex items-center gap-2 mb-4">
                  <AlarmClock className="w-6 h-6" />
                  <h3 className="text-2xl md:text-3xl font-bold">Launch Offer for Franchise India Expo Visitors 🎉</h3>
                </div>
                
                <p className="text-lg mb-6">Only for first 10 sign-ups:</p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="bg-white rounded-full p-1 mt-0.5">
                      <Check className="w-4 h-4 text-ejobs-orange" />
                    </div>
                    <p>50% risk sharing (₹1L deposit instead of ₹2L)</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-white rounded-full p-1 mt-0.5">
                      <Check className="w-4 h-4 text-ejobs-orange" />
                    </div>
                    <p>Marketing & branding support from HQ</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-white rounded-full p-1 mt-0.5">
                      <Check className="w-4 h-4 text-ejobs-orange" />
                    </div>
                    <p>Dedicated success manager for 6 months</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-white rounded-full p-1 mt-0.5">
                      <Check className="w-4 h-4 text-ejobs-orange" />
                    </div>
                    <p>Free access to CRM + hiring leads</p>
                  </div>
                </div>
                
                <p className="text-sm font-medium">
                  Act fast — Offer valid till May 20, 2025 ⏳
                </p>
              </div>
              
              <div className="md:w-1/3 flex justify-center">
                <Button
                  onClick={scrollToContact}
                  className="bg-white text-ejobs-orange hover:bg-white/90 text-lg px-8 py-6 font-bold group"
                >
                  Apply for Franchise Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LimitedOffer;
