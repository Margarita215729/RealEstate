"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { AnimateOnScroll, StaggerChildren, StaggerItem } from "./animations"
import { AnimatedButton } from "./ui/animated-button"
import { CheckCircle, Award, Heart, Clock, Users, Briefcase, Building } from "lucide-react"

export function AboutContent() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "With over 15 years of experience in Philadelphia real estate, Sarah founded Azure Homes with a vision to provide exceptional service and expertise to clients across all real estate needs.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Michael Chen",
      role: "Director of Sales",
      bio: "Michael leads our sales team with a data-driven approach and deep market knowledge. His negotiation skills and client-focused strategy have helped hundreds of clients find their perfect homes.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Property Management",
      bio: "Emily oversees our property management division, ensuring that both owners and tenants receive responsive service and that properties are maintained to the highest standards.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "David Williams",
      role: "Investment Specialist",
      bio: "David helps investors identify opportunities and build profitable real estate portfolios. His background in finance and real estate development provides valuable insights for our investment clients.",
      image: "/placeholder.svg?height=400&width=400",
    },
  ]

  const values = [
    {
      title: "Integrity",
      description:
        "We operate with transparency and honesty in every interaction, building trust with our clients and within our community.",
      icon: <Award className="h-10 w-10 text-blue-600" />,
    },
    {
      title: "Excellence",
      description:
        "We strive for excellence in all aspects of our business, from customer service to property management and investment guidance.",
      icon: <Award className="h-10 w-10 text-blue-600" />,
    },
    {
      title: "Community",
      description:
        "We're committed to the Philadelphia community and actively contribute to its growth and development through our business practices and philanthropy.",
      icon: <Heart className="h-10 w-10 text-blue-600" />,
    },
    {
      title: "Innovation",
      description:
        "We embrace new technologies and approaches to provide better service and results for our clients in an ever-evolving real estate market.",
      icon: <Briefcase className="h-10 w-10 text-blue-600" />,
    },
  ]

  const milestones = [
    {
      year: "2010",
      title: "Company Founded",
      description: "Azure Homes was established with a focus on residential sales and property management.",
    },
    {
      year: "2013",
      title: "Expanded to Commercial Real Estate",
      description: "Added commercial property services to meet growing client demand.",
    },
    {
      year: "2015",
      title: "Launched Investment Division",
      description: "Created a specialized team to help clients build real estate investment portfolios.",
    },
    {
      year: "2018",
      title: "Opened Second Office",
      description: "Expanded our presence with a new office in Northern Liberties.",
    },
    {
      year: "2020",
      title: "Introduced Virtual Services",
      description: "Pioneered virtual tours and remote closing capabilities in the Philadelphia market.",
    },
    {
      year: "2022",
      title: "Reached 1,000 Properties Under Management",
      description: "Achieved a significant milestone in our property management division.",
    },
  ]

  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center"
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
              About Azure Homes
            </motion.h1>
            <motion.p
              className="text-xl mb-8 text-blue-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Your trusted partner in Philadelphia real estate since 2010
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll>
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  Azure Homes was founded in 2010 with a simple mission: to provide exceptional real estate services
                  tailored to the unique needs of Philadelphia residents and investors. What began as a small team of
                  passionate real estate professionals has grown into a comprehensive brokerage offering a full spectrum
                  of services.
                </p>
                <p className="text-gray-600 mb-4">
                  Our journey has been defined by a commitment to integrity, personalized service, and deep local
                  expertise. As Philadelphia has evolved and grown, so have we, continuously adapting our approach to
                  meet the changing needs of our clients and community.
                </p>
                <p className="text-gray-600">
                  Today, Azure Homes is proud to be a trusted name in Philadelphia real estate, helping hundreds of
                  clients each year achieve their real estate goals, whether they're buying their first home, selling a
                  property, seeking reliable property management, or building an investment portfolio.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Azure Homes Office"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 md:px-6">
          <AnimateOnScroll>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                These core principles guide everything we do at Azure Homes, from how we interact with clients to how we
                develop our team and contribute to our community.
              </p>
            </div>
          </AnimateOnScroll>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <StaggerItem key={index}>
                <motion.div
                  className="bg-white p-6 rounded-lg shadow-sm text-center h-full"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="mx-auto mb-4 flex justify-center"
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    {value.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Our Team */}
      <section id="team" className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <AnimateOnScroll>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Meet Our Leadership Team</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our experienced team of real estate professionals is dedicated to providing exceptional service and
                expertise in every aspect of your real estate journey.
              </p>
            </div>
          </AnimateOnScroll>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <StaggerItem key={index}>
                <motion.div
                  className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 h-full"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerChildren>

          <div className="mt-12 text-center">
            <AnimatedButton href="/contact" variant="primary">
              Contact Our Team
            </AnimatedButton>
          </div>
        </div>
      </section>

      {/* Our History */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 md:px-6">
          <AnimateOnScroll>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Over the years, Azure Homes has grown and evolved to better serve our clients and community.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="relative">
            <div className="absolute left-1/2 -ml-0.5 w-0.5 h-full bg-blue-200 hidden md:block"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {index % 2 === 0 ? (
                      <>
                        <AnimateOnScroll className="md:text-right">
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-blue-600 rounded-full hidden md:flex items-center justify-center text-white font-bold">
                            {index + 1}
                          </div>
                          <div className="bg-white p-6 rounded-lg shadow-sm">
                            <div className="text-blue-600 font-bold text-xl mb-2">{milestone.year}</div>
                            <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                            <p className="text-gray-600">{milestone.description}</p>
                          </div>
                        </AnimateOnScroll>
                        <div></div>
                      </>
                    ) : (
                      <>
                        <div></div>
                        <AnimateOnScroll>
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-blue-600 rounded-full hidden md:flex items-center justify-center text-white font-bold">
                            {index + 1}
                          </div>
                          <div className="bg-white p-6 rounded-lg shadow-sm">
                            <div className="text-blue-600 font-bold text-xl mb-2">{milestone.year}</div>
                            <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                            <p className="text-gray-600">{milestone.description}</p>
                          </div>
                        </AnimateOnScroll>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <AnimateOnScroll>
              <div className="p-6">
                <div className="text-blue-600 mb-4">
                  <Users className="h-10 w-10 mx-auto" />
                </div>
                <div className="text-4xl font-bold mb-2">1,500+</div>
                <p className="text-gray-600 font-medium">Happy Clients</p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll>
              <div className="p-6">
                <div className="text-blue-600 mb-4">
                  <Briefcase className="h-10 w-10 mx-auto" />
                </div>
                <div className="text-4xl font-bold mb-2">$500M+</div>
                <p className="text-gray-600 font-medium">In Sales Volume</p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll>
              <div className="p-6">
                <div className="text-blue-600 mb-4">
                  <Clock className="h-10 w-10 mx-auto" />
                </div>
                <div className="text-4xl font-bold mb-2">13+</div>
                <p className="text-gray-600 font-medium">Years of Experience</p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll>
              <div className="p-6">
                <div className="text-blue-600 mb-4">
                  <Building className="h-10 w-10 mx-auto" />
                </div>
                <div className="text-4xl font-bold mb-2">1,000+</div>
                <p className="text-gray-600 font-medium">Properties Managed</p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Community Involvement */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Community Involvement"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll>
              <div>
                <h2 className="text-3xl font-bold mb-6">Community Involvement</h2>
                <p className="text-gray-600 mb-4">
                  At Azure Homes, we believe in giving back to the Philadelphia community that has supported our growth.
                  We're actively involved in various community initiatives and charitable organizations.
                </p>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold">Habitat for Humanity:</span> We partner with Habitat for Humanity
                      to help build affordable housing in Philadelphia neighborhoods.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold">Local Schools:</span> We support educational programs in
                      Philadelphia public schools through mentorship and financial contributions.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold">Neighborhood Revitalization:</span> We participate in community
                      clean-up events and neighborhood improvement initiatives.
                    </div>
                  </li>
                </ul>
                <AnimatedButton href="/contact" variant="primary">
                  Learn More About Our Community Work
                </AnimatedButton>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <AnimateOnScroll>
            <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Whether you're looking to buy, sell, rent, or invest, our team is here to help you achieve your real
              estate goals.
            </p>
            <AnimatedButton href="/contact" variant="secondary" size="lg">
              Contact Us Today
            </AnimatedButton>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  )
}
