"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import type { ButtonHTMLAttributes, ReactNode } from "react"

interface AnimatedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string
  variant?: "primary" | "secondary" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
  children: ReactNode
  className?: string
}

export function AnimatedButton({
  href,
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}: AnimatedButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"

  const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 shadow",
    secondary: "bg-white text-blue-600 hover:bg-blue-50 shadow",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-50",
    ghost: "text-blue-600 hover:bg-blue-50",
  }

  const sizeStyles = {
    sm: "text-sm px-3 py-1.5",
    md: "text-sm px-4 py-2",
    lg: "text-base px-6 py-3",
  }

  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`

  const buttonMotion = {
    rest: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  }

  if (href) {
    return (
      <Link href={href} passHref>
        <motion.a
          className={buttonStyles}
          initial="rest"
          whileHover="hover"
          whileTap="tap"
          variants={buttonMotion}
          transition={{ duration: 0.2 }}
        >
          {children}
        </motion.a>
      </Link>
    )
  }

  return (
    <motion.button
      className={buttonStyles}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      variants={buttonMotion}
      transition={{ duration: 0.2 }}
      {...props}
    >
      {children}
    </motion.button>
  )
}
