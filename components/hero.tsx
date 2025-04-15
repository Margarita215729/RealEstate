"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { AnimatedButton } from "./ui/animated-button"
import { StaggerChildren, StaggerItem } from "./animations"

export function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <StaggerChildren className="flex flex-col items-center justify-center space-y-4 text-center">
          <StaggerItem>
            <motion.div
              className="bg-blue-600 text-white px-6 py-2 rounded-full mb-6 inline-block"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.5,
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
              }}
            >
              <motion.span
                animate={{
                  color: ["#ffffff", "#f0f7ff", "#ffffff"],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
                className="text-lg font-bold tracking-wide"
              >
                Mock-up for Julian Domanic
              </motion.span>
            </motion.div>
          </StaggerItem>
          <StaggerItem>
            <motion.h1
              className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-gray-800"
              animate={{ scale: [0.9, 1], opacity: [0, 1] }}
              transition={{ duration: 0.8 }}
            >
              Growing With Our Community
            </motion.h1>
          </StaggerItem>
          <StaggerItem>
            <p className="max-w-[700px] text-gray-600 md:text-xl">
              Azure Homes is a Philadelphia-based real estate brokerage providing comprehensive services in{" "}
              <Link href="/manage" className="text-blue-600 hover:underline transition-colors">
                property management
              </Link>{" "}
              &amp; leasing,{" "}
              <Link href="/buy" className="text-blue-600 hover:underline transition-colors">
                home buying
              </Link>{" "}
              and{" "}
              <Link href="/sell" className="text-blue-600 hover:underline transition-colors">
                selling
              </Link>
              , and{" "}
              <Link href="/invest" className="text-blue-600 hover:underline transition-colors">
                real estate development
              </Link>
              .
            </p>
          </StaggerItem>
          <StaggerItem>
            <div className="flex flex-wrap gap-4 justify-center mt-4">
              <AnimatedButton href="/search" variant="primary" size="lg">
                Search Properties
              </AnimatedButton>
              <AnimatedButton href="/contact" variant="outline" size="lg">
                Contact Us
              </AnimatedButton>
            </div>
          </StaggerItem>
        </StaggerChildren>
      </div>
    </section>
  )
}
