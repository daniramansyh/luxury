import Navigation from '@/components/navigation'
import HeroSection from '@/components/hero-section'
import CatalogSection from '@/components/catalog-section'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-gray-950 dark:via-gray-900 dark:to-black">
      <Navigation />
      <HeroSection />
      <CatalogSection />
      <Footer />
    </div>
  )
}
