import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Footer } from "@/components/footer"
import { FeaturedProperties } from "@/components/featured-properties"
import { Services } from "@/components/services"
import { Testimonials } from "@/components/testimonials"
import { PageTransition } from "@/components/page-transition"
import { Banner } from "@/components/banner"

export default function Home() {
  return (
    <PageTransition>
      <main className="min-h-screen flex flex-col">
        <Header />
        <Hero />
        <FeaturedProperties />
        <Services />
        <Testimonials />
        <Footer />
        <Banner />
      </main>
    </PageTransition>
  )
}
