
import { Helmet } from "react-helmet";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const About = () => {
  return (
    <>
      <Helmet>
        <title>Tentang Kami | MountainID</title>
        <meta name="description" content="Tentang MountainID - Platform pendakian gunung terbaik di Indonesia." />
      </Helmet>

      <Navbar />
      
      <main className="pt-24 pb-16">
        <section className="container mx-auto px-4 md:px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-green-800">
              Tentang MountainID
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="lead text-xl text-gray-700 mb-8">
                MountainID adalah platform yang didedikasikan untuk para pecinta gunung dan alam Indonesia.
                Kami bertujuan untuk memberikan akses mudah dan informasi terpercaya tentang pendakian gunung di Indonesia.
              </p>
              
              <h2 className="text-2xl font-semibold text-green-700 mt-10 mb-4">Visi Kami</h2>
              <p>
                Menjadi platform utama yang mempertemukan pendaki dengan keindahan gunung-gunung di Indonesia,
                sambil mempromosikan pendakian yang bertanggung jawab dan pelestarian alam.
              </p>
              
              <h2 className="text-2xl font-semibold text-green-700 mt-10 mb-4">Misi Kami</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Menyediakan informasi akurat dan terkini tentang gunung-gunung di Indonesia</li>
                <li>Memfasilitasi pendakian yang aman dan nyaman melalui paket dan panduan kami</li>
                <li>Mendidik masyarakat tentang pentingnya menjaga kelestarian alam pegunungan</li>
                <li>Mendukung komunitas lokal di sekitar area pendakian</li>
                <li>Meningkatkan pengalaman pendakian dengan layanan yang profesional</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-green-700 mt-10 mb-4">Tim Kami</h2>
              <p>
                MountainID didirikan oleh sekelompok pendaki berpengalaman dan pecinta alam yang memiliki
                passion untuk menjelajahi keindahan gunung-gunung di Indonesia. Tim kami terdiri dari:
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mt-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-green-600 mb-2">Budi Santoso</h3>
                  <p className="text-sm text-gray-500 mb-3">Pendiri & CEO</p>
                  <p className="text-gray-700">
                    Pendaki berpengalaman dengan lebih dari 50 puncak gunung yang telah didaki di seluruh Indonesia.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-green-600 mb-2">Siti Rahayu</h3>
                  <p className="text-sm text-gray-500 mb-3">Kepala Operasional</p>
                  <p className="text-gray-700">
                    Ahli logistik pendakian dengan pengalaman 8 tahun mengelola ekspedisi gunung.
                  </p>
                </div>
              </div>
              
              <h2 className="text-2xl font-semibold text-green-700 mt-10 mb-4">Kontak Kami</h2>
              <p>
                Kami senang mendengar dari Anda. Jika Anda memiliki pertanyaan, saran, atau ingin 
                berkolaborasi, silakan hubungi kami melalui:
              </p>
              
              <ul className="list-none pl-0 space-y-2">
                <li><strong>Email:</strong> info@mountainid.com</li>
                <li><strong>Telepon:</strong> +62 812-3456-7890</li>
                <li><strong>Alamat:</strong> Jl. Pendaki No. 123, Jakarta Selatan</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default About;
