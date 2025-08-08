import { useState, useEffect } from 'react';

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
    <section id="slideshow" className="relative pt-16 min-h-screen bg-background">
      {/* Section Header */}
      <div className="text-center py-12 px-4">
        <h2 className="text-section-title font-display text-primary mb-4 gold-underline inline-block">
          Our Moments
        </h2>
        <div className="w-24 h-0.5 bg-gold mx-auto mt-4"></div>
      </div>

      {/* Slideshow Container */}
      <div className="relative w-full h-[70vh] overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Our moments ${index + 1}`}
              className="w-full h-full object-contain object-top"
              style={{
                margin: 0,
                padding: 0,
                lineHeight: 0,
                display: 'block'
              }}
              loading={index === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}
        
        {/* Elegant overlay for smooth transitions */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent pointer-events-none"></div>
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
    </section>
  );
};

export default SlideshowSection;