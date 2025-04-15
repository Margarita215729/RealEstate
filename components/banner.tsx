"use client"

import { motion } from "framer-motion"

export function Banner() {
  return (
    <motion.div
      className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-3 px-4 text-center fixed bottom-0 left-0 right-0 z-50 shadow-lg"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 1,
      }}
    >
      <motion.div
        initial={{ scale: 1 }}
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
        className="text-lg md:text-xl font-bold tracking-wide"
      >
        Mock-up for Julian Domanic
      </motion.div>
    </motion.div>
  )
}
