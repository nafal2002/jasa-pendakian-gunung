
import { useEffect } from "react";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import MountainSelection from "@/components/home/MountainSelection";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Chatbot from "@/components/chatbot/Chatbot";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import PackageCard from "@/components/packages/PackageCard";
import { packages } from "@/utils/packages";
import { ArrowRight } from "lucide-react";

const Index = () => {
  // Create folder for images
  useEffect(() => {
    // When component mounts, we'd create these folders in a real app
    console.log("Home page mounted");
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Features Section */}
      <Features />
      
      {/* Mountain Selection */}
      <MountainSelection />
      
      {/* Packages Section */}
      <section className="section-container bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-3xl md:text-4xl font-bold mb-3">Paket Pendakian Terbaik</h2>
          <p className="section-subtitle text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            Kami menawarkan berbagai paket pendakian untuk memenuhi kebutuhan Anda.
            Pilih sesuai keinginan dan kemampuan Anda.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {packages.map((pkg) => (
              <PackageCard 
                key={pkg.id} 
                pkg={pkg} 
                featured={pkg.id === "premium"}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg" className="rounded-full px-8 py-6 text-base font-medium">
              <Link to="/packages" className="flex items-center gap-2">
                Lihat Semua Paket <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section - Enhanced design */}
      <section className="py-24 relative overflow-hidden bg-cover bg-center" style={{ 
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url('/images/testimonial-bg.jpg')" 
      }}>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Kata Mereka</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-white/90 mb-16 max-w-3xl mx-auto">
            Pendapat dari para pendaki yang telah menggunakan jasa MountainID
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="Pendakian pertama saya ke Gunung Prau bersama MountainID sangat berkesan. Guide sangat profesional dan membantu."
              author="Andi Pratama"
              role="Pendaki Pemula"
            />
            <TestimonialCard 
              quote="Sudah 3 kali naik gunung bersama MountainID. Pelayanan selalu konsisten dan memuaskan. Recommended!"
              author="Dewi Lestari"
              role="Pendaki Hobi"
            />
            <TestimonialCard 
              quote="Pendakian Rinjani bersama tim MountainID jadi pengalaman tak terlupakan. Tim yang solid dan peralatan berkualitas."
              author="Reza Mahendra"
              role="Pendaki Berpengalaman"
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section - Improved design */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Siap Untuk Petualangan Berikutnya?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
            Ayo jelajahi keindahan gunung-gunung Indonesia bersama kami.
            Pengalaman tak terlupakan menanti Anda!
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Button size="lg" variant="secondary" className="min-w-[180px] text-base font-medium" asChild>
              <Link to="/mountains">Lihat Gunung</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20 min-w-[180px] text-base font-medium" asChild>
              <Link to="/packages">Pilih Paket</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
      
      {/* Chatbot */}
      <Chatbot />
    </div>
  );
};

const TestimonialCard = ({ quote, author, role }: { quote: string, author: string, role: string }) => (
  <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg hover:bg-white/15 transition-colors duration-300 transform hover:-translate-y-1">
    <div className="mb-6 text-accent">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.3333 16.6667H8.33333V26.6667H18.3333V16.6667ZM31.6667 16.6667H21.6667V26.6667H31.6667V16.6667ZM25 0V40H15V0H25Z" fill="currentColor" fillOpacity="0.2"/>
      </svg>
    </div>
    <p className="text-white text-lg mb-8 italic leading-relaxed">"{quote}"</p>
    <div className="border-t border-white/20 pt-4">
      <div className="font-medium text-white text-lg">{author}</div>
      <div className="text-white/70 text-sm">{role}</div>
    </div>
  </div>
);

export default Index;
