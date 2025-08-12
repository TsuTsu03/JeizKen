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
    
    // Start background music immediately
    setTimeout(() => {
      if (audioRef.current) {
        const audio = audioRef.current;
        audio.volume = 0.3;
        audio.loop = true;
        
        console.log('Attempting to play background music...');
        audio.play().then(() => {
          console.log('Background music started successfully');
        }).catch((error) => {
          console.log('Music play error:', error);
          console.log('Adding fallback listeners for user interaction');
          
          // Fallback for autoplay restrictions
          const playOnInteraction = () => {
            console.log('Trying to play music on user interaction...');
            audio.play().then(() => {
              console.log('Music started on user interaction');
            }).catch((err) => {
              console.error('Failed to play music on interaction:', err);
            });
            document.removeEventListener('click', playOnInteraction);
            document.removeEventListener('touchstart', playOnInteraction);
          };
          document.addEventListener('click', playOnInteraction);
          document.addEventListener('touchstart', playOnInteraction);
        });
      } else {
        console.log('Audio element not found');
      }
    }, 100);
  };

  return (
    <>
      {/* Background Music - Always present */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        src="https://res.cloudinary.com/dbiboclqa/video/upload/v1754639888/ytmp3free.cc_the-biggest-taylor-swift-wedding-entrance-pt-10-youtubemp3free.org_oaw336.mp3"
        style={{ display: 'none' }}
        data-testid="background-audio"
      />

      {!showInvitation ? (
        <HeroSection onOpenInvitation={handleOpenInvitation} />
      ) : (
        <div className="min-h-screen bg-background">
          <Navigation />
          
          {/* Main Content Sections */}
          <main>
            <InvitationSection />
            <SlideshowSection />
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
            <Footer />
          </main>
        </div>
      )}
    </>
  );
};

export default Index;