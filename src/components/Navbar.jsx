import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import emailjs from '@emailjs/browser';
import './Navbar.css';

// Initialize EmailJS with your Public Key
emailjs.init('8dLYIF2DBa9KslCfr');

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // State for form data
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    city: '',
    experience: '',
    timeline: '',
    questions: '',
    agreeToCommunications: false,
  });

  // State for form errors
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Handle opening the modal
  const handleApplyNowClick = () => {
    setIsModalOpen(true);
    scrollToSection('contact');
    setIsMenuOpen(false);
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = 'Full Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.mobile) newErrors.mobile = 'Mobile Number is required';
    if (!formData.city) newErrors.city = 'Preferred City/Region is required';
    // if (!formData.investmentCapacity) newErrors.investmentCapacity = 'Investment Capacity is required';
    if (!formData.timeline) newErrors.timeline = 'Expected Timeline is required';
    if (!formData.agreeToCommunications) newErrors.agreeToCommunications = 'You must agree to receive communications';
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    // Prepare form data for EmailJS
    const emailParams = {
      fullName: formData.fullName,
      email: formData.email,
      mobile: formData.mobile,
      city: formData.city,
     
      experience: formData.experience || 'N/A',
      timeline: formData.timeline,
     
      questions: formData.questions || 'N/A',
      agreeToCommunications: formData.agreeToCommunications ? 'Yes' : 'No',
    };

    // Send email using EmailJS
    emailjs.send('service_mvcabrp', 'template_xwaj04n', emailParams)
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        alert('Application submitted successfully!');
        setIsModalOpen(false);
        setFormData({
          fullName: '',
          email: '',
          mobile: '',
          city: '',
         
          experience: '',
          timeline: '',
         
          questions: '',
          agreeToCommunications: false,
        });
        setErrors({});
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        alert('Failed to submit application. Please try again.');
      });
  };

  return (
    <>
      <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <nav className="navbar-container container">
          <div className="logo">
            <img src="/early-jobs-logo2.png" className="logo-pic" alt="Early Jobs Logo" />
          </div>

          {/* Desktop Menu */}
          <div className="desktop-menu">
            <button onClick={() => scrollToSection('whyFranchise')} className="nav-link">Why Franchise</button>
            <button onClick={() => scrollToSection('earnings')} className="nav-link">Earnings</button>
            <button onClick={() => scrollToSection('setup')} className="nav-link">Setup</button>
            {/* <button onClick={() => scrollToSection('testimonials')} className="nav-link">Testimonials</button> */}
            <button onClick={() => scrollToSection('faq')} className="nav-link">FAQs</button>
            <button 
              onClick={handleApplyNowClick}
              className="btn-primary"
            >
              Apply Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="mobile-menu animate-fade-in">
            <div className="mobile-menu-container container">
              <button onClick={() => scrollToSection('whyFranchise')} className="mobile-nav-link">Why Franchise</button>
              <button onClick={() => scrollToSection('earnings')} className="mobile-nav-link">Earnings</button>
              <button onClick={() => scrollToSection('setup')} className="mobile-nav-link">Setup</button>
              <button onClick={() => scrollToSection('testimonials')} className="mobile-nav-link">Testimonials</button>
              <button onClick={() => scrollToSection('faq')} className="mobile-nav-link">FAQs</button>
              <button 
                onClick={handleApplyNowClick}
                className="btn-primary"
              >
                Apply Now
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Modal for the Form */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button
              onClick={() => setIsModalOpen(false)}
              className="modal-close-button"
            >
              ✕
            </button>
            <h2 className="modal-title">Reserve Your Spot Now</h2>
            <form onSubmit={handleSubmit}>
              {/* Full Name */}
              <div className="form-group">
                <label className="form-label">
                  Full Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="form-input"
                />
                {errors.fullName && <p className="form-error">{errors.fullName}</p>}
              </div>

              {/* Email Address */}
              <div className="form-group">
                <label className="form-label">
                  Email Address <span className="required">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                />
                {errors.email && <p className="form-error">{errors.email}</p>}
              </div>

              {/* Mobile Number */}
              <div className="form-group">
                <label className="form-label">
                  Mobile Number <span className="required">*</span>
                </label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  className="form-input"
                />
                {errors.mobile && <p className="form-error">{errors.mobile}</p>}
              </div>

              {/* Preferred City/Region */}
              <div className="form-group">
                <label className="form-label">
                  Preferred City/Region <span className="required">*</span>
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="form-input"
                />
                {errors.city && <p className="form-error">{errors.city}</p>}
              </div>

             

              {/* Relevant Experience */}
              <div className="form-group">
                <label className="form-label">
                  Relevant Experience
                </label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="form-select"
                >
                  <option value="">-- Select --</option>
                  <option value="None">None</option>
                  <option value="1-3 Years">1-3 Years</option>
                  <option value="3-5 Years">3-5 Years</option>
                  <option value="5+ Years">5+ Years</option>
                </select>
              </div>

              {/* Expected Timeline to Start */}
              <div className="form-group">
                <label className="form-label">
                  Expected Timeline to Start <span className="required">*</span>
                </label>
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="form-select"
                >
                  <option value="">-- Select --</option>
                  <option value="Immediately">Immediately</option>
                  <option value="Within 3 Months">Within 3 Months</option>
                  <option value="3-6 Months">3-6 Months</option>
                  <option value="6+ Months">6+ Months</option>
                </select>
                {errors.timeline && <p className="form-error">{errors.timeline}</p>}
              </div>

             
            
              {/* Any Questions */}
              <div className="form-group">
                <label className="form-label">
                  Any Questions for Us?
                </label>
                <textarea
                  name="questions"
                  value={formData.questions}
                  onChange={handleInputChange}
                  className="form-textarea"
                  rows="3"
                />
              </div>

              {/* Agree to Communications */}
              <div className="form-group">
                <div className="form-checkbox-container">
                  <input
                    type="checkbox"
                    name="agreeToCommunications"
                    checked={formData.agreeToCommunications}
                    onChange={handleInputChange}
                    className="form-checkbox"
                  />
                  <label className="form-label">
                    I agree to receive communications from EarlyJobs
                  </label>
                </div>
                {errors.agreeToCommunications && (
                  <p className="form-error">{errors.agreeToCommunications}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="form-submit-container">
                <button
                  type="submit"
                  className="btn-primary"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;