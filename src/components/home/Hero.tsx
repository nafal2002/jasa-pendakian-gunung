
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleScrollDown = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ 
          backgroundImage: "url('/images/hero-mountains.jpg')", 
          backgroundPosition: "center",
          filter: "brightness(0.7)"
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div 
          className={`max-w-4xl mx-auto transition-all duration-1000 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Jelajahi Keindahan Gunung-Gunung Indonesia
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Layanan pendakian profesional dengan pengalaman dan keamanan terbaik untuk petualangan tak terlupakan.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Button size="lg" className="text-md px-8 py-6" asChild>
              <Link to="/mountains">Lihat Gunung</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-md px-8 py-6 bg-white/10 text-white border-white/30 hover:bg-white/20" asChild>
              <Link to="/packages">Paket Pendakian</Link>
            </Button>
          </div>
        </div>
        
        {/* Scroll Down Indicator */}
        <div 
          className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-sm flex flex-col items-center transition-opacity duration-1000 ${
            loaded ? 'opacity-70' : 'opacity-0'
          }`}
        >
          <button 
            onClick={handleScrollDown}
            className="flex flex-col items-center hover:text-white/100 hover:opacity-100 transition-opacity"
            aria-label="Scroll down"
          >
            <span className="mb-2">Gulir ke bawah</span>
            <ChevronDown className="animate-bounce" size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
