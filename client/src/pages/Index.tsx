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
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleOpenInvitation = () => {
    console.log('handleOpenInvitation called');
    setShowInvitation(true);
    
    // Start background music automatically
    if (audioRef.current) {
      const audio = audioRef.current;
      audio.volume = 0.3;
      audio.loop = true;
      
      audio.play().then(() => {
        console.log('Background music started successfully');
      }).catch((error) => {
        console.log('Autoplay blocked, will try on next user interaction');
        // Fallback for autoplay restrictions
        const playOnInteraction = () => {
          audio.play().then(() => {
            console.log('Music started on user interaction');
          }).catch(console.error);
          document.removeEventListener('click', playOnInteraction);
          document.removeEventListener('touchstart', playOnInteraction);
        };
        document.addEventListener('click', playOnInteraction);
        document.addEventListener('touchstart', playOnInteraction);
      });
    }
  };

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
        src="https://res.cloudinary.com/dbiboclqa/video/upload/v1754639888/ytmp3free.cc_the-biggest-taylor-swift-wedding-entrance-pt-10-youtubemp3free.org_oaw336.mp3"
        style={{ display: 'none' }}
        data-testid="background-audio"
      />

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