import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Tokenomics } from "@/components/tokenomics"
import { HowToBuy } from "@/components/how-to-buy"
import { Footer } from "@/components/footer"
import { ParticleBackground } from "@/components/particle-background"

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative">
      <ParticleBackground />
      <Navbar />
      <Hero />
      <Features />
      <Tokenomics />
      <HowToBuy />
      <Footer />
    </main>
  )
}


