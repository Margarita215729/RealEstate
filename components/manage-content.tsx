import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export function ManageContent() {
  const services = [
    {
      title: "Tenant Placement",
      description: "We find and screen qualified tenants for your property, handling all marketing and showings.",
      features: [
        "Professional property marketing",
        "Tenant screening and background checks",
        "Lease preparation and signing",
        "Move-in coordination",
      ],
    },
    {
      title: "Full-Service Management",
      description: "Comprehensive property management services for hands-off property owners.",
      features: [
        "All Tenant Placement services",
        "Rent collection and accounting",
        "24/7 maintenance coordination",
        "Regular property inspections",
        "Tenant relations management",
      ],
    },
    {
      title: "Commercial Property Management",
      description: "Specialized management services for commercial property owners.",
      features: [
        "Tenant acquisition and retention",
        "Lease administration",
        "Building maintenance and improvements",
        "Financial reporting and analysis",
        "Vendor management",
      ],
    },
  ]

  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Professional Property Management</h1>
            <p className="text-xl mb-8 text-blue-100">
              Maximize your investment returns with our comprehensive property management services.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                <Link href="/contact">Request a Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-blue-700">
                <Link href="#services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose Azure Homes Property Management?</h2>
              <p className="text-gray-600 mb-6">
                With years of experience in the Philadelphia real estate market, we provide property owners with peace
                of mind and maximized returns on their investments.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">Local Expertise:</span> Deep knowledge of Philadelphia neighborhoods
                    and market trends.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">Tenant Satisfaction:</span> High tenant retention rates through
                    responsive service and quality maintenance.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">Financial Transparency:</span> Detailed monthly statements and
                    online owner portal access.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">Maintenance Network:</span> Trusted vendor relationships for
                    cost-effective property maintenance.
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Property Management"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">Our Management Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-blue-100">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <h4 className="font-semibold mb-3">Includes:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/contact">Request a Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">Our Management Process</h2>
          <div className="relative">
            <div className="absolute left-1/2 -ml-0.5 w-0.5 h-full bg-blue-200 hidden md:block"></div>
            <div className="space-y-12">
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-blue-600 rounded-full hidden md:flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <h3 className="text-xl font-bold mb-3 md:hidden flex items-center">
                    <span className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                      1
                    </span>
                    Initial Consultation
                  </h3>
                  <h3 className="text-xl font-bold mb-3 hidden md:block">Initial Consultation</h3>
                  <p className="text-gray-600">
                    We'll meet to discuss your property, investment goals, and how our services can help you achieve
                    them.
                  </p>
                </div>
                <div className="md:pl-12"></div>
              </div>
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="md:hidden">
                  <h3 className="text-xl font-bold mb-3 flex items-center">
                    <span className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                      2
                    </span>
                    Property Evaluation
                  </h3>
                  <p className="text-gray-600">
                    We'll conduct a thorough assessment of your property to determine optimal rental rates and any
                    improvements needed.
                  </p>
                </div>
                <div className="md:pr-12"></div>
                <div className="hidden md:block">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <h3 className="text-xl font-bold mb-3">Property Evaluation</h3>
                  <p className="text-gray-600">
                    We'll conduct a thorough assessment of your property to determine optimal rental rates and any
                    improvements needed.
                  </p>
                </div>
              </div>
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-blue-600 rounded-full hidden md:flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <h3 className="text-xl font-bold mb-3 md:hidden flex items-center">
                    <span className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                      3
                    </span>
                    Marketing & Tenant Placement
                  </h3>
                  <h3 className="text-xl font-bold mb-3 hidden md:block">Marketing & Tenant Placement</h3>
                  <p className="text-gray-600">
                    We'll market your property, screen potential tenants, and handle all aspects of the leasing process.
                  </p>
                </div>
                <div className="md:pl-12"></div>
              </div>
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="md:hidden">
                  <h3 className="text-xl font-bold mb-3 flex items-center">
                    <span className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                      4
                    </span>
                    Ongoing Management
                  </h3>
                  <p className="text-gray-600">
                    We'll handle day-to-day operations, including rent collection, maintenance, and tenant relations.
                  </p>
                </div>
                <div className="md:pr-12"></div>
                <div className="hidden md:block">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    4
                  </div>
                  <h3 className="text-xl font-bold mb-3">Ongoing Management</h3>
                  <p className="text-gray-600">
                    We'll handle day-to-day operations, including rent collection, maintenance, and tenant relations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Owner Portal */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-6">Owner Portal Access</h2>
              <p className="text-gray-600 mb-6">
                Our secure online portal gives you 24/7 access to your property information, including:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>Real-time financial reporting and statements</div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>Maintenance request tracking and history</div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>Lease documents and important property information</div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>Direct communication with your property manager</div>
                </li>
              </ul>
              <div className="mt-8">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Link href="#">Owner Login</Link>
                </Button>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=400&width=600" alt="Owner Portal" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Maximize Your Investment?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Contact us today to learn how our property management services can help you achieve your investment goals.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
