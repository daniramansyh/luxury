import Navigation from '@/components/navigation'
import CatalogSection from '@/components/catalog-section'
import Footer from '@/components/footer'

export const metadata = {
  title: 'Collections - Luxury Catalog',
  description: 'Browse our curated collections of premium products',
}

export default function CollectionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-gray-950 dark:via-gray-900 dark:to-black">
      <Navigation />
      
      {/* Header Section */}
      <div className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-4">Collections</h1>
          <p className="text-gray-600 dark:text-gray-400 font-light text-lg max-w-2xl">
            Explore our carefully curated collections of premium products, each handpicked for quality and design excellence.
          </p>
        </div>
      </div>

      {/* Catalog Section */}
      <CatalogSection />
      
      <Footer />
    </div>
  )
}
