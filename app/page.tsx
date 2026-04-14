import { Card } from "@/app/components/ui/card";
import { CTAPanel } from "@/app/components/ui/cta-panel";
import { Footer } from "@/app/components/ui/footer";
import { HeroSection } from "@/app/components/ui/hero-section";
import { LayoutSection } from "@/app/components/ui/layout-section";
import { ProjectCard } from "@/app/components/ui/project-card";
import { ScrollReveal } from "@/app/components/ui/scroll-reveal";
import { TopNav } from "@/app/components/ui/top-nav";
import { ExperienceTimeline } from "@/app/components/ui/experience-timeline";
import { SkillsGrid } from "@/app/components/ui/skills-grid";

const projectList = [
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

const experienceList = [
  {
    id: "exp-1",
    company: "Sundaya",
    roles: [
      {
        role: "Software Engineer",
        period: "Jan 2025 - PRESENT",
        description: "- Maintained and extended the web-based version of the PLTS monitoring system.\n- Ensured feature parity with mobile apps (interactive graphs, data exports).\n- Enhanced UX/UI to support multi-role access and optimized performance across browsers.\n- Scaled the front-end codebase modularity.",
        skills: ["Flutter", "GetX", "Web Development"],
      },
      {
        role: "Mobile Developer",
        period: "Oct 2021 - PRESENT",
        description: "- Developed Android applications to monitor Solar PV (PLTS) system performance with real-time analytics.\n- Implemented interactive data visualizations (graphs, Sankey diagrams, area heatmaps).\n- Designed reporting endpoints, billing summaries, and role-based access control systems.",
        skills: ["Dart", "Flutter", "Android"],
      },
      {
        role: "UI/UX Designer",
        period: "Oct 2021 - Jun 2022",
        description: "- Shaped visual direction and translated user insights into clean, functional interfaces.\n- Designed the first visual blueprints for mobile apps, websites, and desktop applications.",
        skills: ["Figma", "UI/UX Design"],
      }
    ]
  },
  {
    id: "exp-2",
    company: "Freelance",
    roles: [
      {
        role: "Graphic Designer",
        period: "Jun 2020 - PRESENT",
        description: "- Helping communities and small businesses communicate via purposeful graphic design.\n- Specialized in impactful logos, brand visuals, educational posters, and social media content.",
        skills: ["Adobe Photoshop", "Adobe Illustrator"],
      }
    ]
  },
  {
    id: "exp-3",
    company: "PT. Nusa Rizki Persada",
    roles: [
      {
        role: "Software Engineer",
        period: "Oct 2017 - Sep 2021",
        description: "- Developing the application of schedule information system and students report.\n- Developing the application of PMB (New Student Admission).",
        skills: ["Android Studio", "Java", "Kotlin"],
      }
    ]
  },
  {
    id: "exp-4",
    company: "Diskominfo Tangerang City",
    roles: [
      {
        role: "Software Engineer",
        period: "Aug 2016 - Jun 2017",
        description: "- Developing the prototype of water pump controller with Internet of Things technology.\n- Designing Frontend and System Engineering of Web OPD in Tangerang City.",
        skills: ["PHP", "MySQL", "C", "Hardware"],
      }
    ]
  },
  {
    id: "exp-5",
    company: "Lab.Workshop Mikrokontroler",
    roles: [
      {
        role: "Assistant Lecturer",
        period: "Mar 2013 - Aug 2016",
        description: "- Taught and assisted students over the topics: Electronical Engineering, Hardware Programming, Digital Systems I & II, Robotics, and Android Programming.",
        skills: ["Electronics", "Robotics", "Teaching"],
      }
    ]
  }
];

const educationList = [
  {
    id: "edu-1",
    company: "Pakuan University",
    roles: [
      {
        role: "Bachelor of Computer Science",
        period: "2016",
        description: "Graduated with GPA 3.3.\nRelevant Coursework: Software Engineering, Hardware Programming, Algorithms, Data Structures, Database, Object-Oriented Programming, Design.",
        skills: [],
      }
    ]
  }
];

const skillCategories = [
  {
    title: "Mobile / Frontend / App",
    skills: ["Android Studio", "Kotlin", "Java", "Flutter", "Dart", "React", "Next.js", "Javascript"]
  },
  {
    title: "Backend / Database / CMS",
    skills: ["Firebase", "PHP", "CodeIgniter", "MySQL", "REST APIs"]
  },
  {
    title: "Hardware / IoT / Game Engine",
    skills: ["Arduino", "C", "Proteus", "Eagle Board", "Unity 3D", "Construct 2", "C#"]
  },
  {
    title: "Design / UI / UX",
    skills: ["Figma", "Adobe Illustrator", "Photoshop", "After Effects", "Premiere"]
  }
];

export default function Home() {
  return (
    <main id="home" className="relative isolate min-h-screen overflow-hidden bg-background text-foreground">
      <TopNav />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(circle_at_top,_rgba(0,255,136,0.18),_transparent_45%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-72 bg-[radial-gradient(circle_at_bottom_right,_rgba(0,212,255,0.14),_transparent_40%)]" />

      <div className="mx-auto flex max-w-7xl flex-col gap-20 px-6 py-12 sm:px-10 lg:px-16">
        <HeroSection
          label="access protocol: initialized"
          title="MUHAMMAD FACHRIZAL."
          description="Experienced Software Engineer focused on Mobile applications, Android native development, and IoT integrations. Bringing designs to life through clean architecture and optimal performance."
          metrics={[
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
          ]}
          ctaPrimary="View Projects"
          ctaSecondary="Contact Log"
          terminalLines={[
            { text: "> BOOT SEQUENCE INITIATED", colorClass: "text-[var(--color-accent)]" },
            { text: "> IDENTITY: Muhammad Fachrizal", colorClass: "text-[var(--color-accent-secondary)]" },
            { text: "> CLASSIFICATION: Software Engineer Android", colorClass: "text-[var(--color-accent-tertiary)]" },
            { text: "> STATUS / Ping: Ready / 0.01ms", colorClass: "text-[var(--color-muted-foreground)]" },
          ]}
        />

        <section id="stats" className="flex flex-col gap-8 divide-x divide-[var(--color-border)] border-x border-[var(--color-border)] bg-[var(--color-muted)]/30 px-6 py-12 sm:px-10 lg:flex-row lg:px-16">
          <div className="flex-1 space-y-2 text-center lg:text-left">
            <div className="text-4xl font-black uppercase tracking-widest text-[var(--color-accent)] lg:text-5xl">
              10+
            </div>
            <div className="font-ui text-sm uppercase tracking-[0.2em] text-[var(--color-muted-foreground)]">
              Projects Deployed
            </div>
          </div>
          <div className="flex-1 space-y-2 text-center lg:text-left">
            <div className="text-4xl font-black uppercase tracking-widest text-[var(--color-accent-secondary)] lg:text-5xl">
              5
            </div>
            <div className="font-ui text-sm uppercase tracking-[0.2em] text-[var(--color-muted-foreground)]">
              Years Android Exp
            </div>
          </div>
          <div className="flex-1 space-y-2 text-center lg:text-left">
            <div className="text-4xl font-black uppercase tracking-widest text-[var(--color-accent-tertiary)] lg:text-5xl">
              1
            </div>
            <div className="font-ui text-sm uppercase tracking-[0.2em] text-[var(--color-muted-foreground)]">
              Year Hardware/IoT Exp
            </div>
          </div>
          <div className="flex-1 space-y-2 text-center lg:text-left">
            <div className="text-4xl font-black uppercase tracking-widest text-[var(--color-accent)] lg:text-5xl">
              3.3
            </div>
            <div className="font-ui text-sm uppercase tracking-[0.2em] text-[var(--color-muted-foreground)]">
              Computer Science GPA
            </div>
          </div>
        </section>

        <LayoutSection
          id="skills"
          label="competency matrix"
          title="Core Technologies"
          description="A complete stack ranging from Mobile Application Development to Hardware/IoT and UI/UX implementation."
        >
          <SkillsGrid categories={skillCategories} />
        </LayoutSection>
        
        <LayoutSection
          id="education"
          label="academic credentials"
          title="Education"
          description="Formal academic foundation leading to the computer science degree."
        >
          <div className="w-full">
            {educationList.map((item) => (
              <div key={item.id} className="relative flex flex-col md:flex-row gap-8 lg:gap-12 justify-between py-2">
                
                {/* Left Column: Institute */}
                <div className="md:w-1/3 border-l-2 border-[var(--color-accent-tertiary)] pl-6 md:pr-6 shrink-0">
                  <div className="font-ui text-xs uppercase tracking-[0.3em] text-[var(--color-accent)] mb-3">
                    sys.institute
                  </div>
                  <div className="text-2xl md:text-3xl font-bold uppercase tracking-wider text-foreground">
                    {item.company}
                  </div>
                </div>
                
                {/* Right Column: Degree Details */}
                <div className="md:w-2/3 space-y-6">
                  {item.roles.map((role, rIdx) => (
                    <div key={rIdx}>
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 gap-4">
                        <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-[var(--color-accent-tertiary)]">
                          {role.role}
                        </h3>
                        <span className="font-ui text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-accent)] shrink-0 sm:mt-1">
                          [ CLASS OF {role.period} ]
                        </span>
                      </div>
                      <p className="text-sm md:text-base text-[var(--color-muted-foreground)] leading-loose whitespace-pre-line">
                        {role.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </LayoutSection>
        
        <LayoutSection
          id="experience"
          label="career traces"
          title="Service Record"
          description="Historical log of my professional journey acting as a Software Engineer and Hardware Programmer across multiple agencies and corporations."
        >
          <ExperienceTimeline experiences={experienceList} />
        </LayoutSection>

        <LayoutSection
          id="projects"
          label="project archive"
          title="Active deployments"
          description="From hardware prototypes to immersive mobile apps and educational game learning platforms."
        >
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projectList.map((project) => (
              <ScrollReveal key={project.title}>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                />
              </ScrollReveal>
            ))}
          </div>
        </LayoutSection>

        <section id="status" className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="relative overflow-hidden border-[var(--color-border)] bg-[var(--color-card)] p-8 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top_right,_rgba(255,0,255,0.12),_transparent_35%)] before:content-['']">
            <div className="space-y-5 relative z-10">
              <p className="font-ui text-sm uppercase tracking-[0.35em] text-[var(--color-accent-tertiary)]">
                system log
              </p>
              <h2 className="text-3xl font-bold uppercase tracking-[0.18em] text-foreground">
                Live terminal feed
              </h2>
              <p className="max-w-2xl text-sm leading-7 text-[var(--color-muted-foreground)]">
                The cybernetic workflow connects both the low-level hardware constraints and high-end modern mobile UI. Always responsible, always exploring.
              </p>
            </div>
            <pre className="terminal-panel mt-8 rounded-none border border-[var(--color-border)] bg-[var(--color-background)] px-5 py-6 text-sm text-[var(--color-foreground)] leading-7">
<span className="text-[var(--color-accent)]">[ 00:00:01 ]</span> root login: muhammad_fachrizal{"\n"}
<span className="text-[var(--color-accent-secondary)]">[ 00:00:03 ]</span> parsing github: /wldevproject{"\n"}
<span className="text-[var(--color-accent-tertiary)]">[ 00:00:07 ]</span> linkedin trace: /in/muhammad-fachrizal{"\n"}
<span className="text-[var(--color-accent)]">[ 00:00:11 ]</span> email routed: joefachrizal@hotmail.com{"\n"}
<span className="text-[var(--color-muted-foreground)]">[ 00:00:14 ]</span> waiting for user input...
            </pre>
          </Card>

          <CTAPanel
            id="contact"
            label="engage"
            title="Vector contact"
            description="Need an experienced Mobile Engineer or a prototype builder for your next project? Drop a line and I'll respond securely."
            primaryText="joefachrizal@hotmail.com"
            secondaryText="GitHub / LinkedIn"
          />
        </section>
      </div>
      <Footer />
    </main>
  );
}
