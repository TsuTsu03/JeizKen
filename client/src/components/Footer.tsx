import { Heart, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16 px-4">
      <div className="max-w-4xl mx-auto">


        {/* Main Footer Content */}
        <div className="text-center space-y-8">
          {/* Couple Names */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-2">
              Kenneth
              <span className="text-[#4e403b] mx-3">&</span>
              Jeizl
            </h2>
            <p className="text-primary-foreground/80 text-lg">
              October 8, 2025 • Tagaytay Highlands
            </p>
          </div>

          {/* Wedding Hashtag */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 max-w-md mx-auto">
            <p className="text-primary-foreground/90 mb-2">Share your photos with</p>
            <p className="text-xl font-display font-semibold text-[#ffffff]">#JeizWantsTheDy</p>
          </div>

          {/* Decorative Elements */}
          <div className="flex justify-center items-center space-x-4 py-6">
            <div className="w-16 h-px bg-[#4e403b]/30"></div>
            <Heart className="w-6 h-6 text-[#4e403b] animate-float" />
            <div className="w-16 h-px bg-[#4e403b]/30"></div>
          </div>

          {/* Thank You Message */}
          <div className="max-w-2xl mx-auto">
            <p className="text-primary-foreground/80 leading-relaxed italic">
              We're grateful to have you as part of our story. You've made our journey more beautiful, and we can't wait to share our special day with you.
            </p>
          </div>

          {/* Bottom Border */}
          <div className="border-t border-white/20 pt-8">
            <p className="text-primary-foreground/60 text-sm">
              With love and gratitude,
            </p>
            <p className="font-display font-semibold text-[#aca8a6]">
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