
import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      {/* Orange diagonal shape in background */}
      <div className="hero-shape"></div>
      
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <h1 className="hero-title">
              Build Your Own <span>Recruitment Business</span> with EarlyJobs 🚀
            </h1>
            
            <p className="hero-description">
              Join India's fastest-growing HRTech platform and launch a high-ROI franchise in your city
            </p>
            
            <div className="hero-cta">
              <button 
                onClick={scrollToContact}
                className="btn-primary"
              >
                Start Your Franchise Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
            
            <div className="hero-social">
              <p className="social-label">AS SEEN IN</p>
              <div className="social-logos">
                <img src="https://via.placeholder.com/120x40?text=BusinessStandard" alt="Business Standard" className="social-logo" />
                <img src="https://via.placeholder.com/120x40?text=FranchiseIndia" alt="Franchise India" className="social-logo" />
                <img src="https://via.placeholder.com/120x40?text=YourStory" alt="YourStory" className="social-logo" />
              </div>
              
              <p className="trusted-label">TRUSTED BY</p>
              <div className="trusted-logos">
                <img src="https://via.placeholder.com/80x25?text=Flipkart" alt="Flipkart" className="trusted-logo" />
                <span className="logo-divider">|</span>
                <img src="https://via.placeholder.com/80x25?text=StarHealth" alt="Star Health" className="trusted-logo" />
                <span className="logo-divider">|</span>
                <img src="https://via.placeholder.com/80x25?text=Frankfinn" alt="Frankfinn" className="trusted-logo" />
                <span className="logo-divider">|</span>
                <img src="https://via.placeholder.com/80x25?text=HDFC" alt="HDFC" className="trusted-logo" />
              </div>
            </div>
          </div>
          
          <div className="hero-image-container">
            <div className="image-overlay"></div>
            <img 
              src="https://via.placeholder.com/600x400?text=Franchisee+Success" 
              alt="Franchisee Success" 
              className="hero-image" 
            />
            <div className="image-caption">
              <div className="video-badge">
                <div className="video-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 12.5a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 1 0v7a.5.5 0 0 1-.5.5Z"/>
                    <path d="M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5Z"/>
                  </svg>
                </div>
                <span className="video-label">Watch Success Story</span>
              </div>
              <h3 className="video-title">How Shalini built a ₹7L/month franchise in Pune</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
