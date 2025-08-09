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

  const handleOpenInvitation = async () => {
    console.log('handleOpenInvitation called');
    setShowInvitation(true);
    
    if (audioRef.current && !musicStarted) {
      const audio = audioRef.current;
      audio.src = "https://res.cloudinary.com/dbiboclqa/video/upload/v1754639888/ytmp3free.cc_the-biggest-taylor-swift-wedding-entrance-pt-10-youtubemp3free.org_oaw336.mp3";
      audio.volume = 0.4;
      audio.loop = true;

      try {
        // Add a small delay to ensure the invitation transition starts first
        setTimeout(async () => {
          try {
            await audio.play();
            setMusicStarted(true);
            console.log('Background music started automatically');
          } catch (error) {
            console.log('Autoplay blocked, will play on next user interaction');
            
            // Fallback: play on next user interaction
            const playOnInteraction = async () => {
              try {
                await audio.play();
                setMusicStarted(true);
                console.log('Background music started on user interaction');
                // Remove listeners after successful play
                document.removeEventListener('click', playOnInteraction);
                document.removeEventListener('touchstart', playOnInteraction);
                document.removeEventListener('keydown', playOnInteraction);
              } catch (err) {
                console.error('Error playing audio on interaction:', err);
              }
            };

            document.addEventListener('click', playOnInteraction);
            document.addEventListener('touchstart', playOnInteraction);
            document.addEventListener('keydown', playOnInteraction);
          }
        }, 800); // Small delay for smooth transition
      } catch (error) {
        console.error('Error setting up audio:', error);
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