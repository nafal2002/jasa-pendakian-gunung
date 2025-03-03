
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, User } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/lib/supabase";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { user } = useAuth();
  const { toast } = useToast();
  
  // Set navbar style based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);
  
  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      toast({
        title: "Berhasil keluar",
        description: "Anda telah keluar dari akun",
      });
    } catch (error) {
      toast({
        title: "Gagal keluar",
        description: "Terjadi kesalahan saat keluar",
        variant: "destructive",
      });
    }
  };
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/80 backdrop-blur-md shadow-md py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-xl md:text-2xl font-display font-bold text-primary">
              MountainID
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavLink to="/" isActive={location.pathname === "/"}>
              Beranda
            </NavLink>
            <NavLink to="/mountains" isActive={location.pathname.includes("/mountains")}>
              Gunung
            </NavLink>
            <NavLink to="/packages" isActive={location.pathname.includes("/packages")}>
              Paket
            </NavLink>
            <NavLink to="/about" isActive={location.pathname === "/about"}>
              Tentang Kami
            </NavLink>
          </nav>
          
          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-3">
            {user ? (
              <div className="flex items-center space-x-3">
                <span className="text-sm font-medium text-gray-700">
                  {user.email}
                </span>
                <Button variant="outline" size="sm" onClick={handleSignOut}>
                  Keluar
                </Button>
              </div>
            ) : (
              <>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/login">Masuk</Link>
                </Button>
                <Button size="sm" asChild>
                  <Link to="/login">Daftar</Link>
                </Button>
              </>
            )}
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-primary" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-3 mb-6">
              <MobileNavLink to="/" isActive={location.pathname === "/"}>
                Beranda
              </MobileNavLink>
              <MobileNavLink to="/mountains" isActive={location.pathname.includes("/mountains")}>
                Gunung
              </MobileNavLink>
              <MobileNavLink to="/packages" isActive={location.pathname.includes("/packages")}>
                Paket
              </MobileNavLink>
              <MobileNavLink to="/about" isActive={location.pathname === "/about"}>
                Tentang Kami
              </MobileNavLink>
            </nav>
            
            {/* Auth Buttons - Mobile */}
            <div className="flex flex-col space-y-2">
              {user ? (
                <>
                  <div className="py-2 px-4 text-sm font-medium text-gray-700 flex items-center gap-2">
                    <User size={16} />
                    {user.email}
                  </div>
                  <Button variant="outline" size="sm" className="w-full" onClick={handleSignOut}>
                    Keluar
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link to="/login">Masuk</Link>
                  </Button>
                  <Button size="sm" className="w-full" asChild>
                    <Link to="/login">Daftar</Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

// Desktop Navigation Link
const NavLink = ({ 
  to, 
  children, 
  isActive 
}: { 
  to: string; 
  children: React.ReactNode; 
  isActive: boolean;
}) => (
  <Link
    to={to}
    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive 
        ? "text-primary bg-primary/5" 
        : "text-gray-700 hover:text-primary hover:bg-primary/5"
    }`}
  >
    {children}
  </Link>
);

// Mobile Navigation Link
const MobileNavLink = ({ 
  to, 
  children, 
  isActive 
}: { 
  to: string; 
  children: React.ReactNode; 
  isActive: boolean;
}) => (
  <Link
    to={to}
    className={`py-3 px-4 rounded-md text-base font-medium ${
      isActive 
        ? "text-primary bg-primary/5" 
        : "text-gray-700 hover:text-primary hover:bg-primary/5"
    }`}
  >
    {children}
  </Link>
);

export default Navbar;
