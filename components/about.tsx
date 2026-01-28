import Image from "next/image"

export function About() {
  return (
    <section id="about" className="bg-muted py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight mb-10">
          About VinOps Tech
        </h2>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          {/* Content - Left Side */}
          <div className="flex-1 lg:max-w-2xl">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded with a mission to revolutionize how service businesses handle customer communication, 
                VinOps Tech brings enterprise-grade AI voice technology to small and medium businesses.
              </p>
              <p>
                Our founder saw firsthand how missed calls meant missed opportunities for local businesses. 
                A single unanswered call could mean a lost patient, a missed service appointment, or a potential 
                client going to a competitor.
              </p>
              <p>
                VinOps Tech was built to solve this problem. Our AI voice agents don&apos;t just answer calls — 
                they understand context, book appointments, capture critical information, and deliver detailed 
                summaries so your team never misses a beat.
              </p>
              <p className="font-semibold text-navy">
                We save you time and money by ensuring every call is handled professionally, 24/7.
              </p>
            </div>
          </div>

          {/* Founder Image - Right Side */}
          <div className="shrink-0 lg:ml-auto">
            <div className="flex flex-col items-center">
              <div className="w-28 h-28 lg:w-36 lg:h-36 relative rounded-full overflow-hidden">
                <Image
                  src="/founder.jpg"
                  alt="Rachel Vincent - VinOps Tech Founder"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-4 text-center">
                <p className="font-semibold text-navy">Rachel Vincent</p>
                <p className="text-sm text-muted-foreground">Founder & CEO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
