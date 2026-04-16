import { CTAPanel } from "@/app/features/home/components/cta-panel";
import { personalInfo } from "@/app/data/resume-data";

export function StatusContactSection() {
  return (
    <section className="relative w-full">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 md:py-28 lg:px-16">
        <div id="status" className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="space-y-8">
            <div className="space-y-5">
              <p className="font-ui text-sm uppercase tracking-[0.35em] text-[var(--color-accent-tertiary)]">
                system log
              </p>
              <h2 className="text-3xl font-bold uppercase tracking-[0.18em] text-foreground">
                Live terminal feed
              </h2>
              <p className="max-w-2xl text-sm leading-7 text-[var(--color-muted-foreground)]">
                The cybernetic workflow connects both the low-level hardware constraints and high-end modern mobile UI.
                Always responsible, always exploring.
              </p>
            </div>

            <div className="overflow-hidden rounded-none border border-[var(--color-border)] bg-[var(--color-card)]">
              <div className="flex items-center gap-2 border-b border-[var(--color-border)] bg-[var(--color-background)] px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-3 font-ui text-2xs uppercase tracking-[0.2em] text-[var(--color-muted-foreground)]">
                  system.log
                </span>
              </div>
              <pre className="px-5 py-5 font-mono text-sm leading-7 text-[var(--color-foreground)]">
                <span className="text-[var(--color-accent)]">[ 00:00:01 ]</span> root login: muhammad_fachrizal{"\n"}
                <span className="text-[var(--color-accent-secondary)]">[ 00:00:03 ]</span> parsing github:
                {" /wldevproject\n"}
                <span className="text-[var(--color-accent-tertiary)]">[ 00:00:07 ]</span> linkedin trace:
                {" /in/muhammad-fachrizal\n"}
                <span className="text-[var(--color-accent)]">[ 00:00:11 ]</span> email routed: joefachrizal@hotmail.com
                {"\n"}
                <span className="text-[var(--color-muted-foreground)]">[ 00:00:14 ]</span> waiting for user input...
                <span className="inline-block h-4 w-2 animate-[blink_1s_step-end_infinite] bg-[var(--color-accent)]" />
              </pre>
            </div>
          </div>

          <CTAPanel
            id="contact"
            label="engage"
            title="Vector contact"
            description="Need an experienced Mobile Engineer or a prototype builder for your next project? Drop a line and I'll respond securely."
            primaryText={personalInfo.email}
            primaryHref={personalInfo.email}
            secondaryText="GitHub / LinkedIn"
            secondaryLinks={[
              { label: "GitHub", url: personalInfo.github },
              { label: "LinkedIn", url: personalInfo.linkedin },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
