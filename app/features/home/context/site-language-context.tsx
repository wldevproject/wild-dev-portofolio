"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type SiteLanguage = "id" | "en";

interface SiteLanguageContextValue {
  language: SiteLanguage;
  setLanguage: (language: SiteLanguage) => void;
  copy: typeof siteCopy.id;
}

const STORAGE_KEY = "wild-dev-portfolio-language";

const siteCopy = {
  id: {
    nav: {
      brand: "Wild Dev",
      sections: {
        home: "Beranda",
        skills: "Skill",
        education: "Pendidikan",
        experience: "Pengalaman",
        projects: "Portfolio",
        status: "Status",
        contact: "Kontak",
      },
      openComms: "Kontak",
      exportCv: "CV",
      openMenu: "Buka menu",
      closeMenu: "Tutup menu",
      languageLabel: "Bahasa",
    },
    hero: {
      label: "status_sistem: online",
      description:
        "Software Engineer berpengalaman yang fokus pada aplikasi mobile, Android native, dan integrasi IoT. Mengubah kebutuhan desain menjadi produk yang rapi, efisien, dan siap dipakai.",
      metrics: [
        {
          label: "Lokasi",
          value: "Jawa Barat",
          accentClass: "text-[var(--color-accent)]",
        },
        {
          label: "Fokus",
          value: "Software Engineer",
          accentClass: "text-[var(--color-accent-tertiary)]",
        },
      ],
      ctaPrimary: "Lihat Portfolio",
      ctaSecondary: "Buka Kontak",
      typewriter: "memuat ringkasan...",
      terminalLines: [
        { text: "> SISTEM DIMULAI", colorClass: "text-[var(--color-accent)]" },
        { text: "> IDENTITAS: Muhammad Fachrizal", colorClass: "text-[var(--color-accent-secondary)]" },
        { text: "> KLASIFIKASI: Software Engineer Android", colorClass: "text-[var(--color-accent-tertiary)]" },
        { text: "> STATUS / Ping: Siap / 0.01ms", colorClass: "text-[var(--color-muted-foreground)]" },
      ],
      nodeStatus: "status node",
      launchConsole: "Buka console",
      cpuLoad: "beban_cpu",
    },
    stats: [
      { value: "10+", label: "Project Terkirim", accentClass: "text-[var(--color-accent)]" },
      { value: "5", label: "Tahun Android", accentClass: "text-[var(--color-accent-secondary)]" },
      { value: "1", label: "Tahun Hardware/IoT", accentClass: "text-[var(--color-accent-tertiary)]" },
      { value: "3.3", label: "IPK Ilmu Komputer", accentClass: "text-[var(--color-accent)]" },
    ],
    skills: {
      label: "matriks kemampuan",
      title: "Teknologi Inti",
      description: "Kemampuan utama yang terbagi dari mobile, frontend, backend, sampai embedded system.",
    },
    education: {
      label: "kredensial_akademik",
      classOfPrefix: "angkatan",
    },
    experience: {
      label: "rekam_jejak",
      title: "Riwayat Profesional",
      description:
        "Perjalanan kerja profesional saya sebagai Software Engineer, Mobile Developer, UI/UX Designer, dan Hardware Programmer di berbagai organisasi.",
    },
    projects: {
      focusTabs: {
        development: {
          label: "Software",
          description: "Website, app, dashboard, dan software project yang fokus ke hasil build dan fungsi.",
          lane: "untuk software",
        },
        creative: {
          label: "Design & Video",
          description: "Kumpulan karya desain dan video yang bisa langsung dibuka ke hasil aslinya.",
          lane: "untuk desain & video",
        },
      },
      categories: {
        design: {
          label: "Design",
          description: "Visual statis, eksplorasi UI, dan layout yang lebih fokus ke presentasi visual.",
        },
        "reel-vertical": {
          label: "Reels Vertical",
          description: "Konten vertikal yang dibuat untuk konsumsi cepat di mobile.",
        },
        "video-landscape": {
          label: "Video Landscape",
          description: "Video landscape dengan framing lebih lebar dan ritme yang lebih stabil.",
        },
        youtube: {
          label: "YouTube",
          description: "Video berdurasi lebih panjang untuk dokumentasi atau aftermovie.",
        },
      },
      sectionLabel: "fokus portfolio",
      title: "Pilih yang ingin Anda lihat",
      description:
        "Biar cepat dan tidak bikin bingung, portfolio ini dibagi jadi dua jalur utama. Pilih Software kalau Anda ingin lihat project coding, atau Design & Video kalau Anda ingin lihat karya visual.",
      focusPathSoftware: "fokus://software",
      focusPathCreative: "fokus://multimedia",
      focusTextSoftware: "Masuk ke kumpulan project software: website, aplikasi, dashboard, dan sistem.",
      focusTextCreative: "Masuk ke daftar desain dan video. Setiap item bisa langsung dibuka ke hasil aslinya.",
      galleryLabel: "galeri design & video",
      galleryTitle: "Lihat Karya Visual Dengan Ringkas",
      galleryDescription:
        "Formatnya dibuat lebih sederhana supaya cepat dibaca. Klik satu item untuk membuka hasil asli di Instagram atau YouTube.",
      activeCategory: "kategori aktif",
      ariaLabel: "Fokus portfolio",
      creativeAriaLabel: "Kategori design dan video",
      linkHint: "Klik untuk buka hasil asli",
      openLink: "buka link",
      gear: "Gear",
      apps: "Aplikasi",
      platformFallback: "Media",
      cardCategoryLabels: {
        software: "software",
        design: "design",
        "reel-vertical": "reel vertical",
        "video-landscape": "video landscape",
        youtube: "youtube",
      },
      hash: {
        development: "#projects/developper",
        creative: "#projects/multimedia",
      },
    },
    status: {
      label: "log sistem",
      title: "Terminal Aktif",
      description:
        "Alur kerja saya menghubungkan kebutuhan software modern dengan constraint teknis di lapangan. Rapi saat build, adaptif saat problem solving.",
      logFile: "system.log",
      waiting: "menunggu input pengguna...",
      contactLabel: "hubungi",
      contactTitle: "Jalur Kontak",
      contactDescription:
        "Kalau Anda butuh software engineer, mobile developer, atau partner untuk prototype dan visual execution, langsung hubungi saya.",
      secondaryText: "GitHub / LinkedIn",
      destinationLabel: "pilih_tujuan",
    },
    footer: {
      label: "footer terminal",
      title: "akhir jalur",
      description:
        "Portfolio ini dirancang sebagai showcase yang memisahkan software dan karya visual agar client lebih cepat menemukan hal yang mereka butuhkan.",
      copyright: "© 2026 WILD DEV - sinyal stabil, paket aman.",
    },
    cvModal: {
      systemOverride: "OVERRIDE_SISTEM // EXPORT_CV",
      title: "EKSTRAK DATA CV",
      noticeLabel: "CATATAN:",
      noticeText: "Untuk alasan privasi, CV publik tidak menyertakan nomor telepon pribadi.",
      publicDownload: "UNDUH CV PUBLIK",
      restrictedAccess: "AKSES TERBATAS",
      restrictedHint: "Masukkan kredensial untuk akses data lengkap (termasuk nomor telepon):",
      emailPlaceholder: "EMAIL OTORISASI",
      passwordPlaceholder: "KODE AKSES",
      authenticating: "MEMVERIFIKASI...",
      fullDownload: "UNDUH CV LENGKAP",
      fallbackError: "Terjadi gangguan sistem. Silakan coba lagi.",
    },
  },
  en: {
    nav: {
      brand: "Wild Dev",
      sections: {
        home: "Home",
        skills: "Skills",
        education: "Education",
        experience: "Experience",
        projects: "Portfolio",
        status: "System",
        contact: "Contact",
      },
      openComms: "Contact",
      exportCv: "CV",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      languageLabel: "Language",
    },
    hero: {
      label: "system_status: online",
      description:
        "Experienced Software Engineer focused on mobile applications, Android native development, and IoT integration. Turning design requirements into products that are structured, efficient, and ready to ship.",
      metrics: [
        {
          label: "Location",
          value: "West Java",
          accentClass: "text-[var(--color-accent)]",
        },
        {
          label: "Focus",
          value: "Software Engineer",
          accentClass: "text-[var(--color-accent-tertiary)]",
        },
      ],
      ctaPrimary: "View Portfolio",
      ctaSecondary: "Open Contact",
      typewriter: "injecting summary...",
      terminalLines: [
        { text: "> BOOT SEQUENCE INITIATED", colorClass: "text-[var(--color-accent)]" },
        { text: "> IDENTITY: Muhammad Fachrizal", colorClass: "text-[var(--color-accent-secondary)]" },
        { text: "> CLASSIFICATION: Android Software Engineer", colorClass: "text-[var(--color-accent-tertiary)]" },
        { text: "> STATUS / Ping: Ready / 0.01ms", colorClass: "text-[var(--color-muted-foreground)]" },
      ],
      nodeStatus: "node status",
      launchConsole: "Launch console",
      cpuLoad: "cpu_load",
    },
    stats: [
      { value: "10+", label: "Projects Delivered", accentClass: "text-[var(--color-accent)]" },
      { value: "5", label: "Years Android Exp", accentClass: "text-[var(--color-accent-secondary)]" },
      { value: "1", label: "Year Hardware/IoT Exp", accentClass: "text-[var(--color-accent-tertiary)]" },
      { value: "3.3", label: "Computer Science GPA", accentClass: "text-[var(--color-accent)]" },
    ],
    skills: {
      label: "competency matrix",
      title: "Core Technologies",
      description: "Primary capabilities mapped across mobile, frontend, backend, and embedded systems.",
    },
    education: {
      label: "academic_credentials",
      classOfPrefix: "class_of",
    },
    experience: {
      label: "career traces",
      title: "Professional Record",
      description:
        "A professional timeline of my work as a Software Engineer, Mobile Developer, UI/UX Designer, and Hardware Programmer across multiple organizations.",
    },
    projects: {
      focusTabs: {
        development: {
          label: "Software",
          description: "Website, app, dashboard, and software projects focused on shipped functionality.",
          lane: "for software",
        },
        creative: {
          label: "Design & Video",
          description: "A collection of design and video work that opens directly to the original result.",
          lane: "for design & video",
        },
      },
      categories: {
        design: {
          label: "Design",
          description: "Static visuals, UI explorations, and layouts with stronger visual presentation.",
        },
        "reel-vertical": {
          label: "Reels Vertical",
          description: "Vertical content designed for fast mobile-first viewing.",
        },
        "video-landscape": {
          label: "Video Landscape",
          description: "Landscape videos with wider framing and steadier pacing.",
        },
        youtube: {
          label: "YouTube",
          description: "Longer-form videos for documentation and aftermovies.",
        },
      },
      sectionLabel: "portfolio focus",
      title: "Choose what you want to see",
      description:
        "To keep things clear and fast to scan, this portfolio is split into two main paths. Choose Software if you want to see coding work, or Design & Video if you want to see visual work.",
      focusPathSoftware: "focus://software",
      focusPathCreative: "focus://multimedia",
      focusTextSoftware: "Open the software archive: websites, applications, dashboards, and systems.",
      focusTextCreative: "Open the design and video list. Each item links directly to the original result.",
      galleryLabel: "design & video gallery",
      galleryTitle: "Scan Visual Work Faster",
      galleryDescription:
        "This layout is intentionally simple so it is easier to read quickly. Click any item to open the original Instagram or YouTube result.",
      activeCategory: "active category",
      ariaLabel: "Portfolio focus",
      creativeAriaLabel: "Design and video categories",
      linkHint: "Click to open the original result",
      openLink: "open link",
      gear: "Gear",
      apps: "Apps",
      platformFallback: "Media",
      cardCategoryLabels: {
        software: "software",
        design: "design",
        "reel-vertical": "vertical reel",
        "video-landscape": "landscape video",
        youtube: "youtube",
      },
      hash: {
        development: "#projects/developper",
        creative: "#projects/multimedia",
      },
    },
    status: {
      label: "system log",
      title: "Live Terminal Feed",
      description:
        "My workflow connects modern software requirements with practical field constraints. Clean during build, adaptive during problem solving.",
      logFile: "system.log",
      waiting: "waiting for user input...",
      contactLabel: "engage",
      contactTitle: "Contact Channel",
      contactDescription:
        "If you need a software engineer, mobile developer, or a partner for prototypes and visual execution, contact me directly.",
      secondaryText: "GitHub / LinkedIn",
      destinationLabel: "select_destination",
    },
    footer: {
      label: "terminal footer",
      title: "end of the line",
      description:
        "This portfolio is designed as a showcase that separates software and visual work so clients can find what they need faster.",
      copyright: "© 2026 WILD DEV - signal stable, packets secure.",
    },
    cvModal: {
      systemOverride: "SYSTEM_OVERRIDE // CV_EXPORT",
      title: "CV DATA EXTRACTION",
      noticeLabel: "NOTICE:",
      noticeText: "For privacy reasons, the public CV does not include personal phone numbers.",
      publicDownload: "DOWNLOAD PUBLIC CV",
      restrictedAccess: "RESTRICTED ACCESS",
      restrictedHint: "Enter credentials for full data access (includes phone number):",
      emailPlaceholder: "AUTHORIZATION EMAIL",
      passwordPlaceholder: "PASSCODE",
      authenticating: "AUTHENTICATING...",
      fullDownload: "DOWNLOAD FULL CV",
      fallbackError: "System malfunction. Please try again.",
    },
  },
} as const;

const SiteLanguageContext = createContext<SiteLanguageContextValue | null>(null);

export function SiteLanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<SiteLanguage>(() => {
    if (typeof window === "undefined") {
      return "id";
    }

    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === "id" || stored === "en" ? stored : "id";
  });

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      copy: siteCopy[language],
    }),
    [language]
  );

  return <SiteLanguageContext.Provider value={value}>{children}</SiteLanguageContext.Provider>;
}

export function useSiteLanguage() {
  const context = useContext(SiteLanguageContext);

  if (!context) {
    throw new Error("useSiteLanguage must be used within SiteLanguageProvider");
  }

  return context;
}
