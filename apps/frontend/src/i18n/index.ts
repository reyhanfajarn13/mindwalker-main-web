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
        aboutUs: "Penerapan",
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
        description:
          "Kami membangun solusi cerdas yang menghubungkan data, sistem, dan alur kerja Anda. Mengubah kompleksitas enterprise menjadi keputusan yang lebih otomatis, operasional yang scalable, dan nilai bisnis yang terukur.",
        stats: [
          { value: "5", label: "produk untuk solusi bisnis Anda" },
          { value: "2", label: "jalur custom solution" },
          { value: "6", label: "industri dengan use case siap pakai" },
          { value: "0", label: "sistem existing yang harus dibongkar" }
        ],
        partnership: {
          kicker: "Standar & Kemitraan"
        },
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
        title: "Temukan produknya. Rasakan solusinya.",
        description:
          "Eksplor berbagai solusi digital dalam satu platform. Pilih produk yang sesuai kebutuhan Anda dan lihat bagaimana teknologi AI bekerja untuk bisnis Anda.",
        learnMore: "Selengkapnya",
        bookDemo: "Book demo",
        viewDetails: "Detail produk",
        screenshotUnavailable: "Screenshot belum tersedia",
        cards: {
          ops: {
            title: "MindOps",
            label: "Operasional Sistem",
            description:
              "Pantau infrastruktur real-time, prioritaskan insiden kritikal, dan percepat resolusi operasional TI."
          },
          sec: {
            title: "MindSOC",
            label: "Analisis Ancaman",
            description:
              "Deteksi ancaman lebih dini, korelasikan alert keamanan, dan orkestrasi respons insiden secara terukur."
          },
          vision: {
            title: "VisionCraft",
            label: "Kreativitas Visual AI",
            description:
              "Hasilkan konten visual berbasis AI yang konsisten dengan brand untuk kebutuhan komunikasi dan kampanye."
          },
          gateway: {
            title: "MindGateway",
            label: "LLM Firewall",
            description:
              "Firewall gateway untuk memeriksa input prompt dan output LLM dengan kontrol rule-based bertingkat di level enterprise."
          }
        }
      },
      solutions: {
        kicker: "Solusi Kustom",
        title: "Sebagian besar yang kami kerjakan dibangun dari nol.",
        description:
          "Klien datang dengan masalah yang bentuknya tidak sama dengan produk mana pun, dan kami bangunkan — di atas ModelForge untuk model AI kustom dan AgentForge untuk agent, integrasi, dan otomasi untuk menjadi enterprise system yang utuh.",
        cards: {
          description:
            "Lorem ipsum dolor sit amet consectetur. Nibh quam faucibus senectus at laoreet lacus velit. Gravida vitae tristique eget id pellentesque eu etiam pharetra scelerisque.",
          modelForge: {
            title: "ModelForge (Pengembangan Model AI Kustom)",
            description:
              "Platform untuk membangun, menguji, dan deployment model AI enterprise dengan pipeline yang terukur dan cepat.",
            backTitle: "ModelForge (Pengembangan Model AI Kustom)",
            backDescription:
              "Model Forge adalah workspace end-to-end untuk menyiapkan data, melatih model, evaluasi performa, hingga deployment produksi dalam satu alur yang rapi.",
            backContent:
              "Dengan eksperimen yang terlacak, metrik yang terpusat, dan monitoring real-time, tim data dan engineering dapat beriterasi lebih cepat sambil menjaga kualitas model tetap konsisten.",
            backHighlights: [
              "Manajemen Siklus Hidup AI End-to-End",
              "Model AI yang Bisa Dikustomisasi",
              "Model AI dengan Kontrol & Keamanan Enterprise"
            ]
          },
          agenticAi: {
            title: "AgentForge (Pengembangan, Integrasi, dan Otomasi AI Agent)",
            description:
              "Orkestrasi agent AI lintas workflow bisnis untuk otomatisasi keputusan, eksekusi tugas, dan kolaborasi tim.",
            backTitle: "AgentForge (Pengembangan, Integrasi, dan Otomasi AI Agent)",
            backDescription:
              "Agentic AI memungkinkan organisasi membangun AI agent yang mampu memahami konteks, menentukan langkah, dan mengeksekusi tugas lintas sistem secara otomatis.",
            backContent:
              "Setiap agent dapat diatur dengan guardrails, workflow approval, dan observabilitas penuh sehingga proses bisnis berjalan lebih cepat, akurat, dan tetap terkendali.",
            backHighlights: [
              "AI Agent untuk automasi task",
              "Orkestrasi Multi Agent",
              "Platform AI Agent Enterprise yang Aman",
              "Optimisasi AI Agent"
            ]
          },
          learnMore: "Selengkapnya",
          back: "Kembali"
        },
        process: {
          kicker: "Cara Kami Mengerjakannya",
          steps: [
            {
              number: "01",
              title: "Discovery, 1–2 minggu",
              description:
                "Kami memahami proses, sistem, dan pain point bisnis Anda untuk menentukan use case dengan dampak paling nyata. Output: ruang lingkup, estimasi manfaat, dan prioritas implementasi."
            },
            {
              number: "02",
              title: "Proof of Concept, 2–3 minggu",
              description:
                "Kami membangun solusi langsung menggunakan data dan environment Anda. Dalam 2–3 minggu, Anda dapat memvalidasi solusi melalui prototype yang terukur sebelum masuk ke tahap implementasi lebih lanjut."
            },
            {
              number: "03",
              title: "Production & Integration",
              description:
                "Solusi diintegrasikan dengan sistem yang sudah ada melalui konektor dan arsitektur yang sesuai—tanpa perlu mengganti sistem utama. Deployment dapat disesuaikan dengan kebutuhan on-premise, private cloud, maupun hybrid."
            },
            {
              number: "04",
              title: "Handover & Enablement",
              description:
                "Kami memastikan solusi siap digunakan melalui dokumentasi, knowledge transfer, dan pendampingan tim internal. Source code dan akses teknis diberikan sesuai kesepakatan, sehingga tim Anda siap mengoperasikan dan mengembangkannya secara mandiri."
            }
          ]
        },
        differentiators: {
          kicker: "Yang Kami Bawa ke Setiap Pekerjaan Custom",
          items: [
            {
              number: "01",
              title: "Rapid Time-to-Value",
              description:
                "Mock-up fungsional dikirim dalam 1-2 minggu, bukan kuartal. Anda melihat bentuk nyatanya sebelum memutuskan lanjut."
            },
            {
              number: "02",
              title: "AI-Agnostic by Design",
              description:
                "Tidak terikat pada satu LLM. Kami pilih atau self-host model yang paling cocok untuk tiap pekerjaan, dan bisa diganti tanpa membangun ulang."
            },
            {
              number: "03",
              title: "On-Premise & Air-Gapped Ready",
              description:
                "Cloud, hybrid, atau sepenuhnya air-gapped untuk kedaulatan data. Bisa berjalan tanpa koneksi keluar sama sekali."
            },
            {
              number: "04",
              title: "AI Products & Custom Development",
              description:
                "Platform milik sendiri ditambah bespoke AI build: ModelForge dan AgentForge sebagai fondasi, bagian yang khas untuk Anda dibangun di atasnya."
            }
          ],
          ctaPrefix: "Tertarik untuk konsultasi lebih lanjut? ",
          ctaLink: "Ceritakan situasinya",
          ctaSuffix: ""
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
            title: "MindOps",
            label: "Operasional TI",
            description:
              "MindOps adalah platform APM (application performance monitoring) yang didukung AI. MindOps menggabungkan metrics, logs, dan traces dalam satu tampilan agar tim mendapatkan gambaran menyeluruh tentang sistem TI mereka. MindOps memiliki AI agent bernama Mindy yang mendeteksi perilaku tidak wajar dan membantu mengidentifikasi akar masalah pada sistem. MindOps dapat berjalan sebagai platform monitoring lengkap atau berdampingan dengan tools APM yang sudah ada, secara on-premise maupun cloud, sambil menjaga data dan pemrosesan AI tetap berada di dalam jaringan Anda.",
            heroDescription:
              "MindOps membantu tim operasional memonitor insiden secara menyeluruh, menganalisis akar masalah dengan konteks yang lebih jelas, dan menjalankan rekomendasi aksi prioritas agar proses pemulihan layanan berlangsung lebih cepat, konsisten, serta terukur di lingkungan operasional yang kompleks.",
            featureHeading: "MindOps mempercepat keputusan operasional",
            featureDescription:
              "Dari observability hingga incident response, MindOps mengurangi waktu investigasi dan meningkatkan reliability layanan.",
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
                  "MindOps memprioritaskan insiden kritikal lebih cepat sehingga gangguan layanan dapat ditangani sebelum berdampak luas."
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
            title: "MindSOC",
            label: "Keamanan",
            description:
              "MindSOC adalah platform keamanan berbasis AI yang mengumpulkan alert dari berbagai sistem keamanan ke dalam satu tempat dan membantu tim memahami potensi serangan. AI-nya secara otomatis menginvestigasi insiden, menghubungkan informasi dari berbagai sumber, dan mengidentifikasi kemungkinan akar masalah. MindSOC dapat mengirimkan hasil investigasi langsung ke sistem ticketing, membantu mengurangi waktu respons, false alarm, dan beban kerja manual, sambil tetap menjaga analis dalam kendali.",
            heroDescription:
              "MindSOC memperkuat security operation center melalui deteksi ancaman siber lebih dini, korelasi indikator serangan dari berbagai sumber, serta orkestrasi respons yang terukur sehingga tim keamanan dapat menekan risiko kebocoran data dan mempercepat pengambilan keputusan insiden.",
            featureHeading: "MindSOC, tools pintar berbasis AI untuk deteksi serangan siber",
            featureDescription:
              "MindSOC mendeteksi cyber attacks lebih dini, mengkorelasikan sumber serangan secara otomatis, dan membantu tim security menentukan respons paling tepat dalam satu alur kerja terintegrasi.",
            featurePoints: [
              "Manajemen Insiden Terpadu",
              "AI SOC Analyst",
              "Threat Hunter Agent",
              "Graf Investigasi"
            ],
            enterpriseBenefits: [
              {
                title: "Visibilitas Risiko Lebih Menyeluruh",
                description:
                  "MindSOC mengkorelasikan sinyal ancaman agar tim security melihat prioritas risiko secara lebih jelas."
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
          mindGateway: {
            title: "MindGateway",
            label: "LLM Firewall",
            description:
              "Gateway keamanan LLM untuk memvalidasi input prompting dan output model secara real-time.",
            heroDescription:
              "MindGateway adalah tools LLM Firewall yang memeriksa input prompt dan keluaran model sebelum digunakan lebih lanjut. Platform ini mendukung multimodal LLM serta policy rule-based bertingkat dari level global, department, hingga team agar implementasi AI enterprise tetap aman, patuh, dan terkendali.",
            featureHeading: "MindGateway memperkuat governance AI enterprise",
            featureDescription:
              "Dari validasi prompt hingga inspeksi respons model, MindGateway menjaga kualitas interaksi LLM dengan kontrol keamanan yang dapat disesuaikan lintas organisasi.",
            featurePoints: [
              "Inspeksi Prompt dan Respons",
              "Enforcement Kebijakan Multimodal",
              "Manajemen Rule Hierarkis",
              "Audit Trail dan Kepatuhan"
            ],
            enterpriseBenefits: [
              {
                title: "Perlindungan AI Berlapis",
                description:
                  "Setiap prompt dan respons diperiksa untuk mencegah prompt injection, data leakage, dan output berisiko sebelum sampai ke pengguna."
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
                title: "Firewall Prompt di Asisten Internal",
                excerpt:
                  "Filter prompt sensitif dan terapkan kebijakan keamanan sebelum request masuk ke LLM produksi."
              },
              {
                title: "Validasi Output untuk Customer Chat",
                excerpt:
                  "Validasi output LLM agar tetap selaras dengan kebijakan brand, regulasi, dan batasan konten perusahaan."
              },
              {
                title: "Governance LLM Multi-Department",
                excerpt:
                  "Atur rule berbeda untuk legal, compliance, dan support tanpa kehilangan kontrol global enterprise."
              }
            ]
          },
          visioncraft: {
            title: "VisionCraft",
            label: "Visual AI",
            description:
              "VisionCraft adalah platform AI untuk membuat gambar dan video, menggabungkan berbagai model AI untuk menghasilkan konten visual berkualitas tinggi. Mulai dari menuliskan ide awal dan menyusun storyboard hingga menghasilkan visual dan mengekspor video akhir, VisionCraft menghadirkan satu alur kerja sederhana dari konsep hingga hasil akhir.",
            heroDescription:
              "VisionCraft adalah platform AI multimodal yang membantu organisasi mengubah ide menjadi visual berkualitas tinggi dan automasi konten secara cepat, dengan alur kerja kolaboratif, kontrol brand yang konsisten, serta kesiapan produksi untuk kebutuhan komunikasi enterprise berskala besar.",
            featureHeading: "VisionCraft mengubah ide menjadi realita",
            featureDescription:
              "Dari prompt cerdas hingga kolaborasi lintas tim, VisionCraft membantu perusahaan menciptakan visual autentik dengan kualitas premium.",
            featurePoints: [
              "Multi-AI dalam Satu Platform",
              "Storyboard Berbasis AI",
              "AI Visual Studio On-Premise",
              "Brand Pack Intelligence"
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
          },
          mindGraph: {
            title: "MindGraph",
            label: "Data & Konteks",
            description:
              "MindGraph adalah AI Graph Intelligence Platform yang melampaui database tradisional, menggabungkan vector database dan graph database untuk memahami bagaimana informasi saling terhubung dan apa maknanya. MindGraph menghubungkan data dari berbagai sumber untuk mengungkap relasi, memahami konteks, dan memberikan insight yang dapat ditindaklanjuti. MindGraph dapat berjalan berdampingan dengan tools AI dan analitik yang sudah ada atau sebagai platform mandiri, secara on-premise maupun cloud.",
            heroDescription:
              "MindGraph menghubungkan data dari berbagai sumber untuk mengungkap relasi, memahami konteks, dan memberikan insight yang dapat ditindaklanjuti bagi tim data dan analitik.",
            featureHeading: "MindGraph akan segera hadir",
            featureDescription: "Detail fitur MindGraph akan segera diperbarui.",
            featurePoints: [
              "Intelijen Data Terpadu",
              "Pemahaman Konteks Berbasis Graph",
              "Intelijen Semantik Berbasis AI",
              "Integrasi Siap Enterprise"
            ],
            enterpriseBenefits: [
              {
                title: "Segera Hadir",
                description: "Detail dampak bisnis MindGraph akan segera diperbarui."
              }
            ],
            useCases: []
          },
          mindFlow: {
            title: "MindFlow",
            label: "Otomasi",
            description:
              "MindFlow adalah platform otomasi proses bisnis AI-native yang membantu perusahaan mendigitalisasi dan mengelola alur kerja mereka dalam satu tempat. Tim dapat menentukan proses bisnis mereka sendiri dan dengan mudah menyesuaikan segala hal mulai dari data, peran, dashboard, chart, hingga desain visual sesuai kebutuhan.",
            heroDescription:
              "Tim dapat menentukan proses bisnis mereka sendiri dan menyesuaikan data, peran, dashboard, chart, hingga desain visual sesuai kebutuhan.",
            featureHeading: "MindFlow akan segera hadir",
            featureDescription: "Detail fitur MindFlow akan segera diperbarui.",
            featurePoints: [
              "Sesuai untuk Proses Bisnis Apa Pun",
              "Kustomisasi Semuanya",
              "Satu Platform, Semua Peran",
              "Otomasi AI-Native"
            ],
            enterpriseBenefits: [
              {
                title: "Segera Hadir",
                description: "Detail dampak bisnis MindFlow akan segera diperbarui."
              }
            ],
            useCases: []
          }
        }
      },
      footer: {
        title: "Siap untuk Menjelajah?",
        subtitle: "Butuh detail? Tinggalkan email Anda, dan kami akan menghubungi.",
        emailPlaceholder: "Masukkan email Anda",
        send: "Kirim",
        technologyPartners: "Mitra Teknologi",
        form: {
          invalidEmail: "Format email belum valid.",
          configMissing: "Integrasi formulir belum dikonfigurasi.",
          sending: "Mengirim...",
          success: "Terima kasih. Email Anda berhasil dikirim.",
          failed: "Gagal mengirim email. Silakan coba lagi."
        },
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
        aboutUs: "Use Case",
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
        description:
          "We build intelligent solutions that connect your data, systems, and workflows — turning enterprise complexity into more automated decisions, scalable operations, and measurable business value.",
        stats: [
          { value: "5", label: "products for your business solutions" },
          { value: "2", label: "custom solution tracks" },
          { value: "6", label: "industries with ready-to-use cases" },
          { value: "0", label: "existing systems you need to tear down" }
        ],
        partnership: {
          kicker: "Standards & Partnerships"
        },
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
        title: "Find the product. Feel the solution.",
        description:
          "Explore a range of digital solutions in one platform. Pick the product that fits your needs and see how AI technology works for your business.",
        learnMore: "Learn More",
        bookDemo: "Book demo",
        viewDetails: "Product details",
        screenshotUnavailable: "Screenshot not available yet",
        cards: {
          ops: {
            title: "MindOps",
            label: "System Operations",
            description:
              "Monitor infrastructure in real time, prioritize critical incidents, and accelerate IT operations resolution."
          },
          sec: {
            title: "MindSOC",
            label: "Threat Analysis",
            description:
              "Detect threats earlier, correlate security alerts, and orchestrate incident response with better control."
          },
          vision: {
            title: "VisionCraft",
            label: "AI Visual Creativity",
            description:
              "Generate AI-powered visual content with strong brand consistency for communications and campaign needs."
          },
          gateway: {
            title: "MindGateway",
            label: "LLM Firewall",
            description:
              "An LLM firewall gateway that inspects prompt inputs and model outputs with enterprise-grade rule-based controls."
          }
        }
      },
      solutions: {
        kicker: "Custom Solutions",
        title: "Most of what we build starts from scratch.",
        description:
          "Clients come to us with problems that don't fit any off-the-shelf product, so we build on top of ModelForge for custom AI models and AgentForge for agents, integration, and automation — into one complete enterprise system.",
        cards: {
          description:
            "Lorem ipsum dolor sit amet consectetur. Nibh quam faucibus senectus at laoreet lacus velit. Gravida vitae tristique eget id pellentesque eu etiam pharetra scelerisque.",
          modelForge: {
            title: "ModelForge (Custom AI Model Development)",
            description:
              "A platform to build, test, and deploy enterprise AI models with fast, measurable pipelines.",
            backTitle: "ModelForge (Custom AI Model Development)",
            backDescription:
              "Model Forge is an end-to-end workspace for data preparation, model training, performance evaluation, and production deployment in one structured flow.",
            backContent:
              "With tracked experiments, centralized metrics, and real-time monitoring, data and engineering teams can iterate faster while keeping model quality consistent.",
            backHighlights: [
              "End-to-End AI Lifecycle Management",
              "Customizable AI Models",
              "Enterprise-Grade AI Control & Security"
            ]
          },
          agenticAi: {
            title: "AgentForge (AI Agent Development, Integration & Automation)",
            description:
              "Orchestrate AI agents across business workflows for decision automation, task execution, and team collaboration.",
            backTitle: "AgentForge (AI Agent Development, Integration & Automation)",
            backDescription:
              "Agentic AI enables organizations to build AI agents that understand context, decide next actions, and execute tasks across systems automatically.",
            backContent:
              "Each agent can be configured with guardrails, approval workflows, and full observability so business processes run faster, more accurately, and with stronger control.",
            backHighlights: [
              "AI Agents for Task Automation",
              "Multi-Agent Orchestration",
              "Secure Enterprise Agent Platform",
              "AI Agent Optimization"
            ]
          },
          learnMore: "Learn More",
          back: "Back"
        },
        process: {
          kicker: "How We Work",
          steps: [
            {
              number: "01",
              title: "Discovery, 1–2 weeks",
              description:
                "We get to know your business processes, systems, and pain points to identify the use case with the clearest impact. Output: scope, benefit estimate, and implementation priority."
            },
            {
              number: "02",
              title: "Proof of Concept, 2–3 weeks",
              description:
                "We build the solution directly using your own data and environment. Within 2–3 weeks, you can validate it through a measurable prototype before moving into full implementation."
            },
            {
              number: "03",
              title: "Production & Integration",
              description:
                "The solution is integrated into your existing systems through connectors and a fitting architecture — no need to replace your core systems. Deployment can be tailored to on-premise, private cloud, or hybrid needs."
            },
            {
              number: "04",
              title: "Handover & Enablement",
              description:
                "We make sure the solution is ready to use through documentation, knowledge transfer, and hands-on support for your internal team. Source code and technical access are provided as agreed, so your team is ready to operate and evolve it independently."
            }
          ]
        },
        differentiators: {
          kicker: "What We Bring to Every Custom Engagement",
          items: [
            {
              number: "01",
              title: "Rapid Time-to-Value",
              description:
                "Working mock-ups shipped in 1-2 weeks, not a quarter. You see the real shape of it before deciding to move forward."
            },
            {
              number: "02",
              title: "AI-Agnostic by Design",
              description:
                "Not locked into one LLM. We pick or self-host whichever model fits each job best, and can swap it out without rebuilding."
            },
            {
              number: "03",
              title: "On-Premise & Air-Gapped Ready",
              description:
                "Cloud, hybrid, or fully air-gapped for data sovereignty. Can run with zero outbound connections at all."
            },
            {
              number: "04",
              title: "AI Products & Custom Development",
              description:
                "Our own platforms plus bespoke AI builds: ModelForge and AgentForge as the foundation, with the custom parts built on top for you."
            }
          ],
          ctaPrefix: "Interested in a deeper consultation? ",
          ctaLink: "Tell us about it",
          ctaSuffix: ""
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
            title: "MindOps",
            label: "IT Operations",
            description:
              "MindOps is an APM (application performance monitoring) platform powered by AI. It brings metrics, logs, and traces together to give teams a clear view of their IT systems. MindOps has an AI agent, Mindy, that detects unusual behavior and helps identify the root cause of system problems. It can run as a complete monitoring platform or alongside existing APM tools, on-premise or in the cloud, while keeping data and AI processing within your network.",
            heroDescription:
              "MindOps helps operations teams monitor incidents end-to-end, analyze root causes with clearer context, and execute prioritized action recommendations so service recovery can run faster, more consistently, and with measurable outcomes across complex operational environments.",
            featureHeading: "MindOps accelerates operational decisions",
            featureDescription:
              "From observability to incident response, MindOps reduces investigation time and improves service reliability.",
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
                  "MindOps prioritizes critical incidents faster so service disruptions can be handled before wider impact."
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
            title: "MindSOC",
            label: "Security",
            description:
              "MindSOC is an AI-powered security platform that brings alerts from different security systems into one place and helps teams understand potential attacks. Its AI automatically investigates incidents, connects information from different sources, and identifies the likely root cause. MindSOC can send investigation results directly to ticketing systems, helping reduce response time, false alarms, and manual workload while keeping analysts in control.",
            heroDescription:
              "MindSOC strengthens security operation centers through earlier cyber threat detection, correlation of attack indicators across multiple sources, and measurable response orchestration so security teams can reduce data exposure risk and accelerate incident-level decision making.",
            featureHeading: "MindSOC, an AI-powered tool for cyberattack detection",
            featureDescription:
              "MindSOC detects cyber attacks earlier, correlates attack sources automatically, and helps security teams choose the most effective response in one integrated workflow.",
            featurePoints: [
              "Unified Incident Management",
              "AI SOC Analyst",
              "Threat Hunter Agent",
              "Investigation Graph"
            ],
            enterpriseBenefits: [
              {
                title: "Broader Risk Visibility",
                description:
                  "MindSOC correlates threat signals so security teams can see risk priorities more clearly."
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
          mindGateway: {
            title: "MindGateway",
            label: "LLM Firewall",
            description:
              "An LLM security gateway for real-time inspection of prompt inputs and model outputs.",
            heroDescription:
              "MindGateway is an LLM Firewall tool that inspects prompt inputs and model responses before they are consumed by users or downstream systems. It supports multimodal LLM interactions and rule-based policy layers at global, department, and team levels to keep enterprise AI deployments secure, compliant, and controlled.",
            featureHeading: "MindGateway strengthens enterprise AI governance",
            featureDescription:
              "From prompt validation to response inspection, MindGateway protects LLM interactions with adaptive guardrails and organization-wide policy enforcement.",
            featurePoints: [
              "Prompt and Response Inspection",
              "Multimodal Policy Enforcement",
              "Hierarchical Rule Management",
              "Audit Trail and Compliance"
            ],
            enterpriseBenefits: [
              {
                title: "Layered AI Protection",
                description:
                  "Every prompt and response is inspected to prevent prompt injection, data leakage, and risky output before it reaches end users."
              },
              {
                title: "Consistent Policies Across the Organization",
                description:
                  "Rules can be enforced from global to team level, keeping AI governance consistent while allowing unit-specific flexibility."
              },
              {
                title: "Secure Multimodal Support",
                description:
                  "Validation across text, documents, and multimodal content helps enterprises maintain safe and high-quality LLM interactions."
              },
              {
                title: "Faster Compliance and Audit Readiness",
                description:
                  "Structured logging and policy decision trails simplify internal audits and external regulatory reporting."
              },
              {
                title: "Lower Operational LLM Risk",
                description:
                  "Centralized guardrails reduce AI misuse incidents and help teams release LLM features faster with measurable risk control."
              }
            ],
            useCases: [
              {
                title: "Prompt Firewall for Internal Assistants",
                excerpt:
                  "Filter sensitive prompts and enforce security policies before requests are sent to production LLMs."
              },
              {
                title: "Output Validation for Customer Chat",
                excerpt:
                  "Validate LLM outputs to stay aligned with brand policy, regulatory rules, and enterprise content boundaries."
              },
              {
                title: "Multi-Department LLM Governance",
                excerpt:
                  "Apply different rules for legal, compliance, and support teams without losing global enterprise control."
              }
            ]
          },
          visioncraft: {
            title: "VisionCraft",
            label: "Visual AI",
            description:
              "VisionCraft is an AI platform for creating images and videos, bringing multiple AI models together to produce high-quality visual content. From writing the initial idea and building the storyboard to generating visuals and exporting the final video, VisionCraft provides one simple workflow from concept to delivery.",
            heroDescription:
              "VisionCraft is a multimodal AI platform that enables organizations to turn ideas into high-quality visual output and rapid content automation, supported by collaborative workflows, consistent brand control, and production readiness for enterprise-scale communication needs.",
            featureHeading: "VisionCraft turns ideas into reality",
            featureDescription:
              "From smart prompts to cross-team collaboration, VisionCraft helps organizations create authentic visuals with premium quality.",
            featurePoints: [
              "Multi-AI in One Platform",
              "AI Powered Storyboard",
              "On Prem AI Visual Studio",
              "Brand Pack Intelligence"
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
          },
          mindGraph: {
            title: "MindGraph",
            label: "Data & Context",
            description:
              "MindGraph is an AI Graph Intelligence Platform that goes beyond traditional databases, combining vector and graph databases to understand how information is connected and what it means. It connects data from different sources to uncover relationships, understand context, and provide actionable insights. MindGraph can run alongside existing AI and analytics tools or as a standalone platform, on-premise or in the cloud.",
            heroDescription:
              "MindGraph connects data from different sources to uncover relationships, understand context, and deliver actionable insight for data and analytics teams.",
            featureHeading: "MindGraph is coming soon",
            featureDescription: "MindGraph feature details will be updated soon.",
            featurePoints: [
              "Unified Data Intelligence",
              "Graph-Based Context Understanding",
              "AI-Powered Semantic Intelligence",
              "Enterprise-Ready Integration"
            ],
            enterpriseBenefits: [
              {
                title: "Coming Soon",
                description: "MindGraph business impact details will be updated soon."
              }
            ],
            useCases: []
          },
          mindFlow: {
            title: "MindFlow",
            label: "Automation",
            description:
              "MindFlow is an AI-native business process automation platform that helps businesses digitize and manage their workflows in one place. Teams can define their own business processes and easily customize everything from data, roles, dashboards, charts, and visual design to fit their needs.",
            heroDescription:
              "Teams can define their own business processes and customize data, roles, dashboards, charts, and visual design to fit their needs.",
            featureHeading: "MindFlow is coming soon",
            featureDescription: "MindFlow feature details will be updated soon.",
            featurePoints: [
              "Fits to Any Business Process",
              "Customize Everything",
              "One Platform, Every Role",
              "AI-Native Automation"
            ],
            enterpriseBenefits: [
              {
                title: "Coming Soon",
                description: "MindFlow business impact details will be updated soon."
              }
            ],
            useCases: []
          }
        }
      },
      footer: {
        title: "Ready to Discover?",
        subtitle: "Looking for details? Leave your email, and we'll reach out",
        emailPlaceholder: "Enter your email",
        send: "Send",
        technologyPartners: "Technology Partners",
        form: {
          invalidEmail: "Please enter a valid email format.",
          configMissing: "Form integration is not configured yet.",
          sending: "Sending...",
          success: "Thank you. Your email has been submitted.",
          failed: "Failed to submit email. Please try again."
        },
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


