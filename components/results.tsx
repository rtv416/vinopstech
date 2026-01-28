const results = [
  {
    stat: "98%",
    label: "Call Answer Rate",
    description: "Nearly every call is answered on the first ring, 24/7"
  },
  {
    stat: "45%",
    label: "More Appointments",
    description: "Clients see significant increases in booked appointments"
  },
  {
    stat: "3min",
    label: "Summary Delivery",
    description: "Call summaries delivered within minutes of hang-up"
  },
  {
    stat: "24/7",
    label: "Coverage",
    description: "Round-the-clock availability, holidays included"
  }
]

const testimonials = [
  {
    quote: "VinOps Tech transformed our salon. We went from missing 30% of calls to capturing every single one. The AI handles scheduling perfectly.",
    role: "Nail Salon Owner"
  },
  {
    quote: "As a busy medspa, we can't afford to miss calls. VinOps Tech ensures every lead is captured, even at 2am.",
    role: "MedSpa Owner"
  }
]

export function Results() {
  return (
    <section id="results" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight mb-6">
            Results That Speak for Themselves
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our clients see measurable improvements in call handling, appointment bookings, and customer satisfaction.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {results.map((result) => (
            <div key={result.label} className="text-center">
              <div className="text-5xl lg:text-6xl font-bold text-teal mb-2">
                {result.stat}
              </div>
              <div className="text-lg font-semibold text-navy mb-2">
                {result.label}
              </div>
              <p className="text-sm text-muted-foreground">
                {result.description}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.role}
              className="bg-white border border-border p-8 lg:p-10"
            >
              <blockquote className="text-lg text-navy leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div>
                <div className="font-semibold text-navy">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
