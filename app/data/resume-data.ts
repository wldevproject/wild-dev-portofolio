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

export interface Project {
  title: string;
  description: string;
  tags: string[];
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
  },
  {
    title: "Pendataan Rumah",
    description:
      "A mobile survey tool for village teams to classify resident assistance. Incorporates calculation algorithms using the SAW method.",
    tags: ["Kotlin", "Firebase", "MVVM"],
  },
  {
    title: "Educational Game: JAMARA",
    description:
      "Childhood education game (Jajanan Makanan Nusantara) created for the PKM program by DIKTI. Involved spirit design, animations, and sound integration.",
    tags: ["Construct 2", "XML", "Illustrator"],
  },
  {
    title: "Solar System 3D",
    description:
      "A 3D learning media application for exploring the solar system, complete with animated UI, sound effects, and interactive sprites.",
    tags: ["Unity 3D", "C#", "JavaScript"],
  },
  {
    title: "Product & Sales System",
    description:
      "Mobile dashboard used internally at PT Sundaya for tracking products, sales, and solar system panel reporting and analysis.",
    tags: ["Flutter", "Dart", "GetX"],
  },
  {
    title: "Taropedia",
    description:
      "Information application integrated with mini games to help students understand plant family types better.",
    tags: ["Kotlin", "Firebase", "MVVM"],
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
