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
    const featuresSection = document.getElementById("features");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-between text-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/jasa pendakian.jpeg')",
          backgroundPosition: "center",
          filter: "brightness(0.7)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-grow px-4 md:py-16 max-w-screen-xl mx-auto">
        <div
          className={`max-w-4xl transition-all duration-1000 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Judul */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
            <span style={{ color: "#FF4500" }}>Jelajahi Keindahan</span>{" "}
            <span style={{ color: "#FFD700" }}>Gunung-Gunung</span>{" "}
            <span style={{ color: "#40E0D0" }}>Indonesia</span>
          </h1>

          {/* Subjudul */}
          <p
            className="text-lg sm:text-xl md:text-2xl font-bold mb-6 sm:mb-8 max-w-3xl mx-auto"
            style={{
              color: "#ffffff",
              textShadow: "2px 2px 4px #000000",
            }}
          >
            Layanan pendakian profesional dengan pengalaman dan keamanan terbaik
            untuk petualangan tak terlupakan.
          </p>

          {/* Tombol */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="text-md px-6 sm:px-8 py-4 sm:py-6" asChild>
              <Link to="/mountains">Lihat Gunung</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-md px-6 sm:px-8 py-4 sm:py-6 bg-white/10 text-white border-white/30 hover:bg-white/20"
              asChild
            >
              <Link to="/packages">Paket Pendakian</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator (Paling Bawah & Responsif) */}
      <div
        className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-6 sm:mb-8 md:mb-12 flex flex-col items-center transition-opacity duration-1000 ${
          loaded ? "opacity-80" : "opacity-0"
        }`}
      >
        <button
          onClick={handleScrollDown}
          className="flex flex-col items-center hover:opacity-100 transition-opacity"
          aria-label="Scroll down"
        >
          <span
            className="mb-2 font-bold text-base sm:text-lg"
            style={{
              color: "#FF4500",
              textShadow: "2px 2px 4px #FFD700, -2px -2px 4px #40E0D0",
            }}
          >
            Gulir ke bawah
          </span>
          <ChevronDown className="animate-bounce" size={24} style={{ color: "#FFD700" }} />
        </button>
      </div>
    </div>
  );
};

export default Hero;
