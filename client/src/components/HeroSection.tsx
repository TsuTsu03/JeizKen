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
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="animate-fade-up opacity-0 [animation-delay:0.2s]">
          <h1 className="text-hero text-white font-display font-light mb-4 uppercase" data-testid="text-groom">
            Kenneth
          </h1>
          <div className="flex items-center justify-center mb-4">
            <div className="h-px bg-gold w-16 opacity-70"></div>
            <span className="text-hero-script text-gold font-script mx-6" data-testid="text-ampersand">&</span>
            <div className="h-px bg-gold w-16 opacity-70"></div>
          </div>
          <h1 className="text-hero text-white font-display font-light mb-8 uppercase" data-testid="text-bride">
            Jeizl
          </h1>
        </div>

        <div className="animate-fade-up opacity-0 [animation-delay:0.6s]">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 mb-10 max-w-lg mx-auto shadow-2xl">
            <p className="text-subtitle text-white font-script italic mb-6 text-center" data-testid="text-tagline">
              We're Saying "I Do"
            </p>
            <div className="space-y-3">
              <div className="text-center">
                <p className="text-lg sm:text-xl text-white/90 font-body font-light tracking-wide" data-testid="text-date">
                  October 8, 2025 at 2:00 PM
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
              size="lg"
              className="bg-gradient-to-r from-gold to-yellow-500 hover:from-gold/90 hover:to-yellow-500/90 text-primary font-body font-medium px-20 py-7 text-xl tracking-widest shadow-2xl border-0 rounded-full relative overflow-hidden transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-gold/50 z-20"
              aria-label="Open Wedding Invitation"
              data-testid="button-open-invitation"
            >
              <span className="relative z-10 font-body font-medium tracking-widest">
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
