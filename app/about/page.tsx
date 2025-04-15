import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AboutContent } from "@/components/about-content"
import { PageTransition } from "@/components/page-transition"
import { Banner } from "@/components/banner"

export default function AboutPage() {
  return (
    <PageTransition>
      <main className="min-h-screen flex flex-col">
        <Header />
        <AboutContent />
        <Footer />
        <Banner />
      </main>
    </PageTransition>
  )
}
