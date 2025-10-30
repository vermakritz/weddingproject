import { useState } from "react";
import { Toaster } from "./components/ui/sonner";
import { Navigation } from "./components/navigation";
import { HeroSection } from "./components/herosection";
import  Services  from "./components/services";
import { Portfolio } from "./components/portfolio";
import { Packages } from "./components/packages";
import { About } from "./components/about";
import { Testimonials } from "./components/testimonials";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
import { BookingDialog } from "./components/bookingdialogue";
import { CursorFollower } from "./components/cursorfollower";
import { ClickRipple } from "./components/clickripple";
import { FloatingParticles } from "./components/floatingparticles";
import { ScrollProgress } from "./components/scrollprogress";

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Scroll Progress Bar - Only on large screens */}
      <ScrollProgress />
      
      {/* Custom Cursor - Only on large screens */}
      <CursorFollower />
      
      {/* Click Ripple Effect - Only on large screens */}
      <ClickRipple />
      
      {/* Floating Particles Background - Only on large screens */}
      {/* <FloatingParticles /> */}
      
      <Navigation onBookingClick={() => setIsBookingOpen(true)} />
      
      <main>
        <HeroSection onBookingClick={() => setIsBookingOpen(true)} />
        
        <div id="services">
          <Services />
        </div>
        
        <div id="portfolio">
          <Portfolio />
        </div>
        
        <div id="packages">
          <Packages onBookingClick={() => setIsBookingOpen(true)} />
        </div>
        
        <div id="about">
          <About />
        </div>
        
        <div id="testimonials">
          <Testimonials />
        </div>
        
        <div id="contact">
          <Contact onBookingClick={() => setIsBookingOpen(true)} />
        </div>
      </main>
      
      <Footer />
      
      <BookingDialog 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />
      
      <Toaster position="top-center" richColors />
    </div>
  );
}
