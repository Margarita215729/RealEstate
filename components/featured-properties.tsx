"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { AnimateOnScroll, StaggerChildren, StaggerItem } from "./animations"
import { AnimatedButton } from "./ui/animated-button"

export function FeaturedProperties() {
  return (
    <section className="w-full py-12 md:py-24 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <AnimateOnScroll>
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-800">
              Featured Properties
            </h2>
            <p className="max-w-[700px] text-gray-600 md:text-xl">
              Discover our selection of premium properties in the Philadelphia area.
            </p>
          </div>
        </AnimateOnScroll>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <StaggerItem key={i}>
              <motion.div
                className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Link href={`/property/${i}`} className="absolute inset-0 z-10">
                  <span className="sr-only">View Property</span>
                </Link>
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=300&width=500`}
                    alt="Property"
                    width={500}
                    height={300}
                    className="object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 text-white">
                    <div className="font-medium">$425,000</div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg">Beautiful Townhouse</h3>
                  <p className="text-sm text-gray-500">Philadelphia, PA</p>
                  <div className="mt-2 flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
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
                        className="h-4 w-4 text-blue-600"
                      >
                        <path d="M2 22h20" />
                        <path d="M2 11h20" />
                        <path d="M15 22v-4.3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1V22" />
                        <path d="M11 1h2a2 2 0 0 1 2 2v2H9V3a2 2 0 0 1 2-2Z" />
                        <path d="M11 1h2a2 2 0 0 1 2 2v2H9V3a2 2 0 0 1 2-2Z" />
                      </svg>
                      <span>3 beds</span>
                    </div>
                    <div className="flex items-center gap-1">
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
                        className="h-4 w-4 text-blue-600"
                      >
                        <path d="M3 9h18v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
                        <path d="M3 9V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3" />
                      </svg>
                      <span>2 baths</span>
                    </div>
                    <div className="flex items-center gap-1">
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
                        className="h-4 w-4 text-blue-600"
                      >
                        <rect width="20" height="20" x="2" y="2" rx="2" />
                        <path d="M2 7h20" />
                        <path d="M7 2v20" />
                      </svg>
                      <span>1,800 sqft</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <div className="mt-10 flex justify-center">
          <AnimatedButton href="/search" variant="primary" size="lg">
            View All Properties
          </AnimatedButton>
        </div>
      </div>
    </section>
  )
}
