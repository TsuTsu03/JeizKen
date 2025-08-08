import { Heart, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Wedding Coordinator Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-display font-semibold mb-6">
            Need Assistance?
          </h3>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 max-w-md mx-auto">
            <h4 className="text-lg font-display font-semibold mb-4">
              Wedding Coordinator
            </h4>
            <div className="space-y-3">
              <p className="text-primary-foreground/90 font-semibold">
                EVENTS MANAGEMENT SERVICES
              </p>
              <div className="flex items-center justify-center gap-2">
                <Phone className="w-4 h-4 text-gold" />
                <a 
                  href="tel:09178396781" 
                  className="text-gold hover:text-gold/80 transition-colors duration-300 font-semibold"
                >
                  0917-839-6781
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="text-center space-y-8">
          {/* Couple Names */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-2">
              Kenneth
              <span className="text-gold mx-3">&</span>
              Jeizl
            </h2>
            <p className="text-primary-foreground/80 text-lg">
              October 8, 2025 • Tagaytay Highlands
            </p>
          </div>

          {/* Wedding Hashtag */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 max-w-md mx-auto">
            <p className="text-primary-foreground/90 mb-2">Share your photos with</p>
            <p className="text-xl font-display font-semibold text-gold">
              #KennethAndJeizlForever
            </p>
          </div>

          {/* Decorative Elements */}
          <div className="flex justify-center items-center space-x-4 py-6">
            <div className="w-16 h-px bg-gold/30"></div>
            <Heart className="w-6 h-6 text-gold animate-float" />
            <div className="w-16 h-px bg-gold/30"></div>
          </div>

          {/* Thank You Message */}
          <div className="max-w-2xl mx-auto">
            <p className="text-primary-foreground/80 leading-relaxed italic">
              "Thank you for being part of our love story. Your presence in our lives has made this journey 
              even more beautiful, and we can't wait to celebrate with you on our special day."
            </p>
          </div>

          {/* Bottom Border */}
          <div className="border-t border-white/20 pt-8">
            <p className="text-primary-foreground/60 text-sm">
              With love and gratitude,
            </p>
            <p className="text-gold font-display font-semibold">
              Kenneth & Jeizl
            </p>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary to-transparent opacity-50 pointer-events-none"></div>
    </footer>
  );
};

export default Footer;