const services = [
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="12"
          y="18"
          width="4"
          height="8"
          className="fill-primary"
          opacity="0.3"
        />
        <circle
          cx="14"
          cy="12"
          r="8"
          className="stroke-primary"
          strokeWidth="1.5"
        />
        <circle cx="14" cy="12" r="8" className="fill-primary" opacity="0.1" />
        <path
          d="M10 10C10 10 12 12 14 12C16 12 18 10 18 10M12 14C12 14 13 15 14 15C15 15 16 14 16 14"
          className="stroke-accent"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Projetos paisagísticos",
    description:
      "Desenvolvemos projetos paisagísticos para residências áreas gerais, visando preservar e revigorar a vegetação existente. Em casos de áreas sem cobertura vegetal, buscamos por espécies que entreguem a beleza desjeada e capacidade adaptativa às condições da região.",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M14 4C14 4 6 8 6 16C6 20 8 24 14 24C20 24 22 20 22 16C22 8 14 4 14 4Z"
          className="stroke-primary"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M14 4L14 24M14 10C16 10 20 12 20 16M14 10C12 10 8 12 8 16"
          className="stroke-accent"
          strokeWidth="1"
          opacity="0.6"
        />
        <path
          d="M6 16C6 20 8 24 14 24C20 24 22 20 22 16"
          className="fill-primary"
          opacity="0.1"
        />
      </svg>
    ),
    title: "Jardinagem e manutenção contínua",
    description:
      "Fornecemos a manutenção e acomapanhemnto necessários aos nossos clientes durante e após a execução de nossos projetos, visando para manter a beleza, sanidade e vigor dos seus jardins. Atuamos em serviços de poda, adubação, manejo de irrigação e controle de pragas e doenças. O pacote completo da experiência Sibito e Lagartixa",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M14 8C14 8 10 10 10 14C10 16 11 17 12 17M14 8C14 8 18 10 18 14C18 16 17 17 16 17"
          className="stroke-primary"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="14"
          y1="8"
          x2="14"
          y2="17"
          className="stroke-primary"
          strokeWidth="1.5"
        />
        <path
          d="M10 17L9 23H19L18 17"
          className="stroke-primary"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M10 17H18" className="stroke-primary" strokeWidth="1.5" />
        <rect
          x="9"
          y="23"
          width="10"
          height="2"
          className="fill-primary"
          opacity="0.2"
        />
      </svg>
    ),
    title: "Consultoria agrônomica",
    description:
      "Para clientes que precisam de direcionamento ou esclarecimento sobre problemas agrônomicos, nossa equipe fornece consultoria com elaboração de relatórios por profissionais capacitados.",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        aria-hidden="true"
      >
        <line
          x1="14"
          y1="24"
          x2="14"
          y2="8"
          className="stroke-primary"
          strokeWidth="1.5"
        />
        <path
          d="M14 12C14 12 10 12 8 8C6 4 8 2 10 4C12 6 14 8 14 8"
          className="fill-primary"
          opacity="0.2"
        />
        <path
          d="M14 12C14 12 10 12 8 8C6 4 8 2 10 4C12 6 14 8 14 8"
          className="stroke-primary"
          strokeWidth="1.5"
        />
        <path
          d="M14 12C14 12 18 12 20 8C22 4 20 2 18 4C16 6 14 8 14 8"
          className="fill-primary"
          opacity="0.2"
        />
        <path
          d="M14 12C14 12 18 12 20 8C22 4 20 2 18 4C16 6 14 8 14 8"
          className="stroke-primary"
          strokeWidth="1.5"
        />
        <circle
          cx="14"
          cy="24"
          r="3"
          className="stroke-primary"
          strokeWidth="1.5"
        />
      </svg>
    ),
    title: "Produção de mudas",
    description:
      "Nossa produção em estufa abrange espécies olerícolas (também conhecidas como hortaliças), frutíferas e ornamentais. Nossas mudas possuem alta qualidade e vigor, próprias para consumo ou para utilização em hortas, pomares e jardins.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
            O que fazemos
          </p>
          <h2 className="font-serif text-3xl leading-tight text-foreground md:text-4xl text-balance">
            Serviços desenvolvidos com expertise
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-muted-foreground">
            Do conceito inicial à manutenção contínua, oferecemos soluções
            completas baseadas na engenharia agrônomica.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-border bg-card p-8 transition-shadow hover:shadow-lg"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-muted">
                {service.icon}
              </div>
              <h3 className="mb-3 text-xl font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
