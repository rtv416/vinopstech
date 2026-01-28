import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { HowItWorks } from "@/components/how-it-works"
import { Results } from "@/components/results"
import { FAQ } from "@/components/faq"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Services />
      <HowItWorks />
      <Results />
      <FAQ />
      <Contact />
    </main>
  )
}
