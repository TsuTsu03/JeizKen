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
    <section id="slideshow" className="relative h-screen w-full overflow-hidden">
      {/* Full Screen Slideshow */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={`fullscreen-${index}`}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Wedding photo ${index + 1}`}
              className="w-full h-full object-cover"
              style={{ display: 'block', width: '100%' }}
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Navigation Dots - Positioned at bottom */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-white w-8'
                  : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
              data-testid={`button-slide-${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SlideshowSection;