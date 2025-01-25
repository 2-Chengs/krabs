import "@/styles/globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "CrabRave Token 🦀 - The Most Exciting Crypto Token",
  description: "Join the CrabRave community and be part of the most exciting cryptocurrency token in the space! 🚀",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

