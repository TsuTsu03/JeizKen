import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
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
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleOpenInvitation = () => {
    console.log('handleOpenInvitation called');
    setShowInvitation(true);
    if (audioRef.current && !musicStarted) {
      const audio = audioRef.current;
      audio.pause();
      audio.currentTime = 0;
      audio.src = "https://res.cloudinary.com/dbiboclqa/video/upload/v1754639888/ytmp3free.cc_the-biggest-taylor-swift-wedding-entrance-pt-10-youtubemp3free.org_oaw336.mp3";
      audio.volume = 0.3;

      const playAudio = () => {
        audio.play().then(() => {
          setMusicStarted(true);
          console.log('Background music started on invitation open');
          window.removeEventListener('click', playAudio);
          window.removeEventListener('keydown', playAudio);
        }).catch((error) => {
          console.error('Error playing audio:', error);
        });
      };

      // Try to play immediately
      playAudio();

      // Fallback: play on user interaction if autoplay blocked
      window.addEventListener('click', playAudio);
      window.addEventListener('keydown', playAudio);
    }
  };

  useEffect(() => {
    // Preload audio
    if (audioRef.current) {
      audioRef.current.preload = 'auto';
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
        preload="auto"
        style={{ display: 'none' }}
      >
      </audio>

      <div className="min-h-screen bg-background">
        <Navigation />
        
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