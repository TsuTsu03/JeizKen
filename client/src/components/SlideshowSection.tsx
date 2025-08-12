import { useState, useEffect, useRef } from 'react';

const SlideshowSection = () => {
  const images = [
    'https://res.cloudinary.com/dbiboclqa/image/upload/v1755012195/3S7A8479_1_r11vpj.jpg',
    'https://res.cloudinary.com/dbiboclqa/image/upload/v1755012195/3S7A8274_11_szffxb.jpg',
    'https://res.cloudinary.com/dbiboclqa/image/upload/v1755012195/3S7A7802_2_a2af0n.jpg',
    'https://res.cloudinary.com/dbiboclqa/image/upload/v1755012197/3S7A8218_1_yxuskq.jpg',
    'https://res.cloudinary.com/dbiboclqa/image/upload/v1755012197/3S7A82166_t10wrx.jpg',
    'https://res.cloudinary.com/dbiboclqa/image/upload/v1755012195/3S7A8516_1_fpwvf4.jpg',
    'https://res.cloudinary.com/dbiboclqa/image/upload/v1755012195/3S7A8502_1_bxghru.jpg',
    'https://res.cloudinary.com/dbiboclqa/image/upload/v1755012195/3S7A8498_1_mppjgn.jpg'
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
    <section id="slideshow" className="relative py-8 bg-background overflow-hidden">
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
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Main Slideshow Container - Compact Design */}
      <div className="relative z-10 flex items-center justify-center px-4">
        <div className="relative w-full max-w-md">
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
                  height: '300px',
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
                loading={index === 0 ? 'eager' : 'lazy'}
                data-testid={`img-slideshow-${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Progress indicators */}
      <div className="relative z-10 flex justify-center space-x-2 pt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-[#4e403b] w-8'
                : 'bg-white/70 hover:bg-[#4e403b]/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default SlideshowSection;