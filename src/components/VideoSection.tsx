import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Pause } from 'lucide-react';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black">
      {/* Section Header */}
      <div className="absolute top-8 left-0 right-0 z-20 text-center">
        <h2 className="text-section-title font-display text-white mb-4 gold-underline inline-block">
          Our Journey
        </h2>
        <div className="w-32 h-0.5 bg-gold mx-auto"></div>
      </div>

      {/* Video Container */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          className="w-full h-full object-contain"
          muted
          loop
          playsInline
          style={{
            display: 'block',
            width: '100%',
            height: 'auto',
            objectFit: 'contain',
            margin: 0,
            padding: 0,
            lineHeight: 0
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