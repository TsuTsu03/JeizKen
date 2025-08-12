# Wedding Invitation Website

## Project Overview
This is a wedding invitation website migrated from Lovable to Replit. The project is a full-stack JavaScript application showcasing a beautiful wedding invitation with multiple sections including hero, slideshow, invitation details, countdown, story, venue information, RSVP, and more.

## Project Architecture
- **Frontend**: React with TypeScript, Vite for bundling, Tailwind CSS + shadcn/ui for styling
- **Backend**: Express.js server with TypeScript
- **Routing**: Wouter (React routing library)
- **State Management**: TanStack Query for server state
- **Database**: In-memory storage (MemStorage) - can be upgraded to PostgreSQL if needed
- **Styling**: Tailwind CSS with custom wedding theme
- **Audio**: Background music integration with user interaction triggers

## Key Features
- Responsive wedding invitation website
- Interactive hero section with invitation opening animation
- Background music that starts on user interaction
- Multiple content sections (story, venue, RSVP, FAQ, etc.)
- Modern UI components using shadcn/ui
- Dark/light theme support
- SEO optimized

## Migration Status
Successfully migrated from Lovable to Replit environment:
- [x] Install required dependencies (react-router-dom, sonner, nanoid)
- [x] Convert routing from react-router-dom to wouter 
- [x] Set up proper QueryClient configuration
- [x] Fixed background music functionality with proper autoplay handling
- [x] Enhanced typography with elegant Google Fonts (Playfair Display, Cormorant Garamond, Inter)
- [x] Updated HeroSection with improved font styling and data-testid attributes
- [x] Removed visual artifacts from slideshow section
- [x] Improved InvitationSection layout and styling
- [x] Complete migration verification

## Development Notes
- Uses Replit's full-stack template with Express backend and React frontend
- Server runs on port 5000 and serves both API and frontend
- Vite handles development bundling and HMR
- Audio files are hosted on Cloudinary CDN

## User Preferences
- Background music should play automatically when clicking "Open Invitation" with NO control buttons
- Clean, sophisticated design without visual artifacts or decorative elements that interfere with images
- Elegant wedding-appropriate typography using Google Fonts

## Recent Changes
- **2024-01-09**: Started migration from Lovable to Replit
- **2024-01-09**: Updated routing system from react-router-dom to wouter
- **2024-01-09**: Created QueryClient setup with proper API request handling
- **2024-01-09**: Fixed background music with improved autoplay handling and fallback interactions
- **2024-01-09**: Enhanced typography with Google Fonts (Playfair Display, Cormorant Garamond, Inter)
- **2024-01-09**: Updated HeroSection with elegant font styling and improved spacing
- **2024-01-09**: Added data-testid attributes for accessibility and testing
- **2024-01-09**: Removed visual artifacts from slideshow section
- **2024-01-09**: Improved InvitationSection layout and styling
- **2024-01-09**: Enhanced StorySection with designer polaroid frames and elegant text layout
- **2024-01-09**: Fixed mobile shadows and glass effects across all components
- **2024-01-09**: Fixed deployment issues for Cloud Run production environment:
  - Updated server.listen() to use PORT environment variable for production deployments
  - Added comprehensive error handling for server startup process
  - Implemented graceful shutdown handlers for SIGTERM and SIGINT signals
  - Verified build output structure with dist/index.js and static assets in dist/public
- **2024-01-09**: Converted website for Vercel deployment:
  - Removed server dependencies and converted to static React site
  - Created vercel.json configuration and .vercelignore file
  - Updated queryClient to work without API endpoints
  - Generated static build in dist/public/ with all assets
  - Created comprehensive deployment guide (VERCEL_DEPLOYMENT.md)
- **2025-01-13**: Comprehensive content updates for Kenneth and Jeizl's wedding:
  - Updated HeroSection with couple names and removed "We're saying I do" tagline
  - Changed ampersand color to white in hero section
  - Implemented background music pause/resume during prenup video playback
  - Updated wedding time from 2:00 PM to 2:15 PM across all components
  - Updated InvitationSection with couple names and detailed date/time/location
  - Replaced RSVP button with navigation arrow to RSVP section
  - Enhanced StorySection with new story content and updated image gallery
  - Updated TimelineSection with new event schedule
  - Updated VenueSection with new venue images and address details
  - Updated DressCodeSection with new clothing reference images
  - Added QR code payment options (GCash and Bank Transfer) to GiftSection
  - Updated SlideshowSection with new image gallery
  - Updated FAQ hashtag from #AlexanderTheGreatGotAnArmie to #KennethAndJeizlWedding
  - Fixed countdown timer to use correct wedding date and time