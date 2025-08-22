import { Button } from "@/components/ui/button";
import { MapPin, ExternalLink } from "lucide-react";

const VenueSection = () => {
  const venues = [
    {
      title: "Ceremony",
      name: "Madre de Dios Chapel",
      address:
        "Sierra Lane, South Main Avenue\nTagaytay Highlands\nTagaytay, Cavite, Philippines",
      image:
        "https://res.cloudinary.com/dbiboclqa/image/upload/v1755013747/528272661_2330353877367703_317162366725678148_n-removebg-preview_euk5di.png",
      mapUrl: "https://maps.app.goo.gl/nRVRNUnTwHaNjGsd7",
      description:
        "We will exchange vows at Madre de Dios Chapel in Tagaytay Highlands, a beautiful chapel surrounded by lush greenery and cool mountain air.",
      details:
        "Parking is available near the chapel, so we recommend arriving early to secure a good spot.",
      additionalInfo:
        "To enjoy the scenery and for easier access, guests are encouraged to take the Santa Rosa Exit and proceed to Tagaytay Highlands Main Entrance when selecting routes on Google Maps or Waze.",
      startTime: "2:15 PM",
      locationGuide: "Location Guide →"
    },
    {
      title: "Reception",
      name: "Midlands Veranda",
      address:
        "Serifina Villa\nMeadow Lane, South Main Avenue\nTagaytay Highlands\nTagaytay, Cavite, Philippines",
      image:
        "https://res.cloudinary.com/dbiboclqa/image/upload/v1755013692/522684947_4096852087241511_2099849351157419984_n-removebg-preview_falou3.png",
      mapUrl: "https://maps.app.goo.gl/opRCpSS5F66JTGg96",
      description: "Please join us for dinner, cocktails and dancing!",
      details:
        "Midlands Veranda is also located within Tagaytay Highlands, just a 5-minute walk from Madre de Dios Chapel.",
      website: "",
      startTime: "4:30 PM",
      locationGuide: "Location Guide →"
    }
  ];

  return (
    <section
      id="venue"
      className="shadow-lg rounded-lg py-8 px-4 bg-background"
    >
      <div className="max-w-4xl mx-auto">
        {/* Venues List */}
        <div className="space-y-20">
          {venues.map((venue, index) => (
            <div
              key={index}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              {/* Venue Title */}
              <div className="text-center mb-12">
                <h2
                  className="text-5xl font-script italic text-primary mb-2"
                  data-testid={`text-${venue.title.toLowerCase()}-title`}
                >
                  {venue.title}
                </h2>
              </div>

              {/* Venue Content */}
              <div className="max-w-lg mx-auto text-center space-y-6">
                {/* Venue Image */}
                <div className="mb-8">
                  <img
                    src={venue.image}
                    alt={venue.name}
                    className="w-full h-48 object-cover rounded-lg shadow-sm"
                    loading="lazy"
                    data-testid={`img-${venue.title.toLowerCase()}-venue`}
                  />
                </div>

                {/* Description */}
                <div className="space-y-3 mb-8">
                  {venue.description.split("\n").map((line, i) => (
                    <p
                      key={i}
                      className="text-base font-body text-foreground/85 leading-relaxed"
                      data-testid={`text-${venue.title.toLowerCase()}-description-${
                        i + 1
                      }`}
                    >
                      {line}
                    </p>
                  ))}
                </div>

                {/* Details */}
                <p
                  className="text-base font-body text-foreground/85"
                  data-testid={`text-${venue.title.toLowerCase()}-details`}
                >
                  {venue.details}
                </p>

                {venue.additionalInfo && (
                  <p
                    className="text-base font-body text-foreground/85"
                    data-testid={`text-${venue.title.toLowerCase()}-additional`}
                  >
                    {venue.additionalInfo}
                  </p>
                )}

                {venue.website && (
                  <p
                    className="text-base font-body text-foreground/85"
                    data-testid={`text-${venue.title.toLowerCase()}-website`}
                  >
                    {venue.website}
                  </p>
                )}

                {/* Time and Location Guide */}
                <div className="flex justify-between items-center pt-6 border-t border-foreground/10">
                  <div className="text-left">
                    <p
                      className="text-sm font-body text-foreground/70 italic"
                      data-testid={`text-${venue.title.toLowerCase()}-start-time`}
                    >
                      Start time {venue.startTime}
                    </p>
                  </div>
                  <div className="text-right">
                    <Button
                      asChild
                      variant="ghost"
                      className="text-sm font-body text-foreground/70 hover:text-primary px-2 h-auto"
                      data-testid={`button-${venue.title.toLowerCase()}-location`}
                    >
                      <a
                        href={venue.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {venue.locationGuide}
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VenueSection;
