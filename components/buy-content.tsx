"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { AnimateOnScroll, StaggerChildren, StaggerItem } from "./animations"
import { AnimatedButton } from "./ui/animated-button"
import { PropertyCard } from "./property-card"

export function BuyContent() {
  const featuredProperties = [
    {
      id: 1,
      title: "Modern Townhouse",
      address: "123 Main St, Philadelphia, PA",
      price: 425000,
      beds: 3,
      baths: 2,
      sqft: 1800,
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 2,
      title: "Luxury Condo",
      address: "456 Park Ave, Philadelphia, PA",
      price: 650000,
      beds: 2,
      baths: 2,
      sqft: 1500,
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 3,
      title: "Family Home",
      address: "789 Oak St, Philadelphia, PA",
      price: 550000,
      beds: 4,
      baths: 3,
      sqft: 2200,
      image: "/placeholder.svg?height=300&width=500",
    },
  ]

  const neighborhoods = [
    { name: "Center City", count: 42, image: "/placeholder.svg?height=200&width=300" },
    { name: "Fishtown", count: 28, image: "/placeholder.svg?height=200&width=300" },
    { name: "Old City", count: 19, image: "/placeholder.svg?height=200&width=300" },
    { name: "Northern Liberties", count: 31, image: "/placeholder.svg?height=200&width=300" },
  ]

  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Find Your Dream Home
            </motion.h1>
            <motion.p
              className="text-xl mb-8 text-blue-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Discover the perfect property with Azure Homes. We'll help you every step of the way.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <AnimatedButton href="/search" variant="secondary" size="lg">
                Search Properties
              </AnimatedButton>
              <AnimatedButton
                href="#featured"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-blue-700"
              >
                View Featured Listings
              </AnimatedButton>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Properties */}
      <section id="featured" className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <AnimateOnScroll>
            <h2 className="text-3xl font-bold mb-10 text-center">Featured Properties</h2>
          </AnimateOnScroll>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <StaggerItem key={property.id}>
                <PropertyCard property={property} />
              </StaggerItem>
            ))}
          </StaggerChildren>

          <div className="mt-12 text-center">
            <AnimatedButton href="/search" variant="primary" size="lg">
              View All Properties
            </AnimatedButton>
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 md:px-6">
          <AnimateOnScroll>
            <h2 className="text-3xl font-bold mb-10 text-center">Popular Neighborhoods</h2>
          </AnimateOnScroll>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {neighborhoods.map((neighborhood, index) => (
              <StaggerItem key={index}>
                <Link href={`/search?neighborhood=${encodeURIComponent(neighborhood.name)}`} className="group block">
                  <motion.div
                    className="relative overflow-hidden rounded-lg"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={neighborhood.image || "/placeholder.svg"}
                      alt={neighborhood.name}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4 text-white">
                      <h3 className="text-xl font-bold">{neighborhood.name}</h3>
                      <p>{neighborhood.count} properties</p>
                    </div>
                  </motion.div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Buying Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <AnimateOnScroll>
            <h2 className="text-3xl font-bold mb-10 text-center">The Home Buying Process</h2>
          </AnimateOnScroll>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: 1,
                title: "Get Pre-Approved",
                description:
                  "Start by getting pre-approved for a mortgage to understand your budget and show sellers you're serious.",
              },
              {
                step: 2,
                title: "Find Your Home",
                description:
                  "Work with our expert agents to find properties that match your needs, budget, and preferences.",
              },
              {
                step: 3,
                title: "Close the Deal",
                description:
                  "We'll guide you through inspections, negotiations, and paperwork to ensure a smooth closing process.",
              },
            ].map((step, index) => (
              <StaggerItem key={index}>
                <motion.div
                  className="text-center p-6 rounded-lg border border-gray-200 shadow-sm"
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {step.step}
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerChildren>

          <div className="mt-12 text-center">
            <AnimatedButton
              href="/contact"
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              Schedule a Consultation
            </AnimatedButton>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <AnimateOnScroll>
            <motion.h2
              className="text-3xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Ready to Find Your Dream Home?
            </motion.h2>
            <motion.p
              className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Our team of experienced agents is ready to help you find the perfect property. Get started today!
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <AnimatedButton href="/search" variant="secondary" size="lg">
                Start Your Search
              </AnimatedButton>
            </motion.div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  )
}
