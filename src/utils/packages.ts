
export interface TrekkingPackage {
  id: string;
  name: string;
  type: 'Open Trip' | 'Private Trip' | 'Special';
  description: string;
  features: string[];
  price: string;
  image: string;
  paymentLink: string;
}

export const packages: TrekkingPackage[] = [
  {
    id: "standard",
    name: "Paket Pendakian Standar",
    type: "Open Trip",
    description: "Bergabung dengan kelompok pendaki lain dengan jadwal yang telah ditentukan. Cocok untuk pendaki solo atau yang ingin mengenal teman baru.",
    features: [
      "Guide profesional",
      "Transportasi dari meeting point",
      "Alat masak bersama",
      "Izin pendakian",
      "Tenda kelompok (2-3 orang)"
    ],
    price: "Mulai Rp 850.000/orang",
    image: "/images/package-standard.jpg",
    paymentLink: "https://app.midtrans.com/payment-links/1741098444860"
  },
  {
    id: "premium",
    name: "Paket Pendakian Premium",
    type: "Private Trip",
    description: "Eksklusif untuk grup Anda sendiri dengan fleksibilitas jadwal. Ideal untuk kelompok teman atau keluarga yang ingin privasi lebih.",
    features: [
      "Guide & porter pribadi",
      "Transportasi door-to-door",
      "Makanan 3x sehari",
      "Peralatan camping lengkap",
      "Asuransi pendakian",
      "Dokumentasi perjalanan"
    ],
    price: "Mulai Rp 1.500.000/orang (min. 4 orang)",
    image: "/images/package-premium.jpg",
    paymentLink: "https://app.midtrans.com/payment-links/1741098590063"
  },
  {
    id: "special",
    name: "Paket Pendakian Grup Special",
    type: "Special",
    description: "Pengalaman pendakian eksklusif dengan layanan premium dan dipersonalisasi. Cocok untuk perusahaan, gathering, atau acara spesial.",
    features: [
      "Tim guide & porter profesional",
      "Transportasi premium",
      "Katering kualitas terbaik",
      "Tenda & peralatan high-end",
      "Konsultasi persiapan khusus",
      "Videografer profesional",
      "Welcome/farewell dinner"
    ],
    price: "Mulai Rp 2.500.000/orang (min. 8 orang)",
    image: "/images/package-special.jpg",
    paymentLink: "https://app.midtrans.com/payment-links/1741098788880"
  }
];

export const getPackageById = (id: string): TrekkingPackage | undefined => {
  return packages.find(pkg => pkg.id === id);
};
