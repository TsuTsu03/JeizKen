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
      <div className="text-center py-8 px-4">
        <h2 className="text-section-title font-display text-primary mb-4">Timeless Frames</h2>
        <div className="w-20 h-0.5 bg-gold mx-auto"></div>
      </div>
      {/* Clean Slideshow Container */}
      <div className="relative w-full max-w-4xl mx-auto bg-background">
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
              className="w-full h-auto object-cover rounded-lg shadow-sm border border-gray-100"
              style={{
                maxHeight: '500px',
                objectPosition: 'center'
              }}
              loading={index === 0 ? 'eager' : 'lazy'}
              data-testid={`img-slideshow-${index + 1}`}
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
