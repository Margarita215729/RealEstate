import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { RentContent } from "@/components/rent-content"
import { PageTransition } from "@/components/page-transition"
import { Banner } from "@/components/banner"

export default function RentPage() {
  return (
    <PageTransition>
      <main className="min-h-screen flex flex-col">
        <Header />
        <RentContent />
        <Footer />
        <Banner />
      </main>
    </PageTransition>
  )
}
