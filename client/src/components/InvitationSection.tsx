import { Button } from "@/components/ui/button";

import { Calendar, Clock, MapPin } from "lucide-react";

const InvitationSection = () => {
  return (
    <section
      id="invitation"
      className="rounded-lg shadow-2xl mt-10 mb-10 py-5 px-20"
    >
      <div className="rounded-lg shadow-2xl max-w-2xl mx-auto text-center space-y-10">
        {/* Names */}
        <div className="flex flex-col items-center justify-center text-center">
          {/* Names */}
          <div className="space-y-4">
            <h1
              className="text-7xl md:text-8xl lg:text-9xl font-script italic text-primary leading-tight pt-[0px] pb-[0px] mt-[25px] mb-[25px]"
              style={{
                fontFamily:
                  '"Great Vibes", "Dancing Script", "Brush Script MT", cursive',
                fontWeight: 400,
                letterSpacing: "0.05em"
              }}
              data-testid="text-couple-names"
            >
              Kenneth{" "}
              <span className="text-primary opacity-80 text-[40px] md:text-[70px]">
                &
              </span>{" "}
              Jeizl
            </h1>
          </div>
        </div>

        {/* Main Invitation Text */}
        <div className="space-y-10">
          <h2
            className="text-4xl md:text-5xl font-display text-primary leading-tight tracking-wider"
            data-testid="text-invitation-title"
          >
            ARE FINALLY
            <br />
            SAYING "<em className="font-script italic">I DO</em>"
          </h2>

          {/* Date, Time, Location */}
          <div className="space-y-2 max-w-lg mx-auto mb-8">
            <div className="text-center space-y-2">
              <p
                className="text-3xl md:text-4xl lg:text-5xl font-script italic text-black font-normal"
                data-testid="text-wedding-date-detail"
              >
                October 8, 2025 | 2:15 PM
              </p>
              <p
                className="text-2xl md:text-3xl lg:text-4xl font-script italic text-black font-normal"
                style={{ fontFamily: '"Times New Roman", serif' }}
                data-testid="text-wedding-location"
              >
                Tagaytay Highlands
              </p>
            </div>
          </div>

          <div className=" max-w-lg mx-auto">
            <p
              className="text-lg text-black leading-relaxed"
              style={{ fontFamily: '"Times New Roman", serif' }}
              data-testid="text-invitation-question"
            >
              Will you accept this invitation?
            </p>
            <p
              className="text-lg text-black"
              style={{ fontFamily: '"Times New Roman", serif' }}
              data-testid="text-invitation-deadline"
            >
              Please respond on or before
            </p>
            <p
              className="text-lg text-black font-normal"
              style={{ fontFamily: '"Times New Roman", serif' }}
              data-testid="text-rsvp-date"
            >
              September 7, 2025
            </p>
          </div>
        </div>
        {/* Navigation Arrow to RSVP */}
        <div className="py-4 ">
          <a
            href="#rsvp"
            className="inline-flex items-center justify-center text-primary hover:text-primary/80 transition-colors duration-300"
            data-testid="link-navigate-rsvp"
          >
            <div className="rounded-full border-2 p-2 animate-bounce">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default InvitationSection;
