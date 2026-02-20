export type ProductArticle = {
  id: number;
  title: string;
  excerpt: string;
  imageUrl: string;
};

export type ProductItem = {
  id: number;
  slug: string;
  title: string;
  label: string;
  description: string;
  imageUrl: string;
  heroDescription: string;
  demoLabel: string;
  featureHeading: string;
  featureDescription: string;
  featurePoints: string[];
  faqItems: Array<{ question: string; answer: string }>;
  useCases: ProductArticle[];
};

export const productData: ProductItem[] = [
  {
    id: 1,
    slug: "mind-ops",
    title: "Mind Ops",
    label: "System Operations",
    description: "From monitoring to resolution, IT operations must move with intelligence.",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
    heroDescription:
      "Mind Ops membantu tim operasional memonitor insiden, menganalisis akar masalah, dan mengotomasi respons secara real-time.",
    demoLabel: "Explore Demo",
    featureHeading: "Mind Ops mempercepat keputusan operasional",
    featureDescription:
      "Dari observability hingga incident response, Mind Ops mengurangi waktu investigasi dan meningkatkan reliability layanan.",
    featurePoints: [
      "Alert Prioritization",
      "Root Cause Suggestion",
      "Runbook Automation",
      "Cross-team Collaboration"
    ],
    faqItems: [
      {
        question: "Bagaimana Mind Ops membantu tim infrastruktur?",
        answer:
          "Mind Ops mengagregasi sinyal dari berbagai tool monitoring untuk memberi prioritas insiden dan rekomendasi tindakan cepat."
      },
      {
        question: "Apakah Mind Ops bisa diintegrasikan dengan sistem existing?",
        answer: "Ya, Mind Ops mendukung integrasi API dan webhook dengan stack monitoring serta ticketing umum."
      },
      {
        question: "Apakah ada dukungan otomasi?",
        answer: "Ada, tim dapat membuat alur otomasi berbasis policy untuk mengeksekusi runbook secara otomatis."
      }
    ],
    useCases: [
      {
        id: 101,
        title: "Respon Insiden Lintas Tim",
        excerpt: "Sinkronisasi DevOps, NOC, dan Security untuk menurunkan MTTR secara signifikan.",
        imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=700&q=80"
      },
      {
        id: 102,
        title: "Monitoring Proaktif Infrastruktur",
        excerpt: "Deteksi dini anomali server untuk mencegah downtime layanan kritikal.",
        imageUrl: "https://images.unsplash.com/photo-1593341646782-e0b495cff86d?auto=format&fit=crop&w=700&q=80"
      },
      {
        id: 103,
        title: "Automasi Remediasi",
        excerpt: "Eksekusi runbook otomatis pada kondisi tertentu untuk mempercepat recovery.",
        imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=700&q=80"
      }
    ]
  },
  {
    id: 2,
    slug: "mind-sec",
    title: "Mind Sec",
    label: "Threat Analysis",
    description: "Detect risks early and orchestrate faster response across security workflows.",
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    heroDescription:
      "Mind Sec memperkuat security operation center dengan deteksi ancaman lebih dini dan orkestrasi respons yang terukur.",
    demoLabel: "Explore Demo",
    featureHeading: "Mind Sec mengurangi risiko kebocoran data",
    featureDescription:
      "Platform ini menyatukan telemetry keamanan, policy engine, dan workflow investigasi dalam satu dashboard operasional.",
    featurePoints: [
      "Threat Correlation",
      "Attack Surface Visibility",
      "Response Playbooks",
      "Compliance Reporting"
    ],
    faqItems: [
      {
        question: "Apakah Mind Sec cocok untuk enterprise?",
        answer: "Cocok, Mind Sec dirancang untuk kebutuhan multi-tim dan tata kelola keamanan berskala enterprise."
      },
      {
        question: "Bisakah Mind Sec membantu audit compliance?",
        answer: "Ya, data aktivitas keamanan dapat dikompilasi otomatis menjadi laporan compliance periodik."
      },
      {
        question: "Bagaimana dengan integrasi SIEM?",
        answer: "Mind Sec dapat dihubungkan ke SIEM populer untuk ingest event dan orkestrasi incident response."
      }
    ],
    useCases: [
      {
        id: 201,
        title: "Deteksi Akses Anomali",
        excerpt: "Identifikasi pola akses tidak wajar sebelum berdampak ke layanan produksi.",
        imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=700&q=80"
      },
      {
        id: 202,
        title: "Incident Triage Otomatis",
        excerpt: "Prioritas alert berdasarkan severity dan konteks bisnis untuk SOC.",
        imageUrl: "https://images.unsplash.com/photo-1510511233900-1982d92bd835?auto=format&fit=crop&w=700&q=80"
      },
      {
        id: 203,
        title: "Enrichment Intel Ancaman",
        excerpt: "Perkaya indikator serangan dengan threat intelligence eksternal.",
        imageUrl: "https://images.unsplash.com/photo-1544894079-e81a9eb1da8b?auto=format&fit=crop&w=700&q=80"
      }
    ]
  },
  {
    id: 3,
    slug: "visioncraft",
    title: "VisionCraft",
    label: "AI Intelligence",
    description: "Build insight pipelines that turn data signals into real operational impact.",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80",
    heroDescription:
      "Platform AI multimodal yang mengubah ide menjadi visualisasi dan automasi konten secara cepat untuk kebutuhan enterprise.",
    demoLabel: "Explore Demo",
    featureHeading: "VisionCraft mengubah ide menjadi realita",
    featureDescription:
      "Dari prompt cerdas hingga kolaborasi lintas tim, VisionCraft membantu perusahaan menciptakan visual autentik dengan kualitas premium.",
    featurePoints: [
      "Prompts Enhancement",
      "Multi-Provider Integration",
      "Brand Pack Intelligence",
      "Collaborative Workflows"
    ],
    faqItems: [
      {
        question: "Apa yang membuat VisionCraft berbeda dari platform AI lain?",
        answer:
          "VisionCraft fokus untuk kebutuhan enterprise dengan kontrol kualitas, konsistensi brand, dan kolaborasi lintas tim."
      },
      {
        question: "Bagaimana VisionCraft menangani skala proyek besar?",
        answer: "Arsitektur pipeline VisionCraft dirancang modular untuk beban tinggi dan proses paralel multi-tim."
      },
      {
        question: "Apakah VisionCraft aman untuk enterprise?",
        answer: "Ya, platform mendukung kebijakan akses, audit trail, dan opsi deployment sesuai kebutuhan keamanan organisasi."
      },
      {
        question: "Apa yang membuat VisionCraft berbeda dari platform AI lain?",
        answer:
          "VisionCraft fokus untuk kebutuhan enterprise dengan kontrol kualitas, konsistensi brand, dan kolaborasi lintas tim."
      },
      {
        question: "Apa yang membuat VisionCraft berbeda dari platform AI lain?",
        answer:
          "VisionCraft fokus untuk kebutuhan enterprise dengan kontrol kualitas, konsistensi brand, dan kolaborasi lintas tim."
      }
    ],
    useCases: [
      {
        id: 301,
        title: "Kesadaran Keselamatan Berbasis AI",
        excerpt: "Membuat video edukasi HSSE yang autentik dan konsisten dengan brand perusahaan.",
        imageUrl: "https://images.unsplash.com/photo-1467447984894-7ac6e7247bf6?auto=format&fit=crop&w=700&q=80"
      },
      {
        id: 302,
        title: "Konten Visual Operasional",
        excerpt: "Membantu tim operasi membuat konten visual instruksional dengan cepat.",
        imageUrl: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?auto=format&fit=crop&w=700&q=80"
      },
      {
        id: 303,
        title: "Brand Visual Consistency",
        excerpt: "Menjaga gaya visual lintas channel agar tetap seragam untuk kebutuhan kampanye.",
        imageUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=700&q=80"
      }
    ]
  }
];

export const getProductBySlug = (slug: string) =>
  productData.find((item) => item.slug.toLowerCase() === slug.toLowerCase());
