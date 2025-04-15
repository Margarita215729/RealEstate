import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { PropertyCard } from "@/components/property-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function RentContent() {
  const rentalProperties = [
    {
      id: 1,
      title: "Modern Apartment",
      address: "123 Main St, Philadelphia, PA",
      price: 1800,
      beds: 2,
      baths: 1,
      sqft: 950,
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 2,
      title: "Luxury Loft",
      address: "456 Park Ave, Philadelphia, PA",
      price: 2500,
      beds: 1,
      baths: 1,
      sqft: 1100,
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 3,
      title: "Townhouse",
      address: "789 Oak St, Philadelphia, PA",
      price: 2200,
      beds: 3,
      baths: 2.5,
      sqft: 1600,
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
      <section className="bg-blue-600 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Find Your Perfect Rental</h1>
            <p className="text-xl mb-8 text-blue-100">
              Discover premium rental properties in Philadelphia's most desirable neighborhoods.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                <Link href="/search">Search Rentals</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-blue-700">
                <Link href="#featured">View Featured Rentals</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Rentals */}
      <section id="featured" className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">Featured Rentals</h2>
          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="grid w-full grid-cols-4 max-w-md mx-auto">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="apartments">Apartments</TabsTrigger>
              <TabsTrigger value="houses">Houses</TabsTrigger>
              <TabsTrigger value="luxury">Luxury</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {rentalProperties.map((property) => (
                  <PropertyCard
                    key={property.id}
                    property={{
                      ...property,
                      price: property.price,
                    }}
                  />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="apartments" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {rentalProperties.slice(0, 2).map((property) => (
                  <PropertyCard
                    key={property.id}
                    property={{
                      ...property,
                      price: property.price,
                    }}
                  />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="houses" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {rentalProperties.slice(2, 3).map((property) => (
                  <PropertyCard
                    key={property.id}
                    property={{
                      ...property,
                      price: property.price,
                    }}
                  />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="luxury" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {rentalProperties.slice(1, 2).map((property) => (
                  <PropertyCard
                    key={property.id}
                    property={{
                      ...property,
                      price: property.price,
                    }}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
          <div className="mt-8 text-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/search">View All Rentals</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">Popular Rental Neighborhoods</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {neighborhoods.map((neighborhood, index) => (
              <Link
                key={index}
                href={`/search?neighborhood=${encodeURIComponent(neighborhood.name)}`}
                className="group block"
              >
                <div className="relative overflow-hidden rounded-lg">
                  <Image
                    src={neighborhood.image || "/placeholder.svg"}
                    alt={neighborhood.name}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4 text-white">
                    <h3 className="text-xl font-bold">{neighborhood.name}</h3>
                    <p>{neighborhood.count} rentals available</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Rental Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">Renting Made Easy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg border border-gray-200 shadow-sm">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">Browse Listings</h3>
              <p className="text-gray-600">
                Search our extensive database of rental properties based on your preferences and budget.
              </p>
            </div>
            <div className="text-center p-6 rounded-lg border border-gray-200 shadow-sm">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">Schedule Viewings</h3>
              <p className="text-gray-600">
                Book appointments to view properties that interest you at times that work for your schedule.
              </p>
            </div>
            <div className="text-center p-6 rounded-lg border border-gray-200 shadow-sm">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">Apply & Move In</h3>
              <p className="text-gray-600">
                Complete your application online and our team will guide you through the approval and move-in process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tenant Resources */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">Tenant Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Rental Application Guide</h3>
              <p className="text-gray-600 mb-4">
                Learn about our application process, required documents, and how to prepare for a successful
                application.
              </p>
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                <Link href="#">Read Guide</Link>
              </Button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Tenant FAQ</h3>
              <p className="text-gray-600 mb-4">
                Find answers to common questions about leases, maintenance requests, rent payments, and more.
              </p>
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                <Link href="#">View FAQ</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Next Home?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Browse our available rentals or contact us to discuss your specific needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              <Link href="/search">Search Rentals</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-blue-700">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
