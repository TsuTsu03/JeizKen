import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  onOpenInvitation: () => void;
}

const HeroSection = ({ onOpenInvitation }: HeroSectionProps) => {
  return (
    <section 
      className="hero-section relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('https://res.cloudinary.com/dbiboclqa/image/upload/v1754639890/1ST_PAGE_x6bpxd.jpg')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundAttachment: 'scroll',
        minHeight: '100dvh'
      }}
    >
      {/* Overlay for better text readability - No black tint */}
      <div className="absolute inset-0"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Couple Names - Emphasized */}
        <div className="animate-fade-up opacity-0 [animation-delay:0.1s] mb-8">
          <h1 className="text-6xl md:text-8xl text-white font-script italic font-bold tracking-wider mb-2" data-testid="text-couple-names" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
            JEIZL and KENNETH
          </h1>
        </div>

        <div className="animate-fade-up opacity-0 [animation-delay:0.3s] mb-8">
          <h2 className="text-3xl md:text-4xl text-white font-display font-light mb-4 uppercase tracking-wide" data-testid="text-wedding-announcement">
            WE ARE FINALLY<br />SAYING "I DO"
          </h2>
        </div>

        <div className="animate-fade-up opacity-0 [animation-delay:0.6s]">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 mb-10 max-w-lg mx-auto shadow-2xl">
            <div className="space-y-3">
              <div className="text-center">
                <p className="text-lg sm:text-xl text-white/90 font-body font-light tracking-wide" data-testid="text-date">
                  October 8, 2025
                </p>
              </div>
              <div className="text-center">
                <p className="text-lg sm:text-xl text-white/90 font-body font-light tracking-wide" data-testid="text-venue">
                  Tagaytay Highlands
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="animate-fade-scale opacity-0 [animation-delay:1s]">
          <div className="relative group">
            <Button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log('HeroSection button clicked');
                onOpenInvitation();
              }}
              className="bg-gradient-to-r from-[#4e403b] to-[#8B7355] hover:from-[#4e403b]/90 hover:to-[#8B7355]/90 text-white font-display font-medium px-8 py-4 text-base shadow-2xl border-0 rounded-lg relative overflow-hidden transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-[#4e403b]/50 z-20"
              aria-label="Open Wedding Invitation"
              data-testid="button-open-invitation"
            >
              <span className="relative z-10 font-display font-medium">
                Open Invitation
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile responsiveness handled via CSS-in-JS */}
      <style>{`
        @media (min-width: 768px) {
          .hero-section {
            min-height: 160vh !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
