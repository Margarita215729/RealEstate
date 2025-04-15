import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ManageContent } from "@/components/manage-content"
import { PageTransition } from "@/components/page-transition"
import { Banner } from "@/components/banner"

export default function ManagePage() {
  return (
    <PageTransition>
      <main className="min-h-screen flex flex-col">
        <Header />
        <ManageContent />
        <Footer />
        <Banner />
      </main>
    </PageTransition>
  )
}
