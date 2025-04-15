import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PropertySearch } from "@/components/property-search"
import { PageTransition } from "@/components/page-transition"
import { Banner } from "@/components/banner"

export default function SearchPage() {
  return (
    <PageTransition>
      <main className="min-h-screen flex flex-col">
        <Header />
        <PropertySearch />
        <Footer />
        <Banner />
      </main>
    </PageTransition>
  )
}
