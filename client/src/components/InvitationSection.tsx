import { Button } from '@/components/ui/button';

const InvitationSection = () => {
  return (
    <section id="invitation" className="py-12 px-4 bg-background">
      <div className="max-w-2xl mx-auto text-center space-y-12">
        {/* Main Invitation Text */}
        <div className="space-y-8">
          <h1 className="text-4xl md:text-5xl font-display text-primary leading-tight tracking-wider" data-testid="text-invitation-title">
            WE ARE FINALLY<br />
            SAYING "<em className="font-script italic">I DO</em>"
          </h1>
          
          <div className="space-y-6 max-w-lg mx-auto">
            <p className="text-lg font-body text-foreground/85 leading-relaxed" data-testid="text-invitation-message">
              Your presence would make our wedding day even more special!
            </p>
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
          <h2 className="text-3xl md:text-4xl font-display font-light text-primary tracking-widest" data-testid="text-wedding-date">
            OCT 8, 2025
          </h2>
        </div>

        {/* RSVP Button */}
        <div className="py-4">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white font-body font-medium px-16 py-4 text-lg tracking-wider rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            data-testid="button-rsvp-invitation"
          >
            <a 
              href="https://kennethJeizlrsvp.replit.app" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              RSVP
            </a>
          </Button>
        </div>

        {/* Forever Starts Soon */}
        <div className="pt-12 pb-8">
          <h3 className="text-2xl md:text-3xl font-script italic text-primary/80 mb-8" data-testid="text-forever-starts">
            forever starts soon
          </h3>
        </div>

        {/* Important Notice */}
        <div className="bg-card/30 border border-primary/10 rounded-lg p-6 max-w-lg mx-auto">
          <div className="text-center space-y-3">
            <p className="font-medium text-primary text-sm" data-testid="text-invitation-only">
              This event is strictly by invitation only.
            </p>
            <p className="text-foreground/70 text-xs leading-relaxed" data-testid="text-rsvp-note">
              Kindly RSVP on or before <span className="font-semibold text-primary">August 20, 2025</span> to ensure we can accommodate you on our special day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvitationSection;