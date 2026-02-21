"use client"

import Image from "next/image"
import { useState } from "react"

const projects = [
  {
    src: "/images/garden-1.jpg",
    title: "Jardim tropical residêncial",
    category: "Residencial",
  },
  {
    src: "/images/garden-2.jpg",
    title: "Produção de mudas",
    category: "Estufa",
  },
  {
    src: "/images/garden-3.jpg",
    title: "Jardim tropical",
    category: "Residencial",
  },
  {
    src: "/images/garden-4.jpg",
    title: "Jardim",
    category: "Residencial",
  },
  {
    src: "/images/garden-5.jpg",
    title: "Identificação de pragas e doenças",
    category: "Fitossanidade",
  },
  {
    src: "/images/garden-6.jpg",
    title: "Construção de horta",
    category: "Horta",
  },
]

export function GallerySection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section id="projects" className="bg-secondary/40 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
            Nosso trabalho
          </p>
          <h2 className="font-serif text-3xl leading-tight text-foreground md:text-4xl text-balance">
            Capturas de projetos e serviços ofertados
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-muted-foreground">
            Cada projeto possui uma história e proporciona aprendizado coletivo para nossa equipe e nossos clientes.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <button
              type="button"
              key={project.title}
              className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              aria-label={`View ${project.title}`}
            >
              <Image
                src={project.src || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 translate-y-4 p-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="mb-1 block text-xs font-medium uppercase tracking-wider text-primary-foreground/70">
                  {project.category}
                </span>
                <h3 className="text-lg font-medium text-primary-foreground">
                  {project.title}
                </h3>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 p-4 backdrop-blur-sm"
          onClick={() => setActiveIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label={projects[activeIndex].title}
        >
          <div className="relative max-h-[85vh] w-full max-w-4xl overflow-hidden rounded-2xl bg-card shadow-2xl">
            <div className="relative aspect-[16/10]">
              <Image
                src={projects[activeIndex].src || "/placeholder.svg"}
                alt={projects[activeIndex].title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <span className="mb-1 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {projects[activeIndex].category}
              </span>
              <h3 className="text-xl font-medium text-foreground">
                {projects[activeIndex].title}
              </h3>
            </div>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); setActiveIndex(null) }}
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-card/90 text-foreground transition-colors hover:bg-card"
              aria-label="Close lightbox"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M5 5L15 15M15 5L5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
