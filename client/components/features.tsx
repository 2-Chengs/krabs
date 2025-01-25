"use client"

import { motion } from "framer-motion"
import { Sparkles, Shield, Rocket, Users } from "lucide-react"

export function Features() {
  return (
    <section id="features" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-purple/20 via-background to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-cyan via-brand-pink to-brand-coral animate-gradient">
              CrabRave
            </span>
            ?
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Join the future of decentralized finance with our innovative features
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<Sparkles className="w-12 h-12" />}
            title="Community Driven"
            description="Built by the community, for the community. Your voice shapes our future! 🎯"
            gradient="from-brand-cyan to-brand-blue"
            delay={0.1}
          />
          <FeatureCard
            icon={<Shield className="w-12 h-12" />}
            title="Ultra Secure"
            description="Audited smart contracts with multi-sig governance. Your funds, your control! 🛡️"
            gradient="from-brand-pink to-brand-coral"
            delay={0.2}
          />
          <FeatureCard
            icon={<Rocket className="w-12 h-12" />}
            title="Moon Mission"
            description="Revolutionary tokenomics designed for sustainable growth. Ready for takeoff! 🚀"
            gradient="from-brand-yellow to-brand-coral"
            delay={0.3}
          />
          <FeatureCard
            icon={<Users className="w-12 h-12" />}
            title="Vibrant Community"
            description="Join thousands of crab ravers in our mission to the moon! 🦀"
            gradient="from-brand-cyan to-brand-pink"
            delay={0.4}
          />
        </div>
      </div>
    </section>
  )
}

function FeatureCard({
  icon,
  title,
  description,
  gradient,
  delay,
}: {
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
        <div className="relative p-8 bg-background/80 backdrop-blur-xl rounded-xl h-full border border-white/10 group-hover:border-white/20 transition-colors">
          <div className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>{icon}</div>
          <h3 className="text-2xl font-bold text-white mt-4 mb-2">{title}</h3>
          <p className="text-white/60 group-hover:text-white/80 transition-colors">{description}</p>
        </div>
      </div>
    </motion.div>
  )
}

