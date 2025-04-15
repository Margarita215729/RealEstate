import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogContent } from "@/components/blog-content"
import { PageTransition } from "@/components/page-transition"
import { Banner } from "@/components/banner"

export default function BlogPage() {
  return (
    <PageTransition>
      <main className="min-h-screen flex flex-col">
        <Header />
        <BlogContent />
        <Footer />
        <Banner />
      </main>
    </PageTransition>
  )
}
