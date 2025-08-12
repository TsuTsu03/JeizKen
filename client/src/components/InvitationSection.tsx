import { Button } from '@/components/ui/button';

import { Calendar, Clock, MapPin } from 'lucide-react';

const InvitationSection = () => {
  return (
    <section id="invitation" className="py-20 px-4 bg-background">
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



          <div className="space-y-6 max-w-lg mx-auto">
            <p className="text-lg font-body text-foreground/85 leading-relaxed" data-testid="text-invitation-question">
              Will you accept this invitation?
            </p>
            <p className="text-base font-body text-foreground/70" data-testid="text-invitation-deadline">
              Please respond on or before
            </p>
          </div>
        </div>

        {/* Wedding Date */}
        <div className="py-8">
          <h2 className="text-3xl md:text-4xl font-display font-light text-primary tracking-widest" data-testid="text-wedding-date">August 22, 2025</h2>
        </div>

        {/* Navigation Arrow to RSVP */}
        <div className="py-4">
          <a 
            href="#rsvp" 
            className="inline-flex items-center justify-center text-primary hover:text-primary/80 transition-colors duration-300"
            data-testid="link-navigate-rsvp"
          >
            <svg className="w-8 h-8 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default InvitationSection;