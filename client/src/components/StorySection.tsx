import missingpiece1 from "@/components/assets/missingpiece/missingpiece1.jpg";
import missingpiece2 from "@/components/assets/missingpiece/missingpiece2.jpg";
import missingpiece3 from "@/components/assets/missingpiece/missingpiece3.jpg"; // typo? "mssingpiece3.jpg"
import missingpiece4 from "@/components/assets/missingpiece/missingpiece4.jpg";
import missingpiece5 from "@/components/assets/missingpiece/missingpiece5.jpg";

const StorySection = () => {
  const storyImages = [
    missingpiece4,
    missingpiece2,
    missingpiece1,
    missingpiece5,
    missingpiece3
  ];

  return (
    <section
      id="story"
      className="rounded-lg py-8 shadow-2xl px-4 bg-background"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2
            className="text-5xl font-script italic text-primary"
            data-testid="text-story-title"
          >
            Our Story
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Enhanced Story Text */}
          <div className="space-y-8">
            <div className="max-w-none relative">
              {/* Decorative elements */}
              <div className="absolute -left-4 top-0 w-1 h-20 bg-gradient-to-b from-[#4e403b] to-[#4e403b]/30"></div>

              <div className="bg-card/30 border-l-4 border-[#4e403b]/40 pl-8 pr-6 py-6 rounded-r-lg mb-8">
                <p
                  className="text-lg text-foreground/85 leading-relaxed font-body"
                  data-testid="text-story-intro"
                >
                  It was after class in 2013 that their paths crossed for the
                  very first time. In the fading light of the university parking
                  lot, Kenneth and Jeizl were introduced with a simple exchange
                  of names and smiles. Moments later, they were in a shared ride
                  home with friends — Kenneth at the wheel, Jeizl in the back
                  seat… neither of them knew that this random encounter would be
                  the first page of their love story.
                </p>
              </div>

              <div className="bg-card/20 border-l-4 border-[#4e403b]/30 pl-8 pr-6 py-6 rounded-r-lg mb-8">
                <p
                  className="text-lg text-foreground/85 leading-relaxed font-body"
                  data-testid="text-story-details"
                >
                  Kenneth spent the year that followed finding little ways to
                  make Jeizl smile: a thoughtful message here, a shared meal
                  there, and countless moments that made her feel truly seen.{" "}
                  <em>It wasn't rushed; it was steady, patient, and real.</em>
                </p>
              </div>

              <div className="bg-card/30 border-l-4 border-[#4e403b]/40 pl-8 pr-6 py-6 rounded-r-lg mb-8">
                <p
                  className="text-lg text-foreground/85 leading-relaxed font-body"
                  data-testid="text-story-courtship"
                >
                  For more than a decade, they became each other's safe place —
                  growing side by side through every season of life, celebrating
                  wins, holding on through challenges, and building a{" "}
                  <em>love that feels like home.</em>
                </p>
              </div>

              <div className="bg-card/20 border-l-4 border-[#4e403b]/30 pl-8 pr-6 py-6 rounded-r-lg mb-8">
                <p
                  className="text-lg text-foreground/85 leading-relaxed font-body"
                  data-testid="text-story-proposal"
                >
                  In 2024, surrounded by the people who matter most, Kenneth
                  finally asked the question his heart had been holding for so
                  long. With her "yes" they stepped into the next chapter — a
                  lifetime of love, laughter, and the promise of forever.
                </p>
              </div>
            </div>
          </div>

          {/* Artistic Photo Collage */}
          <div className="relative h-[600px] w-full max-w-4xl mx-auto">
            {/* Background Image - Large */}
            <div
              className="absolute top-8 left-8 w-64 h-80 animate-fade-scale"
              style={{ animationDelay: "0.2s" }}
            >
              <img
                src={storyImages[0]}
                alt="Kenneth and Jeizl story moment 1"
                className="w-full h-full object-cover rounded-lg shadow-lg"
                loading="lazy"
                data-testid="img-story-collage-1"
              />
            </div>

            {/* Top Right Image - Medium */}
            <div
              className="absolute top-4 right-12 w-48 h-32 animate-fade-scale"
              style={{ animationDelay: "0.4s" }}
            >
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
              <h3
                className="text-4xl md:text-5xl font-script italic text-primary"
                data-testid="text-story-quote-main"
              >
                DY Missing Piece
              </h3>
            </div>

            {/* Bottom Left Image - Medium */}
            <div
              className="absolute bottom-8 left-4 w-56 h-40 animate-fade-scale"
              style={{ animationDelay: "0.6s" }}
            >
              <img
                src={storyImages[2]}
                alt="Kenneth and Jeizl story moment 3"
                className="w-full h-full object-cover rounded-lg shadow-lg"
                loading="lazy"
                data-testid="img-story-collage-3"
              />
            </div>

            {/* Bottom Right Image - Small accent */}
            <div
              className="absolute bottom-12 right-8 w-40 h-28 animate-fade-scale"
              style={{ animationDelay: "0.8s" }}
            >
              <img
                src={storyImages[3]}
                alt="Kenneth and Jeizl story accent"
                className="w-full h-full object-cover rounded-lg shadow-md opacity-80 grayscale"
                loading="lazy"
                data-testid="img-story-collage-accent"
              />
            </div>

            {/* Additional Image */}
            <div
              className="absolute top-1/4 right-4 w-36 h-24 animate-fade-scale"
              style={{ animationDelay: "1s" }}
            >
              <img
                src={storyImages[4]}
                alt="Kenneth and Jeizl story moment"
                className="w-full h-full object-cover rounded-lg shadow-md"
                loading="lazy"
                data-testid="img-story-collage-additional"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
