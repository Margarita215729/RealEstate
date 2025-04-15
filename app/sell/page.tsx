import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SellContent } from "@/components/sell-content"
import { PageTransition } from "@/components/page-transition"
import { Banner } from "@/components/banner"

export default function SellPage() {
  return (
    <PageTransition>
      <main className="min-h-screen flex flex-col">
        <Header />
        <SellContent />
        <Footer />
        <Banner />
      </main>
    </PageTransition>
  )
}
