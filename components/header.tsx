"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { MobileNav } from "./mobile-nav"

export function Header() {
  const navItems = [
    { name: "Buy", href: "/buy" },
    { name: "Rent", href: "/rent" },
    { name: "Sell", href: "/sell" },
    { name: "Manage", href: "/manage" },
  ]

  const secondaryNavItems = [
    { name: "Invest", href: "/invest" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <>
      <motion.div
        className="bg-blue-800 text-white py-2 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.span
          animate={{
            scale: [1, 1.05, 1],
            textShadow: [
              "0px 0px 0px rgba(255,255,255,0)",
              "0px 0px 10px rgba(255,255,255,0.5)",
              "0px 0px 0px rgba(255,255,255,0)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          className="font-bold"
        >
          Mock-up for Julian Domanic
        </motion.span>
      </motion.div>
      <motion.header
        className="sticky top-0 z-50 w-full border-b bg-white"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navItems.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
              >
                <Link href={item.href} className="font-medium transition-colors hover:text-blue-600">
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </nav>
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5, type: "spring" }}>
            <Link href="/" className="flex items-center gap-2">
              <motion.div
                className="relative h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-white font-bold text-xs">AH</span>
              </motion.div>
              <span className="font-bold text-lg">AZURE HOMES</span>
            </Link>
          </motion.div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {secondaryNavItems.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
              >
                <Link href={item.href} className="font-medium transition-colors hover:text-blue-600">
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </nav>
          <div className="md:hidden">
            <MobileNav />
          </div>
        </div>
      </motion.header>
    </>
  )
}
