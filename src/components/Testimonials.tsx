
import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      quote: "I earned back my investment in 4 months. The EarlyJobs model works perfectly for someone without prior HR experience like me.",
      name: "Priya Sharma",
      location: "Delhi",
      avatar: "https://via.placeholder.com/100x100"
    },
    {
      quote: "EarlyJobs gave me the platform to start my own agency. The training and support has been exceptional throughout the journey.",
      name: "Rajat Verma",
      location: "Bangalore",
      avatar: "https://via.placeholder.com/100x100"
    },
    {
      quote: "I'm proud to support women in my city through hiring. Our franchise is now making ₹5L+ monthly after just 8 months.",
      name: "Shalini Patel",
      location: "Pune",
      avatar: "https://via.placeholder.com/100x100"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="section bg-white">
      <div className="container">
        <h2 className="section-heading text-center">Our Partners Are Growing Fast</h2>
        
        <div className="mt-12 relative">
          <div className="relative bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-ejobs-orange to-ejobs-orange-dark"></div>
            
            <div className="p-8 md:p-12">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className={`transition-opacity duration-300 ${
                    currentSlide === index ? 'block opacity-100' : 'hidden opacity-0'
                  }`}
                >
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/4 flex flex-col items-center">
                      <div className="rounded-full overflow-hidden w-24 h-24 mb-4 border-4 border-ejobs-orange">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="flex mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-ejobs-orange text-ejobs-orange" />
                        ))}
                      </div>
                    </div>
                    
                    <div className="md:w-3/4">
                      <blockquote className="text-xl md:text-2xl italic text-ejobs-black mb-6">
                        "{testimonial.quote}"
                      </blockquote>
                      
                      <div className="text-right">
                        <p className="font-bold text-lg">{testimonial.name}</p>
                        <p className="text-ejobs-black-light">Franchise Owner, {testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-between px-6 py-4 bg-gray-50 border-t">
              <button
                onClick={prevSlide}
                className="flex items-center text-ejobs-black hover:text-ejobs-orange transition-colors"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Previous
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      currentSlide === index ? 'bg-ejobs-orange' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextSlide}
                className="flex items-center text-ejobs-black hover:text-ejobs-orange transition-colors"
              >
                Next
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <button className="btn-outline">
              Watch Video Testimonials
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
