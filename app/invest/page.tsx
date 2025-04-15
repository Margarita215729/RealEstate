import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { InvestContent } from "@/components/invest-content"
import { PageTransition } from "@/components/page-transition"
import { Banner } from "@/components/banner"

export default function InvestPage() {
  return (
    <PageTransition>
      <main className="min-h-screen flex flex-col">
        <Header />
        <InvestContent />
        <Footer />
        <Banner />
      </main>
    </PageTransition>
  )
}
