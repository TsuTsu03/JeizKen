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
    <section id="countdown" className="py-12 px-4 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-5xl font-script italic text-primary mb-8" data-testid="text-countdown-title">
            Countdown to Forever
          </h2>
        </div>

        {/* Wedding Date Display */}
        <div className="mb-12 space-y-2">
          <h3 className="text-3xl md:text-4xl font-display font-light text-primary tracking-widest" data-testid="text-countdown-date">
            OCTOBER 8, 2025
          </h3>
          <p className="text-lg font-body text-foreground/70" data-testid="text-countdown-time">
            2:00 PM • Tagaytay Highlands
          </p>
        </div>

        {/* Countdown Timer Grid */}
        <div className="grid grid-cols-4 gap-4 md:gap-8 max-w-lg mx-auto">
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Minutes', value: timeLeft.minutes },
            { label: 'Seconds', value: timeLeft.seconds }
          ].map((item, index) => (
            <div
              key={item.label}
              className="text-center animate-fade-scale"
              style={{ animationDelay: `${index * 0.1}s` }}
              data-testid={`countdown-${item.label.toLowerCase()}`}
            >
              <div className="text-4xl md:text-5xl font-display font-light text-primary mb-2">
                {item.value.toString().padStart(2, '0')}
              </div>
              <div className="text-xs md:text-sm font-body uppercase tracking-wider text-foreground/60">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="mt-16 flex justify-center space-x-4">
          <div className="w-12 h-px bg-[#4e403b]"></div>
          <div className="w-2 h-2 bg-[#4e403b] rounded-full animate-float"></div>
          <div className="w-12 h-px bg-[#4e403b]"></div>
        </div>
      </div>
    </section>
  );
};

export default CountdownSection;