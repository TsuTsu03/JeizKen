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
    setShowInvitation(true);
    
    // Start background music automatically
    if (audioRef.current && !musicStarted) {
      audioRef.current.play().catch(console.error);
      setMusicStarted(true);
    }
  };

  useEffect(() => {
    // Preload audio
    if (audioRef.current) {
      audioRef.current.preload = 'auto';
    }
  }, []);

  if (!showInvitation) {
    return <HeroSection onOpenInvitation={handleOpenInvitation} />;
  }

  return (
    <>
      {/* Background Music */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        className="hidden"
      >
        <source 
          src="https://res.cloudinary.com/dbiboclqa/video/upload/v1754639888/ytmp3free.cc_the-biggest-taylor-swift-wedding-entrance-pt-10-youtubemp3free.org_oaw336.mp3" 
          type="audio/mpeg" 
        />
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