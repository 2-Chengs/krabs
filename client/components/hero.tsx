"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-brand-purple/20 to-background" />

      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              duration: 1.5,
            }}
            className="relative w-72 h-72 md:w-96 md:h-96 mb-8"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan via-brand-pink to-brand-yellow rounded-full blur-3xl opacity-30 animate-pulse" />
            <Image
              src="/crab-rave-token-logo.png"
              alt="CrabRave Token"
              width={384}
              height={384}
              className="object-contain animate-float"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-cyan via-brand-pink to-brand-coral animate-gradient">
                CrabRave Token
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto">
              Join the most 🔥 crypto revolution where memes meet DeFi! Let&apos;s make waves together! 🦀 🚀
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button size="lg" className="relative group text-lg">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-cyan to-brand-pink rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient"></div>
                <span className="relative px-8 py-4 bg-background rounded-lg text-white group-hover:text-brand-cyan transition-colors">
                  Buy CrabRave 🚀
                </span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg border-2 border-brand-cyan text-brand-cyan hover:bg-brand-cyan hover:text-background transition-all duration-500 hover:scale-105"
              >
                Join Community 🦀
              </Button>
            </div>

            <div className="flex justify-center gap-8 pt-12">
              <div className="text-center">
                <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-cyan to-brand-blue">
                  24.5K
                </div>
                <div className="text-white/60">Holders</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-pink to-brand-coral">
                  $2.1M
                </div>
                <div className="text-white/60">Market Cap</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-yellow to-brand-coral">
                  12.3K
                </div>
                <div className="text-white/60">Community</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-brand-cyan/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-brand-pink/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-brand-coral/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>
    </div>
  )
}


