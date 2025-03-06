
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
    paymentLink: "https://app.midtrans.com/payment-links/1740994095699"
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
    paymentLink: "https://app.midtrans.com/payment-links/1740994308456"
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
    paymentLink: "https://app.midtrans.com/payment-links/1741098788880"
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
    paymentLink: "https://app.midtrans.com/payment-links/1740994172314"
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
    paymentLink: "https://app.midtrans.com/payment-links/1740992620090"
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
    paymentLink: "https://app.midtrans.com/payment-links/1740992620090"
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
    paymentLink: "https://app.midtrans.com/payment-links/1740994015383"
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
    paymentLink: "https://app.midtrans.com/payment-links/1740993873394"
  },
  {
    id: "kerinci",
    name: "Gunung Kerinci",
    height: "3.805 mdpl",
    location: "Jambi/Sumatera Barat",
    difficulty: "Profesional",
    duration: "3-5 hari",
    description: "Gunung Kerinci adalah gunung tertinggi di Sumatera dan gunung berapi tertinggi di Indonesia. Pendakiannya sangat menantang dengan hutan lebat dan cuaca yang sering berubah.",
    image: "/images/kerinci.jpg",
    features: ["Gunung tertinggi Sumatera", "Hutan tropis lebat", "Keanekaragaman hayati tinggi", "Cuaca ekstrem"],
    paymentLink: "https://app.midtrans.com/payment-links/1740994256008"
  }
];

export const getMountainsByDifficulty = (difficulty: 'Pemula' | 'Menengah' | 'Profesional'): Mountain[] => {
  return mountains.filter(mountain => mountain.difficulty === difficulty);
};

export const getMountainById = (id: string): Mountain | undefined => {
  return mountains.find(mountain => mountain.id === id);
};
