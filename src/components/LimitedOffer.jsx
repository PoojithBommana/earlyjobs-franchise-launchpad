import React, { useState } from 'react';
import { AlarmClock, Check, ArrowRight } from 'lucide-react';
import emailjs from '@emailjs/browser';
import './LimitedOffer.css';

// Initialize EmailJS with your Public Key
emailjs.init('VoeCM-uzRgidt1O24');

const LimitedOffer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // State for form data
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    city: '',
    investmentCapacity: '',
    experience: '',
    timeline: '',
    referralCode: '',
    questions: '',
    agreeToCommunications: false,
  });

  // State for form errors
  const [errors, setErrors] = useState({});

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle opening the modal
  const handleSignUpClick = () => {
    setIsModalOpen(true);
    scrollToContact();
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
    if (!formData.investmentCapacity) newErrors.investmentCapacity = 'Investment Capacity is required';
    if (!formData.timeline) newErrors.timeline = 'Expected Timeline to Start is required';
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

    const emailParams = {
      fullName: formData.fullName,
      email: formData.email,
      mobile: formData.mobile,
      city: formData.city,
      investmentCapacity: formData.investmentCapacity,
      experience: formData.experience || 'N/A',
      timeline: formData.timeline,
      referralCode: formData.referralCode || 'N/A',
      questions: formData.questions || 'N/A',
      agreeToCommunications: formData.agreeToCommunications ? 'Yes' : 'No',
    };

    emailjs.send('service_efdv99v', 'template_1uy4szi', emailParams)
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        alert('Application submitted successfully!');
        setIsModalOpen(false);
        setFormData({
          fullName: '',
          email: '',
          mobile: '',
          city: '',
          investmentCapacity: '',
          experience: '',
          timeline: '',
          referralCode: '',
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
      <section className="limited-offer">
        <div className="container">
          <div className="offer-container">
            <div className="light-overlay"></div>
            
            <div className="offer-content">
              <div className="offer-layout">
                <div className="offer-info">
                  <div className="offer-header">
                    <AlarmClock className="w-6 h-6" />
                    <h3 className="offer-title">Launch Offer for Franchise India Expo Visitors 🎉</h3>
                  </div>
                  
                  <p className="offer-subtitle">Only for first 10 sign-ups:</p>
                  
                  <div className="benefits-list">
                    <div className="benefit-item">
                      <div className="check-icon-container">
                        <Check className="check-icon" />
                      </div>
                      <p>50% risk sharing (₹1L deposit instead of ₹2L)</p>
                    </div>
                    
                    <div className="benefit-item">
                      <div className="check-icon-container">
                        <Check className="check-icon" />
                      </div>
                      <p>Marketing & branding support from HQ</p>
                    </div>
                    
                    <div className="benefit-item">
                      <div className="check-icon-container">
                        <Check className="check-icon" />
                      </div>
                      <p>Dedicated success manager for 6 months</p>
                    </div>
                    
                    <div className="benefit-item">
                      <div className="check-icon-container">
                        <Check className="check-icon" />
                      </div>
                      <p>Free access to CRM + hiring leads</p>
                    </div>
                  </div>
                  
                  <p className="offer-deadline">
                    Act fast — Offer valid till May 20, 2025 ⏳
                  </p>
                </div>
                
                <div className="offer-cta">
                  <button
                    onClick={handleSignUpClick}
                    className="offer-button"
                  >
                    Apply now 
                    <ArrowRight className="arrow-icon" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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

              {/* Investment Capacity */}
              <div className="form-group">
                <label className="form-label">
                  Investment Capacity <span className="required">*</span>
                </label>
                <select
                  name="investmentCapacity"
                  value={formData.investmentCapacity}
                  onChange={handleInputChange}
                  className="form-select"
                >
                  <option value="">-- Select --</option>
                  <option value="Under $50,000">Under $50,000</option>
                  <option value="$50,000 - $100,000">$50,000 - $100,000</option>
                  <option value="$100,000 - $250,000">$100,000 - $250,000</option>
                  <option value="Over $250,000">Over $250,000</option>
                </select>
                {errors.investmentCapacity && (
                  <p className="form-error">{errors.investmentCapacity}</p>
                )}
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

              {/* Referral Code */}
              <div className="form-group">
                <label className="form-label">
                  Referral Code (If Any)
                </label>
                <input
                  type="text"
                  name="referralCode"
                  value={formData.referralCode}
                  onChange={handleInputChange}
                  className="form-input"
                />
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

export default LimitedOffer;