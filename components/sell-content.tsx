import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function SellContent() {
  const testimonials = [
    {
      quote:
        "Azure Homes sold my property in just 2 weeks for above asking price. Their marketing strategy and professional photography made all the difference.",
      author: "Michael Chen",
      location: "Center City",
    },
    {
      quote:
        "The team at Azure Homes guided me through every step of selling my home. Their expertise in the Philadelphia market is unmatched.",
      author: "Sarah Johnson",
      location: "Fishtown",
    },
  ]

  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Sell Your Home with Confidence</h1>
            <p className="text-xl mb-8 text-blue-100">
              Get the best value for your property with our expert marketing and negotiation strategies.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                <Link href="/contact">Request a Home Valuation</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-blue-700">
                <Link href="#selling-process">Learn About Our Process</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">Why Sell With Azure Homes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                    <line x1="9" x2="9.01" y1="9" y2="9" />
                    <line x1="15" x2="15.01" y1="9" y2="9" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Local Market Expertise</h3>
                <p className="text-gray-600">
                  Our agents have deep knowledge of Philadelphia neighborhoods and market trends to price your home
                  effectively.
                </p>
              </CardContent>
            </Card>
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
                    <path d="M2 9V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1" />
                    <path d="M2 13h10" />
                    <path d="M9 16l-3-3 3-3" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Strategic Marketing</h3>
                <p className="text-gray-600">
                  Professional photography, virtual tours, and targeted digital marketing to showcase your property to
                  qualified buyers.
                </p>
              </CardContent>
            </Card>
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
                    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Negotiation Skills</h3>
                <p className="text-gray-600">
                  Expert negotiators who work tirelessly to secure the best terms and highest price for your property.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Selling Process */}
      <section id="selling-process" className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">Our Selling Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm relative">
              <div className="absolute -top-5 -left-5 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-3 mt-2">Consultation & Valuation</h3>
              <p className="text-gray-600">
                We'll meet to discuss your goals and provide a comprehensive market analysis to determine the optimal
                listing price.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm relative">
              <div className="absolute -top-5 -left-5 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-3 mt-2">Preparation & Marketing</h3>
              <p className="text-gray-600">
                We'll help prepare your home for sale and create a custom marketing plan to attract qualified buyers.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm relative">
              <div className="absolute -top-5 -left-5 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-3 mt-2">Showings & Offers</h3>
              <p className="text-gray-600">
                We'll coordinate showings and open houses, then help you evaluate and negotiate offers to maximize your
                return.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm relative">
              <div className="absolute -top-5 -left-5 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <h3 className="text-xl font-bold mb-3 mt-2">Closing & Beyond</h3>
              <p className="text-gray-600">
                We'll guide you through inspections, appraisals, and paperwork to ensure a smooth closing process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-blue-100">
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
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Sell Your Property?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Contact us today for a free, no-obligation home valuation and consultation.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
