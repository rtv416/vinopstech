import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CtaBand() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Image - team hands */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070')",
        }}
      />
      {/* Dark navy overlay */}
      <div className="absolute inset-0 bg-navy/80" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold italic text-white leading-tight mb-6">
            Our Values Define Us and Make Us Unique
          </h2>
          <p className="text-lg text-white/80 mb-8 leading-relaxed">
            Our culture is rooted in character and core values that cultivate the highest integrity team you&apos;ll ever encounter.
          </p>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-2 border-white bg-transparent px-10 py-6 text-base font-semibold text-white hover:bg-white hover:text-navy"
          >
            <Link href="#about">Core Values</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
