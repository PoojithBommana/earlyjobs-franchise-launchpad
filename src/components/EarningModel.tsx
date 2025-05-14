
import React from 'react';
import { Check } from 'lucide-react';

const EarningModel = () => {
  return (
    <section id="earnings" className="section bg-white">
      <div className="container">
        <h2 className="section-heading text-center">Real Earnings. Real Opportunity.</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-12">
          <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-ejobs-orange">
            <h3 className="text-2xl font-bold mb-6">You Earn When Hires Happen</h3>
            
            <div className="space-y-5">
              <div className="flex items-center justify-between pb-3 border-b">
                <div>
                  <p className="font-medium text-lg">Fixed Hiring (per hire)</p>
                  <p className="text-sm text-gray-600">Standard industry placement</p>
                </div>
                <span className="text-xl font-bold text-ejobs-orange">70% commission</span>
              </div>
              
              <div className="flex items-center justify-between pb-3 border-b">
                <div>
                  <p className="font-medium text-lg">% of CTC Hiring</p>
                  <p className="text-sm text-gray-600">Premium placement model</p>
                </div>
                <span className="text-xl font-bold text-ejobs-orange">50% commission</span>
              </div>
              
              <div className="flex items-center justify-between pb-3 border-b">
                <div>
                  <p className="font-medium text-lg">New Company Onboarding</p>
                  <p className="text-sm text-gray-600">For bringing new clients</p>
                </div>
                <span className="text-xl font-bold text-ejobs-orange">5% bonus</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-lg">Candidate Assessment</p>
                  <p className="text-sm text-gray-600">Pre-hiring testing</p>
                </div>
                <span className="text-xl font-bold text-ejobs-orange">70% (net)</span>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-ejobs-black p-8 rounded-lg text-white mb-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">Estimated Monthly Income</h3>
                <span className="text-3xl font-bold text-ejobs-orange">₹6–6.5 Lakhs</span>
              </div>
              
              <p className="text-sm text-gray-300 mb-6">Based on average franchise activity after 6 months</p>
              
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="bg-ejobs-orange rounded-full p-1 mr-3">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span>10-15 placements per month</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-ejobs-orange rounded-full p-1 mr-3">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span>20+ assessments conducted</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-ejobs-orange rounded-full p-1 mr-3">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span>5+ active client relationships</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-ejobs-orange to-ejobs-orange-dark p-6 rounded-lg text-white text-center">
              <h3 className="text-xl font-bold mb-2">Break-even in just 6–9 months ✅</h3>
              <p>Quick return on your franchise investment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarningModel;
