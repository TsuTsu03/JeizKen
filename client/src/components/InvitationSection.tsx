import { Button } from '@/components/ui/button';

import { Calendar, Clock, MapPin } from 'lucide-react';

const InvitationSection = () => {
  return (
    <section 
      id="invitation" 
      className="min-h-screen flex items-center justify-center py-20 px-4 relative overflow-hidden" 
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="relative z-10 max-w-2xl mx-auto text-center space-y-12">
        {/* Names */}
        <div className="space-y-6 mb-12">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-display text-white leading-tight tracking-wider" style={{ fontFamily: '"Times New Roman", serif', fontWeight: 400, letterSpacing: '0.2em' }} data-testid="text-kenneth">
            KENNETH
          </h1>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-display text-white leading-tight tracking-wider" style={{ fontFamily: '"Times New Roman", serif', fontWeight: 400, letterSpacing: '0.2em' }} data-testid="text-jeizl">
            JEIZL
          </h1>
        </div>

        {/* Date and Location in a card */}
        <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-8 mx-4 shadow-2xl">
          <div className="text-center space-y-4">
            <p className="text-2xl md:text-3xl text-white" style={{ fontFamily: '"Times New Roman", serif' }} data-testid="text-wedding-date-detail">
              October 8, 2025
            </p>
            <p className="text-xl md:text-2xl text-white" style={{ fontFamily: '"Times New Roman", serif' }} data-testid="text-wedding-location">
              Tagaytay Highlands
            </p>
          </div>
        </div>

        {/* Open Invitation Button */}
        <div className="pt-8">
          <Button
            onClick={() => {
              // Scroll to next section or perform action
              const nextSection = document.querySelector('#slideshow');
              if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-[#8B7355] hover:bg-[#8B7355]/90 text-white font-display font-medium px-12 py-4 text-lg rounded-lg shadow-lg border-0 transition-all duration-300"
            data-testid="button-open-invitation-section"
          >
            Open Invitation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InvitationSection;