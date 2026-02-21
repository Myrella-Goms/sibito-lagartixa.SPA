"use client";

export function ContactSection() {
  return (
    <section id="contact" className="bg-secondary/40 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
              Contato
            </p>
            <h2 className="font-serif text-3xl leading-tight text-foreground md:text-4xl text-balance">
              Vamos planejar juntos
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Se você já tem uma visão clara ou precisa de orientação do zero,
              adoraríamos ouvir você. Entre em contato e vamos criar algo bonito
              juntos.
            </p>
            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    aria-hidden="true"
                  >
                    <rect
                      x="5.5"
                      y="2.5"
                      width="7"
                      height="13"
                      rx="1.5"
                      className="stroke-primary"
                      strokeWidth="1.5"
                    />
                    <circle cx="9" cy="13.5" r="0.8" className="fill-primary" />
                    <line
                      x1="7"
                      y1="4"
                      x2="11"
                      y2="4"
                      className="stroke-primary"
                      strokeWidth="1"
                      opacity="0.3"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    Telefone
                  </p>
                  <p className="text-sm text-muted-foreground">
                    (81) 98855-7203
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      className="stroke-primary"
                      strokeWidth="1.5"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="4"
                      className="stroke-primary"
                      strokeWidth="1.5"
                    />
                    <circle cx="18" cy="6" r="1" className="fill-primary" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    Instagram
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <a href="https://www.instagram.com/emporiosibitoelagartixa?igsh=ZGxsbGJqYXZxZmx4">@emporiosibitoelagartixa</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M9 2C5.69 2 3 4.69 3 8C3 12.5 9 16 9 16C9 16 15 12.5 15 8C15 4.69 12.31 2 9 2Z"
                      className="stroke-primary"
                      strokeWidth="1.5"
                    />
                    <circle
                      cx="9"
                      cy="8"
                      r="2"
                      className="fill-primary"
                      opacity="0.3"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    Localização
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Recife - Pernambuco
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
