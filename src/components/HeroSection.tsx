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
          <h1 className="text-hero text-white font-display font-bold mb-6 tracking-wider">
            Kenneth
            <span className="block text-gold font-light italic">&</span>
            Jeizl
          </h1>
        </div>
        
        <div className="animate-fade-up opacity-0 [animation-delay:0.6s]">
          <p className="text-subtitle text-white/90 mb-12 max-w-md mx-auto font-light tracking-wide">
            Together with their families, request the honor of your presence
          </p>
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