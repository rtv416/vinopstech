export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-4xl mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight mb-6">
            Let&apos;s Drive Tomorrow&apos;s Technology Together
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            By deploying intelligent voice automation to service businesses, we ensure our clients accomplish their goals. 
            We provide support in the ever-evolving spaces of Healthcare, Home Services, Legal Services, Professional Services, 
            and more... making us a leader in the voice AI industry.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-teal/10 flex items-center justify-center">
              <span className="text-4xl font-bold text-teal">01</span>
            </div>
            <h3 className="text-2xl font-bold text-navy mb-4">Discovery Call</h3>
            <p className="text-muted-foreground leading-relaxed">
              We learn about your business, call volume, and specific needs to design the perfect voice solution.
            </p>
          </div>

          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-teal/10 flex items-center justify-center">
              <span className="text-4xl font-bold text-teal">02</span>
            </div>
            <h3 className="text-2xl font-bold text-navy mb-4">Custom Setup</h3>
            <p className="text-muted-foreground leading-relaxed">
              Our team configures your AI voice agent with industry-specific knowledge and your business protocols.
            </p>
          </div>

          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-teal/10 flex items-center justify-center">
              <span className="text-4xl font-bold text-teal">03</span>
            </div>
            <h3 className="text-2xl font-bold text-navy mb-4">Go Live</h3>
            <p className="text-muted-foreground leading-relaxed">
              Start capturing every call with 24/7 AI coverage and real-time summaries delivered to your team.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
