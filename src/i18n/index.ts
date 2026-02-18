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
            label: "Operasional Sistem",
            description:
              "Dari monitoring hingga resolusi, operasi TI harus bergerak dengan kecerdasan."
          },
          sec: {
            label: "Analisis Ancaman",
            description:
              "Deteksi risiko lebih awal dan orkestrasi respons lebih cepat di alur kerja keamanan."
          },
          vision: {
            label: "Kecerdasan AI",
            description:
              "Bangun pipeline insight yang mengubah sinyal data menjadi dampak operasional nyata."
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
            backTitle: "Detail Model Forge",
            backDescription:
              "Model Forge membantu tim membangun, menguji, dan menerapkan model AI secara terstruktur.",
            backContent:
              "Seluruh pipeline dapat dipantau real-time untuk mempercepat iterasi dan menjaga kualitas."
          },
          agenticAi: {
            title: "Agentic AI",
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
            label: "System Operations",
            description:
              "From monitoring to resolution, IT operations must move with intelligence."
          },
          sec: {
            label: "Threat Analysis",
            description:
              "Detect risks early and orchestrate faster response across security workflows."
          },
          vision: {
            label: "AI Intelligence",
            description:
              "Build insight pipelines that turn data signals into real operational impact."
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
            backTitle: "Model Forge Details",
            backDescription:
              "Model Forge helps teams build, test, and deploy AI models in a structured way.",
            backContent:
              "The full pipeline can be monitored in real-time to accelerate iteration and maintain quality."
          },
          agenticAi: {
            title: "Agentic AI",
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
          lorem: "Lorem ipsum"
        }
      }
    }
  }
} as const;

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "id",
    supportedLngs: ["id", "en"],
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
      lookupLocalStorage: "mindwalker_lang"
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
