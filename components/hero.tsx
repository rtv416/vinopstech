import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/tech-bg.jpg')" }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-navy/60" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold italic text-white leading-tight">
              Powering your business with intelligent voice automation
            </h1>
            <p className="text-lg text-white/80 max-w-xl leading-relaxed">
              We are committed to providing superior AI voice solutions through our technology-focused approach, which allows our systems to become experts in your industry and streamline customer interactions
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                asChild
                className="rounded-full bg-teal px-10 py-6 text-base font-semibold text-navy hover:bg-teal/90"
              >
                <Link href="#contact">Get Started</Link>
              </Button>
              <Button
                asChild
                className="rounded-full bg-navy-light px-10 py-6 text-base font-semibold text-white hover:bg-navy-light/80"
              >
                <Link href="#services">Learn More</Link>
              </Button>
            </div>
          </div>
          
          {/* Right Content - Large Logo */}
          <div className="hidden lg:flex justify-end items-center">
            <div className="text-right">
              <div className="text-7xl font-light tracking-widest text-white/90">
                VINOPS<span className="font-medium text-teal">TECH</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
