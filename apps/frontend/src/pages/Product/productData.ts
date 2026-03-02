import type { TFunction } from "i18next";

const visioncraftbasePict = "https://ik.imagekit.io/mindwalker/public/assets/visioncraftBasePict.png";

export type ProductArticle = {
  id: number;
  title: string;
  excerpt: string;
  imageUrl: string;
};

export type ProductItem = {
  id: number;
  i18nKey: "mindOps" | "mindSec" | "visioncraft";
  slug: string;
  title: string;
  label: string;
  description: string;
  imageUrl: string;
  imageDetailsUrl: string;
  heroDescription: string;
  demoLabel: string;
  featureHeading: string;
  featureDescription: string;
  featurePoints: string[];
  enterpriseBenefits: Array<{ title: string; description: string; imageUrl: string }>;
  useCases: ProductArticle[];
};

export const productData: ProductItem[] = [
  {
    id: 1,
    i18nKey: "mindOps",
    slug: "mind-ops",
    title: "Mind Ops",
    label: "System Operations",
    description: "From monitoring to resolution, IT operations must move with intelligence.",
    imageUrl: "https://ik.imagekit.io/mindwalker/public/assets/mindOpsProductSection.jpeg",
    imageDetailsUrl: "https://ik.imagekit.io/mindwalker/public/assets/mindOpsProductDetails.png",
    heroDescription:
      "Mind Ops membantu tim operasional memonitor insiden, menganalisis akar masalah, dan mengotomasi respons secara real-time.",
    demoLabel: "Explore Demo",
    featureHeading: "Mind Ops mempercepat keputusan operasional",
    featureDescription:
      "Dari observability hingga incident response, Mind Ops mengurangi waktu investigasi dan meningkatkan reliability layanan.",
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
          "Mind Ops memprioritaskan insiden kritikal lebih cepat sehingga gangguan layanan dapat ditangani sebelum berdampak luas.",
        imageUrl: "https://images.unsplash.com/photo-1573164574472-797cdf4a583a?auto=format&fit=crop&w=900&q=80"
      },
      {
        title: "Efisiensi Tim Lintas Fungsi",
        description: "Integrasi ke tool existing mengurangi kerja manual dan mempercepat kolaborasi DevOps, NOC, dan Support.",
        imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80"
      },
      {
        title: "Kecepatan Respon yang Konsisten",
        description:
          "Rekomendasi aksi berbasis issue membantu tim menjalankan langkah penanganan yang tepat dan konsisten di berbagai skenario.",
        imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80"
      },
      {
        title: "Peningkatan Stabilitas Layanan",
        description:
          "Pemantauan real-time membantu tim operasi mendeteksi degradasi performa lebih awal sebelum berdampak pada pengguna.",
        imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80"
      },
      {
        title: "Biaya Operasional Lebih Terkendali",
        description:
          "Prioritisasi insiden dan rekomendasi aksi kontekstual menekan eskalasi berulang sehingga penggunaan sumber daya lebih efisien.",
        imageUrl: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80"
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
    title: "Mind Sec",
    label: "Threat Analysis",
    description: "Detect risks early and orchestrate faster response across security workflows.",
    imageUrl: "https://ik.imagekit.io/mindwalker/public/assets/mindSecProductSection.jpeg",
    imageDetailsUrl: "https://ik.imagekit.io/mindwalker/public/assets/mindSecProductDetails.png",
    heroDescription:
      "Mind Sec memperkuat security operation center dengan deteksi ancaman lebih dini dan orkestrasi respons yang terukur.",
    demoLabel: "Explore Demo",
    featureHeading: "MindSec, tools pintar berbasis AI untuk deteksi serangan siber",
    featureDescription:
      "MindSec mendeteksi cyber attacks lebih dini, mengkorelasikan sumber serangan secara otomatis, dan membantu tim security menentukan respons paling tepat dalam satu alur kerja terintegrasi.",
    featurePoints: [
      "Threat Correlation",
      "Attack Surface Visibility",
      "Response Playbooks",
      "Compliance Reporting"
    ],
    enterpriseBenefits: [
      {
        title: "Visibilitas Risiko Lebih Menyeluruh",
        description: "Mind Sec mengkorelasikan sinyal ancaman agar tim security melihat prioritas risiko secara lebih jelas.",
        imageUrl: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=900&q=80"
      },
      {
        title: "Kesiapan Audit & Kepatuhan",
        description: "Pelaporan keamanan otomatis membantu organisasi memenuhi kebutuhan audit dan kepatuhan lebih cepat.",
        imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80"
      },
      {
        title: "Penanganan Insiden Lebih Terkendali",
        description: "Orkestrasi respons terintegrasi SIEM mempercepat containment insiden sekaligus menurunkan potensi dampak.",
        imageUrl: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=900&q=80"
      },
      {
        title: "Reduksi Risiko Kebocoran Data",
        description:
          "Deteksi ancaman lebih dini dan korelasi alert lintas sumber membantu mencegah eksfiltrasi data sensitif.",
        imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=900&q=80"
      },
      {
        title: "Pengambilan Keputusan Security Lebih Cepat",
        description:
          "Konteks ancaman yang terpusat mempercepat triage alert dan membantu SOC menentukan tindakan paling efektif.",
        imageUrl: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80"
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
    i18nKey: "visioncraft",
    slug: "visioncraft",
    title: "VisionCraft",
    label: "AI Intelligence",
    description: "Build insight pipelines that turn data signals into real operational impact.",
    imageUrl: "https://ik.imagekit.io/mindwalker/public/assets/visioncraftProductSection.png",
    imageDetailsUrl: visioncraftbasePict,
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
          "VisionCraft mempercepat alur produksi konten visual dari ide hingga hasil final untuk berbagai kebutuhan bisnis.",
        imageUrl: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=80"
      },
      {
        title: "Skalabilitas untuk Proyek Besar",
        description: "Pipeline modular mendukung eksekusi paralel antar tim sehingga kapasitas produksi meningkat signifikan.",
        imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80"
      },
      {
        title: "Kontrol Brand yang Konsisten",
        description: "Aturan brand pack memastikan setiap output visual tetap selaras dengan identitas perusahaan.",
        imageUrl: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=900&q=80"
      },
      {
        title: "Kolaborasi Tim Lebih Efektif",
        description:
          "Workspace kolaboratif mempercepat review, approval, dan distribusi konten lintas departemen.",
        imageUrl: "https://images.unsplash.com/photo-1573496774426-fe3db3dd1731?auto=format&fit=crop&w=900&q=80"
      },
      {
        title: "Governance dan Keamanan Output",
        description:
          "Audit trail dan kontrol akses membantu organisasi menjaga keamanan aset kreatif dan kepatuhan internal.",
        imageUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80"
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
