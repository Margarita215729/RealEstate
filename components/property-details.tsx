"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { AnimateOnScroll } from "./animations"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AnimatedButton } from "./ui/animated-button"
import { Calendar, Home, MapPin, Phone, Mail, Check } from "lucide-react"

export function PropertyDetails({ id }) {
  const [activeImage, setActiveImage] = useState(0)

  // Mock property data - in a real app, you would fetch this based on the ID
  const property = {
    id: id,
    title: "Luxury Waterfront Property",
    address: "123 River Road, Philadelphia, PA 19103",
    price: 875000,
    description:
      "This stunning waterfront property offers breathtaking views and modern luxury living. With 4 bedrooms, 3.5 bathrooms, and over 2,800 square feet of living space, this home is perfect for families and entertaining. Features include a gourmet kitchen, hardwood floors throughout, a spacious master suite, and a private deck overlooking the water.",
    features: [
      "4 Bedrooms",
      "3.5 Bathrooms",
      "2,800 sq ft",
      "Built in 2018",
      "Central Air Conditioning",
      "Hardwood Floors",
      "Gourmet Kitchen",
      "Waterfront Views",
      "Private Deck",
      "2-Car Garage",
      "Smart Home Features",
      "Energy Efficient Appliances",
    ],
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    agent: {
      name: "Sarah Johnson",
      phone: "(215) 555-6789",
      email: "sarah@azurehomes.com",
      image: "/placeholder.svg?height=200&width=200",
    },
  }

  return (
    <div className="flex-1">
      {/* Property Images */}
      <section className="bg-gray-100">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src={property.images[activeImage] || "/placeholder.svg"}
                  alt={property.title}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
              {property.images.map((image, index) => (
                <motion.div
                  key={index}
                  className={`relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer ${
                    activeImage === index ? "ring-4 ring-blue-600" : ""
                  }`}
                  onClick={() => setActiveImage(index)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${property.title} - Image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Property Details */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <div className="flex items-center gap-2 text-gray-600 mb-2">
                  <MapPin className="h-4 w-4" />
                  <span>{property.address}</span>
                </div>
                <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
                <div className="text-2xl font-bold text-blue-600 mb-6">${property.price.toLocaleString()}</div>
              </motion.div>

              <Tabs defaultValue="details" className="mt-8">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                  <TabsTrigger value="details">Details</TabsTrigger>
                  <TabsTrigger value="features">Features</TabsTrigger>
                  <TabsTrigger value="location">Location</TabsTrigger>
                </TabsList>

                <TabsContent value="details" className="space-y-6">
                  <AnimateOnScroll>
                    <h2 className="text-xl font-bold mb-4">Property Description</h2>
                    <p className="text-gray-600">{property.description}</p>
                  </AnimateOnScroll>

                  <AnimateOnScroll>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                      <div className="flex flex-col items-center p-4 bg-blue-50 rounded-lg">
                        <Home className="h-6 w-6 text-blue-600 mb-2" />
                        <span className="text-sm text-gray-600">Type</span>
                        <span className="font-semibold">Single Family</span>
                      </div>
                      <div className="flex flex-col items-center p-4 bg-blue-50 rounded-lg">
                        <Calendar className="h-6 w-6 text-blue-600 mb-2" />
                        <span className="text-sm text-gray-600">Year Built</span>
                        <span className="font-semibold">2018</span>
                      </div>
                      <div className="flex flex-col items-center p-4 bg-blue-50 rounded-lg">
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
                          className="h-6 w-6 text-blue-600 mb-2"
                        >
                          <path d="M2 22h20" />
                          <path d="M2 11h20" />
                          <path d="M15 22v-4.3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1V22" />
                          <path d="M11 1h2a2 2 0 0 1 2 2v2H9V3a2 2 0 0 1 2-2Z" />
                        </svg>
                        <span className="text-sm text-gray-600">Bedrooms</span>
                        <span className="font-semibold">4</span>
                      </div>
                      <div className="flex flex-col items-center p-4 bg-blue-50 rounded-lg">
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
                          className="h-6 w-6 text-blue-600 mb-2"
                        >
                          <path d="M3 9h18v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
                          <path d="M3 9V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3" />
                        </svg>
                        <span className="text-sm text-gray-600">Bathrooms</span>
                        <span className="font-semibold">3.5</span>
                      </div>
                    </div>
                  </AnimateOnScroll>
                </TabsContent>

                <TabsContent value="features" className="space-y-6">
                  <AnimateOnScroll>
                    <h2 className="text-xl font-bold mb-4">Property Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {property.features.map((feature, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center gap-2"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                        >
                          <Check className="h-5 w-5 text-blue-600 flex-shrink-0" />
                          <span>{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </AnimateOnScroll>
                </TabsContent>

                <TabsContent value="location" className="space-y-6">
                  <AnimateOnScroll>
                    <h2 className="text-xl font-bold mb-4">Location</h2>
                    <div className="aspect-[16/9] bg-gray-200 rounded-lg overflow-hidden">
                      {/* Placeholder for map - in a real implementation, you would use a map component here */}
                      <div className="w-full h-full flex items-center justify-center bg-gray-300">
                        <p className="text-gray-600">Interactive Map Would Be Here</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mt-4">
                      Located in a prime Philadelphia neighborhood, this property offers easy access to shopping,
                      dining, and entertainment options. The area is known for its excellent schools and beautiful
                      parks.
                    </p>
                  </AnimateOnScroll>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div>
              <motion.div
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 sticky top-24"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src={property.agent.image || "/placeholder.svg"}
                      alt={property.agent.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold">{property.agent.name}</h3>
                    <p className="text-sm text-gray-600">Listing Agent</p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-blue-600" />
                    <a href={`tel:${property.agent.phone}`} className="hover:text-blue-600 transition-colors">
                      {property.agent.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <a href={`mailto:${property.agent.email}`} className="hover:text-blue-600 transition-colors">
                      {property.agent.email}
                    </a>
                  </div>
                </div>

                <div className="space-y-3">
                  <AnimatedButton variant="primary" className="w-full">
                    Schedule a Viewing
                  </AnimatedButton>
                  <AnimatedButton variant="outline" className="w-full border-blue-600 text-blue-600">
                    Request Info
                  </AnimatedButton>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Similar Properties */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-4">
          <AnimateOnScroll>
            <h2 className="text-2xl font-bold mb-8">Similar Properties</h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <a href={`/property/${i}`} className="absolute inset-0 z-10">
                  <span className="sr-only">View Property</span>
                </a>
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=300&width=500`}
                    alt="Property"
                    width={500}
                    height={300}
                    className="object-cover transition-all group-hover:scale-110"
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
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
