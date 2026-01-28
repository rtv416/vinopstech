import { Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-navy py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="text-xl font-light tracking-wider text-white">
            VINOPS<span className="font-medium text-teal">TECH</span>
          </div>
          
          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-sm text-white/80">
            <a href="mailto:rachelv1216@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail className="w-4 h-4" />
              <span>rachelv1216@gmail.com</span>
            </a>
            <a href="tel:713-569-2504" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone className="w-4 h-4" />
              <span>713-569-2504</span>
            </a>
          </div>
          
          {/* Copyright */}
          <div className="text-sm text-white/50">
            &copy; {new Date().getFullYear()} VinOps Tech
          </div>
        </div>
      </div>
    </footer>
  )
}
