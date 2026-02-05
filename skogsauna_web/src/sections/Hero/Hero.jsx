import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const slides = [
    {
      id: 1,
      title: "Nordic Excellence",
      subtitle: "Premium Sauna Experience",
      description: "Handcrafted in Finland with century-old traditions and modern innovation",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      ctaText: "Explore Collection",
      features: ["Cedar & Hemlock", "Smart Controls", "5-Year Warranty"]
    },
    {
      id: 2,
      title: "Wellness Redefined",
      subtitle: "Infrared Technology",
      description: "Experience deep therapeutic heat with our advanced infrared sauna systems",
      image: "https://images.unsplash.com/photo-1600165283539-9225c0b6cbf3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      ctaText: "Discover Technology",
      features: ["Full Spectrum IR", "Chromo Therapy", "Air Purification"]
    },
    {
      id: 3,
      title: "Custom Luxury",
      subtitle: "Tailored to Your Space",
      description: "Design your dream sauna with our custom configuration and premium materials",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      ctaText: "Design Your Sauna",
      features: ["Custom Sizes", "Premium Woods", "Accessory Packages"]
    },
    {
      id: 4,
      title: "Sustainable Design",
      subtitle: "Eco-Conscious Manufacturing",
      description: "Crafted from sustainably sourced materials with energy-efficient heating",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      ctaText: "Learn About Sustainability",
      features: ["FSC Certified", "Low Energy", "Natural Materials"]
    }
  ];

  // Autoplay functionality
  useEffect(() => {
    let interval;
    if (autoplay) {
      interval = setInterval(() => {
        setActiveSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoplay, slides.length]);

  const goToSlide = (index) => {
    setActiveSlide(index);
    setAutoplay(false);
    setTimeout(() => setAutoplay(true), 8000);
  };

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
    setAutoplay(false);
    setTimeout(() => setAutoplay(true), 8000);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setAutoplay(false);
    setTimeout(() => setAutoplay(true), 8000);
  };

  return (
    <section className="hero">
      {/* Carousel Container */}
      <div className="carousel-container">
        {slides.map((slide, index) => (
          <div 
            key={slide.id}
            className={`slide ${index === activeSlide ? 'active' : ''} ${index < activeSlide ? 'prev' : 'next'}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="slide-overlay"></div>
            
            {/* Slide Content */}
            <div className="slide-content">
              <div className="content-wrapper">
                {/* Badge */}
                <div className="slide-badge">
                  <span className="badge-text">Premium Series</span>
                  <div className="badge-divider"></div>
                  <span className="badge-number">{String(index + 1).padStart(2, '0')}</span>
                </div>
                
                {/* Title & Subtitle */}
                <div className="title-group">
                  <h2 className="slide-subtitle">{slide.subtitle}</h2>
                  <h1 className="slide-title">{slide.title}</h1>
                </div>
                
                {/* Description */}
                <p className="slide-description">{slide.description}</p>
                
                {/* Features */}
                <div className="features-list">
                  {slide.features.map((feature, i) => (
                    <div key={i} className="feature-item">
                      <svg className="feature-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M13 5L6.5 11.5L3 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* CTA Buttons */}
                <div className="cta-group">
                  <button className="primary-cta">
                    <span>{slide.ctaText}</span>
                    <svg className="cta-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M4 10H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      <path d="M10 4V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </button>
                  <button className="secondary-cta">
                    <svg className="play-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M12.5 8L6.5 4L6.5 12L12.5 8Z" fill="currentColor"/>
                    </svg>
                    <span>Watch Video</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Navigation Controls */}
        <div className="carousel-controls">
          <button className="control-btn prev-btn" onClick={prevSlide} aria-label="Previous slide">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <button className="control-btn next-btn" onClick={nextSlide} aria-label="Next slide">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        
        {/* Indicators */}
        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === activeSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            >
              <div className="indicator-progress"></div>
            </button>
          ))}
        </div>
        
        {/* Slide Counter */}
        <div className="slide-counter">
          <span className="current-slide">{String(activeSlide + 1).padStart(2, '0')}</span>
          <span className="counter-divider">/</span>
          <span className="total-slides">{String(slides.length).padStart(2, '0')}</span>
        </div>
        
        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <span className="scroll-text">Scroll</span>
          <div className="scroll-line">
            <div className="scroll-dot"></div>
          </div>
        </div>
      </div>
      
      {/* Quick Info Bar */}
      <div className="info-bar">
        <div className="info-container">
          <div className="info-item">
            <div className="info-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="info-content">
              <h3 className="info-title">8-12 Weeks</h3>
              <p className="info-desc">Production Time</p>
            </div>
          </div>
          
          <div className="info-divider"></div>
          
          <div className="info-item">
            <div className="info-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            </div>
            <div className="info-content">
              <h3 className="info-title">10 Year</h3>
              <p className="info-desc">Warranty</p>
            </div>
          </div>
          
          <div className="info-divider"></div>
          
          <div className="info-item">
            <div className="info-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M12 18V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M4.93 4.93L7.76 7.76" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M16.24 16.24L19.07 19.07" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M2 12H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M18 12H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M4.93 19.07L7.76 16.24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M16.24 7.76L19.07 4.93" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="info-content">
              <h3 className="info-title">Global</h3>
              <p className="info-desc">Shipping</p>
            </div>
          </div>
          
          <div className="info-divider"></div>
          
          <div className="info-item">
            <div className="info-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M2 12H5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M19 12H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M12 2V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M12 19V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M4.93 4.93L7.05 7.05" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M16.95 16.95L19.07 19.07" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M4.93 19.07L7.05 16.95" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M16.95 7.05L19.07 4.93" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="info-content">
              <h3 className="info-title">Free</h3>
              <p className="info-desc">Design Consultation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;