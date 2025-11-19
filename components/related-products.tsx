'use client'

import { useRouter } from 'next/navigation'
import ProductCard from './product-card'
import { products } from '@/lib/product-data'

interface RelatedProductsProps {
  currentProductId: string
  category: string
}

export default function RelatedProducts({ currentProductId, category }: RelatedProductsProps) {
  const router = useRouter()
  const relatedProducts = products
    .filter(p => p.id !== currentProductId && p.category === category)
    .slice(0, 4)

  if (relatedProducts.length === 0) return null

  return (
    <div className="pt-20">
      <h2 className="text-3xl font-light mb-12 text-gray-900 dark:text-white">
        Related Products
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {relatedProducts.map((product) => (
          <div
            key={product.id}
            onClick={() => router.push(`/catalog/${product.id}`)}
            className="cursor-pointer"
          >
            <ProductCard {...product} />
          </div>
        ))}
      </div>
    </div>
  )
}
