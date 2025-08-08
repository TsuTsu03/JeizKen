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
          <p className="text-lg sm:text-xl text-white/90 mb-4 font-light tracking-wide">
            We're Saying "I Do"
          </p>
          <div className="space-y-1 mb-12">
            <p className="text-base sm:text-lg text-white/80 font-light">
              October 8, 2025 at 2:00 PM
            </p>
            <p className="text-base sm:text-lg text-white/80 font-light">
              Tagaytay Highlands
            </p>
          </div>
        </div>

        <div className="animate-fade-scale opacity-0 [animation-delay:1s]">
          <Button
            onClick={onOpenInvitation}
            size="lg"
            className="bg-gold hover:bg-gold/90 text-primary font-semibold px-12 py-4 text-lg tracking-wide hover-elegant shadow-warm border-0 rounded-full"
          >
            Open Invitation
          </Button>
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