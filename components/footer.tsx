import Image from "next/image";
import { navLinks } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Sibito & Lagartixa"
              width={40}
              height={40}
              className="object-contain"
            />
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
