
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <nav className="container flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-ejobs-black">
            Early<span className="text-ejobs-orange">Jobs</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <button onClick={() => scrollToSection('whyFranchise')} className="text-ejobs-black hover:text-ejobs-orange transition-colors">Why Franchise</button>
          <button onClick={() => scrollToSection('earnings')} className="text-ejobs-black hover:text-ejobs-orange transition-colors">Earnings</button>
          <button onClick={() => scrollToSection('setup')} className="text-ejobs-black hover:text-ejobs-orange transition-colors">Setup</button>
          <button onClick={() => scrollToSection('testimonials')} className="text-ejobs-black hover:text-ejobs-orange transition-colors">Testimonials</button>
          <button onClick={() => scrollToSection('faq')} className="text-ejobs-black hover:text-ejobs-orange transition-colors">FAQs</button>
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-ejobs-orange hover:bg-ejobs-orange-dark text-white ml-4"
          >
            Apply Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-ejobs-black"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-lg py-4 animate-fade-in">
          <div className="container flex flex-col space-y-4">
            <button onClick={() => scrollToSection('whyFranchise')} className="text-ejobs-black hover:text-ejobs-orange transition-colors py-2">Why Franchise</button>
            <button onClick={() => scrollToSection('earnings')} className="text-ejobs-black hover:text-ejobs-orange transition-colors py-2">Earnings</button>
            <button onClick={() => scrollToSection('setup')} className="text-ejobs-black hover:text-ejobs-orange transition-colors py-2">Setup</button>
            <button onClick={() => scrollToSection('testimonials')} className="text-ejobs-black hover:text-ejobs-orange transition-colors py-2">Testimonials</button>
            <button onClick={() => scrollToSection('faq')} className="text-ejobs-black hover:text-ejobs-orange transition-colors py-2">FAQs</button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-ejobs-orange hover:bg-ejobs-orange-dark text-white w-full"
            >
              Apply Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
