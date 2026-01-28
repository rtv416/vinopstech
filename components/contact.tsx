import { Mail, Phone } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="bg-navy py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold italic text-white leading-tight mb-6">
            Get in Touch
          </h2>
          <p className="text-lg text-white/70 leading-relaxed mb-12">
            Ready to transform how your business handles calls? Reach out today and discover 
            how VinOps Tech can help you capture every opportunity.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
            <a 
              href="mailto:rachelv1216@gmail.com" 
              className="group flex items-center gap-4 text-white hover:text-teal transition-colors"
            >
              <div className="w-14 h-14 rounded-full border-2 border-white/30 group-hover:border-teal flex items-center justify-center transition-colors">
                <Mail className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="text-sm text-white/50 uppercase tracking-wider mb-1">Email</div>
                <div className="text-lg font-medium">rachelv1216@gmail.com</div>
              </div>
            </a>
            
            <a 
              href="tel:+17135692504" 
              className="group flex items-center gap-4 text-white hover:text-teal transition-colors"
            >
              <div className="w-14 h-14 rounded-full border-2 border-white/30 group-hover:border-teal flex items-center justify-center transition-colors">
                <Phone className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="text-sm text-white/50 uppercase tracking-wider mb-1">Phone</div>
                <div className="text-lg font-medium">(713) 569-2504</div>
              </div>
            </a>
          </div>
        </div>
        
        {/* Bottom bar with copyright */}
        <div className="mt-20 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-white/40 text-sm">
            <div className="text-xl font-light tracking-wider">
              VINOPS<span className="font-medium text-teal">TECH</span>
            </div>
            <div>
              &copy; {new Date().getFullYear()} VinOps Tech. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
