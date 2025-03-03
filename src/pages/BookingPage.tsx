
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { supabase } from "@/lib/supabase";

interface MidtransResponse {
  payment_url: string;
  token: string;
}

const BookingPage = () => {
  const { mountainName } = useParams<{ mountainName: string }>();
  const { user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [paymentUrl, setPaymentUrl] = useState<string | null>(null);

  useEffect(() => {
    // Redirect to login if not authenticated
    if (!user) {
      toast({
        title: "Login diperlukan",
        description: "Silakan login terlebih dahulu untuk melakukan pemesanan",
        variant: "destructive",
      });
      navigate("/login");
    }
  }, [user, navigate, toast]);

  // Handle booking and create Midtrans payment link
  const handleBooking = async () => {
    setLoading(true);
    
    try {
      // Create a booking record in Supabase
      const bookingData = {
        user_id: user?.id,
        mountain_name: mountainName,
        booking_date: new Date().toISOString(),
        status: 'pending_payment',
        amount: 1500000, // Rp 1.500.000
      };
      
      const { data: booking, error } = await supabase
        .from('bookings')
        .insert(bookingData)
        .select()
        .single();
        
      if (error) throw error;
      
      // Create Midtrans payment link (in a real app, this would be a server API call)
      // For demo purposes, we're simulating the response
      // In production, this should be a secure server-side API call
      const midtransResponse: MidtransResponse = {
        payment_url: `https://app.sandbox.midtrans.com/payment-links/${Date.now()}`,
        token: `midtrans-token-${Date.now()}`
      };
      
      // Save the payment URL
      setPaymentUrl(midtransResponse.payment_url);
      
      // Update the booking with the payment token
      await supabase
        .from('bookings')
        .update({ payment_token: midtransResponse.token })
        .eq('id', booking.id);
      
      toast({
        title: "Pemesanan berhasil dibuat",
        description: "Silakan lanjutkan ke halaman pembayaran",
      });
      
    } catch (error) {
      console.error("Error creating booking:", error);
      toast({
        title: "Gagal membuat pemesanan",
        description: "Terjadi kesalahan saat membuat pemesanan. Silakan coba lagi.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  // Handle redirection to Midtrans payment page
  const handlePaymentRedirect = () => {
    if (paymentUrl) {
      // Open payment URL in new tab
      window.open(paymentUrl, '_blank');
      
      // Also navigate back to home
      navigate('/');
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
                Pemesanan Pendakian Gunung {mountainName}
              </CardTitle>
              <CardDescription>
                Lengkapi informasi pemesanan Anda untuk mendaki Gunung {mountainName}
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <div className="space-y-6">
                <div className="p-4 bg-green-50 rounded-md border border-green-200">
                  <h3 className="font-medium text-green-800 mb-2">Informasi Pemesanan</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span className="text-gray-600">Gunung</span>
                      <span className="font-medium">{mountainName}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Tanggal</span>
                      <span className="font-medium">{new Date().toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Status</span>
                      <span className="font-medium text-amber-600">Menunggu Pembayaran</span>
                    </li>
                  </ul>
                </div>
                
                <div className="p-4 bg-blue-50 rounded-md border border-blue-200">
                  <h3 className="font-medium text-blue-800 mb-2">Paket Pendakian</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Paket Standar</span>
                      <span className="font-medium">Rp 1.500.000</span>
                    </div>
                    <ul className="list-disc list-inside text-sm text-gray-600 pl-2 space-y-1">
                      <li>Permit pendakian</li>
                      <li>Guide lokal</li>
                      <li>Tenda & peralatan camping</li>
                      <li>Makanan (2x sehari)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
            
            <CardFooter className="flex flex-col space-y-4">
              <div className="w-full flex justify-between items-center pb-4 border-b">
                <span className="text-lg font-medium">Total</span>
                <span className="text-lg font-bold text-green-700">Rp 1.500.000</span>
              </div>
              
              {paymentUrl ? (
                <Button
                  className="w-full bg-green-600 hover:bg-green-700"
                  onClick={handlePaymentRedirect}
                >
                  Lanjutkan ke Pembayaran Midtrans
                </Button>
              ) : (
                <Button
                  className="w-full bg-green-600 hover:bg-green-700"
                  onClick={handleBooking}
                  disabled={loading}
                >
                  {loading ? "Memproses..." : "Lanjutkan ke Pembayaran"}
                </Button>
              )}
              
              <p className="text-xs text-center text-gray-500 mt-2">
                Dengan menekan tombol di atas, Anda menyetujui syarat dan ketentuan pendakian kami.
              </p>
            </CardFooter>
          </Card>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default BookingPage;
