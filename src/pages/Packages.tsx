
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { packages } from "@/utils/packages";
import { PackageCard } from "@/components/packages/PackageCard";
import Chatbot from "@/components/chatbot/Chatbot";
import { Shield, Clock, MapPin, Compass, User, Coffee } from "lucide-react";

const Packages = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Header */}
      <div className="bg-primary text-white pt-28 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Paket Pendakian</h1>
          <p className="text-lg text-white/80 max-w-3xl">
            Pilih paket pendakian yang sesuai dengan kebutuhan dan preferensi Anda.
            Kami menawarkan berbagai opsi untuk pendaki solo maupun grup.
          </p>
        </div>
      </div>
      
      {/* Features */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-12">Semua Paket Termasuk</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <FeatureItem 
              icon={<Shield className="h-5 w-5" />}
              title="Asuransi" 
            />
            <FeatureItem 
              icon={<Clock className="h-5 w-5" />}
              title="Jadwal Fleksibel" 
            />
            <FeatureItem 
              icon={<MapPin className="h-5 w-5" />}
              title="Akses Terbaik" 
            />
            <FeatureItem 
              icon={<Compass className="h-5 w-5" />}
              title="Guide Profesional" 
            />
            <FeatureItem 
              icon={<User className="h-5 w-5" />}
              title="Tim Support" 
            />
            <FeatureItem 
              icon={<Coffee className="h-5 w-5" />}
              title="Welcome Pack" 
            />
          </div>
        </div>
      </div>
      
      {/* Packages */}
      <main className="flex-1 bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-3">Pilih Paket Anda</h2>
          <p className="text-gray-600 mb-8">
            Setiap paket dirancang untuk memberikan pengalaman pendakian terbaik sesuai kebutuhan Anda
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map(pkg => (
              <PackageCard 
                key={pkg.id} 
                pkg={pkg} 
                featured={pkg.id === 'premium'} 
              />
            ))}
          </div>
          
          {/* Comparison */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8">Perbandingan Paket</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-4 px-6 text-left border-b">Fitur</th>
                    <th className="py-4 px-6 text-center border-b">Standar</th>
                    <th className="py-4 px-6 text-center border-b bg-primary/5">Premium</th>
                    <th className="py-4 px-6 text-center border-b">Grup Special</th>
                  </tr>
                </thead>
                <tbody>
                  <ComparisonRow 
                    feature="Tipe Trip" 
                    standard="Open Trip" 
                    premium="Private Trip" 
                    special="Group VIP" 
                  />
                  <ComparisonRow 
                    feature="Guide" 
                    standard="1 Guide per 5-7 orang" 
                    premium="1 Guide per 3-4 orang" 
                    special="Multiple Guides" 
                  />
                  <ComparisonRow 
                    feature="Porter" 
                    standard="Tidak termasuk" 
                    premium="1 Porter per grup" 
                    special="Multiple Porters" 
                  />
                  <ComparisonRow 
                    feature="Makanan" 
                    standard="Perbekalan dasar" 
                    premium="3x sehari" 
                    special="Premium Catering" 
                  />
                  <ComparisonRow 
                    feature="Peralatan" 
                    standard="Tenda kelompok" 
                    premium="Full set peralatan" 
                    special="Premium Equipment" 
                  />
                  <ComparisonRow 
                    feature="Transportasi" 
                    standard="Dari meeting point" 
                    premium="Door to door" 
                    special="Premium Transport" 
                  />
                  <ComparisonRow 
                    feature="Dokumentasi" 
                    standard="Tidak" 
                    premium="Foto" 
                    special="Foto & Video Profesional" 
                  />
                  <ComparisonRow 
                    feature="Harga" 
                    standard="Rp 850.000+" 
                    premium="Rp 1.500.000+" 
                    special="Rp 2.500.000+" 
                  />
                </tbody>
              </table>
            </div>
          </div>
          
          {/* FAQ */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8">Pertanyaan Umum</h2>
            
            <div className="space-y-6">
              <FAQItem 
                question="Bagaimana cara melakukan pembayaran?" 
                answer="Pembayaran dapat dilakukan melalui transfer bank, e-wallet (GoPay, OVO, DANA), QRIS, atau kartu kredit. Anda akan diarahkan ke halaman pembayaran setelah melakukan pemesanan. Perlu diingat bahwa pembayaran harus diselesaikan dalam 24 jam setelah pemesanan." 
              />
              <FAQItem 
                question="Apakah saya bisa mengubah tanggal pendakian?" 
                answer="Ya, Anda dapat mengubah tanggal pendakian selambat-lambatnya 7 hari sebelum tanggal keberangkatan yang sudah dipesan, dengan syarat ketersediaan jadwal masih ada dan dikenakan biaya administrasi sebesar Rp 150.000 per orang." 
              />
              <FAQItem 
                question="Apa saja perlengkapan yang perlu saya bawa?" 
                answer="Perlengkapan dasar yang perlu Anda bawa antara lain: pakaian hangat, jas hujan, sepatu gunung, headlamp, sleeping bag, dan perlengkapan pribadi. Untuk paket Premium dan Special, beberapa peralatan sudah disediakan oleh kami." 
              />
              <FAQItem 
                question="Berapa DP yang harus dibayarkan?" 
                answer="Untuk memastikan pemesanan, Anda perlu membayar minimal 50% dari total biaya paket. Pelunasan dapat dilakukan selambat-lambatnya 3 hari sebelum tanggal keberangkatan." 
              />
              <FAQItem 
                question="Bagaimana kebijakan pembatalan?" 
                answer="Pembatalan 14+ hari sebelum keberangkatan: pengembalian 75% dari total pembayaran. Pembatalan 7-13 hari: pengembalian 50%. Pembatalan kurang dari 7 hari: tidak ada pengembalian." 
              />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      <Chatbot />
    </div>
  );
};

const FeatureItem = ({ icon, title }: { icon: React.ReactNode; title: string }) => (
  <div className="text-center">
    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
      <div className="text-primary">
        {icon}
      </div>
    </div>
    <h3 className="text-sm font-medium">{title}</h3>
  </div>
);

const ComparisonRow = ({ 
  feature, 
  standard, 
  premium, 
  special 
}: { 
  feature: string; 
  standard: string; 
  premium: string; 
  special: string;
}) => (
  <tr className="border-b">
    <td className="py-4 px-6 text-left font-medium">{feature}</td>
    <td className="py-4 px-6 text-center">{standard}</td>
    <td className="py-4 px-6 text-center bg-primary/5">{premium}</td>
    <td className="py-4 px-6 text-center">{special}</td>
  </tr>
);

const FAQItem = ({ question, answer }: { question: string; answer: string }) => (
  <div className="rounded-lg border p-4">
    <h3 className="text-lg font-semibold mb-2">{question}</h3>
    <p className="text-gray-600">{answer}</p>
  </div>
);

export default Packages;
