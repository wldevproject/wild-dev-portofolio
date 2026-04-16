import type { FormEvent } from "react";

interface CvModalViewProps {
  email: string;
  error: string;
  isOpen: boolean;
  loading: boolean;
  password: string;
  onClose: () => void;
  onEmailChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
  onPublicDownload: () => void | Promise<void>;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void | Promise<void>;
}

export function CvModalView({
  email,
  error,
  isOpen,
  loading,
  password,
  onClose,
  onEmailChange,
  onPasswordChange,
  onPublicDownload,
  onSubmit,
}: CvModalViewProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[rgba(10,10,15,0.85)] p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-lg border border-[var(--color-accent)] bg-[var(--color-card)] p-6 shadow-neon">
        <div className="absolute left-0 top-0 flex w-full items-center gap-2 border-b border-[var(--color-accent)] bg-[rgba(0,255,136,0.1)] px-4 py-2">
          <span className="h-2.5 w-2.5 cursor-pointer rounded-full bg-[#ff5f57]" onClick={onClose} />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-2 font-mono text-xs uppercase tracking-widest text-[var(--color-accent)]">
            SYSTEM_OVERRIDE // CV_EXPORT
          </span>
          <button className="ml-auto font-mono text-[var(--color-accent)] hover:text-white" onClick={onClose}>
            [X]
          </button>
        </div>

        <div className="mt-10 space-y-6">
          <div className="space-y-4">
            <h2 className="font-heading text-xl font-bold uppercase tracking-widest text-[var(--color-foreground)]">
              CV DATA EXTRACTION
            </h2>
            <p className="border-l-2 border-[var(--color-accent-tertiary)] pl-3 font-mono text-sm leading-relaxed text-[var(--color-muted-foreground)]">
              <span className="text-[var(--color-accent-tertiary)]">NOTICE:</span> For privacy reasons, the public
              CV export does not include personal phone numbers.
            </p>
          </div>

          <div className="border border-[var(--color-border)] bg-[rgba(255,255,255,0.02)] p-4">
            <button
              onClick={onPublicDownload}
              className="w-full border-2 border-[var(--color-accent-tertiary)] bg-[rgba(0,212,255,0.1)] px-4 py-3 font-ui text-sm uppercase tracking-widest text-[var(--color-accent-tertiary)] transition hover:bg-[var(--color-accent-tertiary)] hover:text-black hover:shadow-neon-tertiary"
            >
              DOWNLOAD PUBLIC CV
            </button>
          </div>

          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-[var(--color-border)]" />
            <span className="font-ui text-xs uppercase tracking-widest text-[var(--color-muted-foreground)]">
              RESTRICTED ACCESS
            </span>
            <div className="h-px flex-1 bg-[var(--color-border)]" />
          </div>

          <form onSubmit={onSubmit} className="space-y-4 border border-[var(--color-border)] p-5">
            <p className="mb-4 font-mono text-xs text-[var(--color-accent-secondary)]">
              Enter credentials for full data access (includes phone number):
            </p>

            <div className="space-y-3">
              <div className="relative">
                <span className="absolute left-3 top-3 font-mono text-[var(--color-accent-secondary)]">{">"}</span>
                <input
                  type="email"
                  placeholder="AUTHORIZATION EMAIL"
                  value={email}
                  onChange={(event) => onEmailChange(event.target.value)}
                  required
                  className="w-full border border-[var(--color-border)] bg-[var(--color-input)] py-2.5 pl-8 pr-4 font-mono text-sm text-[var(--color-accent-secondary)] placeholder:text-[var(--color-muted-foreground)] transition-all focus:border-[var(--color-accent-secondary)] focus:outline-none focus:shadow-[0_0_10px_rgba(255,0,255,0.2)]"
                />
              </div>
              <div className="relative">
                <span className="absolute left-3 top-3 font-mono text-[var(--color-accent-secondary)]">{">"}</span>
                <input
                  type="password"
                  placeholder="PASSCODE"
                  value={password}
                  onChange={(event) => onPasswordChange(event.target.value)}
                  required
                  className="w-full border border-[var(--color-border)] bg-[var(--color-input)] py-2.5 pl-8 pr-4 font-mono text-sm text-[var(--color-accent-secondary)] placeholder:text-[var(--color-muted-foreground)] transition-all focus:border-[var(--color-accent-secondary)] focus:outline-none focus:shadow-[0_0_10px_rgba(255,0,255,0.2)]"
                />
              </div>
            </div>

            {error ? <p className="animate-pulse font-mono text-xs text-[var(--color-destructive)]">ERR: {error}</p> : null}

            <button
              type="submit"
              disabled={loading}
              className="w-full border border-[var(--color-accent-secondary)] bg-transparent px-4 py-2.5 font-ui text-sm uppercase tracking-widest text-[var(--color-accent-secondary)] transition hover:bg-[var(--color-accent-secondary)] hover:text-black focus:shadow-[0_0_15px_rgba(255,0,255,0.4)] focus:outline-none disabled:opacity-50"
            >
              {loading ? "AUTHENTICATING..." : "DOWNLOAD FULL CV"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
