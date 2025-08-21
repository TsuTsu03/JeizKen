import dresscode from "./assets/dresscode.jpeg";

const DressCodeSection = () => {
  const dressCodeColors = [
    { name: "Deep Burgundy", color: "#8B2635", hex: "#8B2635" },
    { name: "Navy Blue", color: "#1B365D", hex: "#1B365D" },
    { name: "Emerald Green", color: "#2D5A27", hex: "#2D5A27" },
    { name: "Plum Purple", color: "#5D3754", hex: "#5D3754" },
    { name: "Dusty Rose", color: "#B76E79", hex: "#B76E79" },
    { name: "Sage Green", color: "#7A918D", hex: "#7A918D" },
    { name: "Terracotta", color: "#A0522D", hex: "#A0522D" },
    { name: "Slate Gray", color: "#4A5568", hex: "#4A5568" }
  ];

  return (
    <section
      id="dresscode"
      className="rounded-lg py-20 shadow-2xl  px-4 bg-background relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5"></div>
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          {/* Decorative Elements */}

          <h2
            className="font-script italic text-primary mb-8 text-[48px]"
            data-testid="text-dresscode-title"
          >
            Attire Guide
          </h2>
          <div className="bg-[#4e403b]/10 border border-[#4e403b]/20 rounded-xl p-4 max-w-sm mx-auto relative">
            <p className="text-lg font-display font-bold text-primary mb-1">
              STRICTLY FORMAL
            </p>
            <p className="text-sm text-muted-foreground">
              Elegance is the only beauty that never fades
            </p>
          </div>
        </div>

        {/* Dress Code Requirements */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Gentlemen */}
          <div className="animate-fade-up">
            <div className="bg-card border border-border rounded-2xl p-8 shadow-soft hover-elegant h-full">
              <div className="text-center mb-6">
                <img
                  src="https://res.cloudinary.com/dbiboclqa/image/upload/v1755013747/532239154_1301329915030095_1205667868082236687_n-removebg-preview_srt9sk.png"
                  alt="Men's formal attire"
                  className="w-96 h-96 mx-auto object-contain mb-6"
                />
                <h3 className="text-2xl font-display font-semibold text-primary mb-6">
                  Gentlemen
                </h3>

                <div className="bg-[#2c3e50] text-white rounded-lg py-4 px-6 shadow-lg mb-4">
                  <p className="text-lg font-medium">Black Suit and Pants</p>
                </div>
              </div>

              <div className="text-center text-muted-foreground">
                <p className="leading-relaxed text-lg">
                  Classic black formal attire with dress shirt, tie, and formal
                  shoes.
                </p>
              </div>
            </div>
          </div>

          {/* Ladies */}
          <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="bg-card border border-border rounded-2xl p-8 shadow-soft hover-elegant h-full">
              <div className="text-center mb-6">
                <img
                  src="https://res.cloudinary.com/dbiboclqa/image/upload/v1754645048/526212972_2848419708685550_5421439481788505964_n_PhotoGrid-removebg-preview_dqcnk3.png"
                  alt="Women's formal attire"
                  className="w-96 h-96 mx-auto object-contain mb-6"
                />
                <h3 className="text-2xl font-display font-semibold text-primary mb-6">
                  Ladies
                </h3>

                <div className="bg-[#8B7355] text-white rounded-lg py-4 px-6 shadow-lg mb-4">
                  <p className="text-lg font-medium">
                    Long gown in elegant shades
                  </p>
                </div>
              </div>

              <div className="text-center text-muted-foreground">
                <p className="leading-relaxed text-lg mb-6">
                  Floor-length formal gowns in the color palette below.
                </p>
                <img
                  src={dresscode}
                  alt="Color palette for ladies gowns"
                  className="w-full max-w-sm mx-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Additional Guidelines */}
        <div className="bg-gradient-elegant border border-border rounded-2xl p-8 shadow-soft max-w-3xl mx-auto">
          <h3 className="text-lg font-display font-semibold text-primary mb-4 text-center">
            Additional Guidelines
          </h3>
          <div className="space-y-3 text-muted-foreground">
            <p className="flex items-start gap-2">
              <span className="text-[#4e403b] mt-1">•</span>
              <span>
                Avoid wearing white, ivory, or cream, as these colors are
                reserved for the bride.
              </span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-[#4e403b] mt-1">•</span>
              <span>
                For this formal event, cocktail dresses and short gowns are not
                suitable.
              </span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-[#4e403b] mt-1">•</span>
              <span>
                Kindly ensure your attire is respectful and appropriate for a
                religious ceremony.
              </span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-[#4e403b] mt-1">•</span>
              <span>
                Wear comfortable formal shoes so you can dance all night!
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DressCodeSection;
