'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/30 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-cyan via-brand-pink to-brand-coral rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-xy"></div>
              <Image
                src="/crab-rave-logo.png"
                alt="CrabRave Token Logo"
                width={48}
                height={48}
                className="relative w-12 h-12 animate-pulse"
              />
            </div>
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-cyan via-brand-pink to-brand-coral animate-gradient">
              CrabRave
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-white hover:text-brand-cyan transition-all hover:scale-110">
              Features
            </Link>
            <Link href="#tokenomics" className="text-white hover:text-brand-pink transition-all hover:scale-110">
              Tokenomics
            </Link>
            <Link href="#how-to-buy" className="text-white hover:text-brand-coral transition-all hover:scale-110">
              How to Buy
            </Link>
            <Button className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-cyan to-brand-pink rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient"></div>
              <span className="relative px-6 py-2 bg-background rounded-lg text-white group-hover:text-brand-cyan transition-colors">
                Buy Now 🚀
              </span>
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-brand-cyan"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden absolute left-0 right-0 p-4 bg-background/95 backdrop-blur-lg border-b border-white/10">
            <div className="space-y-4">
              <Link
                href="#features"
                className="block px-4 py-2 text-white hover:text-brand-cyan transition-colors rounded-lg hover:bg-white/5"
                onClick={() => setIsOpen(false)}
              >
                Features
              </Link>
              <Link
                href="#tokenomics"
                className="block px-4 py-2 text-white hover:text-brand-pink transition-colors rounded-lg hover:bg-white/5"
                onClick={() => setIsOpen(false)}
              >
                Tokenomics
              </Link>
              <Link
                href="#how-to-buy"
                className="block px-4 py-2 text-white hover:text-brand-coral transition-colors rounded-lg hover:bg-white/5"
                onClick={() => setIsOpen(false)}
              >
                How to Buy
              </Link>
              <Button className="w-full bg-gradient-to-r from-brand-cyan to-brand-pink hover:from-brand-pink hover:to-brand-cyan text-white transition-all duration-500">
                Buy Now 🚀
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
