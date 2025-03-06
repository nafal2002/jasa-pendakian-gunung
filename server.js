const handleBooking = async () => {
    setLoading(true);
  
    try {
      // Simpan data booking ke Supabase terlebih dahulu
      const bookingData = {
        user_id: user?.id,
        mountain_name: mountainName,
        booking_date: new Date().toISOString(),
        status: "pending_payment",
        amount: 1500000, // Harga pendakian
      };
  
      const { data: booking, error } = await supabase
        .from("bookings")
        .insert(bookingData)
        .select()
        .single();
  
      if (error) throw error;
  
      // Panggil backend untuk mendapatkan URL pembayaran dari Midtrans
      const response = await fetch("http://localhost:5000/create-transaction", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: user.id,
          mountainName,
          amount: 1500000,
        }),
      });
  
      const result = await response.json();
      if (!result.paymentUrl || !result.orderId) throw new Error("Gagal mendapatkan URL pembayaran");
  
      // Simpan URL pembayaran ke state
      setPaymentUrl(result.paymentUrl);
  
      // Update booking dengan order ID dari Midtrans
      await supabase
        .from("bookings")
        .update({ payment_token: result.orderId })
        .eq("id", booking.id);
  
      // Notifikasi sukses
      toast({
        title: "Pemesanan Berhasil",
        description: "Silakan lanjutkan ke halaman pembayaran Midtrans.",
      });
    } catch (error) {
      console.error("Error saat membuat booking:", error);
      toast({
        title: "Gagal Membuat Pemesanan",
        description: "Terjadi kesalahan, silakan coba lagi.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };
  