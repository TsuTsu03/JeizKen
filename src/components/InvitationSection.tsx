import { Button } from '@/components/ui/button';

const InvitationSection = () => {
  return (
    <section id="invitation" className="py-20 px-4 bg-gradient-elegant">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-section-title font-display text-primary mb-6 gold-underline inline-block">
            You Are Invited
          </h2>
          <div className="w-32 h-0.5 bg-gold mx-auto"></div>
        </div>

        {/* Invitation Image */}
        <div className="mb-12 animate-fade-scale">
          <div className="relative inline-block rounded-lg overflow-hidden shadow-elegant max-w-2xl w-full">
            <img
              src="https://res.cloudinary.com/dbiboclqa/image/upload/v1754660736/av4249f_1_ufpqds.jpg"
              alt="Kenneth & Jeizl Wedding Invitation"
              className="w-full h-auto object-contain"
              loading="lazy"
            />
          </div>
        </div>

        {/* Invitation Text */}
        <div className="mb-12 max-w-3xl mx-auto">
          <p className="text-elegant-body text-foreground/80 leading-relaxed mb-8">
            We're so excited to take this next step in our journey and can't wait to celebrate our special day with the people we love most.
          </p>
          
          <div className="mb-8">
            <Button
              asChild
              size="lg"
              className="px-16 py-6 text-lg tracking-widest bg-gradient-to-r from-gold via-gold/90 to-gold hover:from-gold/90 hover:via-gold hover:to-gold/90 text-primary font-semibold rounded-full shadow-2xl hover:shadow-gold/30 hover:scale-105 transition-all duration-300 border-2 border-gold/20 backdrop-blur-sm"
            >
              <a 
                href="https://kennethJeizlrsvp.replit.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                RSVP HERE
              </a>
            </Button>
          </div>
        </div>

        {/* Important Notice */}
        <div className="bg-card border border-border rounded-xl p-8 shadow-soft max-w-2xl mx-auto">
          <div className="text-center space-y-4">
            <p className="font-semibold text-primary text-lg">
              This event is strictly by invitation only.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Kindly RSVP on or before <span className="font-semibold text-gold">August 20, 2025</span> to ensure we can accommodate you on our special day. Your prompt response is greatly appreciated.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvitationSection;