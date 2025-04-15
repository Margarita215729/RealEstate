"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { AnimateOnScroll, StaggerChildren, StaggerItem } from "./animations"
import { AnimatedButton } from "./ui/animated-button"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Search, Tag, User } from "lucide-react"

export function BlogContent() {
  const [searchQuery, setSearchQuery] = useState("")

  const featuredPost = {
    id: 1,
    title: "10 Tips for First-Time Home Buyers in Philadelphia",
    excerpt:
      "Buying your first home can be both exciting and overwhelming. Here are our top tips to help you navigate the Philadelphia real estate market with confidence.",
    image: "/placeholder.svg?height=600&width=1200",
    date: "May 15, 2023",
    author: "Sarah Johnson",
    readTime: "8 min read",
    category: "Home Buying",
  }

  const recentPosts = [
    {
      id: 2,
      title: "Philadelphia Real Estate Market Trends for 2023",
      excerpt:
        "An in-depth analysis of the current Philadelphia real estate market, including price trends, neighborhood spotlights, and predictions for the coming year.",
      image: "/placeholder.svg?height=400&width=600",
      date: "April 28, 2023",
      author: "Michael Chen",
      readTime: "12 min read",
      category: "Market Analysis",
    },
    {
      id: 3,
      title: "How to Stage Your Home for a Quick Sale",
      excerpt:
        "Professional staging tips that can help you sell your home faster and for a better price in the competitive Philadelphia market.",
      image: "/placeholder.svg?height=400&width=600",
      date: "April 15, 2023",
      author: "Emily Rodriguez",
      readTime: "6 min read",
      category: "Selling Tips",
    },
    {
      id: 4,
      title: "Understanding Property Management Fees",
      excerpt:
        "A comprehensive guide to property management fees in Philadelphia, what services they cover, and how to determine if they're worth the investment.",
      image: "/placeholder.svg?height=400&width=600",
      date: "March 30, 2023",
      author: "David Williams",
      readTime: "7 min read",
      category: "Property Management",
    },
    {
      id: 5,
      title: "The Best Philadelphia Neighborhoods for Families",
      excerpt:
        "Discover the top family-friendly neighborhoods in Philadelphia, with information on schools, parks, safety, and community amenities.",
      image: "/placeholder.svg?height=400&width=600",
      date: "March 22, 2023",
      author: "Jessica Taylor",
      readTime: "9 min read",
      category: "Neighborhoods",
    },
    {
      id: 6,
      title: "Investment Property Tax Benefits You Should Know",
      excerpt:
        "Learn about the various tax advantages available to real estate investors, including deductions, depreciation, and strategies to maximize your returns.",
      image: "/placeholder.svg?height=400&width=600",
      date: "March 10, 2023",
      author: "Robert Chang",
      readTime: "10 min read",
      category: "Investment",
    },
  ]

  const categories = [
    { name: "Home Buying", count: 12 },
    { name: "Selling Tips", count: 8 },
    { name: "Market Analysis", count: 15 },
    { name: "Property Management", count: 7 },
    { name: "Investment", count: 10 },
    { name: "Neighborhoods", count: 9 },
    { name: "Real Estate News", count: 14 },
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
              Azure Homes Blog
            </motion.h1>
            <motion.p
              className="text-xl mb-8 text-blue-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Insights, tips, and trends in Philadelphia real estate
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Featured Post */}
              <AnimateOnScroll>
                <div className="mb-16">
                  <h2 className="text-2xl font-bold mb-8">Featured Article</h2>
                  <motion.div
                    className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link href={`/blog/${featuredPost.id}`} className="block">
                      <div className="relative aspect-[16/9] overflow-hidden">
                        <Image
                          src={featuredPost.image || "/placeholder.svg"}
                          alt={featuredPost.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {featuredPost.category}
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{featuredPost.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <User className="h-4 w-4" />
                            <span>{featuredPost.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{featuredPost.readTime}</span>
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                          {featuredPost.title}
                        </h3>
                        <p className="text-gray-600 mb-4">{featuredPost.excerpt}</p>
                        <AnimatedButton
                          href={`/blog/${featuredPost.id}`}
                          variant="outline"
                          className="border-blue-600 text-blue-600"
                        >
                          Read More
                        </AnimatedButton>
                      </div>
                    </Link>
                  </motion.div>
                </div>
              </AnimateOnScroll>

              {/* Recent Posts */}
              <div className="mb-16">
                <AnimateOnScroll>
                  <h2 className="text-2xl font-bold mb-8">Recent Articles</h2>
                </AnimateOnScroll>

                <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {recentPosts.map((post) => (
                    <StaggerItem key={post.id}>
                      <motion.div
                        className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md h-full flex flex-col"
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Link href={`/blog/${post.id}`} className="block flex-grow">
                          <div className="relative aspect-[16/9] overflow-hidden">
                            <Image
                              src={post.image || "/placeholder.svg"}
                              alt={post.title}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                              {post.category}
                            </div>
                          </div>
                          <div className="p-6 flex flex-col flex-grow">
                            <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                              <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                <span>{post.date}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                <span>{post.readTime}</span>
                              </div>
                            </div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                              {post.title}
                            </h3>
                            <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>
                            <div className="mt-auto">
                              <span className="text-blue-600 font-medium group-hover:underline">Read More</span>
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    </StaggerItem>
                  ))}
                </StaggerChildren>

                <div className="mt-12 text-center">
                  <AnimatedButton variant="primary">Load More Articles</AnimatedButton>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <AnimateOnScroll>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
                  <h3 className="text-lg font-bold mb-4">Search Articles</h3>
                  <div className="flex">
                    <Input
                      placeholder="Search..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="rounded-r-none"
                    />
                    <Button className="rounded-l-none bg-blue-600 hover:bg-blue-700">
                      <Search className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
                  <h3 className="text-lg font-bold mb-4">Categories</h3>
                  <ul className="space-y-2">
                    {categories.map((category, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        <Link
                          href={`/blog/category/${category.name.toLowerCase().replace(/\s+/g, "-")}`}
                          className="flex items-center justify-between py-2 hover:text-blue-600 transition-colors"
                        >
                          <div className="flex items-center gap-2">
                            <Tag className="h-4 w-4 text-blue-600" />
                            <span>{category.name}</span>
                          </div>
                          <span className="text-gray-500 text-sm">({category.count})</span>
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
                  <h3 className="text-lg font-bold mb-4">Subscribe to Our Newsletter</h3>
                  <p className="text-gray-600 mb-4">
                    Stay updated with the latest real estate news, market trends, and exclusive offers.
                  </p>
                  <form className="space-y-4">
                    <Input placeholder="Your Email" type="email" required />
                    <AnimatedButton variant="primary" className="w-full">
                      Subscribe
                    </AnimatedButton>
                  </form>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-4">Need Real Estate Advice?</h3>
                  <p className="text-gray-600 mb-4">
                    Our team of experts is ready to answer your questions and help you make informed decisions.
                  </p>
                  <AnimatedButton href="/contact" variant="primary">
                    Contact Us
                  </AnimatedButton>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
