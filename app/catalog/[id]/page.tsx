'use client'

import { use } from 'react'
import { useRouter } from 'next/navigation'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import ProductGallery from '@/components/product-gallery'
import ProductInfo from '@/components/product-info'
import ProductReviews from '@/components/product-reviews'
import RelatedProducts from '@/components/related-products'
import { products } from '@/lib/product-data'
import { ChevronLeft } from 'lucide-react'

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter()
  const { id } = use(params)
  const product = products.find(p => p.id === id)

  if (!product) {
    return (
      <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center">
        <Navigation />
        <div className="text-center">
          <h1 className="text-2xl font-light text-gray-900 dark:text-white mb-4">Product Not Found</h1>
          <button
            onClick={() => router.back()}
            className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-gray-950 dark:via-gray-900 dark:to-black">
      <Navigation />

      {/* Breadcrumb */}
      <div className="border-b border-gray-200 dark:border-gray-800 sticky top-20 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-40">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4 flex items-center gap-4">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="text-sm">Back</span>
          </button>
          <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-500">
            <span>Catalog</span>
            <span>/</span>
            <span>{product.category}</span>
            <span>/</span>
            <span className="text-gray-900 dark:text-white font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Gallery */}
          <ProductGallery product={product} />

          {/* Product Information */}
          <ProductInfo product={product} />
        </div>

        {/* Specifications Section */}
        <div className="mb-20 pb-20 border-b border-gray-200 dark:border-gray-800">
          <h2 className="text-3xl font-light mb-8 text-gray-900 dark:text-white">Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {product.specs.map((spec, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 bg-white dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700/50">
                <div className="w-1.5 h-1.5 bg-gray-900 dark:bg-white mt-2 rounded-full flex-shrink-0"></div>
                <p className="text-sm text-gray-700 dark:text-gray-300">{spec}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews Section */}
        <ProductReviews product={product} />

        {/* Related Products */}
        <RelatedProducts currentProductId={product.id} category={product.category} />
      </div>

      <Footer />
    </div>
  )
}
