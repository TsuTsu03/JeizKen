const DressCodeSection = () => {
  const dressCodeColors = [
    { name: 'Warm Brown', color: '#895e4d', hex: '#895e4d' },
    { name: 'Medium Brown', color: '#8a5f4e', hex: '#8a5f4e' },
    { name: 'Soft Dusty Rose', color: '#c18a85', hex: '#c18a85' },
    { name: 'Light Rose Brown', color: '#c08984', hex: '#c08984' },
    { name: 'Warm Muted Pink', color: '#be8782', hex: '#be8782' },
    { name: 'Muted Rose', color: '#ba837e', hex: '#ba837e' },
    { name: 'Deep Brick Red', color: '#8c3b37', hex: '#8c3b37' },
    { name: 'Soft Blush Pink', color: '#bf8883', hex: '#bf8883' }
  ];

  return (
    <section id="dresscode" className="py-20 px-4 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 border border-gold rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 border border-gold rounded-full"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-section-title font-display text-primary mb-6 gold-underline inline-block">
            Dress Code
          </h2>
          <div className="w-32 h-0.5 bg-gold mx-auto mb-6"></div>
          <div className="bg-gold/10 border border-gold/20 rounded-2xl p-6 max-w-md mx-auto">
            <p className="text-2xl font-display font-bold text-primary mb-2">
              STRICTLY FORMAL
            </p>
            <p className="text-muted-foreground">
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
                  src="https://res.cloudinary.com/dbiboclqa/image/upload/v1754645003/download__6_-removebg-preview_er1f7i.png"
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
                <p className="text-center font-semibold text-gold text-lg">
                  Long gown in elegant shades
                </p>
                
                <div className="text-center text-muted-foreground">
                  <p className="leading-relaxed">
                    Floor-length formal gowns in the color palette below. 
                    Please choose sophisticated styles that complement the formal atmosphere.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Color Palette */}
        <div className="text-center mb-12">
          <h3 className="text-xl font-display font-semibold text-primary mb-8">
            Approved Color Palette for Ladies' Gowns
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {dressCodeColors.map((colorItem, index) => (
              <div
                key={index}
                className={`group cursor-pointer animate-fade-scale`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-card border border-border rounded-xl p-4 shadow-soft hover-elegant">
                  <div
                    className="w-full h-16 rounded-lg mb-3 border-2 border-white shadow-inner"
                    style={{ backgroundColor: colorItem.hex }}
                  ></div>
                  <p className="text-xs font-medium text-center text-foreground mb-1">
                    {colorItem.name}
                  </p>
                  <p className="text-xs text-center text-muted-foreground font-mono">
                    {colorItem.hex}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Guidelines */}
        <div className="bg-gradient-elegant border border-border rounded-2xl p-8 shadow-soft max-w-3xl mx-auto">
          <h3 className="text-lg font-display font-semibold text-primary mb-4 text-center">
            Additional Guidelines
          </h3>
          <div className="space-y-3 text-muted-foreground">
            <p className="flex items-start gap-2">
              <span className="text-gold mt-1">•</span>
              <span>Avoid white, ivory, or cream colors (reserved for the bride)</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-gold mt-1">•</span>
              <span>Cocktail dresses and short gowns are not appropriate for this formal event</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-gold mt-1">•</span>
              <span>Please ensure your attire is suitable for a religious ceremony</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-gold mt-1">•</span>
              <span>Comfortable formal shoes recommended for the outdoor reception venue</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DressCodeSection;