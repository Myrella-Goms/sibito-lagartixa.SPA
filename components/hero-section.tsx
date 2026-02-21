import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden pt-20">
      {/* Background image */}
      <Image
        src="/images/hero.jpg"
        alt="Beautiful landscape garden designed by Sibito & Lagartixa"
        fill
        className="object-cover"
        priority
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/50 via-foreground/30 to-background" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <h1 className="font-serif text-4xl leading-tight text-primary-foreground md:text-6xl lg:text-7xl text-balance">
          Soluções agrônomicas para seu lar
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/90 md:text-lg">
          Combinamos agronomia com criatividade e proporcionamos soluções eficazes para seu jardim
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#projects"
            className="rounded-full bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Acesse nosso trabalho
          </a>
          <a
            href="#about"
            className="rounded-full border border-primary-foreground/30 px-8 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
          >
            Saiba mais
          </a>
        </div>
      </div>
    </section>
  )
}
