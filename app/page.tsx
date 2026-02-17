import { Navbar } from "@/components/landing/navbar"
import { Hero } from "@/components/landing/hero"
import { News } from "@/components/landing/news"
import { About } from "@/components/landing/about"
import { Features } from "@/components/landing/features"
import { Offers } from "@/components/landing/offers"
import { Location } from "@/components/landing/location"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      {/*<News />*/}
      <About />
      <Features />
      {/*<Offers />*/}
      <Location />
      <Footer />
    </main>
  )
}
