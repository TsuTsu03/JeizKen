import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  onOpenInvitation: () => void;
}

const HeroSection = ({ onOpenInvitation }: HeroSectionProps) => {
  return (
    <section 
      className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden"
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
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-up opacity-0 [animation-delay:0.2s]">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-display font-light mb-2 tracking-[0.2em] uppercase">
            Kenneth
          </h1>
          <div className="flex items-center justify-center mb-2">
            <div className="h-px bg-gold w-12"></div>
            <span className="text-2xl sm:text-3xl md:text-4xl text-gold font-light italic mx-4">&</span>
            <div className="h-px bg-gold w-12"></div>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-display font-light mb-8 tracking-[0.2em] uppercase">
            Jeizl
          </h1>
        </div>
        
        <div className="animate-fade-up opacity-0 [animation-delay:0.6s]">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 mb-8 max-w-md mx-auto">
            <p className="text-lg sm:text-xl text-white font-medium tracking-wide mb-3">
              We're Saying "I Do"
            </p>
            <div className="space-y-2">
              <div className="flex items-center justify-center space-x-2">
                <p className="text-base sm:text-lg text-white font-light">
                  October 8, 2025 at 2:00 PM
                </p>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <p className="text-base sm:text-lg text-white font-light">
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
              className="bg-gradient-to-r from-gold to-yellow-500 hover:from-gold/90 hover:to-yellow-500/90 text-primary font-semibold px-16 py-6 text-xl tracking-wide shadow-2xl border-0 rounded-full relative overflow-hidden transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-gold/50 z-20"
              aria-label="Open Wedding Invitation"
            >
              <span className="relative z-10">
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