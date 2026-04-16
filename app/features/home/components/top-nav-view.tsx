import Link from "next/link";
import { ScrollProgress } from "@/app/features/home/components/scroll-progress";

interface NavSection {
  id: string;
  label: string;
}

interface TopNavViewProps {
  activeSection: string;
  floatingHover: boolean;
  isScrolled: boolean;
  menuOpen: boolean;
  navSections: readonly NavSection[];
  onCloseMenu: () => void;
  onFloatingMouseEnter: () => void;
  onFloatingMouseLeave: () => void;
  onMenuToggle: () => void;
  onOpenCvModal: () => void;
}

const compactNavLabels: Record<string, string> = {
  contact: "COM",
  education: "EDU",
  experience: "EXP",
  projects: "PRJ",
  skills: "SKL",
  status: "SYS",
};

const getCompactNavLabel = (section: NavSection) =>
  compactNavLabels[section.id] ?? section.label.slice(0, 3).toUpperCase();

const navHudInteractiveClass =
  "nav-hud-item focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-background)]";

const navHudSecondaryInteractiveClass =
  "nav-hud-item nav-hud-item-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-tertiary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-background)]";

const desktopActionButtonClass =
  `hidden min-h-11 shrink-0 items-center justify-center whitespace-nowrap rounded-none border px-3 py-2 text-[10px] uppercase tracking-[0.24em] transition duration-150 nav:inline-flex nav:px-3.5 nav:text-[11px] xl:px-4 xl:text-sm xl:tracking-[0.2em] ${navHudInteractiveClass}`;

const tabletPrimaryActionButtonClass =
  `hidden min-h-11 shrink-0 items-center justify-center whitespace-nowrap rounded-none border px-3 py-2 text-[10px] uppercase tracking-[0.18em] transition duration-150 md:inline-flex lg:px-4 lg:text-[11px] lg:tracking-[0.2em] nav:hidden ${navHudInteractiveClass}`;

const tabletSecondaryActionButtonClass =
  `hidden min-h-11 shrink-0 items-center justify-center whitespace-nowrap rounded-none border px-3 py-2 text-[10px] uppercase tracking-[0.18em] transition duration-150 lg:inline-flex nav:hidden ${navHudSecondaryInteractiveClass}`;

const mobileActionButtonClass =
  `flex min-h-11 items-center justify-center rounded-none border px-4 py-3 text-center text-xs uppercase tracking-[0.22em] transition duration-150 ${navHudInteractiveClass}`;

export function TopNavView({
  activeSection,
  floatingHover,
  isScrolled,
  menuOpen,
  navSections,
  onCloseMenu,
  onFloatingMouseEnter,
  onFloatingMouseLeave,
  onMenuToggle,
  onOpenCvModal,
}: TopNavViewProps) {
  return (
    <>
      <header
        className={`relative z-40 border-b border-[var(--color-border)] bg-[rgba(10,10,15,0.92)]/95 backdrop-blur-xl transition-all duration-300 ${
          isScrolled ? "pointer-events-none -translate-y-full opacity-0" : "translate-y-0 opacity-100"
        }`}
      >
        <ScrollProgress />
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 sm:px-6 md:gap-4 md:px-8 lg:gap-5 lg:px-12 xl:px-16">
          <Link
            href="#home"
            className="shrink-0 whitespace-nowrap font-ui text-[10px] uppercase leading-none tracking-[0.42em] text-[var(--color-accent)] sm:text-sm sm:tracking-[0.35em]"
          >
            WILD DEV
          </Link>

          <nav className="hidden min-w-0 flex-1 items-center justify-center gap-2 text-[10px] uppercase tracking-[0.16em] text-[var(--color-muted-foreground)] md:flex lg:gap-3 lg:text-xs lg:tracking-[0.2em] nav:gap-5 nav:text-sm nav:tracking-[0.25em] xl:gap-6">
            {navSections.map((section) => {
              const isActive = activeSection === section.id;

              return (
                <Link
                  key={section.id}
                  href={`#${section.id}`}
                  aria-label={section.label}
                  data-active={isActive ? "true" : undefined}
                  className={`${navHudInteractiveClass} flex min-h-10 items-center justify-center whitespace-nowrap border px-2 py-2 text-center transition duration-150 lg:px-2.5 nav:min-h-0 nav:border-transparent nav:bg-transparent nav:px-0 nav:py-0 nav:shadow-none ${
                    isActive
                      ? "border-[rgba(0,255,136,0.22)] bg-[rgba(0,255,136,0.06)] text-[var(--color-accent)] shadow-[0_0_10px_rgba(0,255,136,0.08)]"
                      : "border-transparent bg-[rgba(255,255,255,0.01)] hover:border-[rgba(0,255,136,0.18)] hover:bg-[rgba(0,255,136,0.05)] hover:text-[var(--color-accent)]"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span className="min-w-[2.8rem] nav:hidden">{getCompactNavLabel(section)}</span>
                  <span className="hidden nav:inline">{section.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="ml-auto flex shrink-0 items-center gap-2 md:gap-2.5 lg:gap-3 nav:gap-3.5 xl:gap-4">
            <button
              onClick={onOpenCvModal}
              className={`${tabletSecondaryActionButtonClass} border-[var(--color-accent-tertiary)] text-[var(--color-accent-tertiary)] hover:bg-[rgba(0,212,255,0.08)] hover:shadow-[0_0_16px_rgba(0,212,255,0.14)]`}
            >
              CV
            </button>
            <Link
              href="#contact"
              className={`${tabletPrimaryActionButtonClass} border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[rgba(0,255,136,0.08)] hover:shadow-[0_0_16px_rgba(0,255,136,0.16)]`}
            >
              <span className="lg:hidden">Open Comms</span>
              <span className="hidden lg:inline">Comms</span>
            </Link>
            <button
              onClick={onOpenCvModal}
              className={`${desktopActionButtonClass} nav-hud-item-secondary focus-visible:ring-[var(--color-accent-tertiary)] border-[var(--color-accent-tertiary)] text-[var(--color-accent-tertiary)] hover:bg-[rgba(0,212,255,0.08)] hover:shadow-[0_0_16px_rgba(0,212,255,0.16)]`}
            >
              <span className="nav:hidden xl:inline">Export CV</span>
              <span className="hidden nav:inline xl:hidden">CV</span>
            </button>
            <Link
              href="#contact"
              className={`${desktopActionButtonClass} border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[rgba(0,255,136,0.08)] hover:shadow-[0_0_16px_rgba(0,255,136,0.16)]`}
            >
              <span className="nav:hidden xl:inline">Open Comms</span>
              <span className="hidden nav:inline xl:hidden">Comms</span>
            </Link>
            <button
              type="button"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className={`${navHudInteractiveClass} inline-flex h-11 w-11 items-center justify-center rounded-none border border-[var(--color-border)] text-[var(--color-accent)] transition hover:bg-[rgba(0,255,136,0.08)] md:hidden`}
              onClick={onMenuToggle}
            >
              <span className="font-mono text-lg leading-none">{menuOpen ? "×" : "≡"}</span>
            </button>
          </div>
        </div>

        {menuOpen ? (
          <div className="absolute inset-x-0 top-full z-50 border-t border-[var(--color-border)] bg-[rgba(10,10,15,0.98)] px-4 py-4 backdrop-blur-xl md:hidden">
            <div className="flex flex-col gap-3 text-xs uppercase tracking-[0.22em] text-[var(--color-muted-foreground)] sm:text-sm sm:tracking-[0.25em]">
              {navSections.map((section) => (
                <Link
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={onCloseMenu}
                  data-active={activeSection === section.id ? "true" : undefined}
                  className={`${navHudInteractiveClass} border border-transparent px-3 py-2 transition ${
                    activeSection === section.id
                      ? "border-[rgba(0,255,136,0.2)] bg-[rgba(0,255,136,0.05)] text-[var(--color-accent)]"
                      : "hover:text-[var(--color-accent)]"
                  }`}
                >
                  {section.label}
                </Link>
              ))}
              <div className="mt-2 grid gap-3 sm:grid-cols-2">
                <button
                  onClick={() => {
                    onCloseMenu();
                    onOpenCvModal();
                  }}
                  className={`${mobileActionButtonClass} nav-hud-item-secondary focus-visible:ring-[var(--color-accent-tertiary)] border-[var(--color-accent-tertiary)] text-[var(--color-accent-tertiary)] hover:bg-[rgba(0,212,255,0.08)]`}
                >
                  Export CV
                </button>
                <Link
                  href="#contact"
                  onClick={onCloseMenu}
                  className={`${mobileActionButtonClass} border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[rgba(0,255,136,0.08)]`}
                >
                  Open Comms
                </Link>
              </div>
            </div>
          </div>
        ) : null}
      </header>

      <div
        className={`fixed inset-x-3 bottom-4 z-50 transition-all duration-500 ease-out nav:hidden ${
          isScrolled ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
        }`}
      >
        <nav className="mx-auto grid max-w-[26rem] grid-cols-4 gap-1 border border-[var(--color-border)] bg-[rgba(10,10,15,0.92)] p-2 backdrop-blur-xl shadow-[0_0_24px_rgba(0,255,136,0.08)] sm:max-w-[34rem] sm:grid-cols-7 md:max-w-[38rem]">
          <Link
            href="#home"
            title="Home"
            aria-current={activeSection === "home" ? "page" : undefined}
            data-active={activeSection === "home" ? "true" : undefined}
            className={`${navHudInteractiveClass} flex min-h-11 items-center justify-center border px-2 text-center font-ui text-2xs uppercase tracking-[0.2em] transition ${
              activeSection === "home"
                ? "border-[rgba(0,255,136,0.35)] bg-[rgba(0,255,136,0.12)] text-[var(--color-accent)] shadow-[0_0_12px_rgba(0,255,136,0.14)]"
                : "border-transparent text-[var(--color-muted-foreground)] hover:border-[rgba(0,255,136,0.2)] hover:text-[var(--color-accent)]"
            }`}
          >
            HM
          </Link>

          {navSections.map((section) => {
            const isActive = activeSection === section.id;

            return (
              <Link
                key={section.id}
                href={`#${section.id}`}
                title={section.label}
                aria-label={section.label}
                aria-current={isActive ? "page" : undefined}
                data-active={isActive ? "true" : undefined}
                className={`${navHudInteractiveClass} flex min-h-11 items-center justify-center border px-2 text-center font-ui text-2xs uppercase tracking-[0.2em] transition ${
                  isActive
                    ? "border-[rgba(0,255,136,0.35)] bg-[rgba(0,255,136,0.12)] text-[var(--color-accent)] shadow-[0_0_12px_rgba(0,255,136,0.14)]"
                    : "border-transparent text-[var(--color-muted-foreground)] hover:border-[rgba(0,255,136,0.2)] hover:text-[var(--color-accent)]"
                }`}
              >
                {getCompactNavLabel(section)}
              </Link>
            );
          })}
        </nav>
      </div>

      <div
        className={`fixed top-1/2 z-50 hidden -translate-y-1/2 transition-all duration-500 ease-out nav:block ${
          isScrolled ? "right-4 opacity-100" : "pointer-events-none right-[-80px] opacity-0"
        }`}
        onMouseEnter={onFloatingMouseEnter}
        onMouseLeave={onFloatingMouseLeave}
      >
        <nav
          className={`flex flex-col items-center gap-1 border bg-[rgba(10,10,15,0.92)] px-2 py-3 backdrop-blur-xl transition-all duration-300 ${
            floatingHover
              ? "border-[var(--color-accent)] shadow-[0_0_20px_rgba(0,255,136,0.15)]"
              : "border-[var(--color-border)]"
          }`}
        >
          <Link
            href="#home"
            className="mb-1 w-full border-b border-[var(--color-border)] px-2 py-2 text-center font-ui text-2xs uppercase tracking-[0.2em] text-[var(--color-accent)]"
            title="Home"
          >
            WD
          </Link>

          {navSections.map((section) => {
            const isActive = activeSection === section.id;

            return (
              <Link
                key={section.id}
                href={`#${section.id}`}
                title={section.label}
                data-active={isActive ? "true" : undefined}
                className={`${navHudInteractiveClass} group relative flex h-8 w-8 items-center justify-center rounded-none font-mono text-2xs uppercase transition-all duration-200 ${
                  isActive
                    ? "bg-[rgba(0,255,136,0.1)] text-[var(--color-accent)]"
                    : "text-[var(--color-muted-foreground)] hover:bg-[rgba(0,255,136,0.05)] hover:text-[var(--color-accent)]"
                }`}
              >
                <span className="leading-none">{section.label.slice(0, 2).toUpperCase()}</span>

                {isActive ? (
                  <span className="absolute -left-[5px] top-1/2 h-3 w-[3px] -translate-y-1/2 bg-[var(--color-accent)] shadow-[0_0_5px_#00ff88]" />
                ) : null}

                <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap border border-[var(--color-accent)] bg-[var(--color-background)] px-2 py-1 font-ui text-2xs uppercase tracking-[0.2em] text-[var(--color-accent)] opacity-0 shadow-[0_0_10px_rgba(0,255,136,0.2)] transition-opacity group-hover:opacity-100">
                  {section.label}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>

      {isScrolled ? (
        <div className="fixed left-0 right-0 top-0 z-50">
          <ScrollProgress />
        </div>
      ) : null}
    </>
  );
}
