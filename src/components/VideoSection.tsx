const VideoSection = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black">
      {/* Full Screen Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          style={{
            margin: 0,
            padding: 0,
            lineHeight: 0,
            display: 'block'
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
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/30"></div>

      {/* Optional Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center text-white opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-auto">
          <h3 className="text-2xl sm:text-3xl font-display font-semibold mb-2">
            Save The Date
          </h3>
          <p className="text-lg font-body">
            October 8, 2025
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;