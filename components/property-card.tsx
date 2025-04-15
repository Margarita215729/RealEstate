"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

interface Property {
  id: number
  title: string
  address: string
  price: number
  beds: number
  baths: number
  sqft: number
  image: string
}

interface PropertyCardProps {
  property: Property
}

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Link href={`/property/${property.id}`} className="absolute inset-0 z-10">
        <span className="sr-only">View Property</span>
      </Link>
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={property.image || "/placeholder.svg"}
          alt={property.title}
          width={500}
          height={300}
          className="object-cover transition-all duration-500 group-hover:scale-110"
        />
        <motion.div
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="font-medium">${property.price.toLocaleString()}</div>
        </motion.div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg">{property.title}</h3>
        <p className="text-sm text-gray-500">{property.address}</p>
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
            <span>{property.beds} beds</span>
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
            <span>{property.baths} baths</span>
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
            <span>{property.sqft.toLocaleString()} sqft</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
