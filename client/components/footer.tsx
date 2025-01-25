'use client'

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Twitter, MessageCircle, Github } from 'lucide-react'

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-brand-purple/20" />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-cyan to-brand-pink mb-4">
              CrabRave Token
            </h3>
            <p className="text-white/60">
              Join the most exciting meme token in the crypto space. 
              Let&apos;s make waves together! 🦀 🚀
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-white/60 hover:text-brand-cyan transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#tokenomics" className="text-white/60 hover:text-brand-pink transition-colors">
                  Tokenomics
                </a>
              </li>
              <li>
                <a href="#how-to-buy" className="text-white/60 hover:text-brand-coral transition-colors">
                  How to Buy
                </a>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <h3 className="text-xl font-bold text-white mb-4">Join Community</h3>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-brand-cyan hover:text-brand-pink hover:bg-white/5"
              >
                <Twitter className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-brand-cyan hover:text-brand-pink hover:bg-white/5"
              >
                <MessageCircle className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-brand-cyan hover:text-brand-pink hover:bg-white/5"
              >
                <Github className="w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-12 pt-8 border-t border-white/10 text-center text-white/60"
        >
          <p>© 2024 CrabRave Token. All rights reserved. 🦀</p>
        </motion.div>
      </div>
    </footer>
  )
}
