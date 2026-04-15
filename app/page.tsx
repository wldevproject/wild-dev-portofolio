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
        description: "Graduated with GPA 3.3.\nRelevant Coursework includes Software Engineering, Hardware Programming, Algorithms, Data Structures, Database, Object-Oriented Programming, and Design. Building a strong foundation across both software and hardware disciplines.",
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

      <div className="mx-auto flex max-w-7xl flex-col gap-0 px-6 py-12 sm:px-10 lg:px-16">
        <HeroSection
          label="system_status: online"
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
      </div>

      {/* ═══ STATS BAR — full-bleed bg, constrained content ═══ */}
      <section id="stats" className="border-y border-[var(--color-border)] bg-[var(--color-muted)]/30">
        <div className="mx-auto max-w-7xl flex flex-col gap-8 divide-[var(--color-border)] px-6 py-12 sm:px-10 lg:flex-row lg:divide-x lg:px-16">
          <div className="flex-1 space-y-2 text-center lg:text-left">
            <div className="text-4xl font-black uppercase tracking-widest text-[var(--color-accent)] lg:text-5xl">
              10+
            </div>
            <div className="font-ui text-xs uppercase tracking-[0.2em] text-[var(--color-muted-foreground)]">
              Projects Deployed
            </div>
          </div>
          <div className="flex-1 space-y-2 text-center lg:text-left">
            <div className="text-4xl font-black uppercase tracking-widest text-[var(--color-accent-secondary)] lg:text-5xl">
              5
            </div>
            <div className="font-ui text-xs uppercase tracking-[0.2em] text-[var(--color-muted-foreground)]">
              Years Android Exp
            </div>
          </div>
          <div className="flex-1 space-y-2 text-center lg:text-left">
            <div className="text-4xl font-black uppercase tracking-widest text-[var(--color-accent-tertiary)] lg:text-5xl">
              1
            </div>
            <div className="font-ui text-xs uppercase tracking-[0.2em] text-[var(--color-muted-foreground)]">
              Year Hardware/IoT Exp
            </div>
          </div>
          <div className="flex-1 space-y-2 text-center lg:text-left">
            <div className="text-4xl font-black uppercase tracking-widest text-[var(--color-accent)] lg:text-5xl">
              3.3
            </div>
            <div className="font-ui text-xs uppercase tracking-[0.2em] text-[var(--color-muted-foreground)]">
              Computer Science GPA
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SKILLS ═══ */}
      <LayoutSection
        id="skills"
        label="competency matrix"
        title="Core Technologies"
        description="Precision-mapped capabilities across multiple domains, from mobile interfaces to embedded systems."
      >
        <SkillsGrid categories={skillCategories} />
      </LayoutSection>

      {/* ═══ DIVIDER ═══ */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--color-border)] to-transparent" />

      {/* ═══ EDUCATION — standalone centered ═══ */}
      <section id="education" className="relative py-20 md:py-28">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,136,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,136,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-3xl px-6 sm:px-10 lg:px-16">
          {educationList.map((item) => (
            <div key={item.id} className="relative border border-dashed border-[rgba(0,255,136,0.3)] p-8 md:p-12">
              <div className="absolute -top-[3px] -left-[3px] w-5 h-5 border-t-2 border-l-2 border-[var(--color-accent)]" />
              <div className="absolute -top-[3px] -right-[3px] w-5 h-5 border-t-2 border-r-2 border-[var(--color-accent)]" />
              <div className="absolute -bottom-[3px] -left-[3px] w-5 h-5 border-b-2 border-l-2 border-[var(--color-accent)]" />
              <div className="absolute -bottom-[3px] -right-[3px] w-5 h-5 border-b-2 border-r-2 border-[var(--color-accent)]" />

              {item.roles.map((role, rIdx) => (
                <div key={rIdx} className="space-y-6">
                  <p className="font-ui text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
                    academic_credentials
                  </p>
                  <h2 className="text-2xl md:text-4xl font-bold tracking-wider text-foreground leading-tight">
                    {role.role}, {item.company}.
                  </h2>
                  <div className="space-y-5 pt-2">
                    {role.description.split("\n").filter(Boolean).map((line, i) => (
                      <p key={i} className="text-sm md:text-base text-[var(--color-muted-foreground)] leading-relaxed">
                        <span className="text-[var(--color-accent)] mr-2 font-bold">&gt;&gt;</span>
                        {line}
                      </p>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-[rgba(255,255,255,0.05)]">
                    <p className="font-ui text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
                      » class_of_{role.period}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ═══ DIVIDER ═══ */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--color-border)] to-transparent" />

      {/* ═══ EXPERIENCE ═══ */}
      <LayoutSection
        id="experience"
        label="career traces"
        title="Service Record"
        description="Historical log of my professional journey acting as a Software Engineer and Hardware Programmer across multiple agencies and corporations."
      >
        <ExperienceTimeline experiences={experienceList} />
      </LayoutSection>

      {/* ═══ DIVIDER ═══ */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--color-border)] to-transparent" />

      {/* ═══ PROJECTS ═══ */}
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

      {/* ═══ DIVIDER ═══ */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--color-border)] to-transparent" />

      {/* ═══ STATUS + CONTACT ═══ */}
      <section className="relative w-full">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 md:py-28 lg:px-16">
          <div id="status" className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            {/* Left: Title + Description + Terminal */}
            <div className="space-y-8">
              <div className="space-y-5">
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

              {/* Terminal — styled like reference code window */}
              <div className="rounded-none border border-[var(--color-border)] bg-[var(--color-card)] overflow-hidden">
                {/* Traffic light header */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--color-border)] bg-[var(--color-background)]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                  <span className="ml-3 font-ui text-2xs uppercase tracking-[0.2em] text-[var(--color-muted-foreground)]">system.log</span>
                </div>
                <pre className="px-5 py-5 text-sm text-[var(--color-foreground)] leading-7 font-mono">
<span className="text-[var(--color-accent)]">[ 00:00:01 ]</span> root login: muhammad_fachrizal{"\n"}
<span className="text-[var(--color-accent-secondary)]">[ 00:00:03 ]</span> parsing github: /wldevproject{"\n"}
<span className="text-[var(--color-accent-tertiary)]">[ 00:00:07 ]</span> linkedin trace: /in/muhammad-fachrizal{"\n"}
<span className="text-[var(--color-accent)]">[ 00:00:11 ]</span> email routed: joefachrizal@hotmail.com{"\n"}
<span className="text-[var(--color-muted-foreground)]">[ 00:00:14 ]</span> waiting for user input...
<span className="inline-block w-2 h-4 bg-[var(--color-accent)] animate-[blink_1s_step-end_infinite]" />
                </pre>
              </div>
            </div>

            {/* Right: CTA */}
            <CTAPanel
              id="contact"
              label="engage"
              title="Vector contact"
              description="Need an experienced Mobile Engineer or a prototype builder for your next project? Drop a line and I'll respond securely."
              primaryText="joefachrizal@hotmail.com"
              primaryHref="joefachrizal@hotmail.com"
              secondaryText="GitHub / LinkedIn"
              secondaryLinks={[
                { label: "GitHub", url: "https://github.com/wldevproject" },
                { label: "LinkedIn", url: "https://www.linkedin.com/in/muhammad-fachrizal-a32204ba/" },
              ]}
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
