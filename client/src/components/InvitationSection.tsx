import { Button } from '@/components/ui/button';

const InvitationSection = () => {
  return (
    <section id="invitation" className="py-16 px-4 bg-background">
      <div className="max-w-3xl mx-auto text-center">
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-section-title font-display text-primary mb-4">
            You Are Invited
          </h2>
          <div className="w-20 h-0.5 mx-auto bg-[#2c2421]"></div>
        </div>

        {/* Invitation Image */}
        <div className="mb-10 animate-fade-scale">
          <div className="relative inline-block rounded-xl overflow-hidden shadow-2xl max-w-xl w-full bg-white p-2">
            <img
              src="https://res.cloudinary.com/dbiboclqa/image/upload/v1754660736/av4249f_1_ufpqds.jpg"
              alt="Kenneth & Jeizl Wedding Invitation"
              className="w-full h-auto object-contain rounded-lg"
              loading="lazy"
              data-testid="img-invitation"
            />
          </div>
        </div>

        {/* Invitation Text */}
        <div className="mb-10 max-w-2xl mx-auto">
          <p className="text-lg text-foreground/80 leading-relaxed mb-8 font-body">
            We're so excited to take this next step in our journey and can't wait to celebrate our special day with the people we love most.
          </p>
          
          <div className="mb-8">
            <Button
              asChild
              size="lg"
              className="group relative px-12 py-4 text-lg font-body font-semibold tracking-wide bg-gradient-to-r from-gold to-yellow-500 hover:from-gold/90 hover:to-yellow-500/90 text-primary shadow-xl hover:shadow-gold/40 transition-all duration-300 border-0 rounded-full overflow-hidden"
              data-testid="button-rsvp"
            >
              <a 
                href="https://kennethJeizlrsvp.replit.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center w-full h-full"
              >
                <span className="relative">RSVP HERE</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform skew-x-12"></div>
              </a>
            </Button>
          </div>
        </div>

        {/* Important Notice */}
        <div className="bg-card/50 border border-gold/20 rounded-xl p-6 shadow-lg max-w-xl mx-auto">
          <div className="text-center space-y-3">
            <p className="font-semibold text-primary text-base" data-testid="text-invitation-only">
              This event is strictly by invitation only.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed" data-testid="text-rsvp-deadline">
              Kindly RSVP on or before <span className="font-semibold text-[#1a1c25]">August 20, 2025</span> to ensure we can accommodate you on our special day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvitationSection;