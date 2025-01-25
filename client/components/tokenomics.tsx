"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { CircleDollarSign, Percent, Wallet, PieChartIcon as ChartPie } from "lucide-react"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"

const tokenomicsData = [
  { name: "Liquidity Pool", value: 40, color: "#00FFFF" },
  { name: "Community Rewards", value: 30, color: "#FF00FF" },
  { name: "Development", value: 20, color: "#FF4D79" },
  { name: "Marketing", value: 10, color: "#FFE600" },
]

export function Tokenomics() {
  return (
    <section id="tokenomics" className="py-20 relative overflow-hidden">
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
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-cyan via-brand-pink to-brand-coral animate-gradient">
              Tokenomics
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Transparent and fair distribution designed for long-term growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <TokenomicsCard
              icon={<CircleDollarSign className="w-8 h-8" />}
              title="Total Supply"
              value="1,000,000,000"
              subtitle="CrabRave Tokens"
              gradient="from-brand-cyan to-brand-blue"
            />
            <TokenomicsCard
              icon={<Percent className="w-8 h-8" />}
              title="Transaction Fee"
              value="5%"
              subtitle="2% Liquidity, 3% Rewards"
              gradient="from-brand-pink to-brand-coral"
            />
            <TokenomicsCard
              icon={<Wallet className="w-8 h-8" />}
              title="Max Transaction"
              value="2%"
              subtitle="Of Total Supply"
              gradient="from-brand-yellow to-brand-coral"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h-[400px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={tokenomicsData}
                  cx="50%"
                  cy="50%"
                  outerRadius={150}
                  dataKey="value"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {tokenomicsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function TokenomicsCard({
  icon,
  title,
  value,
  subtitle,
  gradient,
}: {
  icon: React.ReactNode
  title: string
  value: string
  subtitle: string
  gradient: string
}) {
  return (
    <div className="relative group">
      <div
        className={`absolute -inset-0.5 bg-gradient-to-r ${gradient} rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient`}
      ></div>
      <Card className="relative p-6 bg-background/80 backdrop-blur-xl border-white/10 group-hover:border-white/20">
        <div className="flex items-center gap-4">
          <div className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>{icon}</div>
          <div>
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-cyan to-brand-pink">
              {value}
            </div>
            <p className="text-sm text-white/60">{subtitle}</p>
          </div>
        </div>
      </Card>
    </div>
  )
}

