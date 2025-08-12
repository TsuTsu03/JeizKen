import { Clock, Camera, Coffee, Utensils, Music } from 'lucide-react';

const TimelineSection = () => {
  const timelineEvents = [
    {
      time: '2:15 PM',
      event: 'Ceremony',
      icon: Clock,
      description: 'The sacred ceremony begins'
    },
    {
      time: '4:00 PM',
      event: 'Photos',
      icon: Camera,
      description: 'Capturing precious moments'
    },
    {
      time: '4:30 PM',
      event: 'Cocktails',
      icon: Coffee,
      description: 'Cocktails and mingling'
    },
    {
      time: '7:00 PM',
      event: 'Dinner',
      icon: Utensils,
      description: 'Dinner and toasts'
    },
    {
      time: '9:00 PM',
      event: 'Party',
      icon: Music,
      description: 'Dancing the night away'
    }
  ];

  return (
    <section id="timeline" className="py-20 px-4 bg-background relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-[#4e403b] rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-[#4e403b] rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-script italic text-primary mb-8" data-testid="text-timeline-title">
            Wedding Timeline
          </h2>

        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#4e403b] via-[#4e403b] to-[#4e403b] opacity-30"></div>

          {/* Timeline Events */}
          <div className="space-y-12">
            {timelineEvents.map((item, index) => {
              const IconComponent = item.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    isEven ? 'justify-start' : 'justify-end'
                  } animate-fade-up`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#4e403b] rounded-full border-4 border-background shadow-warm z-10"></div>

                  {/* Event Card */}
                  <div className={`w-full max-w-md ${isEven ? 'pr-8' : 'pl-8'}`}>
                    <div className={`bg-card border border-border rounded-xl p-6 shadow-soft hover-elegant ${
                      isEven ? 'text-right' : 'text-left'
                    }`}>
                      <div className={`flex items-center gap-3 mb-3 ${
                        isEven ? 'justify-end' : 'justify-start'
                      }`}>
                        <div className={`w-10 h-10 bg-[#4e403b]/10 rounded-full flex items-center justify-center ${
                          isEven ? 'order-2' : 'order-1'
                        }`}>
                          <IconComponent className="w-5 h-5 text-[#4e403b]" />
                        </div>
                        <div className={isEven ? 'order-1' : 'order-2'}>
                          <div className="text-2xl font-display font-semibold text-[#4e403b]">
                            {item.time}
                          </div>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-display font-semibold text-primary mb-2">
                        {item.event}
                      </h3>
                      
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Decorative */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2">
            <div className="w-8 h-px bg-[#4e403b]"></div>
            <div className="w-2 h-2 bg-[#4e403b] rounded-full animate-float"></div>
            <div className="w-8 h-px bg-[#4e403b]"></div>
          </div>
          <p className="mt-4 text-muted-foreground font-body italic">
            A celebration of love from dusk till dawn
          </p>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;