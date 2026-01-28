"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Results", href: "#results" },
  { label: "Contact", href: "#contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-light tracking-wider text-white">
            VINOPS<span className="font-medium text-teal">TECH</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-white/90 transition-colors hover:text-white"
            >
              {item.label}
              <ChevronDown className="h-4 w-4" />
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Button
            asChild
            className="rounded-full bg-gray-btn px-8 py-2.5 text-sm font-semibold text-white hover:bg-gray-btn/80"
          >
            <Link href="#contact">Get in touch</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-navy border-t border-white/10">
          <div className="px-6 py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block py-3 text-base font-medium text-white/90 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4">
              <Button
                asChild
                className="w-full rounded-full bg-gray-btn px-8 py-2.5 text-sm font-semibold text-white hover:bg-gray-btn/80"
              >
                <Link href="#contact">Get in touch</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
