"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { PropertyCard } from "@/components/property-card"
import { motion } from "framer-motion"
import { StaggerChildren, StaggerItem } from "./animations"
import { AnimatedButton } from "./ui/animated-button"

export function PropertySearch() {
  const [priceRange, setPriceRange] = useState([200000, 800000])
  const [properties, setProperties] = useState([
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
    {
      id: 4,
      title: "Historic Brownstone",
      address: "101 Elm St, Philadelphia, PA",
      price: 750000,
      beds: 3,
      baths: 2.5,
      sqft: 2000,
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 5,
      title: "Renovated Apartment",
      address: "202 Pine St, Philadelphia, PA",
      price: 350000,
      beds: 2,
      baths: 1,
      sqft: 1100,
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 6,
      title: "Waterfront Property",
      address: "303 River Rd, Philadelphia, PA",
      price: 875000,
      beds: 4,
      baths: 3.5,
      sqft: 2800,
      image: "/placeholder.svg?height=300&width=500",
    },
  ])

  return (
    <div className="container px-4 py-8 mx-auto">
      <motion.h1
        className="text-3xl font-bold mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Find Your Dream Home
      </motion.h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <motion.div
          className="lg:col-span-1 bg-white p-6 rounded-lg shadow-sm border border-gray-200"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-xl font-semibold mb-4">Search Filters</h2>

          <div className="space-y-6">
            <div>
              <Label htmlFor="location" className="block mb-2">
                Location
              </Label>
              <Input id="location" placeholder="City, Neighborhood, or ZIP" />
            </div>

            <div>
              <Label className="block mb-2">Price Range</Label>
              <Slider
                defaultValue={[200000, 800000]}
                min={100000}
                max={1500000}
                step={10000}
                value={priceRange}
                onValueChange={setPriceRange}
                className="my-6"
              />
              <div className="flex justify-between text-sm text-gray-500">
                <span>${priceRange[0].toLocaleString()}</span>
                <span>${priceRange[1].toLocaleString()}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="beds" className="block mb-2">
                  Beds
                </Label>
                <Select defaultValue="any">
                  <SelectTrigger id="beds">
                    <SelectValue placeholder="Any" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any</SelectItem>
                    <SelectItem value="1">1+</SelectItem>
                    <SelectItem value="2">2+</SelectItem>
                    <SelectItem value="3">3+</SelectItem>
                    <SelectItem value="4">4+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="baths" className="block mb-2">
                  Baths
                </Label>
                <Select defaultValue="any">
                  <SelectTrigger id="baths">
                    <SelectValue placeholder="Any" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any</SelectItem>
                    <SelectItem value="1">1+</SelectItem>
                    <SelectItem value="2">2+</SelectItem>
                    <SelectItem value="3">3+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="property-type" className="block mb-2">
                Property Type
              </Label>
              <Select defaultValue="any">
                <SelectTrigger id="property-type">
                  <SelectValue placeholder="Any" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any</SelectItem>
                  <SelectItem value="house">House</SelectItem>
                  <SelectItem value="condo">Condo</SelectItem>
                  <SelectItem value="townhouse">Townhouse</SelectItem>
                  <SelectItem value="apartment">Apartment</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="block mb-2">Features</Label>
              <div className="flex items-center space-x-2">
                <Checkbox id="parking" />
                <Label htmlFor="parking">Parking</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="ac" />
                <Label htmlFor="ac">Air Conditioning</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="pool" />
                <Label htmlFor="pool">Pool</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="fireplace" />
                <Label htmlFor="fireplace">Fireplace</Label>
              </div>
            </div>

            <AnimatedButton variant="primary" className="w-full">
              Apply Filters
            </AnimatedButton>
          </div>
        </motion.div>

        <motion.div
          className="lg:col-span-3"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-600">{properties.length} properties found</p>
            <Select defaultValue="newest">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="price-asc">Price (Low to High)</SelectItem>
                <SelectItem value="price-desc">Price (High to Low)</SelectItem>
                <SelectItem value="sqft">Square Feet</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((property) => (
              <StaggerItem key={property.id}>
                <PropertyCard property={property} />
              </StaggerItem>
            ))}
          </StaggerChildren>

          <div className="mt-8 flex justify-center">
            <AnimatedButton variant="outline" className="mx-1">
              1
            </AnimatedButton>
            <AnimatedButton variant="outline" className="mx-1">
              2
            </AnimatedButton>
            <AnimatedButton variant="outline" className="mx-1">
              3
            </AnimatedButton>
            <AnimatedButton variant="outline" className="mx-1">
              Next
            </AnimatedButton>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
