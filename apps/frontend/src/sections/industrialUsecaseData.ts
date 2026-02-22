export type IndustrialUsecaseCard = {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
};

export type IndustryItem = {
  id: string;
  number: string;
  label: string;
  cards: IndustrialUsecaseCard[];
};

export const industrialUsecaseData: IndustryItem[] = [
  {
    id: "energy",
    number: "01",
    label: "Energy & Utilities",
    cards: [
      {
        id: "energy-1",
        title: "Predictive Maintenance",
        excerpt: "Deteksi potensi gangguan aset lebih awal untuk mencegah downtime operasional.",
        imageUrl: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=900&q=80"
      },
      {
        id: "energy-2",
        title: "Grid Monitoring",
        excerpt: "Pantau beban dan anomali jaringan listrik secara real-time lintas wilayah.",
        imageUrl: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=900&q=80"
      },
      {
        id: "energy-3",
        title: "Safety Workflow",
        excerpt: "Standarisasi prosedur keselamatan kerja lapangan dengan insight berbasis AI.",
        imageUrl: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80"
      }
    ]
  },
  {
    id: "manufacturing",
    number: "02",
    label: "Manufacturing",
    cards: [
      {
        id: "manu-1",
        title: "Quality Inspection",
        excerpt: "Pemeriksaan kualitas visual otomatis untuk menekan defect di lini produksi.",
        imageUrl: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=900&q=80"
      },
      {
        id: "manu-2",
        title: "Production Intelligence",
        excerpt: "Analitik performa mesin untuk optimasi throughput dan efisiensi energi.",
        imageUrl: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=900&q=80"
      },
      {
        id: "manu-3",
        title: "Operator Assistance",
        excerpt: "Panduan kerja kontekstual untuk mengurangi human error di shop floor.",
        imageUrl: "https://images.unsplash.com/photo-1581093588401-22d5c7f8f5ad?auto=format&fit=crop&w=900&q=80"
      }
    ]
  },
  {
    id: "finance",
    number: "03",
    label: "Financial Services",
    cards: [
      {
        id: "fin-1",
        title: "Fraud Detection",
        excerpt: "Identifikasi transaksi mencurigakan dengan model anomali adaptif.",
        imageUrl: "https://images.unsplash.com/photo-1550565118-3a14e8d0386f?auto=format&fit=crop&w=900&q=80"
      },
      {
        id: "fin-2",
        title: "Risk Scoring",
        excerpt: "Skor risiko kredit lebih akurat berbasis multi-sinyal operasional.",
        imageUrl: "https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&w=900&q=80"
      },
      {
        id: "fin-3",
        title: "Customer Insight",
        excerpt: "Personalisasi layanan dengan segmentasi perilaku nasabah secara dinamis.",
        imageUrl: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=900&q=80"
      }
    ]
  },
  {
    id: "public-sector",
    number: "04",
    label: "Public Sector",
    cards: [
      {
        id: "gov-1",
        title: "Service Desk AI",
        excerpt: "Percepat respons layanan publik dengan triase tiket otomatis.",
        imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80"
      },
      {
        id: "gov-2",
        title: "Operational Command",
        excerpt: "Dashboard terpadu untuk pemantauan operasi lintas instansi.",
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80"
      },
      {
        id: "gov-3",
        title: "Compliance Reporting",
        excerpt: "Otomasi dokumentasi dan pelaporan kebijakan secara terstruktur.",
        imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80"
      }
    ]
  }
];
