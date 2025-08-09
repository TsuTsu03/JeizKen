import { Button } from '@/components/ui/button';
import { MapPin, ExternalLink } from 'lucide-react';

const VenueSection = () => {
  const venues = [
    {
      title: 'Ceremony',
      name: 'Madre de Dios Chapel',
      image: 'https://res.cloudinary.com/dbiboclqa/image/upload/v1754641867/madre-de-dios-tagaytay_mr9odp.jpg',
      mapUrl: 'https://maps.app.goo.gl/nRVRNUnTwHaNjGsd7',
      description: 'A sacred sanctuary nestled in the heart of Tagaytay, where our vows will echo through time.'
    },
    {
      title: 'Reception',
      name: 'Midlands Veranda',
      image: 'https://res.cloudinary.com/dbiboclqa/image/upload/v1754641867/carousel-4-11_danmu3.jpg',
      mapUrl: 'https://maps.app.goo.gl/opRCpSS5F66JTGg96',
      description: 'An elegant venue with breathtaking views, perfect for celebrating our new beginning.'
    }
  ];

  return (
    <section id="venue" className="py-20 px-4 bg-gradient-elegant relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 border border-gold rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 border border-gold rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-section-title font-display text-primary mb-6 gold-underline inline-block">
            Venue Details
          </h2>
          <div className="w-32 h-0.5 mx-auto mb-6 bg-[#2c2421]"></div>
          <p className="text-elegant-body text-muted-foreground max-w-2xl mx-auto">
            Two beautiful locations in Tagaytay Highlands, each carefully chosen to create the perfect atmosphere for our special day
          </p>
        </div>

        {/* Venues Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {venues.map((venue, index) => (
            <div
              key={index}
              className={`group animate-fade-up`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              {/* Venue Card */}
              <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-elegant hover:shadow-warm transition-all duration-500 hover:-translate-y-2">
                {/* Venue Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={venue.image}
                    alt={venue.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  
                  {/* Venue Type Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#4e403b] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-soft">
                      {venue.title}
                    </span>
                  </div>
                </div>

                {/* Venue Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-display font-semibold text-primary mb-3 group-hover:text-[#4e403b] transition-colors duration-300">
                    {venue.name}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {venue.description}
                  </p>

                  {/* Location Button */}
                  <Button
                    asChild
                    variant="outline"
                    className="w-full group-hover:bg-[#4e403b] group-hover:text-white group-hover:border-[#4e403b] transition-all duration-300"
                  >
                    <a
                      href={venue.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <MapPin className="w-4 h-4" />
                      View Location
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className={`mt-8 flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className="flex items-center space-x-2 opacity-30">
                  <div className="w-12 h-px bg-[#4e403b]"></div>
                  <div className="w-2 h-2 bg-[#4e403b] rounded-full animate-float" style={{ animationDelay: `${index * 2}s` }}></div>
                  <div className="w-6 h-px bg-[#4e403b]"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center">
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 shadow-soft max-w-3xl mx-auto">
            <h3 className="text-xl font-display font-semibold text-primary mb-4">
              Transportation & Parking
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Both venues offer complimentary parking for all guests. We recommend carpooling when possible. 
              Professional shuttle service will be available between the ceremony and reception venues.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenueSection;