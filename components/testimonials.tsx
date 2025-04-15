"use client"

import { motion } from "framer-motion"
import { AnimateOnScroll, StaggerChildren, StaggerItem } from "./animations"

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "Azure Homes helped me find my dream home in Philadelphia. Their team was professional and attentive throughout the entire process.",
      author: "Sarah Johnson",
      role: "Homeowner",
    },
    {
      quote:
        "As a property investor, I've worked with many agencies, but Azure Homes's property management services are truly exceptional.",
      author: "Michael Chen",
      role: "Property Investor",
    },
    {
      quote:
        "Selling my home was stress-free with Azure Homes. Their marketing strategy attracted multiple offers within days.",
      author: "David Williams",
      role: "Home Seller",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <AnimateOnScroll>
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-800">
              What Our Clients Say
            </h2>
            <p className="max-w-[700px] text-gray-600 md:text-xl">
              Hear from our satisfied clients about their experience with Azure Homes.
            </p>
          </div>
        </AnimateOnScroll>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <StaggerItem key={i}>
              <motion.div
                className="flex flex-col p-6 bg-blue-50 rounded-lg h-full"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="mb-4"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                >
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
                    className="h-10 w-10 text-blue-600"
                  >
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                  </svg>
                </motion.div>
                <p className="text-gray-600 mb-4 flex-grow">{testimonial.quote}</p>
                <div className="mt-auto">
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
