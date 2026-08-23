import type { TFunction } from "i18next";

const visioncraftbasePict = "https://ik.imagekit.io/mindwalker/public/assets/visioncraftBasePict.webp?updatedAt=1772427230672";

export type ProductArticle = {
  id: number;
  title: string;
  excerpt: string;
  imageUrl: string;
};

export type ProductItem = {
  id: number;
  i18nKey: "mindOps" | "mindSec" | "mindGateway" | "visioncraft" | "mindGraph" | "mindFlow";
  slug: string;
  title: string;
  label: string;
  description: string;
  imageUrl: string;
  imageDetailsUrl: string;
  datasheetPdfUrl?: string;
  brocurePDFUrl?: string;
  heroDescription: string;
  demoLabel: string;
  featureHeading: string;
  featureDescription: string;
  featurePoints: string[];
  enterpriseBenefits: Array<{ title: string; description: string }>;
  useCases: ProductArticle[];
  isComingSoon?: boolean;
};

export const productData: ProductItem[] = [
  {
    id: 1,
    i18nKey: "mindOps",
    slug: "mind-ops",
    title: "MindOps",
    label: "IT Operations",
    description:
      "MindOps is an APM (application performance monitoring) platform powered by AI. It brings metrics, logs, and traces together to give teams a clear view of their IT systems. MindOps has an AI agent, Mindy, that detects unusual behavior and helps identify the root cause of system problems. It can run as a complete monitoring platform or alongside existing APM tools, on-premise or in the cloud, while keeping data and AI processing within your network.",
    imageUrl: "https://ik.imagekit.io/mindwalker/public/assets/mindOpsProductSection.webp?updatedAt=1772427231020",
    imageDetailsUrl: "https://ik.imagekit.io/mindwalker/public/assets/mindOpsProductDetails.webp?updatedAt=1772427038224",
    datasheetPdfUrl: "/assets/datasheets/mindops-datasheet.pdf",
    brocurePDFUrl: "/assets/brocure/mindops-product-overview.pdf",
    heroDescription:
      "MindOps membantu tim operasional memonitor insiden, menganalisis akar masalah, dan mengotomasi respons secara real-time.",
    demoLabel: "Explore Demo",
    featureHeading: "MindOps mempercepat keputusan operasional",
    featureDescription:
      "Dari observability hingga incident response, MindOps mengurangi waktu investigasi dan meningkatkan reliability layanan.",
    featurePoints: [
      "Alert Prioritization",
      "Root Cause Suggestion",
      "Issue-Based Action Recommendation",
      "Cross-team Collaboration"
    ],
    enterpriseBenefits: [
      {
        title: "Penurunan Downtime Operasional",
        description:
          "MindOps memprioritaskan insiden kritikal lebih cepat sehingga gangguan layanan dapat ditangani sebelum berdampak luas."
      },
      {
        title: "Efisiensi Tim Lintas Fungsi",
        description: "Integrasi ke tool existing mengurangi kerja manual dan mempercepat kolaborasi DevOps, NOC, dan Support."
      },
      {
        title: "Kecepatan Respon yang Konsisten",
        description:
          "Rekomendasi aksi berbasis issue membantu tim menjalankan langkah penanganan yang tepat dan konsisten di berbagai skenario."
      },
      {
        title: "Peningkatan Stabilitas Layanan",
        description:
          "Pemantauan real-time membantu tim operasi mendeteksi degradasi performa lebih awal sebelum berdampak pada pengguna."
      },
      {
        title: "Biaya Operasional Lebih Terkendali",
        description:
          "Prioritisasi insiden dan rekomendasi aksi kontekstual menekan eskalasi berulang sehingga penggunaan sumber daya lebih efisien."
      }
    ],
    useCases: [
      {
        id: 101,
        title: "Respon Insiden Lintas Tim",
        excerpt: "Sinkronisasi DevOps, NOC, dan Security untuk menurunkan MTTR secara signifikan.",
        imageUrl: "https://visioncraft.tos-ap-southeast-3.bytepluses.com/images/seedream/1772122574311-5d1bb2b0eac2f9cc.jpeg"
      },
      {
        id: 102,
        title: "Monitoring Proaktif Infrastruktur",
        excerpt: "Deteksi dini anomali server untuk mencegah downtime layanan kritikal.",
        imageUrl: "https://visioncraft.tos-ap-southeast-3.bytepluses.com/images/seedream/1772122679878-6a9de8065a5b8a49.jpeg"
      },
      {
        id: 103,
        title: "Rekomendasi Aksi Berbasis Issue",
        excerpt:
          "Sistem merekomendasikan langkah penanganan berdasarkan konteks issue agar tim mempercepat recovery dengan keputusan yang tepat.",
        imageUrl: "https://visioncraft.tos-ap-southeast-3.bytepluses.com/images/seedream/1772122789565-92050b7a3d0b290e.jpeg"
      }
    ]
  },
  {
    id: 2,
    i18nKey: "mindSec",
    slug: "mind-sec",
    title: "MindSOC",
    label: "Security",
    description:
      "MindSOC is an AI-powered security platform that brings alerts from different security systems into one place and helps teams understand potential attacks. Its AI automatically investigates incidents, connects information from different sources, and identifies the likely root cause. MindSOC can send investigation results directly to ticketing systems, helping reduce response time, false alarms, and manual workload while keeping analysts in control.",
    imageUrl: "https://ik.imagekit.io/mindwalker/public/assets/mindSecProductSection.webp?updatedAt=1772427230996",
    imageDetailsUrl: "https://ik.imagekit.io/mindwalker/public/assets/mindSecProductDetails.webp?updatedAt=1772427230829",
    datasheetPdfUrl: "/assets/datasheets/mindsoc-datasheet.pdf",
    brocurePDFUrl: "/assets/brocure/mindsoc-product-overview.pdf",
    heroDescription:
      "MindSOC memperkuat security operation center dengan deteksi ancaman lebih dini dan orkestrasi respons yang terukur.",
    demoLabel: "Explore Demo",
    featureHeading: "MindSOC, tools pintar berbasis AI untuk deteksi serangan siber",
    featureDescription:
      "MindSOC mendeteksi cyber attacks lebih dini, mengkorelasikan sumber serangan secara otomatis, dan membantu tim security menentukan respons paling tepat dalam satu alur kerja terintegrasi.",
    featurePoints: [
      "Threat Correlation",
      "Attack Surface Visibility",
      "Response Playbooks",
      "Compliance Reporting"
    ],
    enterpriseBenefits: [
      {
        title: "Visibilitas Risiko Lebih Menyeluruh",
        description: "MindSOC mengkorelasikan sinyal ancaman agar tim security melihat prioritas risiko secara lebih jelas."
      },
      {
        title: "Kesiapan Audit & Kepatuhan",
        description: "Pelaporan keamanan otomatis membantu organisasi memenuhi kebutuhan audit dan kepatuhan lebih cepat."
      },
      {
        title: "Penanganan Insiden Lebih Terkendali",
        description: "Orkestrasi respons terintegrasi SIEM mempercepat containment insiden sekaligus menurunkan potensi dampak."
      },
      {
        title: "Reduksi Risiko Kebocoran Data",
        description:
          "Deteksi ancaman lebih dini dan korelasi alert lintas sumber membantu mencegah eksfiltrasi data sensitif."
      },
      {
        title: "Pengambilan Keputusan Security Lebih Cepat",
        description:
          "Konteks ancaman yang terpusat mempercepat triage alert dan membantu SOC menentukan tindakan paling efektif."
      }
    ],
    useCases: [
      {
        id: 201,
        title: "Deteksi Akses Anomali",
        excerpt: "Identifikasi pola akses tidak wajar sebelum berdampak ke layanan produksi.",
        imageUrl: "https://visioncraft.tos-ap-southeast-3.bytepluses.com/nano-banana/1772122231579-7c3a1ca9a07869a3.png"
      },
      {
        id: 202,
        title: "Incident Triage Otomatis",
        excerpt: "Prioritas alert berdasarkan severity dan konteks bisnis untuk SOC.",
        imageUrl: "https://visioncraft.tos-ap-southeast-3.bytepluses.com/nano-banana/1772122456184-f4f635df92c1e309.png"
      },
      {
        id: 203,
        title: "Enrichment Intel Ancaman",
        excerpt: "Perkaya indikator serangan dengan threat intelligence eksternal.",
        imageUrl: "https://visioncraft.tos-ap-southeast-3.bytepluses.com/images/seedream/1772012246007-5f6bd65453e67f75.jpeg"
      }
    ]
  },
  {
    id: 3,
    i18nKey: "mindGateway",
    slug: "mind-gateway",
    title: "MindGateway",
    label: "LLM Firewall",
    description: "Gateway keamanan LLM untuk memvalidasi prompt input dan output model secara real-time.",
    imageUrl: "https://ik.imagekit.io/mindwalker/public/assets/mindGateway-productsection%20(3).webp",
    imageDetailsUrl: "https://ik.imagekit.io/mindwalker/public/assets/mindGateway-productDetails%20(1).webp",
    datasheetPdfUrl: "/assets/datasheets/mindgateway-datasheet.pdf",
    brocurePDFUrl: "/assets/brocure/mindgateway-datasheet.pdf",
    heroDescription:
      "MindGateway adalah tools LLM Firewall untuk inspeksi input prompting dan output model, mendukung multimodal LLM, serta rule-based policy di level global, department, dan team pada lingkungan enterprise.",
    demoLabel: "Explore Demo",
    featureHeading: "MindGateway memperkuat governance AI enterprise",
    featureDescription:
      "Lindungi interaksi LLM dengan guardrails adaptif, validasi konten dua arah, dan kebijakan berjenjang untuk menjaga keamanan serta kepatuhan.",
    featurePoints: [
      "Prompt & Response Inspection",
      "Multimodal Policy Enforcement",
      "Hierarchical Rule Management",
      "Audit Trail & Compliance"
    ],
    enterpriseBenefits: [
      {
        title: "Perlindungan AI Berlapis",
        description:
          "Setiap prompt dan respons diperiksa untuk mencegah prompt injection, data leakage, dan output berisiko sebelum sampai ke user."
      },
      {
        title: "Kebijakan Konsisten di Seluruh Organisasi",
        description:
          "Rule dapat diterapkan bertingkat dari global hingga team level agar governance AI tetap seragam namun fleksibel sesuai kebutuhan unit kerja."
      },
      {
        title: "Dukungan Multimodal yang Aman",
        description:
          "Validasi teks, dokumen, dan media multimodal membantu enterprise menjaga kualitas serta keamanan interaksi lintas use case."
      },
      {
        title: "Akselerasi Kepatuhan dan Audit",
        description:
          "Logging terstruktur dan jejak keputusan policy memudahkan audit internal maupun regulasi eksternal dengan bukti yang dapat ditelusuri."
      },
      {
        title: "Kontrol Risiko Operasional LLM",
        description:
          "Penerapan guardrails terpusat menurunkan insiden AI misuse dan membantu tim merilis fitur LLM lebih cepat dengan risiko terukur."
      }
    ],
    useCases: [
      {
        id: 401,
        title: "Firewall Prompt di Asisten Internal",
        excerpt: "Filter prompt sensitif dan enforce kebijakan keamanan sebelum request masuk ke LLM production.",
        imageUrl: "https://ik.imagekit.io/mindwalker/public/assets/mindGateway-usecase-1.webp"
      },
      {
        id: 402,
        title: "Output Validation untuk Customer Chat",
        excerpt: "Validasi output LLM agar sesuai kebijakan brand, regulasi, dan batasan konten perusahaan.",
        imageUrl: "https://ik.imagekit.io/mindwalker/public/assets/mindGateway-usecase-2.webp"
      },
      {
        id: 403,
        title: "Governance LLM Multi-Department",
        excerpt: "Atur rule berbeda untuk legal, compliance, dan support tanpa kehilangan kontrol global enterprise.",
        imageUrl: "https://ik.imagekit.io/mindwalker/public/assets/mindGateway-usecase-3.webp"
      }
    ]
  },
  {
    id: 4,
    i18nKey: "visioncraft",
    slug: "visioncraft",
    title: "VisionCraft",
    label: "Visual AI",
    description:
      "VisionCraft is an AI platform for creating images and videos, bringing multiple AI models together to produce high-quality visual content. From writing the initial idea and building the storyboard to generating visuals and exporting the final video, VisionCraft provides one simple workflow from concept to delivery.",
    imageUrl: "https://ik.imagekit.io/mindwalker/public/assets/visioncraftProductSection.webp?updatedAt=1772427038173",
    imageDetailsUrl: visioncraftbasePict,
    datasheetPdfUrl: "/assets/datasheets/visioncraft-datasheet.pdf",
    brocurePDFUrl: "/assets/brocure/visioncraft-product-overview.pdf",
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
    enterpriseBenefits: [
      {
        title: "Produksi Konten Lebih Cepat",
        description:
          "VisionCraft mempercepat alur produksi konten visual dari ide hingga hasil final untuk berbagai kebutuhan bisnis."
      },
      {
        title: "Skalabilitas untuk Proyek Besar",
        description: "Pipeline modular mendukung eksekusi paralel antar tim sehingga kapasitas produksi meningkat signifikan."
      },
      {
        title: "Kontrol Brand yang Konsisten",
        description: "Aturan brand pack memastikan setiap output visual tetap selaras dengan identitas perusahaan."
      },
      {
        title: "Kolaborasi Tim Lebih Efektif",
        description:
          "Workspace kolaboratif mempercepat review, approval, dan distribusi konten lintas departemen."
      },
      {
        title: "Governance dan Keamanan Output",
        description:
          "Audit trail dan kontrol akses membantu organisasi menjaga keamanan aset kreatif dan kepatuhan internal."
      }
    ],
    useCases: [
      {
        id: 301,
        title: "Kesadaran Keselamatan Berbasis AI",
        excerpt: "Membuat video edukasi HSSE yang autentik dan konsisten dengan brand perusahaan.",
        imageUrl: "https://visioncraft.tos-ap-southeast-3.bytepluses.com/images/seedream/1772010766441-06c63eab914d3862.jpeg"
      },
      {
        id: 302,
        title: "Konten Visual Operasional",
        excerpt: "Membantu tim operasi membuat konten visual instruksional dengan cepat.",
        imageUrl: "https://visioncraft.tos-ap-southeast-3.bytepluses.com/images/seedream/1772010865526-83bae3fc4e395831.jpeg"
      },
      {
        id: 303,
        title: "Video Profil Perusahaan",
        excerpt: "Membuat video profil perusahaan dan materi marketing yang lebih menarik, konsisten, dan siap publikasi.",
        imageUrl: "https://visioncraft.tos-ap-southeast-3.bytepluses.com/images/seedream/1772011530886-3936ec8e2a524d89.jpeg"
      }
    ]
  },
  // TODO: placeholder content, replace with real MindGraph copy/assets when available.
  {
    id: 5,
    i18nKey: "mindGraph",
    slug: "mind-graph",
    title: "MindGraph",
    label: "Data & Konteks",
    description:
      "MindGraph adalah AI Graph Intelligence Platform yang melampaui database tradisional, menggabungkan vector database dan graph database untuk memahami bagaimana informasi saling terhubung dan apa maknanya. MindGraph menghubungkan data dari berbagai sumber untuk mengungkap relasi, memahami konteks, dan memberikan insight yang dapat ditindaklanjuti. MindGraph dapat berjalan berdampingan dengan tools AI dan analitik yang sudah ada atau sebagai platform mandiri, secara on-premise maupun cloud.",
    imageUrl: "",
    imageDetailsUrl: "",
    heroDescription: "Detail produk MindGraph akan segera diperbarui.",
    demoLabel: "Segera Hadir",
    featureHeading: "MindGraph akan segera hadir",
    featureDescription: "Detail fitur MindGraph akan segera diperbarui.",
    featurePoints: ["Fitur akan segera hadir"],
    enterpriseBenefits: [
      {
        title: "Segera Hadir",
        description: "Detail dampak bisnis MindGraph akan segera diperbarui."
      }
    ],
    useCases: [],
    isComingSoon: true
  },
  // TODO: placeholder content, replace with real MindFlow copy/assets when available.
  {
    id: 6,
    i18nKey: "mindFlow",
    slug: "mind-flow",
    title: "MindFlow",
    label: "Otomasi",
    description:
      "MindFlow adalah platform otomasi proses bisnis AI-native yang membantu perusahaan mendigitalisasi dan mengelola alur kerja mereka dalam satu tempat. Tim dapat menentukan proses bisnis mereka sendiri dan dengan mudah menyesuaikan segala hal mulai dari data, peran, dashboard, chart, hingga desain visual sesuai kebutuhan.",
    imageUrl: "",
    imageDetailsUrl: "",
    heroDescription: "Detail produk MindFlow akan segera diperbarui.",
    demoLabel: "Segera Hadir",
    featureHeading: "MindFlow akan segera hadir",
    featureDescription: "Detail fitur MindFlow akan segera diperbarui.",
    featurePoints: ["Fitur akan segera hadir"],
    enterpriseBenefits: [
      {
        title: "Segera Hadir",
        description: "Detail dampak bisnis MindFlow akan segera diperbarui."
      }
    ],
    useCases: [],
    isComingSoon: true
  }
];

export const getProductBySlug = (slug: string) =>
  productData.find((item) => item.slug.toLowerCase() === slug.toLowerCase());

export const getLocalizedProductBySlug = (slug: string, t: TFunction): ProductItem | undefined => {
  const product = getProductBySlug(slug);
  if (!product) return undefined;

  const baseKey = `productDetails.products.${product.i18nKey}`;

  const translatedFeaturePoints = t(`${baseKey}.featurePoints`, { returnObjects: true }) as string[];
  const translatedBenefits = t(`${baseKey}.enterpriseBenefits`, { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;
  const translatedUseCases = t(`${baseKey}.useCases`, { returnObjects: true }) as Array<{
    title: string;
    excerpt: string;
  }>;

  return {
    ...product,
    title: t(`${baseKey}.title`),
    label: t(`${baseKey}.label`),
    description: t(`${baseKey}.description`),
    heroDescription: t(`${baseKey}.heroDescription`),
    demoLabel: t("productDetails.common.demoLabel"),
    featureHeading: t(`${baseKey}.featureHeading`),
    featureDescription: t(`${baseKey}.featureDescription`),
    featurePoints:
      Array.isArray(translatedFeaturePoints) && translatedFeaturePoints.length > 0
        ? translatedFeaturePoints
        : product.featurePoints,
    enterpriseBenefits: product.enterpriseBenefits.map((benefit, index) => ({
      ...benefit,
      title: translatedBenefits?.[index]?.title ?? benefit.title,
      description: translatedBenefits?.[index]?.description ?? benefit.description
    })),
    useCases: product.useCases.map((useCase, index) => ({
      ...useCase,
      title: translatedUseCases?.[index]?.title ?? useCase.title,
      excerpt: translatedUseCases?.[index]?.excerpt ?? useCase.excerpt
    }))
  };
};
