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
          news: "Berita",
          update: "Update",
          case: "Kasus",
          desc1:
            "Lorem ipsum dolor sit amet consectetur. Elementum amet metus lorem id. Metus sem nam et platea quis dui aliquet.",
          desc2:
            "Lorem ipsum dolor sit amet consectetur. Nibh dictumst et volutpat fermentum, ornare lectus in tincidunt.",
          desc3:
            "Lorem ipsum dolor sit amet consectetur. Euismod interdum egestas ac nunc eu, sed lacus semper ultricies."
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
              "Model Forge membantu tim membangun, menguji, dan menerapkan model AI secara terstruktur.",
            backContent:
              "Seluruh pipeline dapat dipantau real-time untuk mempercepat iterasi dan menjaga kualitas."
          },
          agenticAi: {
            title: "Agentic AI",
            description:
              "Orkestrasi agent AI lintas workflow bisnis untuk otomatisasi keputusan, eksekusi tugas, dan kolaborasi tim.",
            backTitle: "Detail Agentic AI",
            backDescription:
              "Satu platform untuk orkestrasi data, eksperimen, dan deployment model lintas use case.",
            backContent:
              "Dirancang agar kolaborasi tim data, engineering, dan bisnis menjadi lebih cepat dan konsisten."
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
          news: "News",
          update: "Update",
          case: "Case",
          desc1:
            "Lorem ipsum dolor sit amet consectetur. Elementum amet metus lorem id. Metus sem nam et platea quis dui aliquet.",
          desc2:
            "Lorem ipsum dolor sit amet consectetur. Nibh dictumst et volutpat fermentum, ornare lectus in tincidunt.",
          desc3:
            "Lorem ipsum dolor sit amet consectetur. Euismod interdum egestas ac nunc eu, sed lacus semper ultricies."
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
              "Model Forge helps teams build, test, and deploy AI models in a structured way.",
            backContent:
              "The full pipeline can be monitored in real-time to accelerate iteration and maintain quality."
          },
          agenticAi: {
            title: "Agentic AI",
            description:
              "Orchestrate AI agents across business workflows for decision automation, task execution, and team collaboration.",
            backTitle: "Agentic AI Details",
            backDescription:
              "A unified platform for orchestrating data, experimentation, and model deployment across use cases.",
            backContent:
              "Designed to speed up and standardize collaboration between data, engineering, and business teams."
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


