const StorySection = () => {
  const storyImages = [
    'https://res.cloudinary.com/dbiboclqa/image/upload/v1754640362/5_crwbn2.jpg',
    'https://res.cloudinary.com/dbiboclqa/image/upload/v1754640361/12_vumzd6.jpg',
    'https://res.cloudinary.com/dbiboclqa/image/upload/v1754640357/11_inzcqn.jpg'
  ];

  return (
    <section id="story" className="py-20 px-4 bg-gradient-elegant">
      <div className="max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16 relative">
        {/* Decorative Elements */}
        
        <h2 className="text-section-title font-display text-primary mb-6 gold-underline inline-block">
          Our Love Story
        </h2>
        <div className="w-32 h-0.5 bg-gold mx-auto"></div>
      </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Story Text */}
          <div className="space-y-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-elegant-body text-foreground/90 leading-relaxed mb-6">
                From the moment Serena Bianca Lacson and Julian Matteo Santiago first crossed paths at a minimalist art exhibition in Manila, their connection was as striking as it was inevitable—two souls drawn together by an appreciation for purity, craftsmanship, and the quiet poetry of intention.
              </p>
              
              <p className="text-elegant-body text-foreground/90 leading-relaxed mb-6">
                Serena, with her delicate hands that shaped porcelain into ethereal forms, carried the patience of an artist who understood that true beauty lies in the balance of fragility and strength. Julian, whose architectural designs redefined spaces with crystalline clarity, saw the world in lines and light, his creativity bound by precision yet softened by an unwavering belief in elegance.
              </p>
              
              <p className="text-elegant-body text-foreground/90 leading-relaxed mb-6">
                Their courtship unfolded like a carefully curated gallery—each moment a deliberate stroke in a masterpiece they were creating together. Julian would leave handwritten notes tucked inside Serena's ceramic glaze jars, his words as measured as the blueprints he drafted by day.
              </p>
              
              <p className="text-elegant-body text-foreground/90 leading-relaxed mb-6">
                The proposal was a testament to their shared aesthetic—a deception of beautiful simplicity. On an ordinary evening in Julian's glass-walled studio, he presented Serena with a bowl of pearl-white paint, insisting she dip her hands in for a 'texture experiment.' As her fingers brushed the bottom, they closed around a ring box hidden beneath the liquid opalescence.
              </p>
              
              <p className="text-elegant-body text-foreground/90 leading-relaxed italic">
                'You've always turned my world white,' he told her, kneeling on the polished concrete floor, 'will you make it permanent?'
              </p>
              
              <p className="text-elegant-body text-foreground/90 leading-relaxed">
                Now, as they prepare to vow forever under the alabaster arch of The Ivory Chapel, their love story comes full circle—from the first exhibition where their eyes met across a white-on-white sculpture, to the painstakingly curated white palette of their wedding day.
              </p>
            </div>
          </div>

          {/* Polaroid Images */}
          <div className="relative">
            <div className="space-y-8">
              {storyImages.map((image, index) => (
                <div
                  key={index}
                  className={`relative transform rotate-${index % 2 === 0 ? '2' : '-2'} hover:rotate-0 transition-transform duration-500 hover-elegant animate-fade-scale`}
                  style={{ 
                    animationDelay: `${index * 0.3}s`,
                    marginLeft: index % 2 === 0 ? '0' : '2rem'
                  }}
                >
                  <div className="bg-white p-4 shadow-elegant rounded-lg max-w-sm">
                    <img
                      src={image}
                      alt={`Our story moment ${index + 1}`}
                      className="w-full h-64 object-cover rounded"
                      loading="lazy"
                    />
                    <div className="mt-3 text-center">
                      <p className="text-sm font-handwriting text-primary/70">
                        {index === 0 && "Where it all began..."}
                        {index === 1 && "Creating memories together"}
                        {index === 2 && "Forever starts here"}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Decorative Elements */}
            {/* Removed decorative circular elements as requested */}
            {/* <div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-gold rounded-full opacity-30 animate-float"></div> */}
            {/* <div className="absolute bottom-1/4 -left-6 w-4 h-4 bg-gold/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;