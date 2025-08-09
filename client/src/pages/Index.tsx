import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Volume2, VolumeX } from 'lucide-react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import SlideshowSection from '@/components/SlideshowSection';
import InvitationSection from '@/components/InvitationSection';
import CountdownSection from '@/components/CountdownSection';
import StorySection from '@/components/StorySection';
import VideoSection from '@/components/VideoSection';
import TimelineSection from '@/components/TimelineSection';
import VenueSection from '@/components/VenueSection';
import DressCodeSection from '@/components/DressCodeSection';
import EntourageSection from '@/components/EntourageSection';
import GiftSection from '@/components/GiftSection';
import RSVPSection from '@/components/RSVPSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [showInvitation, setShowInvitation] = useState(false);
  const [musicStarted, setMusicStarted] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleOpenInvitation = () => {
    console.log('handleOpenInvitation called');
    setShowInvitation(true);
    
    if (audioRef.current && !musicStarted) {
      const audio = audioRef.current;
      
      // Set up the audio immediately
      const startMusic = async () => {
        try {
          audio.currentTime = 0;
          audio.volume = 0.4;
          audio.loop = true;
          
          await audio.play();
          setMusicStarted(true);
          setMusicPlaying(true);
          console.log('Background music started successfully');
          
          // Remove event listeners after successful play
          document.removeEventListener('click', startMusic);
          document.removeEventListener('touchstart', startMusic);
          document.removeEventListener('keydown', startMusic);
        } catch (error) {
          console.log('Music play attempt failed:', error);
        }
      };

      // Try to play immediately (this will work if user already interacted)
      setTimeout(() => {
        startMusic();
      }, 500);

      // Also add listeners for the next user interaction as fallback
      document.addEventListener('click', startMusic, { once: true });
      document.addEventListener('touchstart', startMusic, { once: true });
      document.addEventListener('keydown', startMusic, { once: true });
    }
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      const audio = audioRef.current;
      if (musicPlaying) {
        audio.pause();
        setMusicPlaying(false);
        console.log('Music paused');
      } else {
        audio.play().then(() => {
          setMusicPlaying(true);
          setMusicStarted(true);
          console.log('Music resumed');
        }).catch((error) => {
          console.error('Error resuming music:', error);
        });
      }
    }
  };

  useEffect(() => {
    // Preload audio
    if (audioRef.current) {
      audioRef.current.preload = 'metadata';
      audioRef.current.src = "https://res.cloudinary.com/dbiboclqa/video/upload/v1754639888/ytmp3free.cc_the-biggest-taylor-swift-wedding-entrance-pt-10-youtubemp3free.org_oaw336.mp3";
    }
  }, []);

  if (!showInvitation) {
    console.log('Rendering HeroSection, showInvitation:', showInvitation);
    return <HeroSection onOpenInvitation={handleOpenInvitation} />;
  }

  console.log('Rendering main content, showInvitation:', showInvitation);

  return (
    <>
      {/* Background Music */}
      <audio
        ref={audioRef}
        loop
        preload="metadata"
        style={{ display: 'none' }}
        data-testid="background-audio"
      >
      </audio>

      <div className="min-h-screen bg-background">
        <Navigation />
        
        {/* Music Control Button */}
        {showInvitation && (
          <div className="fixed bottom-6 right-6 z-50">
            <Button
              onClick={toggleMusic}
              size="sm"
              className="bg-gold/90 hover:bg-gold text-primary rounded-full w-12 h-12 shadow-lg backdrop-blur-sm"
              aria-label={musicPlaying ? "Pause music" : "Play music"}
              data-testid="button-music-toggle"
            >
              {musicPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
            </Button>
          </div>
        )}
        
        {/* Main Content Sections */}
        <main>
          <SlideshowSection />
          <InvitationSection />
          <CountdownSection />
          <StorySection />
          <VideoSection />
          <TimelineSection />
          <VenueSection />
          <DressCodeSection />
          <EntourageSection />
          <GiftSection />
          <RSVPSection />
          <FAQSection />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Index;