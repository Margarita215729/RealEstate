import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BuyContent } from "@/components/buy-content"
import { PageTransition } from "@/components/page-transition"
import { Banner } from "@/components/banner"

export default function BuyPage() {
  return (
    <PageTransition>
      <main className="min-h-screen flex flex-col">
        <Header />
        <BuyContent />
        <Footer />
        <Banner />
      </main>
    </PageTransition>
  )
}
