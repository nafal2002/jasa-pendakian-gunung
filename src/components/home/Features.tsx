
import { Shield, Clock, Users, Award, Coffee, Map } from "lucide-react";

const Features = () => {
  return (
    <section id="features" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Kenapa Memilih Kami?</h2>
        <p className="section-subtitle">
          MountainID hadir dengan layanan terbaik untuk memastikan petualangan pendakian Anda aman, nyaman, dan berkesan.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <FeatureCard 
            icon={<Shield size={24} />}
            title="Keamanan Terjamin"
            description="Tim pemandu bersertifikasi dengan pengalaman pendakian dan pengetahuan P3K lengkap."
          />
          
          <FeatureCard 
            icon={<Clock size={24} />}
            title="Fleksibilitas Jadwal"
            description="Pilih jadwal yang sesuai dengan kebutuhan Anda, baik untuk trip individu maupun kelompok."
          />
          
          <FeatureCard 
            icon={<Users size={24} />}
            title="Open & Private Trip"
            description="Bergabung dengan kelompok lain atau nikmati eksklusivitas dengan tim Anda sendiri."
          />
          
          <FeatureCard 
            icon={<Award size={24} />}
            title="Peralatan Berkualitas"
            description="Semua peralatan pendakian kami terawat dengan baik dan selalu diperiksa secara berkala."
          />
          
          <FeatureCard 
            icon={<Coffee size={24} />}
            title="Makanan Bergizi"
            description="Menu makanan pendakian bergizi tinggi untuk menjaga stamina selama perjalanan."
          />
          
          <FeatureCard 
            icon={<Map size={24} />}
            title="Rute Terbaik"
            description="Panduan rute pendakian yang optimal dengan spot-spot pemandangan terbaik."
          />
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}) => {
  return (
    <div className="glass-card p-6 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
      <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
        <div className="text-primary">{icon}</div>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Features;
