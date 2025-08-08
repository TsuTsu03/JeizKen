import { useState, useEffect } from 'react';

const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('October 8, 2025 14:00:00').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="countdown" className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-section-title font-display text-primary mb-4 gold-underline inline-block">
            Countdown to Forever
          </h2>
          <div className="w-32 h-0.5 bg-gold mx-auto mt-6"></div>
        </div>

        {/* Date and Venue */}
        <div className="mb-12">
          <h3 className="text-2xl sm:text-3xl font-display font-semibold text-gold mb-2">
            October 8, 2025
          </h3>
          <p className="text-xl font-body text-muted-foreground mb-1">
            2:00 PM
          </p>
          <p className="text-lg font-body text-primary">
            Tagaytay Highlands
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Minutes', value: timeLeft.minutes },
            { label: 'Seconds', value: timeLeft.seconds }
          ].map((item, index) => (
            <div
              key={item.label}
              className={`bg-card border border-border rounded-xl p-6 shadow-soft hover-elegant animate-fade-scale`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl sm:text-4xl font-display font-bold text-gold mb-2">
                {item.value.toString().padStart(2, '0')}
              </div>
              <div className="text-sm font-body uppercase tracking-wide text-muted-foreground">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="mt-16 flex justify-center space-x-4">
          <div className="w-12 h-px bg-gold"></div>
          <div className="w-2 h-2 bg-gold rounded-full animate-float"></div>
          <div className="w-12 h-px bg-gold"></div>
        </div>
      </div>
    </section>
  );
};

export default CountdownSection;