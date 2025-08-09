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
          <div className="w-20 h-0.5 bg-gold mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Story Text */}
          <div className="space-y-6">
            <div className="max-w-none">
              <p className="text-lg text-foreground/85 leading-relaxed mb-8 font-body" data-testid="text-story-intro">
                From the moment Kenneth and Jeizl first crossed paths, their connection was as striking as it was inevitable—two souls drawn together by shared dreams and endless laughter.
              </p>
              
              <p className="text-lg text-foreground/85 leading-relaxed mb-8 font-body" data-testid="text-story-details">
                Kenneth, with his gentle heart and unwavering determination, carried the wisdom of someone who understood that true love lies in the balance of patience and passion. Jeizl, whose radiant smile could light up any room, saw the world through eyes full of wonder and hope.
              </p>
              
              <p className="text-lg text-foreground/85 leading-relaxed mb-8 font-body" data-testid="text-story-courtship">
                Their courtship unfolded like a beautiful dance—each moment a deliberate step in a journey they were creating together. Kenneth would surprise Jeizl with handwritten notes and thoughtful gestures, his love expressed through actions as much as words.
              </p>
              
              <p className="text-lg text-foreground/85 leading-relaxed mb-8 font-body" data-testid="text-story-proposal">
                The proposal was a testament to their shared love of simple, meaningful moments. On a quiet evening filled with their favorite memories, Kenneth knew it was time to ask the most important question of his life.
              </p>
              
              <p className="text-xl text-foreground/90 leading-relaxed italic font-script mb-8" data-testid="text-story-quote">
                "You've made every day brighter," he told her, "will you make forever even more beautiful?"
              </p>
              
              <p className="text-lg text-foreground/85 leading-relaxed font-body" data-testid="text-story-conclusion">
                Now, as they prepare to promise forever to each other, their love story comes full circle—from that first meeting to this perfect beginning of their new chapter together.
              </p>
            </div>
          </div>

          {/* Polaroid Images */}
          <div className="flex flex-col items-center space-y-6">
            {storyImages.map((image, index) => (
              <div
                key={index}
                className="relative animate-fade-scale"
                style={{ animationDelay: `${index * 0.2}s` }}
                data-testid={`img-story-${index + 1}`}
              >
                <div className="bg-white p-3 shadow-lg max-w-xs mx-auto">
                  <img
                    src={image}
                    alt={`Kenneth and Jeizl story moment ${index + 1}`}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                  <div className="mt-2 text-center">
                    <p className="text-xs font-body text-primary/60">
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