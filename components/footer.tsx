import { navLinks } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <circle
                cx="16"
                cy="16"
                r="15"
                className="stroke-primary"
                strokeWidth="2"
              />
              <path
                d="M16 6 C12 10, 8 16, 16 26 C24 16, 20 10, 16 6Z"
                className="fill-primary"
                opacity="0.8"
              />
            </svg>
            <span className="font-serif text-lg text-foreground">
              Sibito & Lagartixa
            </span>
          </div>

          <nav
            className="flex flex-wrap items-center justify-center gap-6"
            aria-label="Footer navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <p className="text-xs text-muted-foreground">
            {"© 2026 Sibito & Lagartixa. All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  );
}
