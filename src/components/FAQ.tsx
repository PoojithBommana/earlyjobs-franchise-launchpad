
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Do I need HR experience?",
      answer: "No, prior HR experience is not required. We provide comprehensive training on recruitment, operations, and sales processes. Our step-by-step training program covers everything you need to know to run a successful EarlyJobs franchise."
    },
    {
      question: "How much can I earn?",
      answer: "Franchise earnings vary based on location and performance but typically range between ₹3-6.5 lakhs per month after 6-9 months of operation. This includes commissions from placements (70% fixed hire, 50% CTC-based), candidate assessments (70%), and new company onboarding bonuses (5%)."
    },
    {
      question: "What is the franchise fee?",
      answer: "The standard franchise deposit is ₹2 lakhs. However, under our current limited-time offer, we're offering a 50% risk-sharing model with a reduced deposit of just ₹1 lakh for the first 10 sign-ups."
    },
    {
      question: "Do I need an office?",
      answer: "A physical office space of 200-400 sq ft is preferred for Tier 1 cities to establish a professional brand presence. In Tier 2/3 cities, you can start with a home office setup and scale as your business grows."
    },
    {
      question: "What support is provided?",
      answer: "We provide comprehensive support including: technology platform access (CRM, ATS), quality job leads, extensive training modules, marketing materials and campaigns, a nationwide community of franchise owners, and dedicated success managers to help you grow."
    }
  ];

  return (
    <section id="faq" className="section bg-white">
      <div className="container">
        <h2 className="section-heading text-center">Frequently Asked Questions</h2>
        
        <div className="mt-12 max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 hover:no-underline data-[state=open]:bg-gray-50 group">
                  <span className="text-left font-medium text-lg group-hover:text-ejobs-orange">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-ejobs-black-light">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
