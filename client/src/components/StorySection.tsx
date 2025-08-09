const StorySection = () => {
  const storyImages = [
    'https://res.cloudinary.com/dbiboclqa/image/upload/v1754640362/5_crwbn2.jpg',
    'https://res.cloudinary.com/dbiboclqa/image/upload/v1754640361/12_vumzd6.jpg',
    'https://res.cloudinary.com/dbiboclqa/image/upload/v1754640357/11_inzcqn.jpg'
  ];

  return (
    <section id="story" className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-script italic text-primary mb-8" data-testid="text-story-title">
            Our Love Story
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Enhanced Story Text */}
          <div className="space-y-8">
            <div className="max-w-none relative">
              {/* Decorative elements */}
              <div className="absolute -left-4 top-0 w-1 h-20 bg-gradient-to-b from-[#4e403b] to-[#4e403b]/30"></div>

              <div className="bg-card/30 border-l-4 border-[#4e403b]/40 pl-8 pr-6 py-6 rounded-r-lg mb-8">
                <p className="text-lg text-foreground/85 leading-relaxed font-body" data-testid="text-story-intro">
                  From the moment Kenneth and Jeizl first crossed paths, their connection was as striking as it was inevitable—two souls drawn together by shared dreams and endless laughter.
                </p>
              </div>

              <div className="bg-card/20 border-l-4 border-[#4e403b]/30 pl-8 pr-6 py-6 rounded-r-lg mb-8">
                <p className="text-lg text-foreground/85 leading-relaxed font-body" data-testid="text-story-details">
                  Kenneth, with his gentle heart and unwavering determination, carried the wisdom of someone who understood that true love lies in the balance of patience and passion. Jeizl, whose radiant smile could light up any room, saw the world through eyes full of wonder and hope.
                </p>
              </div>

              <div className="bg-card/30 border-l-4 border-[#4e403b]/40 pl-8 pr-6 py-6 rounded-r-lg mb-8">
                <p className="text-lg text-foreground/85 leading-relaxed font-body" data-testid="text-story-courtship">
                  Their courtship unfolded like a beautiful dance—each moment a deliberate step in a journey they were creating together. Kenneth would surprise Jeizl with handwritten notes and thoughtful gestures, his love expressed through actions as much as words.
                </p>
              </div>

              <div className="bg-card/20 border-l-4 border-[#4e403b]/30 pl-8 pr-6 py-6 rounded-r-lg mb-8">
                <p className="text-lg text-foreground/85 leading-relaxed font-body" data-testid="text-story-proposal">
                  The proposal was a testament to their shared love of simple, meaningful moments. On a quiet evening filled with their favorite memories, Kenneth knew it was time to ask the most important question of his life.
                </p>
              </div>

              <div className="bg-[#4e403b]/10 border-l-4 border-[#4e403b] pl-8 pr-6 py-8 rounded-r-lg mb-8 relative">
                <div className="absolute -left-2 top-4 w-4 h-4 bg-[#4e403b] rounded-full"></div>
                <p className="text-xl text-foreground/90 leading-relaxed italic font-script" data-testid="text-story-quote">
                  "You've made every day brighter," he told her, "will you make forever even more beautiful?"
                </p>
              </div>

              <div className="bg-card/30 border-l-4 border-[#4e403b]/40 pl-8 pr-6 py-6 rounded-r-lg">
                <p className="text-lg text-foreground/85 leading-relaxed font-body" data-testid="text-story-conclusion">
                  Now, as they prepare to promise forever to each other, their love story comes full circle—from that first meeting to this perfect beginning of their new chapter together.
                </p>
              </div>
            </div>
          </div>

          {/* Artistic Photo Collage */}
          <div className="relative h-[600px] w-full max-w-4xl mx-auto">
            {/* Background Image - Large */}
            <div className="absolute top-8 left-8 w-64 h-80 animate-fade-scale" style={{ animationDelay: '0.2s' }}>
              <img
                src={storyImages[0]}
                alt="Kenneth and Jeizl story moment 1"
                className="w-full h-full object-cover rounded-lg shadow-lg"
                loading="lazy"
                data-testid="img-story-collage-1"
              />
            </div>

            {/* Top Right Image - Medium */}
            <div className="absolute top-4 right-12 w-48 h-32 animate-fade-scale" style={{ animationDelay: '0.4s' }}>
              <img
                src={storyImages[1]}
                alt="Kenneth and Jeizl story moment 2"
                className="w-full h-full object-cover rounded-lg shadow-lg"
                loading="lazy"
                data-testid="img-story-collage-2"
              />
            </div>

            {/* Central Text */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10 bg-background/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <h3 className="text-3xl md:text-4xl font-script italic text-primary mb-2" data-testid="text-story-quote-main">
                I choose you
              </h3>
              <h3 className="text-4xl md:text-5xl font-display font-light text-primary mb-2 tracking-wide" data-testid="text-story-quote-forever">
                FOREVER
              </h3>
              <h3 className="text-2xl md:text-3xl font-script italic text-primary/80" data-testid="text-story-quote-always">
                and always
              </h3>
            </div>

            {/* Bottom Left Image - Medium */}
            <div className="absolute bottom-8 left-4 w-56 h-40 animate-fade-scale" style={{ animationDelay: '0.6s' }}>
              <img
                src={storyImages[2]}
                alt="Kenneth and Jeizl story moment 3"
                className="w-full h-full object-cover rounded-lg shadow-lg"
                loading="lazy"
                data-testid="img-story-collage-3"
              />
            </div>

            {/* Bottom Right Image - Small accent */}
            <div className="absolute bottom-12 right-8 w-40 h-28 animate-fade-scale" style={{ animationDelay: '0.8s' }}>
              <img
                src={storyImages[0]}
                alt="Kenneth and Jeizl story accent"
                className="w-full h-full object-cover rounded-lg shadow-md opacity-80 grayscale"
                loading="lazy"
                data-testid="img-story-collage-accent"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;