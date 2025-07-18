import { useState, useEffect } from 'react';
import { Calendar, MapPin, Users, Clock, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import heroBg from '@/assets/hero-bg.jpg';
import aicteLogo from '@/assets/aicte-logo.png.jpg';
import s1Image from '@/assets/s1.jpg';
import s2Image from '@/assets/s2.jpg';
import collegeLogo from '@/assets/college-logo.jpg';

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const conferenceDate = new Date('2025-09-26T09:00:00');
    
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = conferenceDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToNext = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(33, 60, 119, 0.8), rgba(14, 116, 144, 0.8)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* AICTE Sponsored Badge with Images - Positioned below navbar */}
      <div className="absolute top-20 xs:top-24 sm:top-28 md:top-32 left-1/2 transform -translate-x-1/2 z-20 animate-fade-in px-2">
        <div className="flex items-center justify-center space-x-1 xs:space-x-2 sm:space-x-3 md:space-x-4">
          {/* AICTE Logo */}
          <img
              src={aicteLogo}
              alt="College Logo"
              className="h-12 w-12 lg:h-12 lg:w-12 rounded-full"
            />
          
          {/* S1 Image */}
          <img
              src={s1Image}
              alt="College Logo"
              className="h-12 w-12 lg:h-12 lg:w-12 rounded-full"
            />
          

          {/* AICTE SPONSORED Text */}
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-2 py-0.5 xs:px-3 xs:py-1 sm:px-4 sm:py-2 md:px-6 md:py-2 rounded-full shadow-lg">
            <span className="font-bold text-xs xs:text-xs sm:text-sm md:text-base whitespace-nowrap">AICTE SPONSORED</span>
          </div>

          {/* S2 Image */}
          <img
              src={s2Image}
              alt="College Logo"
              className="h-12 w-12 lg:h-12 lg:w-12 rounded-full"
            />

          {/* College Logo */}
          
          <img
              src={collegeLogo}
              alt="College Logo"
              className="h-12 w-12 lg:h-12 lg:w-12 rounded-full"
            />
        </div>
      </div>



      {/* Hero Content */}
      <div className="container mx-auto px-2 xs:px-4 text-center text-white relative z-10 pt-24 xs:pt-28 sm:pt-32 md:pt-36">
        <div className="max-w-6xl mx-auto space-y-4 xs:space-y-6 sm:space-y-8">

          {/* Main Title - Reduced mobile gap from AICTE badge */}
          <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-light text-blue-100 mb-0 leading-tight">
              Two day National Conference on 
            </p>
          <h1 className="text-sm xs:text-base sm:text-lg md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold leading-tight animate-slide-up mt-6 xs:mt-8 sm:mt-8 md:mt-8 px-2 xs:px-4 whitespace-nowrap">
            Exploring AI and ML for Better Tomorrow          </h1>

          {/* Subtitle */}
          <div className="mb-4 xs:mb-6 sm:mb-8 animate-slide-up text-center px-2">
            
            <p className="text-xs xs:text-sm sm:text-base md:text-lg text-white mt-1">Organized by</p>
            <p className="text-xs xs:text-sm sm:text-base md:text-lg text-white font-medium -mt-1 leading-tight">
              Department of Bachelor of Computer Applications
            </p>
          </div>

          {/* Conference Details */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 text-lg animate-fade-in">
            <div className="flex items-center space-x-2">
              <Calendar className="text-accent" size={20} />
              <span>26th - 27th September 2025</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="text-accent" size={20} />
              <span>Tumakuru, Karnataka</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="text-accent" size={20} />
              <span>NCEAMBT 2025</span>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="flex justify-center mb-12 animate-scale-in">
            <div className="grid grid-cols-4 gap-4 md:gap-8">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <Card key={unit} className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-4 md:p-6 text-center">
                    <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                      {value.toString().padStart(2, '0')}
                    </div>
                    <div className="text-sm md:text-base text-blue-100 capitalize">
                      {unit}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Buttons with Scroll Indicator */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in relative">
            <Button
              size="lg"
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold text-lg px-10 py-4 rounded-xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-yellow-500/25"
            >
              Register Now
            </Button>

            {/* Scroll Indicator - Centered between buttons */}
            <button
              onClick={scrollToNext}
              className="text-white/80 hover:text-white transition-colors animate-bounce sm:order-none order-last mt-4 sm:mt-0"
              aria-label="Scroll to next section"
            >
              <ChevronDown size={32} />
            </button>

            <Button
              size="lg"
              variant="outline"
              className="text-white border-2 border-white/50 hover:bg-white hover:text-primary text-lg px-10 py-4 rounded-xl backdrop-blur-sm bg-white/10 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Download Brochure
            </Button>
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-secondary/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-primary/20 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-10 w-12 h-12 bg-accent/20 rounded-full animate-pulse delay-500"></div>
      </div>
    </section>
  );
};

export default HeroSection;