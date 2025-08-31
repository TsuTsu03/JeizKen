import { Heart, Gift, Home } from "lucide-react";
import gcash from "./assets/gcash.jpg";
import bpi from "./assets/bpi.jpg";

const GiftSection = () => {
  return (
    <section className="shadow-lg rounded-lg py-8  px-4 bg-background relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-[#4e403b] rounded-full animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-[#4e403b] rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-3/4 left-3/4 w-24 h-24 border border-[#4e403b] rounded-full animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Section Header */}
        <div className="mb-8">
          <h2
            className="text-5xl font-script italic text-primary mb-2"
            data-testid="text-gifts-title"
          >
            Wedding Gifts
          </h2>
        </div>

        {/* Main Gift Message */}
        <div className="animate-fade-up mb-12">
          <div className="bg-gradient-elegant border border-border rounded-2xl p-12 shadow-elegant">
            {/* Icon */}
            <div className="w-20 h-20 bg-[#4e403b]/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <Heart className="w-10 h-10 text-[#4e403b]" />
            </div>

            {/* Main Message */}
            <div className="space-y-2">
              <p
                className="text-2xl font-display font-light text-primary leading-relaxed"
                style={{ fontFamily: '"Times New Roman", serif' }}
              >
                Your presence at our wedding is the greatest gift.
              </p>

              <p
                className="text-xl font-display text-foreground/80 leading-relaxed"
                style={{ fontFamily: '"Times New Roman", serif' }}
              >
                Should you wish to bless us further, a contribution toward
                building our first home would be deeply appreciated.
              </p>

              <p
                className="text-xl font-display text-foreground/80 leading-relaxed"
                style={{ fontFamily: '"Times New Roman", serif' }}
              >
                This home will be the foundation of our life together and a
                place where lifelong memories will be made.
              </p>
            </div>

            {/* Decorative Elements */}
            <div className="mt-8 flex justify-center items-center space-x-4">
              <div className="w-12 h-px bg-[#4e403b]/30"></div>
              <div className="w-3 h-3 bg-[#4e403b] rounded-full animate-float"></div>
              <div className="w-12 h-px bg-[#4e403b]/30"></div>
            </div>
          </div>
        </div>

        {/* Payment Options */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* GCash Payment */}
          <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="bg-card border border-border rounded-xl p-8 shadow-soft hover-elegant h-full">
              <h3 className="text-lg font-display font-semibold text-primary mb-4 text-center">
                GCash
              </h3>
              <div className="text-center mb-4">
                <img
                  src={gcash}
                  alt="GCash QR Code"
                  className="w-64 h-64 mx-auto object-contain"
                />
              </div>
              <p className="text-muted-foreground leading-relaxed text-center">
                Scan the QR code above to send your generous gift via GCash
              </p>
            </div>
          </div>

          {/* Bank Transfer */}
          <div className="animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="bg-card border border-border rounded-xl p-8 shadow-soft hover-elegant h-full">
              <h3 className="text-lg font-display font-semibold text-primary mb-4 text-center">
                BPI{" "}
              </h3>
              <div className="text-center mb-4">
                <img
                  src={bpi}
                  alt="Bank Transfer QR Code"
                  className="w-64 h-64 mx-auto object-contain"
                />
              </div>
              <p className="text-muted-foreground leading-relaxed text-center">
                Scan the QR code above for bank transfer or direct deposit
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftSection;
