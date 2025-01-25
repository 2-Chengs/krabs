"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Wallet, ArrowRightLeft, Coins } from "lucide-react"

export function HowToBuy() {
  return (
    <section id="how-to-buy" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-brand-purple/20 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How to{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-cyan via-brand-pink to-brand-coral animate-gradient">
              Join the Rave
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">Get your CrabRave tokens in three easy steps! 🚀</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Step
            number={1}
            icon={<Wallet className="w-10 h-10" />}
            title="Create Wallet"
            description="Download MetaMask or Trust Wallet and create your crypto wallet 🦊"
            gradient="from-brand-cyan to-brand-blue"
            delay={0.1}
          />
          <Step
            number={2}
            icon={<ArrowRightLeft className="w-10 h-10" />}
            title="Get BNB"
            description="Purchase BNB and transfer it to your wallet 💎"
            gradient="from-brand-pink to-brand-coral"
            delay={0.2}
          />
          <Step
            number={3}
            icon={<Coins className="w-10 h-10" />}
            title="Swap for CrabRave"
            description="Visit PancakeSwap to swap BNB for CrabRave 🥞"
            gradient="from-brand-yellow to-brand-coral"
            delay={0.3}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center mt-12"
        >
          <Button size="lg" className="relative group text-lg">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-cyan to-brand-pink rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient"></div>
            <span className="relative px-8 py-4 bg-background rounded-lg text-white group-hover:text-brand-cyan transition-colors">
              Buy Now on PancakeSwap 🥞
            </span>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

function Step({
  number,
  icon,
  title,
  description,
  gradient,
  delay,
}: {
  number: number
  icon: React.ReactNode
  title: string
  description: string
  gradient: string
  delay: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
    >
      <div className="relative group">
        <div
          className={`absolute -inset-0.5 bg-gradient-to-r ${gradient} rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient`}
        ></div>
        <Card className="relative p-6 bg-background/80 backdrop-blur-xl border-white/10 group-hover:border-white/20">
          <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-gradient-to-r from-brand-cyan to-brand-pink flex items-center justify-center text-background font-bold">
            {number}
          </div>
          <div className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>{icon}</div>
          <h3 className="text-xl font-bold text-white mt-4 mb-2">{title}</h3>
          <p className="text-white/60 group-hover:text-white/80 transition-colors">{description}</p>
        </Card>
      </div>
    </motion.div>
  )
}

