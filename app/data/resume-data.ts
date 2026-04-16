// ─── Resume Data ───────────────────────────────────────────────
// Single source of truth for all portfolio/CV data.
// Shared between the website (page.tsx) and the PDF generator.

export interface Role {
  role: string;
  period: string;
  description: string;
  skills: string[];
}

export interface ExperienceEntry {
  id: string;
  company: string;
  roles: Role[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export type PortfolioFocus = "development" | "creative";

export type ProjectCategory =
  | "software"
  | "design"
  | "reel-vertical"
  | "video-landscape"
  | "youtube";

export interface Project {
  title: string;
  description: string;
  tags: string[];
  focus: PortfolioFocus;
  category: ProjectCategory;
  gear?: string[];
  software?: string[];
  status?: string;
  platform?: string;
  href?: string;
  includeInResume?: boolean;
}

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  location: string;
  phone: string;
  github: string;
  githubUsername: string;
  linkedin: string;
  linkedinPath: string;
  summary: string;
}

// ─── Personal Info ─────────────────────────────────────────────

export const personalInfo: PersonalInfo = {
  name: "Muhammad Fachrizal",
  title: "Software Engineer",
  email: "joefachrizal@hotmail.com",
  location: "West Java, Indonesia",
  phone: "+62 8XX-XXXX-XXXX", // TODO: Replace with actual phone number
  github: "https://github.com/wldevproject",
  githubUsername: "wldevproject",
  linkedin: "https://www.linkedin.com/in/muhammad-fachrizal-a32204ba/",
  linkedinPath: "in/muhammad-fachrizal",
  summary:
    "Experienced Software Engineer focused on Mobile applications, Android native development, and IoT integrations. Bringing designs to life through clean architecture and optimal performance.",
};

// ─── Projects ──────────────────────────────────────────────────

export const projectList: Project[] = [
  {
    title: "Jadwal Praktikum",
    description:
      "A mobile application to help students find practicum schedules. Implemented Geofencing for presence, QR Code detection, and OneSignal broadcast notifications.",
    tags: ["Kotlin", "Firebase", "Retrofit", "MVVM"],
    focus: "development",
    category: "software",
    status: "live",
  },
  {
    title: "Pendataan Rumah",
    description:
      "A mobile survey tool for village teams to classify resident assistance. Incorporates calculation algorithms using the SAW method.",
    tags: ["Kotlin", "Firebase", "MVVM"],
    focus: "development",
    category: "software",
    status: "live",
  },
  {
    title: "Educational Game: JAMARA",
    description:
      "Childhood education game (Jajanan Makanan Nusantara) created for the PKM program by DIKTI. Involved spirit design, animations, and sound integration.",
    tags: ["Construct 2", "XML", "Illustrator"],
    focus: "development",
    category: "software",
    status: "live",
  },
  {
    title: "Solar System 3D",
    description:
      "A 3D learning media application for exploring the solar system, complete with animated UI, sound effects, and interactive sprites.",
    tags: ["Unity 3D", "C#", "JavaScript"],
    focus: "development",
    category: "software",
    status: "live",
  },
  {
    title: "Product & Sales System",
    description:
      "Mobile dashboard used internally at PT Sundaya for tracking products, sales, and solar system panel reporting and analysis.",
    tags: ["Flutter", "Dart", "GetX"],
    focus: "development",
    category: "software",
    status: "live",
  },
  {
    title: "Taropedia",
    description:
      "Information application integrated with mini games to help students understand plant family types better.",
    tags: ["Kotlin", "Firebase", "MVVM"],
    focus: "development",
    category: "software",
    status: "live",
  },
  {
    title: "Sentul Runners // Community Reel 01",
    description:
      "Reel vertikal untuk komunitas Sentul Runners yang menonjolkan energi lari bareng, ritme cepat, dan momen kebersamaan dalam format yang cocok untuk mobile-first viewing.",
    tags: ["Instagram", "Reels", "Vertical"],
    focus: "creative",
    category: "reel-vertical",
    gear: ["Mobile Phone"],
    software: ["CapCut"],
    platform: "Instagram Reel",
    status: "published",
    href: "https://www.instagram.com/reel/DUJ7c3Rk1Ni/",
    includeInResume: false,
  },
  {
    title: "Sentul Runners // Community Reel 02",
    description:
      "Konten reel yang merangkum aktivitas komunitas Sentul Runners dengan pendekatan edit yang ringkas, dinamis, dan tetap menjaga fokus pada atmosfer event.",
    tags: ["Instagram", "Reels", "Vertical"],
    focus: "creative",
    category: "reel-vertical",
    gear: ["Mobile Phone"],
    software: ["CapCut"],
    platform: "Instagram Reel",
    status: "published",
    href: "https://www.instagram.com/reel/DTtFVHjk9c-/",
    includeInResume: false,
  },
  {
    title: "Kawah Ratu Tracking // Trail Documentation",
    description:
      "Dokumentasi tracking menuju Kawah Ratu yang dikemas dalam reel vertikal untuk menampilkan suasana perjalanan, lanskap jalur, dan pengalaman outdoor secara lebih imersif.",
    tags: ["Instagram", "Reels", "Vertical"],
    focus: "creative",
    category: "reel-vertical",
    gear: ["Mirrorless"],
    software: ["Premiere Pro"],
    platform: "Instagram Reel",
    status: "published",
    href: "https://www.instagram.com/randm_hunt/reel/C8SLN1EP78S/",
    includeInResume: false,
  },
  {
    title: "Kebun Raya Bogor // Talent Collaboration",
    description:
      "Konten kolaborasi dengan talent di Kebun Raya Bogor yang menggabungkan framing ringan, suasana lokasi, dan edit sosial yang tetap terasa natural namun engaging.",
    tags: ["Instagram", "Reels", "Vertical"],
    focus: "creative",
    category: "reel-vertical",
    gear: ["Mobile Phone"],
    software: ["Premiere Pro"],
    platform: "Instagram Reel",
    status: "published",
    href: "https://www.instagram.com/randm_hunt/reel/C7a-M-otJGK/",
    includeInResume: false,
  },
  {
    title: "Pawai Obor Ramadan // Event Documentation",
    description:
      "Video dokumentasi acara pawai obor dalam rangka menyambut Ramadan dengan fokus pada suasana acara, keramaian peserta, dan nuansa visual yang hangat.",
    tags: ["Instagram", "Landscape", "Event Documentation"],
    focus: "creative",
    category: "video-landscape",
    gear: ["Mirrorless"],
    software: ["Premiere Pro"],
    platform: "Instagram Video",
    status: "published",
    href: "https://www.instagram.com/reel/DWMVz5UAW3m/",
    includeInResume: false,
  },
  {
    title: "Perumahan Drone // Aerial Documentation",
    description:
      "Dokumentasi udara area perumahan menggunakan drone untuk menonjolkan sudut pandang luas, detail kawasan, dan hasil visual yang lebih sinematik.",
    tags: ["Instagram", "Landscape", "Aerial"],
    focus: "creative",
    category: "video-landscape",
    gear: ["Drone"],
    software: ["CapCut"],
    platform: "Instagram Video",
    status: "published",
    href: "https://www.instagram.com/reel/DWAc1Gegdtd/",
    includeInResume: false,
  },
  {
    title: "I'tikaf Istiqlal // Documentation Cut",
    description:
      "Video dokumentasi kegiatan i'tikaf di Masjid Istiqlal yang menekankan suasana ibadah, detail momen, dan pendekatan edit yang tetap tenang namun informatif.",
    tags: ["Instagram", "Landscape", "Documentation"],
    focus: "creative",
    category: "video-landscape",
    gear: ["Mobile Phone"],
    software: ["CapCut"],
    platform: "Instagram Video",
    status: "published",
    href: "https://www.instagram.com/reel/DV4314tAawS/",
    includeInResume: false,
  },
  {
    title: "HUT RI 80 // Housing Event Teaser",
    description:
      "Teaser acara 17-an di lingkungan perumahan yang memadukan footage mobile phone dan mirrorless untuk membangun antusiasme sebelum acara berlangsung.",
    tags: ["Instagram", "Landscape", "Teaser"],
    focus: "creative",
    category: "video-landscape",
    gear: ["Mobile Phone", "Mirrorless"],
    software: ["Premiere Pro"],
    platform: "Instagram Video",
    status: "published",
    href: "https://www.instagram.com/reel/DNp7qcxh2NC/",
    includeInResume: false,
  },
  {
    title: "Cisadon Tracking // Trail Documentation",
    description:
      "Dokumentasi tracking ke Cisadon yang dirancang untuk memperlihatkan alur perjalanan, karakter jalur, dan pengalaman kegiatan outdoor secara lebih dekat.",
    tags: ["Instagram", "Landscape", "Outdoor"],
    focus: "creative",
    category: "video-landscape",
    gear: ["Mobile Phone"],
    software: ["CapCut"],
    platform: "Instagram Video",
    status: "published",
    href: "https://www.instagram.com/randm_hunt/reel/C69fufpSKcE/",
    includeInResume: false,
  },
  {
    title: "I'tikaf Istiqlal // Social Edit",
    description:
      "Versi social edit untuk dokumentasi i'tikaf di Istiqlal dengan gaya potongan yang lebih ringkas agar tetap kuat untuk distribusi konten media sosial.",
    tags: ["Instagram", "Landscape", "Social Edit"],
    focus: "creative",
    category: "video-landscape",
    gear: ["Mobile Phone"],
    software: ["Premiere Pro"],
    platform: "Instagram Video",
    status: "published",
    href: "https://www.instagram.com/randm_hunt/reel/C5f82zkPx6R/",
    includeInResume: false,
  },
  {
    title: "Flink Forward Asia 2024 // Event Documentation",
    description:
      "Dokumentasi acara Flink Forward Asia 2024 dalam format YouTube dengan pendekatan edit yang lebih panjang untuk menjaga alur event tetap informatif dan nyaman ditonton.",
    tags: ["YouTube", "Event Documentation", "Long Form"],
    focus: "creative",
    category: "youtube",
    gear: ["Mirrorless"],
    software: ["Premiere Pro", "CapCut"],
    platform: "YouTube",
    status: "published",
    href: "https://www.youtube.com/watch?v=-Mzx5_a-hSc&t=46s",
    includeInResume: false,
  },
  {
    title: "HUT RI 80 // Aftermovie 2025",
    description:
      "Aftermovie perayaan HUT RI ke-80 tahun 2025 yang menggabungkan footage mobile phone dan mirrorless untuk menghadirkan recap acara yang lebih lengkap dan emosional.",
    tags: ["YouTube", "Aftermovie", "Event Recap"],
    focus: "creative",
    category: "youtube",
    gear: ["Mobile Phone", "Mirrorless"],
    software: ["Premiere Pro"],
    platform: "YouTube",
    status: "published",
    href: "https://www.youtube.com/watch?v=RD5AVax6rHI",
    includeInResume: false,
  },
];

// ─── Experience ────────────────────────────────────────────────

export const experienceList: ExperienceEntry[] = [
  {
    id: "exp-1",
    company: "Sundaya",
    roles: [
      {
        role: "Software Engineer",
        period: "Jan 2025 - PRESENT",
        description:
          "- Maintained and extended the web-based version of the PLTS monitoring system.\n- Ensured feature parity with mobile apps (interactive graphs, data exports).\n- Enhanced UX/UI to support multi-role access and optimized performance across browsers.\n- Scaled the front-end codebase modularity.",
        skills: ["Flutter", "GetX", "Web Development"],
      },
      {
        role: "Mobile Developer",
        period: "Oct 2021 - PRESENT",
        description:
          "- Developed Android applications to monitor Solar PV (PLTS) system performance with real-time analytics.\n- Implemented interactive data visualizations (graphs, Sankey diagrams, area heatmaps).\n- Designed reporting endpoints, billing summaries, and role-based access control systems.",
        skills: ["Dart", "Flutter", "Android"],
      },
      {
        role: "UI/UX Designer",
        period: "Oct 2021 - Jun 2022",
        description:
          "- Shaped visual direction and translated user insights into clean, functional interfaces.\n- Designed the first visual blueprints for mobile apps, websites, and desktop applications.",
        skills: ["Figma", "UI/UX Design"],
      },
    ],
  },
  {
    id: "exp-2",
    company: "Freelance",
    roles: [
      {
        role: "Graphic Designer",
        period: "Jun 2020 - PRESENT",
        description:
          "- Helping communities and small businesses communicate via purposeful graphic design.\n- Specialized in impactful logos, brand visuals, educational posters, and social media content.",
        skills: ["Adobe Photoshop", "Adobe Illustrator"],
      },
    ],
  },
  {
    id: "exp-3",
    company: "PT. Nusa Rizki Persada",
    roles: [
      {
        role: "Software Engineer",
        period: "Oct 2017 - Sep 2021",
        description:
          "- Developing the application of schedule information system and students report.\n- Developing the application of PMB (New Student Admission).",
        skills: ["Android Studio", "Java", "Kotlin"],
      },
    ],
  },
  {
    id: "exp-4",
    company: "Diskominfo Tangerang City",
    roles: [
      {
        role: "Software Engineer",
        period: "Aug 2016 - Jun 2017",
        description:
          "- Developing the prototype of water pump controller with Internet of Things technology.\n- Designing Frontend and System Engineering of Web OPD in Tangerang City.",
        skills: ["PHP", "MySQL", "C", "Hardware"],
      },
    ],
  },
  {
    id: "exp-5",
    company: "Lab.Workshop Mikrokontroler",
    roles: [
      {
        role: "Assistant Lecturer",
        period: "Mar 2013 - Aug 2016",
        description:
          "- Taught and assisted students over the topics: Electronical Engineering, Hardware Programming, Digital Systems I & II, Robotics, and Android Programming.",
        skills: ["Electronics", "Robotics", "Teaching"],
      },
    ],
  },
];

// ─── Education ─────────────────────────────────────────────────

export const educationList: ExperienceEntry[] = [
  {
    id: "edu-1",
    company: "Pakuan University",
    roles: [
      {
        role: "Bachelor of Computer Science",
        period: "2016",
        description:
          "Graduated with GPA 3.3.\nRelevant Coursework includes Software Engineering, Hardware Programming, Algorithms, Data Structures, Database, Object-Oriented Programming, and Design. Building a strong foundation across both software and hardware disciplines.",
        skills: [],
      },
    ],
  },
];

// ─── Skills ────────────────────────────────────────────────────

export const skillCategories: SkillCategory[] = [
  {
    title: "Mobile / Frontend / App",
    skills: [
      "Android Studio",
      "Kotlin",
      "Java",
      "Flutter",
      "Dart",
      "React",
      "Next.js",
      "Javascript",
    ],
  },
  {
    title: "Backend / Database / CMS",
    skills: ["Firebase", "PHP", "CodeIgniter", "MySQL", "REST APIs"],
  },
  {
    title: "Hardware / IoT / Game Engine",
    skills: [
      "Arduino",
      "C",
      "Proteus",
      "Eagle Board",
      "Unity 3D",
      "Construct 2",
      "C#",
    ],
  },
  {
    title: "Design / UI / UX",
    skills: [
      "Figma",
      "Adobe Illustrator",
      "Photoshop",
      "After Effects",
      "Premiere",
    ],
  },
];
