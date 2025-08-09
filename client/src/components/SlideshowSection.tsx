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
    <section id="slideshow" className="relative bg-background">
      {/* Section Header */}
      <div className="text-center py-8 px-4 relative">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-1/4 w-8 h-8 border-2 border-gold/30 rounded-full"></div>
        <div className="absolute top-4 right-1/4 w-4 h-4 bg-gold/20 rounded-full"></div>
        <div className="absolute bottom-0 left-1/3 w-6 h-6 border border-gold/40 rounded-full"></div>
        <div className="absolute bottom-2 right-1/3 w-3 h-3 bg-gold/30 rounded-full"></div>
        
        <h2 className="text-section-title font-display text-primary mb-4 gold-underline inline-block">Timeless Frames</h2>
        <div className="w-24 h-0.5 bg-gold mx-auto mt-4"></div>
      </div>
      {/* Slideshow Container */}
      <div className="relative w-full overflow-hidden bg-background">
        {images.map((image, index) => (
          <div
            key={index}
            className={`transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0 absolute inset-0'
            }`}
          >
            <img
              src={image}
              alt={`Our moments ${index + 1}`}
              style={{
                display: 'block',
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
                objectPosition: 'top',
                margin: 0,
                padding: 0,
                lineHeight: 0
              }}
              loading={index === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}
      </div>
      {/* Progress indicators */}
      <div className="flex justify-center space-x-2 py-8">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-gold w-8' 
                : 'bg-muted hover:bg-gold/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      {/* Quote Section */}
      <div className="text-center py-12 px-4 bg-background">
        <div className="max-w-2xl mx-auto">
          <blockquote className="text-xl md:text-2xl font-script text-primary/90 italic leading-relaxed">
            "Love is not about finding the perfect person, but about seeing an imperfect person perfectly."
          </blockquote>
          <div className="flex justify-center mt-6">
            <div className="w-12 h-px bg-gold/60"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SlideshowSection;
