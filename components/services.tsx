import { Phone, Calendar, FileText, Clock } from "lucide-react"

const services = [
  {
    icon: Phone,
    title: "Voice Answering",
    description: "AI-powered call handling that answers every call professionally, 24/7, ensuring no opportunity is missed."
  },
  {
    icon: Calendar,
    title: "Assisted Booking",
    description: "Intelligent scheduling that integrates with your calendar to book appointments seamlessly during calls."
  },
  {
    icon: FileText,
    title: "Call Summaries",
    description: "Detailed summaries and transcripts delivered after every call, keeping your team informed and organized."
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Round-the-clock coverage ensures your business never misses a call, even outside business hours."
  }
]

export function Services() {
  return (
    <section id="services" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-4xl mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight mb-6">
            We Deliver Intelligent Voice Solutions to Power Your Business
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            VinOps Tech deploys highly-capable, industry-aligned AI voice systems to handle business-critical calls. 
            Part of the new wave of operational automation, VinOps Tech is as cutting-edge as the technology we deploy. 
            We&apos;re one of the fastest-growing voice AI companies with the skillset-focused support your business needs to achieve success.
          </p>
        </div>

        {/* Services Title */}
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy mb-12">
          Your Future Awaits
        </h3>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-white border border-border p-8 hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-6">
                <service.icon className="h-20 w-20 text-teal stroke-[0.75]" />
              </div>
              <h4 className="text-xl font-bold text-navy mb-3 group-hover:text-teal transition-colors">
                {service.title}
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
