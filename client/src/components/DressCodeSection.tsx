const DressCodeSection = () => {
  const dressCodeColors = [
    { name: 'Deep Burgundy', color: '#8B2635', hex: '#8B2635' },
    { name: 'Navy Blue', color: '#1B365D', hex: '#1B365D' },
    { name: 'Emerald Green', color: '#2D5A27', hex: '#2D5A27' },
    { name: 'Plum Purple', color: '#5D3754', hex: '#5D3754' },
    { name: 'Dusty Rose', color: '#B76E79', hex: '#B76E79' },
    { name: 'Sage Green', color: '#7A918D', hex: '#7A918D' },
    { name: 'Terracotta', color: '#A0522D', hex: '#A0522D' },
    { name: 'Slate Gray', color: '#4A5568', hex: '#4A5568' }
  ];

  return (
    <section id="dresscode" className="py-20 px-4 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 border border-[#4e403b] rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 border border-[#4e403b] rounded-full"></div>
      </div>
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-1/4 w-8 h-8 border-2 border-[#4e403b]/30 rounded-full"></div>
          <div className="absolute top-4 right-1/4 w-4 h-4 bg-[#4e403b]/20 rounded-full"></div>
          <div className="absolute bottom-0 left-1/3 w-6 h-6 border border-[#4e403b]/40 rounded-full"></div>
          <div className="absolute bottom-2 right-1/3 w-3 h-3 bg-[#4e403b]/30 rounded-full"></div>

          <h2 className="font-script italic text-primary mb-8 text-[48px]" data-testid="text-dresscode-title">
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
                  className="w-32 h-32 mx-auto object-contain mb-4"
                />
                <h3 className="text-2xl font-display font-semibold text-primary">
                  Gentlemen
                </h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-center p-4 bg-gradient-to-r from-gray-900 to-black rounded-lg">
                  <span className="text-white font-semibold">Black Suit and Pants</span>
                </div>

                <div className="text-center text-muted-foreground">
                  <p className="leading-relaxed">
                    Classic black formal attire with dress shirt, tie, and formal shoes. 
                    Please ensure a sophisticated and polished appearance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Ladies */}
          <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-card border border-border rounded-2xl p-8 shadow-soft hover-elegant h-full">
              <div className="text-center mb-6">
                <img 
                  src="https://res.cloudinary.com/dbiboclqa/image/upload/v1754645048/526212972_2848419708685550_5421439481788505964_n_PhotoGrid-removebg-preview_dqcnk3.png"
                  alt="Women's formal attire"
                  className="w-32 h-32 mx-auto object-contain mb-4"
                />
                <h3 className="text-2xl font-display font-semibold text-primary">
                  Ladies
                </h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-center p-4 bg-gradient-to-r from-[#4e403b] to-[#8B7355] rounded-lg">
                  <span className="text-white font-semibold">Long gown in elegant shades</span>
                </div>

                <div className="text-center text-muted-foreground">
                  <p className="leading-relaxed mb-4">Floor-length formal gowns in the color palette below.</p>
                  <img 
                    src="https://res.cloudinary.com/dbiboclqa/image/upload/v1755013804/519428760_24552310207783945_1683405038722244104_n_vhbnij.jpg"
                    alt="Color palette for ladies gowns"
                    className="w-full max-w-sm mx-auto rounded-lg"
                  />
                </div>
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
              <span>Avoid wearing white, ivory, or cream, as these colors are reserved for the bride.</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-[#4e403b] mt-1">•</span>
              <span>For this formal event, cocktail dresses and short gowns are not suitable.</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-[#4e403b] mt-1">•</span>
              <span>Kindly ensure your attire is respectful and appropriate for a religious ceremony.</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-[#4e403b] mt-1">•</span>
              <span>Wear comfortable formal shoes so you can dance all night!</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DressCodeSection;