
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mountain, getMountainsByDifficulty } from "@/utils/mountains";
import { motion } from "framer-motion";

const MountainSelection = () => {
  const [activeTab, setActiveTab] = useState<'Pemula' | 'Menengah' | 'Profesional'>('Pemula');
  const [mountains, setMountains] = useState<Mountain[]>([]);
  
  useEffect(() => {
    setMountains(getMountainsByDifficulty(activeTab));
  }, [activeTab]);
  
  return (
    <section id="mountains" className="section-container">
      <h2 className="section-title">Pilih Gunung Sesuai Kemampuan</h2>
      <p className="section-subtitle">
        Kami menyediakan berbagai destinasi gunung yang disesuaikan dengan tingkat pengalaman Anda.
      </p>
      
      {/* Difficulty Tabs */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex bg-gray-100 rounded-lg p-1">
          <DifficultyTab active={activeTab === 'Pemula'} onClick={() => setActiveTab('Pemula')}>
            Pemula
          </DifficultyTab>
          <DifficultyTab active={activeTab === 'Menengah'} onClick={() => setActiveTab('Menengah')}>
            Menengah
          </DifficultyTab>
          <DifficultyTab active={activeTab === 'Profesional'} onClick={() => setActiveTab('Profesional')}>
            Profesional
          </DifficultyTab>
        </div>
      </div>
      
      {/* Mountain Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mountains.map((mountain) => (
          <MountainCard key={mountain.id} mountain={mountain} />
        ))}
      </div>
      
      {/* View All Button */}
      <div className="text-center mt-12">
        <Button size="lg" variant="outline" asChild>
          <Link to="/mountains">Lihat Semua Gunung</Link>
        </Button>
      </div>
    </section>
  );
};

// Difficulty Tab Component
const DifficultyTab = ({ 
  active, 
  onClick, 
  children 
}: { 
  active: boolean; 
  onClick: () => void; 
  children: React.ReactNode 
}) => (
  <button
    onClick={onClick}
    className={`px-6 py-2 text-sm font-medium rounded-md transition-all ${
      active 
        ? 'bg-white text-primary shadow-sm' 
        : 'text-gray-600 hover:text-primary'
    }`}
  >
    {children}
  </button>
);

// Mountain Card Component
const MountainCard = ({ mountain }: { mountain: Mountain }) => {
  return (
    <div className="glass-card overflow-hidden group hover:scale-[1.02] transition-all duration-300">
      {/* Mountain Image */}
      <div className="h-48 overflow-hidden relative">
        <div 
          className="w-full h-full bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
          style={{ backgroundImage: `url(${mountain.image})` }}
        />
        <div className="absolute top-3 right-3 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
          {mountain.difficulty}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-xl font-bold text-gray-900">{mountain.name}</h3>
            <p className="text-sm text-gray-600">{mountain.location}</p>
          </div>
          <div className="text-right">
            <span className="text-sm font-medium text-gray-800">{mountain.height}</span>
            <p className="text-xs text-gray-500">{mountain.duration}</p>
          </div>
        </div>
        
        <p className="text-gray-700 text-sm line-clamp-2 mb-4">
          {mountain.description}
        </p>
        
        <div className="flex justify-between items-center">
          <Link 
            to={`/mountains/${mountain.id}`}
            className="text-primary font-medium text-sm hover:underline"
          >
            Lihat Detail
          </Link>
          <Button size="sm" variant="secondary" asChild>
            <Link to={`/book/${mountain.id}`}>
              Pesan Sekarang
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MountainSelection;
