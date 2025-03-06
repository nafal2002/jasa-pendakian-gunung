export interface Mountain {
  id: string;
  name: string;
  height: string;
  location: string;
  difficulty: 'Pemula' | 'Menengah' | 'Profesional';
  duration: string;
  description: string;
  image: string;
  features: string[];
  price: number;
  paymentLink: string;
}

export const mountains: Mountain[] = [
  {
    id: "bromo",
    name: "Gunung Bromo",
    height: "2.329 mdpl",
    location: "Jawa Timur",
    difficulty: "Pemula",
    duration: "1-2 hari",
    description: "Gunung Bromo terkenal dengan kawahnya yang aktif dan pemandangan matahari terbit yang spektakuler dari Bukit Penanjakan. Ideal untuk pendaki pemula karena jalur pendakiannya relatif mudah.",
    image: "/images/bromo.PNG",
    features: ["Kawah aktif", "Lautan pasir", "Matahari terbit spektakuler", "Rute pendakian mudah"],
    price: 1200000,
    paymentLink: "https://app.midtrans.com/payment-links/1741275619637"
  },
  {
    id: "prau",
    name: "Gunung Prau",
    height: "2.565 mdpl",
    location: "Jawa Tengah",
    difficulty: "Pemula",
    duration: "1-2 hari",
    description: "Gunung Prau terkenal dengan padang rumput yang luas di puncaknya dan pemandangan Dieng Plateau. Sangat cocok untuk pendaki pemula dengan waktu tempuh yang relatif singkat.",
    image: "/images/prau.PNG",
    features: ["Padang rumput luas", "Pemandangan Dieng Plateau", "Golden sunrise", "Trek pendek"],
    price: 1000000,
    paymentLink: "https://app.midtrans.com/payment-links/1741275820571"
  },
  {
    id: "andong",
    name: "Gunung Andong",
    height: "1.726 mdpl",
    location: "Jawa Tengah",
    difficulty: "Pemula",
    duration: "1 hari",
    description: "Gunung Andong merupakan gunung yang relatif rendah dengan jalur pendakian yang mudah. Ideal untuk pendaki pemula atau keluarga yang ingin menikmati pemandangan alam yang indah.",
    image: "/images/andong.jpg",
    features: ["Trek pendek", "Pemandangan kota Magelang", "Camping ground luas", "Pendakian keluarga"],
    price: 800000,
    paymentLink: "https://app.midtrans.com/payment-links/1741275891247"
  },
  {
    id: "merbabu",
    name: "Gunung Merbabu",
    height: "3.145 mdpl",
    location: "Jawa Tengah",
    difficulty: "Menengah",
    duration: "2-3 hari",
    description: "Gunung Merbabu menawarkan pemandangan spektakuler dan sabana yang luas. Ideal untuk pendaki dengan pengalaman menengah karena memerlukan stamina yang cukup baik.",
    image: "/images/merbabu.jpg",
    features: ["Sabana luas", "Pemandangan Merapi", "Camping ground strategis", "Trek bervariasi"],
    price: 1500000,
    paymentLink: "https://app.midtrans.com/payment-links/1741276287413"
  },
  {
    id: "gede",
    name: "Gunung Gede",
    height: "2.958 mdpl",
    location: "Jawa Barat",
    difficulty: "Menengah",
    duration: "2-3 hari",
    description: "Gunung Gede terletak dalam kompleks Taman Nasional Gede Pangrango. Memiliki keanekaragaman hayati yang tinggi dengan hutan tropis yang lebat dan air terjun.",
    image: "/images/gede.jpg",
    features: ["Air terjun", "Hutan tropis", "Danau Biru", "Flora & fauna beragam"],
    price: 1400000,
    paymentLink: "https://app.midtrans.com/payment-links/1741276741901"
  },
  {
    id: "papandayan",
    name: "Gunung Papandayan",
    height: "2.665 mdpl",
    location: "Jawa Barat",
    difficulty: "Menengah",
    duration: "1-2 hari",
    description: "Gunung Papandayan adalah gunung berapi aktif dengan kawah dan hutan edelweiss yang luas. Trek pendakiannya bervariasi dan cukup menantang untuk pendaki tingkat menengah.",
    image: "/images/papandayan.jpg",
    features: ["Kawah aktif", "Hutan Edelweiss", "Padang pasir", "Sumber air panas"],
    price: 1300000,
    paymentLink: "https://app.midtrans.com/payment-links/1741276807201"
  },
  {
    id: "rinjani",
    name: "Gunung Rinjani",
    height: "3.726 mdpl",
    location: "Nusa Tenggara Barat",
    difficulty: "Profesional",
    duration: "3-4 hari",
    description: "Gunung Rinjani adalah gunung berapi kedua tertinggi di Indonesia dengan Danau Segara Anak di kawahnya. Pendakian yang menantang dengan pemandangan spektakuler.",
    image: "/images/rinjani.jpg",
    features: ["Danau kawah", "Pemandangan spektakuler", "Air panas", "Trek menantang"],
    price: 2000000,
    paymentLink: "https://app.midtrans.com/payment-links/1741276882801"
  },
  {
    id: "semeru",
    name: "Gunung Semeru",
    height: "3.676 mdpl",
    location: "Jawa Timur",
    difficulty: "Profesional",
    duration: "3-4 hari",
    description: "Gunung Semeru, atau Mahameru, adalah gunung tertinggi di Pulau Jawa. Menawarkan pendakian yang sangat menantang dengan kawah yang masih aktif dan pemandangan Danau Ranu Kumbolo.",
    image: "/images/semeru.jpg",
    features: ["Kawah aktif", "Danau Ranu Kumbolo", "Padang savana", "Trek ekstrem"],
    price: 1800000,
    paymentLink: "https://app.midtrans.com/payment-links/1741276966899"
  }
];


export const getMountainById = (id: string): Mountain | undefined => {
  return mountains.find(mountain => mountain.id === id);
};

// ================== Booking Page ==================

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const BookingPage = () => {
  const { mountainName } = useParams<{ mountainName: string }>();
  const { user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const mountain = getMountainById(mountainName || "");
  const [paymentUrl, setPaymentUrl] = useState<string | null>(mountain?.paymentLink || null);

  useEffect(() => {
    if (!user) {
      toast({
        title: "Login diperlukan",
        description: "Silakan login terlebih dahulu untuk melakukan pemesanan",
        variant: "destructive",
      });
      navigate("/login");
    }
  }, [user, navigate, toast]);

  const handlePaymentRedirect = () => {
    if (paymentUrl) {
      window.open(paymentUrl, "_blank");
      toast({
        title: "Lanjutkan Pembayaran",
        description: "Silakan selesaikan pembayaran di halaman Midtrans.",
      });
    }
  };

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 py-8">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl text-green-800">
                Pemesanan Pendakian Gunung {mountain?.name || "Tidak Diketahui"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="p-4 bg-green-50 rounded-md border border-green-200">
                <h3 className="font-medium text-green-800 mb-2">Informasi Pemesanan</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span className="text-gray-600">Gunung</span>
                    <span className="font-medium">{mountain?.name || "Tidak Diketahui"}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Total Harga</span>
                    <span className="font-medium text-green-700">Rp {mountain?.price?.toLocaleString("id-ID") || "0"}</span>
                  </li>
                </ul>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              {paymentUrl ? (
                <Button className="w-full bg-green-600 hover:bg-green-700" onClick={handlePaymentRedirect}>
                  Lanjutkan ke Pembayaran Midtrans
                </Button>
              ) : (
                <Button className="w-full bg-gray-400" disabled>
                  Pembayaran Tidak Tersedia
                </Button>
              )}
            </CardFooter>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BookingPage;
