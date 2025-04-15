import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactContent } from "@/components/contact-content"
import { PageTransition } from "@/components/page-transition"
import { Banner } from "@/components/banner"

export default function ContactPage() {
  return (
    <PageTransition>
      <main className="min-h-screen flex flex-col">
        <Header />
        <ContactContent />
        <Footer />
        <Banner />
      </main>
    </PageTransition>
  )
}
