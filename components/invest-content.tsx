"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { AnimateOnScroll, StaggerChildren, StaggerItem } from "./animations"
import { AnimatedButton } from "./ui/animated-button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, TrendingUp, Building, DollarSign, BarChart3, Users } from "lucide-react"

export function InvestContent() {
  const investmentTypes = [
    {
      title: "Residential Properties",
      description:
        "Invest in single-family homes, multi-family units, and apartment buildings in Philadelphia's growing neighborhoods.",
      icon: <Building className="h-10 w-10 text-blue-600" />,
      benefits: ["Steady rental income", "Property value appreciation", "Tax advantages", "Portfolio diversification"],
    },
    {
      title: "Commercial Real Estate",
      description:
        "Explore opportunities in office spaces, retail locations, and industrial properties with strong ROI potential.",
      icon: <Building className="h-10 w-10 text-blue-600" />,
      benefits: [
        "Higher income potential",
        "Longer lease terms",
        "Triple net leases",
        "Business scaling opportunities",
      ],
    },
    {
      title: "Development Projects",
      description:
        "Partner with us on new construction and renovation projects in Philadelphia's most promising areas.",
      icon: <Building className="h-10 w-10 text-blue-600" />,
      benefits: ["Higher return potential", "Creative control", "Community impact", "Modern, efficient properties"],
    },
  ]

  const featuredInvestments = [
    {
      id: 1,
      title: "Multi-Family Property",
      location: "Northern Liberties",
      price: "$1,250,000",
      roi: "8.5% Cap Rate",
      image: "/placeholder.svg?height=300&width=500",
      features: ["6 Units", "Fully Renovated", "Low Maintenance", "High Occupancy Rate"],
    },
    {
      id: 2,
      title: "Retail Space",
      location: "Center City",
      price: "$2,100,000",
      roi: "7.2% Cap Rate",
      image: "/placeholder.svg?height=300&width=500",
      features: ["Prime Location", "Long-term Tenant", "Triple Net Lease", "Recent Renovations"],
    },
    {
      id: 3,
      title: "Development Opportunity",
      location: "Fishtown",
      price: "$850,000",
      roi: "12% Projected ROI",
      image: "/placeholder.svg?height=300&width=500",
      features: ["Zoned Mixed-Use", "Corner Lot", "High Growth Area", "Development Plans Available"],
    },
  ]

  const testimonials = [
    {
      quote:
        "Azure Homes helped me build a portfolio of rental properties that now generates significant passive income. Their market knowledge and property management services have been invaluable.",
      author: "Robert Chang",
      role: "Real Estate Investor",
    },
    {
      quote:
        "As a first-time investor, I was nervous about entering the market. The team at Azure Homes guided me through every step, helping me find the perfect property with strong returns.",
      author: "Jennifer Martinez",
      role: "Property Investor",
    },
  ]

  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16 md:py-24">
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
              Real Estate Investment Opportunities
            </motion.h1>
            <motion.p
              className="text-xl mb-8 text-blue-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Discover lucrative investment properties and development projects in Philadelphia's thriving real estate
              market.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <AnimatedButton href="#opportunities" variant="secondary" size="lg">
                View Opportunities
              </AnimatedButton>
              <AnimatedButton
                href="/contact"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-blue-700"
              >
                Schedule a Consultation
              </AnimatedButton>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Invest Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <AnimateOnScroll>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Invest in Philadelphia Real Estate?</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Philadelphia offers a unique combination of affordability, growth potential, and strong rental demand,
                making it an ideal market for real estate investors.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimateOnScroll>
              <Card className="border-blue-100">
                <CardContent className="pt-6">
                  <div className="text-blue-600 mb-4">
                    <TrendingUp className="h-10 w-10" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Strong Market Growth</h3>
                  <p className="text-gray-600">
                    Philadelphia's real estate market has shown consistent appreciation, with property values increasing
                    by an average of 5-7% annually over the past five years.
                  </p>
                </CardContent>
              </Card>
            </AnimateOnScroll>

            <AnimateOnScroll>
              <Card className="border-blue-100">
                <CardContent className="pt-6">
                  <div className="text-blue-600 mb-4">
                    <DollarSign className="h-10 w-10" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Attractive ROI</h3>
                  <p className="text-gray-600">
                    Investors enjoy competitive cap rates ranging from 6-9%, significantly higher than many other major
                    metropolitan areas on the East Coast.
                  </p>
                </CardContent>
              </Card>
            </AnimateOnScroll>

            <AnimateOnScroll>
              <Card className="border-blue-100">
                <CardContent className="pt-6">
                  <div className="text-blue-600 mb-4">
                    <Users className="h-10 w-10" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Strong Rental Demand</h3>
                  <p className="text-gray-600">
                    With a large population of young professionals, students, and families, Philadelphia boasts a robust
                    rental market with low vacancy rates.
                  </p>
                </CardContent>
              </Card>
            </AnimateOnScroll>

            <AnimateOnScroll>
              <Card className="border-blue-100">
                <CardContent className="pt-6">
                  <div className="text-blue-600 mb-4">
                    <BarChart3 className="h-10 w-10" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Economic Diversity</h3>
                  <p className="text-gray-600">
                    Philadelphia's diverse economy, anchored by healthcare, education, technology, and financial
                    services, provides stability for real estate investments.
                  </p>
                </CardContent>
              </Card>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Investment Types */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 md:px-6">
          <AnimateOnScroll>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Investment Opportunities</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                We offer a variety of investment options tailored to different goals, risk tolerances, and capital
                requirements.
              </p>
            </div>
          </AnimateOnScroll>

          <Tabs defaultValue="residential" className="mb-8">
            <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto">
              <TabsTrigger value="residential">Residential</TabsTrigger>
              <TabsTrigger value="commercial">Commercial</TabsTrigger>
              <TabsTrigger value="development">Development</TabsTrigger>
            </TabsList>

            {investmentTypes.map((type, index) => (
              <TabsContent key={index} value={type.title.toLowerCase().split(" ")[0]} className="mt-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <AnimateOnScroll>
                    <div>
                      <div className="text-blue-600 mb-4">{type.icon}</div>
                      <h3 className="text-2xl font-bold mb-4">{type.title}</h3>
                      <p className="text-gray-600 mb-6">{type.description}</p>
                      <h4 className="font-semibold mb-3">Key Benefits:</h4>
                      <ul className="space-y-2">
                        {type.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8">
                        <AnimatedButton href="/contact" variant="primary">
                          Explore {type.title}
                        </AnimatedButton>
                      </div>
                    </div>
                  </AnimateOnScroll>
                  <AnimateOnScroll>
                    <div className="relative h-[400px] rounded-lg overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=400&width=600"
                        alt={type.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </AnimateOnScroll>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Featured Investment Properties */}
      <section id="opportunities" className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <AnimateOnScroll>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Featured Investment Properties</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Browse our selection of high-potential investment opportunities in Philadelphia's most promising areas.
              </p>
            </div>
          </AnimateOnScroll>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredInvestments.map((property, index) => (
              <StaggerItem key={index}>
                <motion.div
                  className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md h-full flex flex-col"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={property.image || "/placeholder.svg"}
                      alt={property.title}
                      width={500}
                      height={300}
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 text-white">
                      <div className="font-medium">{property.price}</div>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-1">{property.title}</h3>
                    <p className="text-gray-500 mb-2">{property.location}</p>
                    <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium inline-block mb-4 w-fit">
                      {property.roi}
                    </div>
                    <ul className="space-y-2 mb-6 flex-grow">
                      {property.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto">
                      <AnimatedButton href={`/property/${property.id}`} variant="primary" className="w-full">
                        View Details
                      </AnimatedButton>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerChildren>

          <div className="mt-12 text-center">
            <AnimatedButton href="/search" variant="outline" className="border-blue-600 text-blue-600">
              View All Investment Properties
            </AnimatedButton>
          </div>
        </div>
      </section>

      {/* Investment Services */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 md:px-6">
          <AnimateOnScroll>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Investment Services</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                We provide comprehensive support for investors at every stage of the investment process.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimateOnScroll>
              <Card className="border-blue-100 h-full">
                <CardContent className="pt-6 h-full flex flex-col">
                  <h3 className="text-xl font-bold mb-3">Investment Strategy</h3>
                  <p className="text-gray-600 mb-4 flex-grow">
                    Our team works with you to develop a personalized investment strategy based on your financial goals,
                    risk tolerance, and timeline.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Market analysis and opportunity identification</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>ROI projections and financial modeling</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Portfolio diversification guidance</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </AnimateOnScroll>

            <AnimateOnScroll>
              <Card className="border-blue-100 h-full">
                <CardContent className="pt-6 h-full flex flex-col">
                  <h3 className="text-xl font-bold mb-3">Acquisition Support</h3>
                  <p className="text-gray-600 mb-4 flex-grow">
                    We handle every aspect of the property acquisition process to ensure a smooth and successful
                    investment.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Property sourcing and due diligence</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Negotiation and contract management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Financing assistance and closing support</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </AnimateOnScroll>

            <AnimateOnScroll>
              <Card className="border-blue-100 h-full">
                <CardContent className="pt-6 h-full flex flex-col">
                  <h3 className="text-xl font-bold mb-3">Property Management</h3>
                  <p className="text-gray-600 mb-4 flex-grow">
                    Our professional property management services maximize your returns while minimizing your
                    involvement.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Tenant screening and placement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Rent collection and financial reporting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Maintenance coordination and property inspections</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </AnimateOnScroll>
          </div>

          <div className="mt-12 text-center">
            <AnimatedButton href="/contact" variant="primary">
              Schedule an Investment Consultation
            </AnimatedButton>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <AnimateOnScroll>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Investor Success Stories</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Hear from investors who have achieved their financial goals with Azure Homes.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimateOnScroll key={index}>
                <Card className="border-blue-100">
                  <CardContent className="pt-6">
                    <div className="text-blue-600 mb-4">
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
                        className="h-10 w-10"
                      >
                        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                        <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                      </svg>
                    </div>
                    <p className="text-gray-600 mb-6 italic">{testimonial.quote}</p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-100 rounded-full mr-3"></div>
                      <div>
                        <p className="font-bold">{testimonial.author}</p>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <AnimateOnScroll>
            <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Investment Portfolio?</h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Contact our investment specialists today to discover how we can help you achieve your financial goals
              through real estate.
            </p>
            <AnimatedButton href="/contact" variant="secondary" size="lg">
              Start Your Investment Journey
            </AnimatedButton>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  )
}
