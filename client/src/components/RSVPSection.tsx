import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin } from "lucide-react";

const RSVPSection = () => {
  return (
    <section
      id="rsvp"
      className="shadow-lg rounded-lg py-20 shadow-2xl  px-4 bg-gradient-warm relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 border border-[#4e403b] rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 border border-[#4e403b] rounded-full transform -translate-x-1/3 translate-y-1/3"></div>
      </div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Section Header */}
        <div className="mb-4">
          <h2
            className="text-5xl font-script italic text-primary mb-4"
            data-testid="text-rsvp-title"
          >
            Please RSVP
          </h2>
        </div>

        {/* Main RSVP Content */}
        <div className="animate-fade-up mb-4">
          <div className="bg-white/95 backdrop-blur-sm border border-white/20 rounded-2xl p-12 shadow-elegant">
            {/* Wedding Details */}
            <div className="flex gap-8 mb-12 justify-between">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-[#4e403b]/10 rounded-full flex items-center justify-center mb-3">
                  <Calendar className="w-6 h-6 text-[#4e403b]" />
                </div>
                <h3 className="font-display font-semibold text-primary mb-1">
                  Date
                </h3>
                <p className="text-muted-foreground">October 8, 2025</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-[#4e403b]/10 rounded-full flex items-center justify-center mb-3">
                  <Clock className="w-6 h-6 text-[#4e403b]" />
                </div>
                <h3 className="font-display font-semibold text-primary mb-1">
                  Time
                </h3>
                <p className="text-muted-foreground">2:15 PM</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-[#4e403b]/10 rounded-full flex items-center justify-center mb-3">
                  <MapPin className="w-6 h-6 text-[#4e403b]" />
                </div>
                <h3 className="font-display font-semibold text-primary mb-1">
                  Location
                </h3>
                <p className="text-muted-foreground">Tagaytay Highlands</p>
              </div>
            </div>

            {/* RSVP Message */}
            <div className="space-y-4 mb-12">
              <p
                className="text-xl font-script italic text-primary leading-relaxed"
                data-testid="text-rsvp-message"
              >
                Your presence would make our day complete
              </p>
              <p
                className="text-xl font-script italic text-primary leading-relaxed"
                data-testid="text-rsvp-details"
              >
                Please confirm your attendance by clicking the button below.
                We're excited to celebrate this special moment with you!
              </p>
            </div>

            {/* RSVP Button */}
            <Button
              asChild
              size="lg"
              className="group relative px-16 py-6 text-lg font-script font-medium tracking-wide bg-[#4e403b] hover:bg-[#4e403b]/90 text-white shadow-lg transition-all duration-300 border-0 overflow-hidden rounded-lg"
              data-testid="button-rsvp"
            >
              <a
                href="https://kennethJeizlrsvp.replit.app"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center w-full h-full z-10"
              >
                <span className="relative z-10 font-script italic">
                  RSVP Now
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform skew-x-12 group-hover:animate-pulse"></div>
              </a>
            </Button>

            {/* RSVP Deadline */}
            <div className="mt-8 p-4 bg-[#4e403b]/5 border border-[#4e403b]/20 rounded-lg">
              <p className="text-primary font-semibold">
                RSVP Deadline:{" "}
                <span className="text-[#4e403b]">August 30, 2025</span>
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Please respond by this date to help us finalize our arrangements
              </p>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <div className="bg-white/90 backdrop-blur-sm border border-white/20 rounded-xl p-8 shadow-soft max-w-2xl mx-auto">
            <h3 className="text-lg font-display font-semibold text-primary mb-2">
              Important Reminders
            </h3>
            <div className="space-y-2 text-left">
              <p className="flex items-start gap-2 text-muted-foreground">
                <span className="text-[#4e403b]  text-sm">•</span>
                <span className="text-sm">
                  This invitation is for the specified number of guests only
                </span>
              </p>
              <p className="flex items-start gap-2 text-muted-foreground">
                <span className="text-[#4e403b]  text-sm">•</span>
                <span className="text-sm">
                  Kindly arrive 30 minutes before the ceremony
                </span>
              </p>
              <p className="flex items-start gap-2 text-muted-foreground">
                <span className="text-[#4e403b]  text-sm">•</span>
                <span className="text-sm">
                  Please follow the dress code guidelines
                </span>
              </p>
              <p className="flex items-start gap-2 text-muted-foreground">
                <span className="text-[#4e403b]  text-sm">•</span>
                <span className="text-sm">
                  Contact us if you have any questions or special requirements
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RSVPSection;
