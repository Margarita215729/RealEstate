"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { AnimateOnScroll, StaggerChildren, StaggerItem } from "./animations"

export function Services() {
  const services = [
    {
      title: "Property Management",
      description: "Professional management services for property owners.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-10 w-10 text-blue-600"
        >
          <path d="M3 9h18v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
          <path d="M3 9V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3" />
          <path d="M9 16v2" />
          <path d="M15 16v2" />
        </svg>
      ),
      link: "/manage",
    },
    {
      title: "Home Buying",
      description: "Expert guidance for finding and purchasing your dream home.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-10 w-10 text-blue-600"
        >
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
      link: "/buy",
    },
    {
      title: "Selling",
      description: "Strategic marketing and sales services for property sellers.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-10 w-10 text-blue-600"
        >
          <path d="M12 22v-5" />
          <path d="M9 8V2" />
          <path d="M15 8V2" />
          <path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8" />
          <path d="M3 8h18" />
        </svg>
      ),
      link: "/sell",
    },
    {
      title: "Real Estate Development",
      description: "Comprehensive development services from concept to completion.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-10 w-10 text-blue-600"
        >
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <path d="M3 9h18" />
          <path d="M9 21V9" />
        </svg>
      ),
      link: "/invest",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 bg-blue-50">
      <div className="container px-4 md:px-6 mx-auto">
        <AnimateOnScroll>
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-800">Our Services</h2>
            <p className="max-w-[700px] text-gray-600 md:text-xl">
              Comprehensive real estate services tailored to your needs.
            </p>
          </div>
        </AnimateOnScroll>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <StaggerItem key={i}>
              <motion.div
                className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="mb-4"
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link href={service.link} className="text-blue-600 hover:underline font-medium transition-colors">
                  Learn more
                </Link>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
