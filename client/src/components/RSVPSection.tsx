import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin } from 'lucide-react';

const RSVPSection = () => {
  return (
    <section id="rsvp" className="py-20 px-4 bg-gradient-warm relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 border border-gold rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 border border-gold rounded-full transform -translate-x-1/3 translate-y-1/3"></div>
      </div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-semibold mb-4 relative inline-block text-[#f6de94] tracking-wide">
            Please RSVP
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gold"></div>
          </h2>
          <div className="w-32 h-0.5 bg-white/60 mx-auto mt-2"></div>
        </div>

        {/* Main RSVP Content */}
        <div className="animate-fade-up mb-12">
          <div className="bg-white/95 backdrop-blur-sm border border-white/20 rounded-2xl p-12 shadow-elegant">
            {/* Wedding Details */}
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-3">
                  <Calendar className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-display font-semibold text-primary mb-1">Date</h3>
                <p className="text-muted-foreground">October 8, 2025</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-3">
                  <Clock className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-display font-semibold text-primary mb-1">Time</h3>
                <p className="text-muted-foreground">2:00 PM</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-3">
                  <MapPin className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-display font-semibold text-primary mb-1">Location</h3>
                <p className="text-muted-foreground">Tagaytay Highlands</p>
              </div>
            </div>

            {/* RSVP Message */}
            <div className="space-y-6 mb-8">
              <p className="text-xl font-display text-primary leading-relaxed">
                Your presence would make our day complete
              </p>
              <p className="text-elegant-body text-muted-foreground leading-relaxed">
                Please confirm your attendance by clicking the button below. 
                We're excited to celebrate this special moment with you!
              </p>
            </div>

            {/* RSVP Button */}
            <Button
              asChild
              size="lg"
              className="group relative px-20 py-8 text-xl font-display font-bold tracking-[0.2em] bg-gradient-to-r from-gold via-yellow-400 to-gold hover:from-yellow-400 hover:via-gold hover:to-yellow-400 text-white shadow-2xl hover:shadow-gold/50 transition-all duration-500 border-2 border-yellow-300/30 overflow-hidden rounded-2xl"
            >
              <a 
                href="https://kennethJeizlrsvp.replit.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center w-full h-full z-10"
              >
                <span className="relative z-10">RSVP NOW</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform skew-x-12 group-hover:animate-pulse"></div>
              </a>
            </Button>

            {/* RSVP Deadline */}
            <div className="mt-8 p-4 bg-gold/5 border border-gold/20 rounded-lg">
              <p className="text-primary font-semibold">
                RSVP Deadline: <span className="text-gold">August 20, 2025</span>
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Please respond by this date to help us finalize our arrangements
              </p>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <div className="bg-white/90 backdrop-blur-sm border border-white/20 rounded-xl p-8 shadow-soft max-w-2xl mx-auto">
            <h3 className="text-lg font-display font-semibold text-primary mb-4">
              Important Reminders
            </h3>
            <div className="space-y-3 text-left">
              <p className="flex items-start gap-2 text-muted-foreground">
                <span className="text-gold mt-1 text-sm">•</span>
                <span className="text-sm">This invitation is for the specified number of guests only</span>
              </p>
              <p className="flex items-start gap-2 text-muted-foreground">
                <span className="text-gold mt-1 text-sm">•</span>
                <span className="text-sm">Kindly arrive 30 minutes before the ceremony</span>
              </p>
              <p className="flex items-start gap-2 text-muted-foreground">
                <span className="text-gold mt-1 text-sm">•</span>
                <span className="text-sm">Please follow the dress code guidelines</span>
              </p>
              <p className="flex items-start gap-2 text-muted-foreground">
                <span className="text-gold mt-1 text-sm">•</span>
                <span className="text-sm">Contact us if you have any questions or special requirements</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RSVPSection;