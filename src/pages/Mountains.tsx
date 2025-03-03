
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MountainCard from "@/components/mountains/MountainCard";
import { mountains } from "@/utils/mountains";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Filter, Search, ArrowUpDown } from "lucide-react";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Chatbot from "@/components/chatbot/Chatbot";

type DifficultyFilter = 'all' | 'Pemula' | 'Menengah' | 'Profesional';
type SortOption = 'name-asc' | 'name-desc' | 'height-asc' | 'height-desc';

const Mountains = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState<DifficultyFilter>('all');
  const [sortOption, setSortOption] = useState<SortOption>('name-asc');
  
  // Filter mountains based on search and difficulty
  const filteredMountains = mountains.filter(mountain => {
    // Search filter
    const matchesSearch = mountain.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         mountain.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Difficulty filter
    const matchesDifficulty = difficultyFilter === 'all' || mountain.difficulty === difficultyFilter;
    
    return matchesSearch && matchesDifficulty;
  });
  
  // Sort mountains
  const sortedMountains = [...filteredMountains].sort((a, b) => {
    switch (sortOption) {
      case 'name-asc':
        return a.name.localeCompare(b.name);
      case 'name-desc':
        return b.name.localeCompare(a.name);
      case 'height-asc':
        return parseInt(a.height) - parseInt(b.height);
      case 'height-desc':
        return parseInt(b.height) - parseInt(a.height);
      default:
        return 0;
    }
  });
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Header */}
      <div className="bg-primary text-white pt-28 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Gunung-Gunung Indonesia</h1>
          <p className="text-lg text-white/80 max-w-3xl">
            Jelajahi keindahan alam pegunungan Indonesia dari yang mudah hingga paling menantang.
            Temukan destinasi pendakian yang sesuai dengan tingkat pengalaman Anda.
          </p>
        </div>
      </div>
      
      {/* Filters */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                className="pl-10"
                placeholder="Cari gunung atau lokasi..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            {/* Filters */}
            <div className="flex gap-3">
              <div className="w-40">
                <Select 
                  value={difficultyFilter}
                  onValueChange={(value) => setDifficultyFilter(value as DifficultyFilter)}
                >
                  <SelectTrigger className="h-full">
                    <div className="flex items-center">
                      <Filter size={16} className="mr-2" />
                      <SelectValue placeholder="Tingkat Kesulitan" />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Semua Tingkat</SelectItem>
                    <SelectItem value="Pemula">Pemula</SelectItem>
                    <SelectItem value="Menengah">Menengah</SelectItem>
                    <SelectItem value="Profesional">Profesional</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="w-40">
                <Select 
                  value={sortOption}
                  onValueChange={(value) => setSortOption(value as SortOption)}
                >
                  <SelectTrigger className="h-full">
                    <div className="flex items-center">
                      <ArrowUpDown size={16} className="mr-2" />
                      <SelectValue placeholder="Urutkan" />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="name-asc">Nama (A-Z)</SelectItem>
                    <SelectItem value="name-desc">Nama (Z-A)</SelectItem>
                    <SelectItem value="height-asc">Ketinggian (Rendah-Tinggi)</SelectItem>
                    <SelectItem value="height-desc">Ketinggian (Tinggi-Rendah)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mountain List */}
      <main className="flex-1 bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          {sortedMountains.length > 0 ? (
            <>
              <div className="text-sm text-gray-500 mb-6">
                Menampilkan {sortedMountains.length} gunung
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedMountains.map(mountain => (
                  <MountainCard 
                    key={mountain.id} 
                    mountain={mountain} 
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-700 mb-2">Tidak ada gunung yang ditemukan</h3>
              <p className="text-gray-500 mb-6">Coba ubah pencarian atau filter Anda</p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchTerm('');
                  setDifficultyFilter('all');
                }}
              >
                Reset Filter
              </Button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Mountains;
