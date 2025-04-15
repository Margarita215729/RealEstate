"use client"

import { useState } from "react"
import Link from "next/link"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { name: "Buy", href: "/buy" },
    { name: "Rent", href: "/rent" },
    { name: "Sell", href: "/sell" },
    { name: "Manage", href: "/manage" },
    { name: "Invest", href: "/invest" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col gap-4 mt-8">
          <AnimatePresence>
            {navItems.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="text-lg font-medium py-2 block hover:text-blue-600 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
