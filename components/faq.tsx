"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How does the AI voice agent work?",
    answer: "Our AI voice agent uses advanced natural language processing to understand caller intent, answer questions, book appointments, and capture information. It's trained on your specific business protocols and integrates with your existing systems."
  },
  {
    question: "Can the AI handle complex conversations?",
    answer: "Yes. Our AI is designed for nuanced, context-aware conversations. It can handle multi-step inquiries, appointment scheduling with multiple criteria, and seamlessly transfer to a human when needed."
  },
  {
    question: "What industries do you serve?",
    answer: "We specialize in service-based businesses including healthcare (dental, medical, veterinary), home services (HVAC, plumbing, electrical), legal offices, and professional services. Our AI is customized for each industry's specific terminology and workflows."
  },
  {
    question: "How quickly can I get started?",
    answer: "Most clients are live within 1-2 weeks. This includes our discovery call, custom configuration, testing, and launch. We handle all the technical setup so you can focus on your business."
  },
  {
    question: "Do you integrate with my existing systems?",
    answer: "Yes. We integrate with popular scheduling systems, CRMs, and practice management software. Our team handles the integration as part of your setup."
  },
  {
    question: "What happens if the AI can't handle a call?",
    answer: "The AI is trained to recognize when human intervention is needed and can seamlessly transfer calls to your team or take a detailed message for callback. You're always in control."
  }
]

export function FAQ() {
  return (
    <section id="faq" className="bg-navy py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Header */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-white/70 leading-relaxed">
              Everything you need to know about VinOps Tech and our AI voice solutions. 
              Can&apos;t find the answer you&apos;re looking for? Reach out to our team.
            </p>
          </div>

          {/* Right Column - Accordion */}
          <div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-white/20 bg-white/5 px-6 data-[state=open]:bg-white/10"
                >
                  <AccordionTrigger className="text-left text-white hover:text-teal hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/70 pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
