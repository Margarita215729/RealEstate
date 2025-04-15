import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PropertyDetails } from "@/components/property-details"
import { PageTransition } from "@/components/page-transition"

export default function PropertyPage({ params }) {
  return (
    <PageTransition>
      <main className="min-h-screen flex flex-col">
        <Header />
        <PropertyDetails id={params.id} />
        <Footer />
      </main>
    </PageTransition>
  )
}
