
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">MountainID</h3>
            <p className="mb-4 text-gray-300">
              Jasa pendakian profesional dengan pengalaman lebih dari 10 tahun melayani
              pendaki di seluruh gunung Indonesia.
            </p>
            <div className="flex space-x-4 mt-6">
              <SocialIcon icon={<Facebook size={18} />} href="https://facebook.com" />
              <SocialIcon icon={<Instagram size={18} />} href="https://www.instagram.com/nafdi_/" />
              <SocialIcon icon={<Twitter size={18} />} href="https://twitter.com" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Tautan Cepat</h3>
            <ul className="space-y-2">
              <FooterLink href="/">Beranda</FooterLink>
              <FooterLink href="/mountains">Gunung</FooterLink>
              <FooterLink href="/packages">Paket Pendakian</FooterLink>
              <FooterLink href="/about">Tentang Kami</FooterLink>
              <FooterLink href="/faq">FAQ</FooterLink>
              <FooterLink href="/booking">Cek Pemesanan</FooterLink>
            </ul>
          </div>

          {/* Popular Mountains */}
          <div>
            <h3 className="text-lg font-bold mb-4">Gunung Populer</h3>
            <ul className="space-y-2">
              <FooterLink href="/mountains/rinjani">Gunung Rinjani</FooterLink>
              <FooterLink href="/mountains/semeru">Gunung Semeru</FooterLink>
              <FooterLink href="/mountains/bromo">Gunung Bromo</FooterLink>
              <FooterLink href="/mountains/merbabu">Gunung Merbabu</FooterLink>
              <FooterLink href="/mountains/prau">Gunung Prau</FooterLink>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Hubungi Kami</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mt-1 mr-3 flex-shrink-0" />
                <span>Jl. Pendaki No. 123, Yogyakarta, Indonesia</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 flex-shrink-0" />
                <span>+62 812 3456 7890</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 flex-shrink-0" />
                <span>info@mountainid.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} MountainID. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">
                Syarat & Ketentuan
              </Link>
              <Link to="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">
                Kebijakan Privasi
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon, href }: { icon: React.ReactNode; href: string }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
  >
    {icon}
  </a>
);

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <Link 
      to={href} 
      className="text-gray-300 hover:text-white transition-colors"
    >
      {children}
    </Link>
  </li>
);

export default Footer;
