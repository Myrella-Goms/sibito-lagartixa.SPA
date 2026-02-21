export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
          {/* Text content */}
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
              Sobre nós
            </p>
            <h2 className="font-serif text-3xl leading-tight text-foreground md:text-4xl text-balance">
              Onde a agronomia encontra a criatividade
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                Sibito & Lagartixa é um <strong>espaço colaborativo</strong> onde ideias se reúnem para criar soluções sustentáveis que atendam aos nossos clientes. 
              </p>
            </div>
          </div>

          {/* Stats / highlights */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { number: "15+", label: "Anos de experiência" },
              { number: "100%", label: "Práticas sustentáveis" },
              { number: "100%", label: "Clientes felizes" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-border bg-card p-6 text-center"
              >
                <p className="font-serif text-3xl text-primary md:text-4xl">
                  {stat.number}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
