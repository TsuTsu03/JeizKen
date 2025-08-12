import { Button } from '@/components/ui/button';

import { Calendar, Clock, MapPin } from 'lucide-react';

const InvitationSection = () => {
  return (
    <section id="invitation" className="py-20 px-4" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-2xl mx-auto text-center space-y-12">
        {/* Names */}
        <div className="space-y-4 mb-12">
          <h1 className="text-6xl md:text-7xl font-script italic text-primary leading-tight" data-testid="text-couple-names">
            Jeizl <span className="text-primary/70">&</span> Kenneth
          </h1>
        </div>

        {/* Main Invitation Text */}
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-display text-primary leading-tight tracking-wider" data-testid="text-invitation-title">
            WE ARE FINALLY<br />
            SAYING "<em className="font-script italic">I DO</em>"
          </h2>
          
          {/* Date, Time, Location */}
          <div className="space-y-4 max-w-lg mx-auto mb-8">
            <div className="text-center space-y-2">
              <p className="text-2xl md:text-3xl font-script italic text-primary" data-testid="text-wedding-date-detail">
                October 8, 2025 | 2:15 PM
              </p>
              <p className="text-xl md:text-2xl font-script italic text-primary/80" data-testid="text-wedding-location">
                Tagaytay Highlands
              </p>
            </div>
          </div>



          </div>

        
      </div>
    </section>
  );
};

export default InvitationSection;