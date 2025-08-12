import { useState, useEffect, useRef } from 'react';

const SlideshowSection = () => {
  const images = [
    'https://res.cloudinary.com/dbiboclqa/image/upload/v1754660578/6_10000_pwmazb.jpg',
    'https://res.cloudinary.com/dbiboclqa/image/upload/v1754640359/2_tziqai.jpg',
    'https://res.cloudinary.com/dbiboclqa/image/upload/v1754640358/1_fwf9zy.jpg',
    'https://res.cloudinary.com/dbiboclqa/image/upload/v1754640357/9_xguxpu.jpg',
    'https://res.cloudinary.com/dbiboclqa/image/upload/v1754640357/10_f4nulp.jpg',
    'https://res.cloudinary.com/dbiboclqa/image/upload/v1754640356/3_x1dwvd.jpg',
    'https://res.cloudinary.com/dbiboclqa/image/upload/v1754660578/8_10000_kaycv3.jpg',
    'https://res.cloudinary.com/dbiboclqa/image/upload/v1754660578/4_bpmerb.jpg'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('slideshow');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isVisible, images.length]);

  return (
    <section id="slideshow" className="relative py-16 lg:py-24 bg-white overflow-hidden">
      {/* Background Slideshow - Clean, No Filters */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={`bg-${index}`}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt=""
              className="w-full h-full object-cover"
              style={{ display: 'block', width: '100%', height: 'auto' }}
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Combined Content: Slideshow + Invitation */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-4 max-w-7xl mx-auto">
        
        {/* Left Column: Slideshow */}
        <div className="relative w-full">
          {images.map((image, index) => (
            <div
              key={index}
              className={`transition-opacity duration-500 ${
                index === currentIndex ? 'opacity-100' : 'opacity-0 absolute inset-0'
              }`}
            >
              <img
                src={image}
                alt={`Kenneth and Jeizl moments ${index + 1}`}
                className="w-full h-auto object-cover rounded-lg shadow-lg"
                style={{
                  display: 'block',
                  width: '100%',
                  height: 'auto'
                }}
                loading={index === 0 ? 'eager' : 'lazy'}
                data-testid={`img-slideshow-${index + 1}`}
              />
            </div>
          ))}
          
          {/* Progress indicators for slideshow */}
          <div className="flex justify-center space-x-2 pt-4">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-[#4e403b] w-8'
                    : 'bg-[#4e403b]/30 hover:bg-[#4e403b]/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Right Column: Invitation Content */}
        <div className="bg-white p-8 lg:p-12 rounded-lg shadow-soft text-center space-y-8">
          {/* Names */}
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-script italic text-primary leading-tight" data-testid="text-couple-names">
              Jeizl <span className="text-primary/70">&</span> Kenneth
            </h1>
          </div>

          {/* Main Invitation Text */}
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-display text-primary leading-tight tracking-wider" data-testid="text-invitation-title">
              WE ARE FINALLY<br />
              SAYING "<em className="font-script italic">I DO</em>"
            </h2>
            
            {/* Date, Time, Location */}
            <div className="space-y-3">
              <p className="text-xl lg:text-2xl font-script italic text-primary" data-testid="text-wedding-date-detail">
                October 8, 2025 | 2:15 PM
              </p>
              <p className="text-lg lg:text-xl font-script italic text-primary/80" data-testid="text-wedding-location">
                Tagaytay Highlands
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-base font-body text-foreground/85 leading-relaxed" data-testid="text-invitation-question">
                Will you accept this invitation?
              </p>
              <p className="text-sm font-body text-foreground/70" data-testid="text-invitation-deadline">
                Please respond on or before
              </p>
            </div>

            {/* RSVP Date */}
            <div className="py-4">
              <h3 className="text-2xl lg:text-3xl font-display font-light text-primary tracking-widest" data-testid="text-wedding-date">
                August 22, 2025
              </h3>
            </div>

            {/* Navigation Arrow to RSVP */}
            <div className="pt-4">
              <a 
                href="#rsvp" 
                className="inline-flex items-center justify-center text-primary hover:text-primary/80 transition-colors duration-300"
                data-testid="link-navigate-rsvp"
              >
                <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SlideshowSection;