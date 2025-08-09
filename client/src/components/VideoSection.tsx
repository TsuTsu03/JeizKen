import { useRef } from 'react';

const VideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section className="relative w-full overflow-hidden bg-black">
      {/* Section Header */}
      <div className="text-center py-8 px-4 relative">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-1/4 w-6 h-6 border border-gold/40 rounded-full"></div>
        <div className="absolute top-2 right-1/4 w-3 h-3 bg-gold/30 rounded-full"></div>
        <div className="absolute bottom-0 left-1/3 w-4 h-4 border border-gold/50 rounded-full"></div>
        <div className="absolute bottom-1 right-1/3 w-2 h-2 bg-gold/40 rounded-full"></div>
        
        <h2 className="font-display mb-4 gold-underline inline-block text-[#413a37]">
          Our Prenup Video
        </h2>
        <div className="w-32 h-0.5 bg-gold mx-auto"></div>
      </div>
      {/* Video Container */}
      <div className="relative w-full overflow-hidden bg-black">
        <video
          ref={videoRef}
          loop
          playsInline
          controls
          style={{
            display: 'block',
            width: '100%',
            height: 'auto',
            objectFit: 'contain',
            objectPosition: 'top',
            margin: 0,
            padding: 0
          }}
        >
          <source
            src="https://res.cloudinary.com/dbiboclqa/video/upload/v1754639909/SAVE_THE_DATE_VIDEO_ydgklt.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* Elegant Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/30 pointer-events-none"></div>
    </section>
  );
};

export default VideoSection;