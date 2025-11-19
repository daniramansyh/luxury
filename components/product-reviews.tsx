'use client'

import { Star } from 'lucide-react'
import type { Product } from '@/lib/product-data'

interface ProductReviewsProps {
  product: Product
}

export default function ProductReviews({ product }: ProductReviewsProps) {
  const reviews = [
    {
      id: 1,
      author: "Sarah Chen",
      rating: 5,
      date: "2 weeks ago",
      title: "Absolutely Premium",
      content: "This product exceeded all my expectations. The attention to detail is remarkable and the quality is unmatched. Highly recommend!",
      verified: true,
      helpful: 24,
    },
    {
      id: 2,
      author: "Michael Roberts",
      rating: 5,
      date: "1 month ago",
      title: "Worth Every Penny",
      content: "The craftsmanship is exceptional. Arrived perfectly packaged and the customer service was outstanding throughout.",
      verified: true,
      helpful: 18,
    },
    {
      id: 3,
      author: "Jessica Wong",
      rating: 4,
      date: "1 month ago",
      title: "Great Quality, Minor Issue",
      content: "Amazing product overall. Just had a small packaging issue but customer service resolved it instantly.",
      verified: true,
      helpful: 12,
    },
  ]

  const ratingDistribution = [
    { stars: 5, count: 142 },
    { stars: 4, count: 35 },
    { stars: 3, count: 8 },
    { stars: 2, count: 2 },
    { stars: 1, count: 1 },
  ]

  return (
    <div id="reviews" className="scroll-mt-32">
      <h2 className="text-3xl font-light mb-12 text-gray-900 dark:text-white">Customer Reviews</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
        {/* Rating Summary */}
        <div className="flex flex-col items-center justify-center p-8 bg-white dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700/50">
          <div className="text-5xl font-light text-gray-900 dark:text-white mb-2">
            {product.rating}
          </div>
          <div className="flex gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating)
                    ? 'fill-gray-900 dark:fill-white text-gray-900 dark:text-white'
                    : 'text-gray-300 dark:text-gray-600'
                }`}
              />
            ))}
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Based on {product.reviews} reviews
          </p>
        </div>

        {/* Rating Distribution */}
        <div className="lg:col-span-2 space-y-3">
          {ratingDistribution.map((item) => (
            <div key={item.stars} className="flex items-center gap-4">
              <div className="flex items-center gap-1 w-12">
                {[...Array(item.stars)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-gray-900 dark:fill-white text-gray-900 dark:text-white" />
                ))}
              </div>
              <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gray-900 dark:bg-white transition-all"
                  style={{ width: `${(item.count / product.reviews) * 100}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 w-12 text-right">{item.count}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Individual Reviews */}
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="pb-6 border-b border-gray-200 dark:border-gray-800 last:border-b-0">
            <div className="flex items-start justify-between mb-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <p className="font-medium text-gray-900 dark:text-white">{review.author}</p>
                  {review.verified && (
                    <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2 py-1 rounded">
                      Verified
                    </span>
                  )}
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">{review.date}</p>
              </div>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < review.rating
                        ? 'fill-gray-900 dark:fill-white text-gray-900 dark:text-white'
                        : 'text-gray-300 dark:text-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>

            <h4 className="font-medium text-gray-900 dark:text-white mb-2">{review.title}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              {review.content}
            </p>

            <button className="text-xs text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
              Helpful ({review.helpful})
            </button>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="mt-8 text-center">
        <button className="px-8 py-3 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white rounded-lg font-light uppercase tracking-wider text-sm hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
          Load More Reviews
        </button>
      </div>
    </div>
  )
}
