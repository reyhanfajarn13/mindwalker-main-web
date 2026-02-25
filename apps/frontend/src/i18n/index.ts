import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const resources = {
  id: {
    translation: {
      nav: {
        home: "Beranda",
        product: "Produk",
        solutions: "Solusi",
        aboutUs: "Tentang Kami",
        news: "Berita",
        contactUs: "Hubungi Kami",
        langId: "IDN",
        langEn: "ENG"
      },
      hero: {
        from: "Dari",
        insight: "Insight",
        to: "Menjadi",
        impact: "Dampak",
        partOf: "Bagian dari",
        partner: "NVIDIA Inception Program",
        slides: {
          news: "Rilis",
          update: "Update AI",
          case: "Kompatibilitas",
          title1: "MindOps telah release v 1.0",
          title2: "VisionCraft + SeeDance 4.5",
          title3: "MindOps : Legacy Apps Supported",
          desc1:
            "MindOps dari Mindwalker.ai resmi dirilis untuk membantu tim operasi TI memantau insiden, memprioritaskan alert kritikal, dan mempercepat proses resolusi.",
          desc2:
            "VisionCraft kini mengimplementasikan pembaruan SeeDream 4.5 untuk image generation, menghadirkan kualitas visual yang lebih tajam, konsisten, dan siap produksi.",
          desc3:
            "MindOps sekarang mendukung skenario khusus pada legacy application, sehingga integrasi monitoring dan penanganan issue dapat berjalan lebih mulus pada sistem existing."
        }
      },
      product: {
        kicker: "Produk",
        title: "Produk yang menyelesaikan tantangan bisnis terberat Anda.",
        learnMore: "Selengkapnya",
        cards: {
          ops: {
            title: "Mind Ops",
            label: "Operasional Sistem",
            description:
              "Pantau infrastruktur real-time, prioritaskan insiden kritikal, dan percepat resolusi operasional TI."
          },
          sec: {
            title: "Mind Sec",
            label: "Analisis Ancaman",
            description:
              "Deteksi ancaman lebih dini, korelasikan alert keamanan, dan orkestrasi respons insiden secara terukur."
          },
          vision: {
            title: "VisionCraft",
            label: "Kecerdasan AI",
            description:
              "Hasilkan konten visual berbasis AI yang konsisten dengan brand untuk kebutuhan komunikasi dan kampanye."
          }
        }
      },
      solutions: {
        kicker: "Solusi",
        title: "Solusi Inovatif. Dampak Terukur.",
        description:
          "Kami memberdayakan organisasi dengan solusi berpikiran maju yang adaptif, skalabel, dan memberi nilai berkelanjutan di dunia digital yang cepat berubah.",
        cards: {
          description:
            "Lorem ipsum dolor sit amet consectetur. Nibh quam faucibus senectus at laoreet lacus velit. Gravida vitae tristique eget id pellentesque eu etiam pharetra scelerisque.",
          modelForge: {
            title: "Model Forge",
            description:
              "Platform untuk membangun, menguji, dan deployment model AI enterprise dengan pipeline yang terukur dan cepat.",
            backTitle: "Detail Model Forge",
            backDescription:
              "Model Forge adalah workspace end-to-end untuk menyiapkan data, melatih model, evaluasi performa, hingga deployment produksi dalam satu alur yang rapi.",
            backContent:
              "Dengan eksperimen yang terlacak, metrik yang terpusat, dan monitoring real-time, tim data dan engineering dapat beriterasi lebih cepat sambil menjaga kualitas model tetap konsisten.",
            backHighlights: [
              "Dataset versioning dan lineage untuk menjaga konsistensi data training.",
              "Pipeline training, evaluasi, dan deployment yang bisa diotomasi end-to-end.",
              "Monitoring drift dan performa model untuk deteksi penurunan akurasi lebih dini.",
              "Governance, approval, dan audit trail agar implementasi AI tetap terkendali."
            ]
          },
          agenticAi: {
            title: "Agentic AI",
            description:
              "Orkestrasi agent AI lintas workflow bisnis untuk otomatisasi keputusan, eksekusi tugas, dan kolaborasi tim.",
            backTitle: "Detail Agentic AI",
            backDescription:
              "Agentic AI memungkinkan organisasi membangun AI agent yang mampu memahami konteks, menentukan langkah, dan mengeksekusi tugas lintas sistem secara otomatis.",
            backContent:
              "Setiap agent dapat diatur dengan guardrails, workflow approval, dan observabilitas penuh sehingga proses bisnis berjalan lebih cepat, akurat, dan tetap terkendali.",
            backHighlights: [
              "Agent dapat memecah tugas kompleks menjadi langkah kerja yang terstruktur.",
              "Integrasi ke API dan aplikasi internal untuk eksekusi lintas sistem.",
              "Human-in-the-loop untuk approval pada keputusan yang bersifat kritikal.",
              "Jejak keputusan dan performa agent yang transparan untuk evaluasi berkelanjutan."
            ]
          },
          learnMore: "Selengkapnya",
          back: "Kembali"
        }
      },
      industrialUsecases: {
        title: "Solusi Kami lewat Use Case Industri",
        industries: {
          governance: {
            label: "Sektor Publik",
            cards: {
              policy: {
                title: "Kecerdasan Kebijakan",
                excerpt: "AI memetakan dan merangkum kebijakan untuk mempercepat pengambilan keputusan manajerial."
              },
              risk: {
                title: "Monitoring Risiko AI",
                excerpt: "Pemantauan indikator risiko real-time untuk deteksi dini potensi pelanggaran tata kelola."
              },
              audit: {
                title: "Copilot Audit",
                excerpt: "Otomasi ringkasan bukti audit dan rekomendasi tindak lanjut untuk tim compliance."
              }
            }
          },
          financialServices: {
            label: "Layanan Keuangan",
            cards: {
              fraud: {
                title: "Deteksi Fraud AI",
                excerpt: "Model anomali transaksi mendeteksi indikasi fraud lebih cepat dan akurat."
              },
              credit: {
                title: "Skoring Risiko Kredit",
                excerpt: "Skoring risiko kredit berbasis AI untuk meningkatkan kualitas keputusan pinjaman."
              },
              assistant: {
                title: "Asisten Relationship Manager",
                excerpt: "Asisten AI untuk insight nasabah dan rekomendasi produk finansial yang relevan."
              }
            }
          },
          manufacturing: {
            label: "Manufaktur",
            cards: {
              quality: {
                title: "Inspeksi Kualitas Visual",
                excerpt: "Computer vision mendeteksi cacat produk secara otomatis di lini produksi."
              },
              maintenance: {
                title: "Predictive Maintenance",
                excerpt: "Prediksi kerusakan mesin untuk mengurangi downtime dan meningkatkan ketersediaan aset."
              },
              optimizer: {
                title: "Optimasi Produksi",
                excerpt: "Optimasi parameter proses produksi berbasis data untuk peningkatan throughput."
              }
            }
          },
          energyUtilities: {
            label: "Energy & Utilities",
            cards: {
              forecast: {
                title: "Demand Forecasting",
                excerpt: "Prediksi konsumsi energi untuk perencanaan kapasitas dan efisiensi operasional."
              },
              grid: {
                title: "Smart Grid Monitoring",
                excerpt: "Analitik AI untuk deteksi anomali jaringan dan respons insiden lebih cepat."
              },
              asset: {
                title: "Asset Health Analytics",
                excerpt: "Pemantauan kesehatan aset kritikal berbasis AI untuk mengurangi risiko gangguan layanan."
              }
            }
          },
          retail: {
            label: "Retail",
            cards: {
              recommendation: {
                title: "Personalized Recommendation",
                excerpt: "Rekomendasi produk berbasis AI untuk meningkatkan konversi dan nilai keranjang belanja."
              },
              inventory: {
                title: "Smart Inventory Control",
                excerpt: "Prediksi stok dan replenishment otomatis untuk mengurangi overstock maupun stockout."
              },
              demand: {
                title: "Demand Forecasting",
                excerpt: "Proyeksi permintaan lintas kanal untuk mendukung perencanaan promosi dan distribusi."
              }
            }
          },
          healthcare: {
            label: "Healthcare",
            cards: {
              triage: {
                title: "Clinical Triage Assistant",
                excerpt: "Asisten AI membantu prioritisasi pasien berdasarkan gejala dan tingkat urgensi."
              },
              imaging: {
                title: "Medical Imaging Support",
                excerpt: "AI membantu deteksi pola pada citra medis untuk mempercepat proses diagnosis awal."
              },
              documentation: {
                title: "Automated Clinical Documentation",
                excerpt: "Ringkasan catatan medis otomatis untuk mengurangi beban administratif tenaga kesehatan."
              }
            }
          }
        }
      },
      news: {
        pageTitle: "Berita MindWalker",
        latestTitle: "Berita Terbaru",
        trendingTitle: "Berita Populer",
        readMore: "Lihat Selengkapnya",
        pagination: {
          prev: "Sebelumnya",
          next: "Berikutnya"
        },
        details: {
          notFoundTitle: "Berita Tidak Ditemukan",
          notFoundMessage: "Berita yang diminta tidak tersedia.",
          authorName: "Tim Mindwalker",
          shareArticle: "Bagikan artikel ini",
          latestNews: "Berita Terbaru",
          paragraph1:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ex nisi reprehenderit aliquam voluptatibus in, beatae odio ab iste facere, quisquam excepturi perspiciatis cupiditate.",
          paragraph2:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde recusandae asperiores repudiandae nisi id quas explicabo porro, deserunt sequi voluptas eligendi sint."
        }
      },
      productDetails: {
        common: {
          notFoundTitle: "Produk tidak ditemukan",
          notFoundMessage: "Produk yang Anda cari tidak tersedia.",
          demoLabel: "Explore Demo",
          learnMore: "Selengkapnya",
          businessImpactTitle: "Dampak untuk Bisnis",
          useCasesTitle: "Contoh Penerapan {{product}}",
          benefitImageAltFallback: "Visual dampak bisnis"
        },
        products: {
          mindOps: {
            title: "Mind Ops",
            label: "Operasional Sistem",
            description: "From monitoring to resolution, IT operations must move with intelligence.",
            heroDescription:
              "Mind Ops membantu tim operasional memonitor insiden secara menyeluruh, menganalisis akar masalah dengan konteks yang lebih jelas, dan menjalankan rekomendasi aksi prioritas agar proses pemulihan layanan berlangsung lebih cepat, konsisten, serta terukur di lingkungan operasional yang kompleks.",
            featureHeading: "Mind Ops mempercepat keputusan operasional",
            featureDescription:
              "Dari observability hingga incident response, Mind Ops mengurangi waktu investigasi dan meningkatkan reliability layanan.",
            featurePoints: [
              "Prioritisasi Alert",
              "Saran Akar Masalah",
              "Rekomendasi Aksi Berbasis Issue",
              "Kolaborasi Lintas Tim"
            ],
            enterpriseBenefits: [
              {
                title: "Penurunan Downtime Operasional",
                description:
                  "Mind Ops memprioritaskan insiden kritikal lebih cepat sehingga gangguan layanan dapat ditangani sebelum berdampak luas."
              },
              {
                title: "Efisiensi Tim Lintas Fungsi",
                description:
                  "Integrasi ke tool existing mengurangi kerja manual dan mempercepat kolaborasi DevOps, NOC, dan Support."
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
                title: "Respon Insiden Lintas Tim",
                excerpt: "Sinkronisasi DevOps, NOC, dan Security untuk menurunkan MTTR secara signifikan."
              },
              {
                title: "Monitoring Proaktif Infrastruktur",
                excerpt: "Deteksi dini anomali server untuk mencegah downtime layanan kritikal."
              },
              {
                title: "Rekomendasi Aksi Berbasis Issue",
                excerpt:
                  "Sistem merekomendasikan langkah penanganan berdasarkan konteks issue agar tim mempercepat recovery dengan keputusan yang tepat."
              }
            ]
          },
          mindSec: {
            title: "Mind Sec",
            label: "Analisis Ancaman",
            description: "Detect risks early and orchestrate faster response across security workflows.",
            heroDescription:
              "Mind Sec memperkuat security operation center melalui deteksi ancaman siber lebih dini, korelasi indikator serangan dari berbagai sumber, serta orkestrasi respons yang terukur sehingga tim keamanan dapat menekan risiko kebocoran data dan mempercepat pengambilan keputusan insiden.",
            featureHeading: "MindSec, tools pintar berbasis AI untuk deteksi serangan siber",
            featureDescription:
              "MindSec mendeteksi cyber attacks lebih dini, mengkorelasikan sumber serangan secara otomatis, dan membantu tim security menentukan respons paling tepat dalam satu alur kerja terintegrasi.",
            featurePoints: [
              "Korelasi Ancaman",
              "Visibilitas Attack Surface",
              "Playbook Respons",
              "Pelaporan Kepatuhan"
            ],
            enterpriseBenefits: [
              {
                title: "Visibilitas Risiko Lebih Menyeluruh",
                description:
                  "Mind Sec mengkorelasikan sinyal ancaman agar tim security melihat prioritas risiko secara lebih jelas."
              },
              {
                title: "Kesiapan Audit & Kepatuhan",
                description:
                  "Pelaporan keamanan otomatis membantu organisasi memenuhi kebutuhan audit dan kepatuhan lebih cepat."
              },
              {
                title: "Penanganan Insiden Lebih Terkendali",
                description:
                  "Orkestrasi respons terintegrasi SIEM mempercepat containment insiden sekaligus menurunkan potensi dampak."
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
                title: "Deteksi Akses Anomali",
                excerpt: "Identifikasi pola akses tidak wajar sebelum berdampak ke layanan produksi."
              },
              {
                title: "Incident Triage Otomatis",
                excerpt: "Prioritas alert berdasarkan severity dan konteks bisnis untuk SOC."
              },
              {
                title: "Enrichment Intel Ancaman",
                excerpt: "Perkaya indikator serangan dengan threat intelligence eksternal."
              }
            ]
          },
          visioncraft: {
            title: "VisionCraft",
            label: "Kecerdasan AI",
            description: "Build insight pipelines that turn data signals into real operational impact.",
            heroDescription:
              "VisionCraft adalah platform AI multimodal yang membantu organisasi mengubah ide menjadi visual berkualitas tinggi dan automasi konten secara cepat, dengan alur kerja kolaboratif, kontrol brand yang konsisten, serta kesiapan produksi untuk kebutuhan komunikasi enterprise berskala besar.",
            featureHeading: "VisionCraft mengubah ide menjadi realita",
            featureDescription:
              "Dari prompt cerdas hingga kolaborasi lintas tim, VisionCraft membantu perusahaan menciptakan visual autentik dengan kualitas premium.",
            featurePoints: [
              "Peningkatan Prompt",
              "Integrasi Multi-Provider",
              "Brand Pack Intelligence",
              "Workflow Kolaboratif"
            ],
            enterpriseBenefits: [
              {
                title: "Produksi Konten Lebih Cepat",
                description:
                  "VisionCraft mempercepat alur produksi konten visual dari ide hingga hasil final untuk berbagai kebutuhan bisnis."
              },
              {
                title: "Skalabilitas untuk Proyek Besar",
                description:
                  "Pipeline modular mendukung eksekusi paralel antar tim sehingga kapasitas produksi meningkat signifikan."
              },
              {
                title: "Kontrol Brand yang Konsisten",
                description:
                  "Aturan brand pack memastikan setiap output visual tetap selaras dengan identitas perusahaan."
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
                title: "Kesadaran Keselamatan Berbasis AI",
                excerpt:
                  "Membuat video edukasi HSSE yang autentik dan konsisten dengan brand perusahaan."
              },
              {
                title: "Konten Visual Operasional",
                excerpt: "Membantu tim operasi membuat konten visual instruksional dengan cepat."
              },
              {
                title: "Video Profil Perusahaan",
                excerpt:
                  "Membuat video profil perusahaan dan materi marketing yang lebih menarik, konsisten, dan siap publikasi."
              }
            ]
          }
        }
      },
      footer: {
        title: "Siap untuk Menjelajah?",
        subtitle: "Butuh detail? Tinggalkan email Anda, dan kami akan menghubungi.",
        emailPlaceholder: "Masukkan email Anda",
        send: "Kirim",
        technologyPartners: "Mitra Teknologi",
        groups: {
          company: "Mindwalker.ai",
          line1: "Sebagai pemimpin tepercaya dalam transformasi digital",
          line2: "Berfokus pada data, AI, dan operasional",
          line3: "Platform bisnis yang siap masa depan",
          ourProduct: "Produk Kami",
          ourSolution: "Solusi Kami",
          aiFor: "AI untuk",
          lorem: "Lorem ipsum"
        }
      }
    }
  },
  en: {
    translation: {
      nav: {
        home: "Home",
        product: "Product",
        solutions: "Solutions",
        aboutUs: "About Us",
        news: "News",
        contactUs: "Contact Us",
        langId: "IDN",
        langEn: "ENG"
      },
      hero: {
        from: "From",
        insight: "Insight",
        to: "to",
        impact: "Impact",
        partOf: "Part of",
        partner: "NVIDIA Inception Program",
        slides: {
          news: "Release",
          update: "Update",
          case: "Compatibility",
          title1: "MindOps Released v1.0",
          title2: "VisionCraft + SeeDance 4.5",
          title3: "MindOps: Legacy Apps Supported",
          desc1:
            "MindOps by Mindwalker.ai has been officially released to help IT operations teams monitor incidents, prioritize critical alerts, and speed up resolution workflows.",
          desc2:
            "VisionCraft has implemented the SeeDream 4.5 update for image generation, delivering sharper visuals, stronger consistency, and production-ready output.",
          desc3:
            "MindOps now supports special cases for legacy applications, enabling smoother monitoring integration and issue handling across existing systems."
        }
      },
      product: {
        kicker: "Product",
        title: "The product that solves your toughest business problems.",
        learnMore: "Learn More",
        cards: {
          ops: {
            title: "Mind Ops",
            label: "System Operations",
            description:
              "Monitor infrastructure in real time, prioritize critical incidents, and accelerate IT operations resolution."
          },
          sec: {
            title: "Mind Sec",
            label: "Threat Analysis",
            description:
              "Detect threats earlier, correlate security alerts, and orchestrate incident response with better control."
          },
          vision: {
            title: "VisionCraft",
            label: "AI Intelligence",
            description:
              "Generate AI-powered visual content with strong brand consistency for communications and campaign needs."
          }
        }
      },
      solutions: {
        kicker: "Solutions",
        title: "Innovative Solutions. Measurable Impact.",
        description:
          "We empower organizations with forward-thinking solutions that adapt, scale, and deliver lasting value in a rapidly evolving digital world.",
        cards: {
          description:
            "Lorem ipsum dolor sit amet consectetur. Nibh quam faucibus senectus at laoreet lacus velit. Gravida vitae tristique eget id pellentesque eu etiam pharetra scelerisque.",
          modelForge: {
            title: "Model Forge",
            description:
              "A platform to build, test, and deploy enterprise AI models with fast, measurable pipelines.",
            backTitle: "Model Forge Details",
            backDescription:
              "Model Forge is an end-to-end workspace for data preparation, model training, performance evaluation, and production deployment in one structured flow.",
            backContent:
              "With tracked experiments, centralized metrics, and real-time monitoring, data and engineering teams can iterate faster while keeping model quality consistent.",
            backHighlights: [
              "Dataset versioning and lineage to maintain reliable training data consistency.",
              "Automated end-to-end pipelines for training, evaluation, and deployment.",
              "Model drift and performance monitoring for earlier accuracy degradation detection.",
              "Governance, approvals, and audit trails to keep AI delivery controlled."
            ]
          },
          agenticAi: {
            title: "Agentic AI",
            description:
              "Orchestrate AI agents across business workflows for decision automation, task execution, and team collaboration.",
            backTitle: "Agentic AI Details",
            backDescription:
              "Agentic AI enables organizations to build AI agents that understand context, decide next actions, and execute tasks across systems automatically.",
            backContent:
              "Each agent can be configured with guardrails, approval workflows, and full observability so business processes run faster, more accurately, and with stronger control.",
            backHighlights: [
              "Agents can break complex goals into structured execution steps.",
              "Integration with internal APIs and business apps for cross-system actions.",
              "Human-in-the-loop approvals for high-impact or critical decisions.",
              "Transparent decision traces and agent performance for continuous improvement."
            ]
          },
          learnMore: "Learn More",
          back: "Back"
        }
      },
      industrialUsecases: {
        title: "Our Solutions through Industry Use Cases",
        industries: {
          governance: {
            label: "Public Sectors",
            cards: {
              policy: {
                title: "Policy Intelligence",
                excerpt: "AI maps and summarizes policies to accelerate managerial decision-making."
              },
              risk: {
                title: "Risk Monitoring AI",
                excerpt: "Real-time risk indicator monitoring for early detection of governance issues."
              },
              audit: {
                title: "Audit Copilot",
                excerpt: "Automates audit evidence summaries and follow-up recommendations for compliance teams."
              }
            }
          },
          financialServices: {
            label: "Financial Services",
            cards: {
              fraud: {
                title: "Fraud Detection AI",
                excerpt: "Transaction anomaly models detect fraud indications faster and more accurately."
              },
              credit: {
                title: "Credit Risk Scoring",
                excerpt: "AI-based credit risk scoring improves the quality of lending decisions."
              },
              assistant: {
                title: "Relationship Manager Assistant",
                excerpt: "AI assistant provides customer insights and relevant financial product recommendations."
              }
            }
          },
          manufacturing: {
            label: "Manufacturing",
            cards: {
              quality: {
                title: "Visual Quality Inspection",
                excerpt: "Computer vision detects product defects automatically on production lines."
              },
              maintenance: {
                title: "Predictive Maintenance",
                excerpt: "Predict machine failures to reduce downtime and increase asset availability."
              },
              optimizer: {
                title: "Production Optimizer",
                excerpt: "Optimizes production process parameters with data-driven AI insights."
              }
            }
          },
          energyUtilities: {
            label: "Energy & Utilities",
            cards: {
              forecast: {
                title: "Demand Forecasting",
                excerpt: "Predicts energy consumption for better capacity planning and operational efficiency."
              },
              grid: {
                title: "Smart Grid Monitoring",
                excerpt: "AI analytics for anomaly detection and faster incident response across power networks."
              },
              asset: {
                title: "Asset Health Analytics",
                excerpt: "AI-based health monitoring for critical assets to reduce service disruption risks."
              }
            }
          },
          retail: {
            label: "Retail",
            cards: {
              recommendation: {
                title: "Personalized Recommendation",
                excerpt: "AI-driven product recommendations to improve conversion and basket value."
              },
              inventory: {
                title: "Smart Inventory Control",
                excerpt: "Stock prediction and automated replenishment to reduce overstock and stockout."
              },
              demand: {
                title: "Demand Forecasting",
                excerpt: "Cross-channel demand projection to support promotion and distribution planning."
              }
            }
          },
          healthcare: {
            label: "Healthcare",
            cards: {
              triage: {
                title: "Clinical Triage Assistant",
                excerpt: "AI assistant helps prioritize patients based on symptoms and urgency level."
              },
              imaging: {
                title: "Medical Imaging Support",
                excerpt: "AI assists pattern detection in medical imaging to accelerate early diagnosis."
              },
              documentation: {
                title: "Automated Clinical Documentation",
                excerpt: "Auto-generated clinical summaries to reduce administrative burden on care teams."
              }
            }
          }
        }
      },
      news: {
        pageTitle: "MindWalker News",
        latestTitle: "Latest News",
        trendingTitle: "Trending News",
        readMore: "Read More",
        pagination: {
          prev: "Prev",
          next: "Next"
        },
        details: {
          notFoundTitle: "News Not Found",
          notFoundMessage: "The requested news item does not exist.",
          authorName: "Mindwalker Team",
          shareArticle: "Share this article",
          latestNews: "Latest News",
          paragraph1:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ex nisi reprehenderit aliquam voluptatibus in, beatae odio ab iste facere, quisquam excepturi perspiciatis cupiditate.",
          paragraph2:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde recusandae asperiores repudiandae nisi id quas explicabo porro, deserunt sequi voluptas eligendi sint."
        }
      },
      productDetails: {
        common: {
          notFoundTitle: "Product not found",
          notFoundMessage: "The product you are looking for is unavailable.",
          demoLabel: "Explore Demo",
          learnMore: "Learn More",
          businessImpactTitle: "Business Impact",
          useCasesTitle: "{{product}} Use Cases",
          benefitImageAltFallback: "Business impact visual"
        },
        products: {
          mindOps: {
            title: "Mind Ops",
            label: "System Operations",
            description: "From monitoring to resolution, IT operations must move with intelligence.",
            heroDescription:
              "Mind Ops helps operations teams monitor incidents end-to-end, analyze root causes with clearer context, and execute prioritized action recommendations so service recovery can run faster, more consistently, and with measurable outcomes across complex operational environments.",
            featureHeading: "Mind Ops accelerates operational decisions",
            featureDescription:
              "From observability to incident response, Mind Ops reduces investigation time and improves service reliability.",
            featurePoints: [
              "Alert Prioritization",
              "Root Cause Suggestions",
              "Issue-Based Action Recommendation",
              "Cross-team Collaboration"
            ],
            enterpriseBenefits: [
              {
                title: "Reduced Operational Downtime",
                description:
                  "Mind Ops prioritizes critical incidents faster so service disruptions can be handled before wider impact."
              },
              {
                title: "Cross-Functional Team Efficiency",
                description:
                  "Integration with existing tools reduces manual work and speeds up collaboration across DevOps, NOC, and Support."
              },
              {
                title: "Consistent Response Speed",
                description:
                  "Issue-based action recommendations help teams execute the right response steps with consistent quality across scenarios."
              },
              {
                title: "Improved Service Stability",
                description:
                  "Real-time monitoring helps operations teams detect performance degradation earlier before it impacts users."
              },
              {
                title: "Better Operational Cost Control",
                description:
                  "Incident prioritization and contextual action recommendations reduce repeated escalations and improve resource efficiency."
              }
            ],
            useCases: [
              {
                title: "Cross-Team Incident Response",
                excerpt:
                  "Synchronize DevOps, NOC, and Security workflows to reduce MTTR significantly."
              },
              {
                title: "Proactive Infrastructure Monitoring",
                excerpt:
                  "Early detection of server anomalies to prevent downtime in critical services."
              },
              {
                title: "Issue-Based Action Recommendation",
                excerpt:
                  "The system recommends response actions based on issue context so teams can accelerate recovery with better decisions."
              }
            ]
          },
          mindSec: {
            title: "Mind Sec",
            label: "Threat Analysis",
            description: "Detect risks early and orchestrate faster response across security workflows.",
            heroDescription:
              "Mind Sec strengthens security operation centers through earlier cyber threat detection, correlation of attack indicators across multiple sources, and measurable response orchestration so security teams can reduce data exposure risk and accelerate incident-level decision making.",
            featureHeading: "MindSec, an AI-powered tool for cyberattack detection",
            featureDescription:
              "MindSec detects cyber attacks earlier, correlates attack sources automatically, and helps security teams choose the most effective response in one integrated workflow.",
            featurePoints: [
              "Threat Correlation",
              "Attack Surface Visibility",
              "Response Playbooks",
              "Compliance Reporting"
            ],
            enterpriseBenefits: [
              {
                title: "Broader Risk Visibility",
                description:
                  "Mind Sec correlates threat signals so security teams can see risk priorities more clearly."
              },
              {
                title: "Audit & Compliance Readiness",
                description:
                  "Automated security reporting helps organizations meet audit and compliance requirements faster."
              },
              {
                title: "More Controlled Incident Handling",
                description:
                  "SIEM-integrated response orchestration speeds up containment while reducing potential impact."
              },
              {
                title: "Lower Data Leakage Risk",
                description:
                  "Early threat detection and cross-source alert correlation help prevent sensitive data exfiltration."
              },
              {
                title: "Faster Security Decisions",
                description:
                  "Centralized threat context accelerates alert triage and helps SOC teams choose the most effective action."
              }
            ],
            useCases: [
              {
                title: "Anomalous Access Detection",
                excerpt:
                  "Identify unusual access patterns before they impact production services."
              },
              {
                title: "Automated Incident Triage",
                excerpt:
                  "Prioritize alerts based on severity and business context for SOC teams."
              },
              {
                title: "Threat Intel Enrichment",
                excerpt:
                  "Enrich attack indicators with external threat intelligence sources."
              }
            ]
          },
          visioncraft: {
            title: "VisionCraft",
            label: "AI Intelligence",
            description: "Build insight pipelines that turn data signals into real operational impact.",
            heroDescription:
              "VisionCraft is a multimodal AI platform that enables organizations to turn ideas into high-quality visual output and rapid content automation, supported by collaborative workflows, consistent brand control, and production readiness for enterprise-scale communication needs.",
            featureHeading: "VisionCraft turns ideas into reality",
            featureDescription:
              "From smart prompts to cross-team collaboration, VisionCraft helps organizations create authentic visuals with premium quality.",
            featurePoints: [
              "Prompt Enhancement",
              "Multi-Provider Integration",
              "Brand Pack Intelligence",
              "Collaborative Workflows"
            ],
            enterpriseBenefits: [
              {
                title: "Faster Content Production",
                description:
                  "VisionCraft speeds up visual content production from idea to final output for multiple business needs."
              },
              {
                title: "Scalability for Large Projects",
                description:
                  "A modular pipeline supports parallel execution across teams, significantly increasing production capacity."
              },
              {
                title: "Consistent Brand Control",
                description:
                  "Brand-pack rules ensure every visual output stays aligned with company identity."
              },
              {
                title: "More Effective Team Collaboration",
                description:
                  "Collaborative workspaces speed up review, approval, and content distribution across departments."
              },
              {
                title: "Output Governance and Security",
                description:
                  "Audit trails and access control help organizations secure creative assets and maintain internal compliance."
              }
            ],
            useCases: [
              {
                title: "AI-Based Safety Awareness",
                excerpt:
                  "Create HSSE educational videos that stay authentic and consistent with the corporate brand."
              },
              {
                title: "Operational Visual Content",
                excerpt:
                  "Help operations teams produce instructional visual content faster."
              },
              {
                title: "Company Profile Video",
                excerpt:
                  "Create company profile videos and marketing assets that are more engaging, consistent, and ready for publication."
              }
            ]
          }
        }
      },
      footer: {
        title: "Ready to Discover?",
        subtitle: "Looking for details? Leave your email, and we'll reach out",
        emailPlaceholder: "Enter your email",
        send: "Send",
        technologyPartners: "Technology Partners",
        groups: {
          company: "Mindwalker.ai",
          line1: "As a trusted leader in digital transformation",
          line2: "Focus on data, AI, and operations",
          line3: "Future-ready business platform",
          ourProduct: "Our Product",
          ourSolution: "Our Solution",
          aiFor: "AI for",
          lorem: "Lorem ipsum"
        }
      }
    }
  }
} as const;

if (typeof window !== "undefined") {
  window.localStorage.setItem("mindwalker_lang", "id");
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "id",
    supportedLngs: ["id", "en"],
    detection: {
      order: ["localStorage"],
      caches: ["localStorage"],
      lookupLocalStorage: "mindwalker_lang"
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;


