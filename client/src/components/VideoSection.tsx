import { useRef, useEffect } from "react";
import savethedate from "@/components/assets/savethedate.mp4";

const VideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => {
      // Pause background music when video starts
      const audio = document.querySelector(
        'audio[data-testid="background-audio"]'
      ) as HTMLAudioElement;
      if (audio) {
        audio.pause();
      }
    };

    const handlePause = () => {
      // Resume background music when video pauses
      const audio = document.querySelector(
        'audio[data-testid="background-audio"]'
      ) as HTMLAudioElement;
      if (audio) {
        audio.play().catch(() => {
          // Silently handle autoplay restrictions
        });
      }
    };

    const handleEnded = () => {
      // Resume background music when video ends
      const audio = document.querySelector(
        'audio[data-testid="background-audio"]'
      ) as HTMLAudioElement;
      if (audio) {
        audio.play().catch(() => {
          // Silently handle autoplay restrictions
        });
      }
    };

    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);
    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-background">
      {/* Section Header */}
      <div className="text-center py-8 px-4 bg-background">
        <h2
          className="text-5xl font-script italic text-primary"
          data-testid="text-video-title"
        >
          Save the Date Video
        </h2>
      </div>
      {/* Video Container */}
      <div className="relative w-full overflow-hidden bg-background pb-4">
        <video
          ref={videoRef}
          loop
          playsInline
          controls
          style={{
            display: "block",
            width: "100%",
            height: "auto",
            objectFit: "contain",
            objectPosition: "top",
            margin: 0,
            padding: 0
          }}
        >
          <source src={savethedate} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default VideoSection;
