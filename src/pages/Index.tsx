
import { useEffect } from "react";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import MountainSelection from "@/components/home/MountainSelection";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Chatbot from "@/components/chatbot/Chatbot";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { PackageCard } from "@/components/packages/PackageCard";
import { packages } from "@/utils/packages";

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
      <section className="section-container bg-gray-50">
        <h2 className="section-title">Paket Pendakian</h2>
        <p className="section-subtitle">
          Kami menawarkan berbagai paket pendakian untuk memenuhi kebutuhan Anda.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {packages.map((pkg) => (
            <PackageCard 
              key={pkg.id} 
              pkg={pkg} 
              featured={pkg.id === "premium"}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild>
            <Link to="/packages">Lihat Semua Paket</Link>
          </Button>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 relative overflow-hidden bg-cover bg-center" style={{ 
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/testimonial-bg.jpg')" 
      }}>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Kata Mereka</h2>
          <p className="text-lg text-white/80 mb-12 max-w-3xl mx-auto">
            Pendapat dari para pendaki yang telah menggunakan jasa MountainID
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
      
      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Siap Untuk Petualangan Berikutnya?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Ayo jelajahi keindahan gunung-gunung Indonesia bersama kami.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button size="lg" variant="secondary" className="min-w-[150px]" asChild>
              <Link to="/mountains">Lihat Gunung</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 min-w-[150px]" asChild>
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
  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
    <p className="text-white mb-6 italic">"{quote}"</p>
    <div>
      <div className="font-medium text-white">{author}</div>
      <div className="text-white/70 text-sm">{role}</div>
    </div>
  </div>
);

export default Index;
