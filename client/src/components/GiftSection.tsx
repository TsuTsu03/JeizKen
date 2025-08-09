import { Heart, Gift, Home } from 'lucide-react';

const GiftSection = () => {
  return (
    <section className="py-20 px-4 bg-background relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-gold rounded-full animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-gold rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-3/4 left-3/4 w-24 h-24 border border-gold rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-section-title font-display text-primary mb-6 gold-underline inline-block">
            Wedding Gifts
          </h2>
          <div className="w-32 h-0.5 bg-gold mx-auto"></div>
        </div>

        {/* Main Gift Message */}
        <div className="animate-fade-up mb-12">
          <div className="bg-gradient-elegant border border-border rounded-2xl p-12 shadow-elegant">
            {/* Icon */}
            <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <Heart className="w-10 h-10 text-gold" />
            </div>

            {/* Main Message */}
            <div className="space-y-6">
              <p className="text-2xl font-display font-light text-primary leading-relaxed">
                Your love, laughter and presence on our wedding day is the greatest gift of all.
              </p>
              
              <p className="text-xl font-body text-muted-foreground leading-relaxed">
                We don't have a list of pots and pans, just hopes and dreams and honeymoon plans.
              </p>
              
              <p className="text-lg font-body text-foreground/80 leading-relaxed">
                If giving a gift is on your mind, then a contribution would be kind.
              </p>
            </div>

            {/* Decorative Elements */}
            <div className="mt-8 flex justify-center items-center space-x-4">
              <div className="w-12 h-px bg-[#4e403b]/30"></div>
              <div className="w-3 h-3 bg-[#4e403b] rounded-full animate-float"></div>
              <div className="w-12 h-px bg-[#4e403b]/30"></div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Monetary Gifts */}
          <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-card border border-border rounded-xl p-8 shadow-soft hover-elegant h-full">
              <div className="w-12 h-12 bg-[#4e403b]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="w-6 h-6 text-[#4e403b]" />
              </div>
              <h3 className="text-lg font-display font-semibold text-primary mb-4">
                Monetary Gifts
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Your generous contributions will help us build our future together and create lasting memories during our honeymoon adventures.
              </p>
            </div>
          </div>

          {/* Well Wishes */}
          <div className="animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="bg-card border border-border rounded-xl p-8 shadow-soft hover-elegant h-full">
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-lg font-display font-semibold text-primary mb-4">
                Heartfelt Wishes
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Your presence at our wedding is truly the most precious gift. Your blessings and well wishes mean the world to us.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Message */}
        <div className="animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 shadow-soft max-w-2xl mx-auto">
            <p className="text-foreground/80 font-body italic">
              "The best gifts are those that come from the heart. Your love and support as we begin this new chapter is all we could ever ask for."
            </p>
            <div className="mt-4 text-gold font-display text-lg">
              — Kenneth & Jeizl
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftSection;