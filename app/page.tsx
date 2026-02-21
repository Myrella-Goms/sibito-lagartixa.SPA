import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
