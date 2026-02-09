import React, { useState, useEffect } from "react";
import "./Hero.css";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import SecondaryButton from "../../components/SecondaryButton/SecondaryButton";
import SaunaImg1 from "../../assets/sauna1.png"

const slides = [
  {
    title: "Premium Electric Saunas",
    subtitle: "Experience the warmth of Nordic design in your home",
    description: "Handcrafted with sustainable materials, featuring smart temperature control and energy efficiency.",
    image: SaunaImg1,
    icon: <i className="fas fa-fire"></i>,
    layout: "center",
    theme: "dark",
    contentBg: "gradient", 
  },
  {
    title: "Wood-Burning Saunas",
    subtitle: "Eco-friendly and cozy, perfect for a true sauna experience",
    description: "Traditional craftsmanship meets modern luxury. Experience authentic löyly with our premium wood-burning systems.",
    image: "/images/sauna2.jpg",
    icon: <i className="fas fa-tree"></i>,
    layout: "right",
    theme: "light",
    contentBg: "glass",
  },
  {
    title: "Outdoor Sauna Retreats",
    subtitle: "Relax in style surrounded by nature",
    description: "Transform your backyard into a personal wellness sanctuary with our weather-resistant designs.",
    image: "/images/sauna3.jpg",
    icon: <i className="fas fa-mountain"></i>,
    layout: "left",
    theme: "dark",
    contentBg: "solid",
  },
];

function Hero() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsTransitioning(false), 1000);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 1000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [isTransitioning]);

  const goToSlide = (index) => {
    if (isTransitioning || index === current) return;
    setIsTransitioning(true);
    setCurrent(index);
    setTimeout(() => setIsTransitioning(false), 1000);
  };

  return (
    <section className="hero">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero-slide ${slide.layout} ${slide.theme} ${slide.contentBg} ${
            index === current ? "active" : index < current ? "prev" : "next"
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          {/* Full screen dark overlay */}
          <div className="slide-overlay"></div>
          
          {/* Subtle texture overlay */}
          <div className="slide-texture"></div>
          
          {/* Content area dark overlay */}
          <div className="content-overlay"></div>
          
          {/* Decorative corner accents */}
          <div className="corner-accent top-left"></div>
          <div className="corner-accent top-right"></div>
          <div className="corner-accent bottom-left"></div>
          <div className="corner-accent bottom-right"></div>
          
          <div className="slide-content-wrapper">
            {/* Background for content area */}
            <div className="content-background"></div>
            
            <div className="slide-content">
              {/* Icon Badge */}
              <div className="icon-badge">
                {slide.icon}
              </div>
              
              {/* Animated underline */}
              <div className="title-container">
                <h1 className="slide-title">{slide.title}</h1>
                <div className="title-underline"></div>
              </div>
              
              <h2 className="slide-subtitle">{slide.subtitle}</h2>
              
              {/* Description with fade-in */}
              <p className="slide-description">{slide.description}</p>
              
              {/* Feature tags */}
              <div className="slide-features">
                <span className="feature-tag">Sustainable</span>
                <span className="feature-tag">Premium Materials</span>
                <span className="feature-tag">5-Year Warranty</span>
              </div>
              
              <div className="slide-buttons">
                <PrimaryButton 
                  text="Shop Now" 
                  icon={slide.icon} 
                  iconSide="right"
                />
                <SecondaryButton 
                  text="View Details" 
                  icon={<i className="fas fa-arrow-right"></i>} 
                  variant={slide.theme === "light" ? "default" : "light"}
                />
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button 
        className="slide-nav prev-nav" 
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <i className="fas fa-chevron-left"></i>
      </button>
      <button 
        className="slide-nav next-nav" 
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <i className="fas fa-chevron-right"></i>
      </button>

      {/* Progress indicator */}
      <div className="slide-progress">
        {slides.map((_, idx) => (
          <div 
            key={idx}
            className="progress-bar"
            onClick={() => goToSlide(idx)}
          >
            <div 
              className={`progress-fill ${idx === current ? "active" : ""} ${
                idx < current ? "completed" : ""
              }`}
            />
          </div>
        ))}
      </div>

      {/* Slide counter */}
      <div className="slide-counter">
        <span className="current-slide">0{current + 1}</span>
        <span className="divider">/</span>
        <span className="total-slides">0{slides.length}</span>
      </div>
    </section>
  );
}

export default Hero;