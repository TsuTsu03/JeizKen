const StorySection = () => {
  const storyImages = [
    'https://res.cloudinary.com/dbiboclqa/image/upload/v1754640362/5_crwbn2.jpg',
    'https://res.cloudinary.com/dbiboclqa/image/upload/v1754640361/12_vumzd6.jpg',
    'https://res.cloudinary.com/dbiboclqa/image/upload/v1754640357/11_inzcqn.jpg'
  ];

  return (
    <section id="story" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-section-title font-display text-primary mb-6">
            Our Love Story
          </h2>
          <div className="w-20 h-0.5 mx-auto bg-[#2c2421]"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Enhanced Story Text */}
          <div className="space-y-8">
            <div className="max-w-none relative">
              {/* Decorative elements */}
              <div className="absolute -left-4 top-0 w-1 h-20 bg-gradient-to-b from-gold to-gold/30"></div>
              
              <div className="bg-card/30 border-l-4 border-gold/40 pl-8 pr-6 py-6 rounded-r-lg mb-8">
                <p className="text-lg text-foreground/85 leading-relaxed font-body" data-testid="text-story-intro">
                  From the moment Kenneth and Jeizl first crossed paths, their connection was as striking as it was inevitable—two souls drawn together by shared dreams and endless laughter.
                </p>
              </div>
              
              <div className="bg-card/20 border-l-4 border-gold/30 pl-8 pr-6 py-6 rounded-r-lg mb-8">
                <p className="text-lg text-foreground/85 leading-relaxed font-body" data-testid="text-story-details">
                  Kenneth, with his gentle heart and unwavering determination, carried the wisdom of someone who understood that true love lies in the balance of patience and passion. Jeizl, whose radiant smile could light up any room, saw the world through eyes full of wonder and hope.
                </p>
              </div>
              
              <div className="bg-card/30 border-l-4 border-gold/40 pl-8 pr-6 py-6 rounded-r-lg mb-8">
                <p className="text-lg text-foreground/85 leading-relaxed font-body" data-testid="text-story-courtship">
                  Their courtship unfolded like a beautiful dance—each moment a deliberate step in a journey they were creating together. Kenneth would surprise Jeizl with handwritten notes and thoughtful gestures, his love expressed through actions as much as words.
                </p>
              </div>
              
              <div className="bg-card/20 border-l-4 border-gold/30 pl-8 pr-6 py-6 rounded-r-lg mb-8">
                <p className="text-lg text-foreground/85 leading-relaxed font-body" data-testid="text-story-proposal">
                  The proposal was a testament to their shared love of simple, meaningful moments. On a quiet evening filled with their favorite memories, Kenneth knew it was time to ask the most important question of his life.
                </p>
              </div>
              
              <div className="bg-gold/10 border-l-4 border-gold pl-8 pr-6 py-8 rounded-r-lg mb-8 relative">
                <div className="absolute -left-2 top-4 w-4 h-4 bg-gold rounded-full"></div>
                <p className="text-xl text-foreground/90 leading-relaxed italic font-script" data-testid="text-story-quote">
                  "You've made every day brighter," he told her, "will you make forever even more beautiful?"
                </p>
              </div>
              
              <div className="bg-card/30 border-l-4 border-gold/40 pl-8 pr-6 py-6 rounded-r-lg">
                <p className="text-lg text-foreground/85 leading-relaxed font-body" data-testid="text-story-conclusion">
                  Now, as they prepare to promise forever to each other, their love story comes full circle—from that first meeting to this perfect beginning of their new chapter together.
                </p>
              </div>
            </div>
          </div>

          {/* Enhanced Polaroid Images */}
          <div className="flex flex-col items-center space-y-8">
            {storyImages.map((image, index) => (
              <div
                key={index}
                className={`relative animate-fade-scale transform ${
                  index % 2 === 0 ? 'rotate-1' : '-rotate-1'
                } hover:rotate-0 transition-all duration-300`}
                style={{ 
                  animationDelay: `${index * 0.2}s`,
                  marginLeft: index % 2 === 0 ? '0' : '1rem',
                  marginRight: index % 2 === 0 ? '1rem' : '0'
                }}
                data-testid={`img-story-${index + 1}`}
              >
                <div className="bg-white p-4 shadow-xl border border-gray-100 max-w-sm mx-auto relative">
                  {/* Decorative corner elements */}
                  <div className="absolute -top-1 -left-1 w-3 h-3 border-l-2 border-t-2 border-gold/30"></div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 border-r-2 border-t-2 border-gold/30"></div>
                  <div className="absolute -bottom-1 -left-1 w-3 h-3 border-l-2 border-b-2 border-gold/30"></div>
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 border-r-2 border-b-2 border-gold/30"></div>
                  
                  <img
                    src={image}
                    alt={`Kenneth and Jeizl story moment ${index + 1}`}
                    className="w-full h-52 object-cover border border-gray-50"
                    loading="lazy"
                  />
                  <div className="mt-3 text-center bg-white">
                    <p className="text-sm font-script italic text-primary/70 tracking-wide">
                      {index === 0 && "Where it all began..."}
                      {index === 1 && "Creating memories together"}
                      {index === 2 && "Forever starts here"}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;