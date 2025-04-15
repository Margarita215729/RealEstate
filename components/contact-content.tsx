"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { AnimatedButton } from "./ui/animated-button"
import { AnimateOnScroll, StaggerChildren, StaggerItem } from "./animations"
import { CheckCircle, Mail, MapPin, Phone } from "lucide-react"

export function ContactContent() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    setTimeout(() => {
      setFormSubmitted(true)
    }, 1000)
  }

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
              Get in Touch
            </motion.h1>
            <motion.p
              className="text-xl mb-8 text-blue-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Have questions about buying, selling, or managing a property? Our team is here to help.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimateOnScroll>
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

                {formSubmitted ? (
                  <motion.div
                    className="text-center py-8"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-gray-600">
                      Thank you for contacting us. We'll get back to you as soon as possible.
                    </p>
                    <AnimatedButton className="mt-6" onClick={() => setFormSubmitted(false)}>
                      Send Another Message
                    </AnimatedButton>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="first-name">First Name</Label>
                        <Input id="first-name" required className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="last-name">Last Name</Label>
                        <Input id="last-name" required className="mt-1" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" required className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" type="tel" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" required className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" rows={5} required className="mt-1" />
                    </div>
                    <AnimatedButton type="submit" variant="primary">
                      Send Message
                    </AnimatedButton>
                  </form>
                )}
              </div>
            </AnimateOnScroll>

            {/* Contact Info */}
            <div>
              <AnimateOnScroll>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              </AnimateOnScroll>

              <StaggerChildren className="space-y-8">
                <StaggerItem>
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Office Address</h3>
                      <p className="text-gray-600">123 Market Street</p>
                      <p className="text-gray-600">Philadelphia, PA 19103</p>
                    </div>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Phone</h3>
                      <p className="text-gray-600">
                        <a href="tel:+12155551234" className="hover:text-blue-600 transition-colors">
                          (215) 555-1234
                        </a>
                      </p>
                    </div>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Email</h3>
                      <p className="text-gray-600">
                        <a href="mailto:info@azurehomes.com" className="hover:text-blue-600 transition-colors">
                          info@azurehomes.com
                        </a>
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              </StaggerChildren>

              <AnimateOnScroll className="mt-12">
                <h3 className="font-bold text-lg mb-4">Office Hours</h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll className="mt-12">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">Need Immediate Assistance?</h3>
                  <p className="text-gray-600 mb-4">Our team is ready to help you with any urgent real estate needs.</p>
                  <AnimatedButton href="tel:+12155551234" variant="primary">
                    Call Us Now
                  </AnimatedButton>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 md:px-6">
          <AnimateOnScroll>
            <h2 className="text-2xl font-bold mb-6 text-center">Find Us</h2>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <div className="h-[400px] bg-gray-200 rounded-lg overflow-hidden">
              {/* Placeholder for map - in a real implementation, you would use a map component here */}
              <div className="w-full h-full flex items-center justify-center bg-gray-300">
                <p className="text-gray-600">Interactive Map Would Be Here</p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  )
}
