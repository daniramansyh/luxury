'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Heart, ShoppingCart, Star } from 'lucide-react'
import type { Product } from '@/lib/product-data'

interface ProductCardProps extends Product {}

export default function ProductCard({ 
  id, 
  name, 
  category, 
  price, 
  rating, 
  reviews,
  image, 
  specs,
  inStock 
}: ProductCardProps) {
  const router = useRouter()
  const [isHovered, setIsHovered] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)

  const handleCardClick = () => {
    router.push(`/catalog/${id}`)
  }

  const safeSpecs = specs && Array.isArray(specs) ? specs : []

  return (
    <div className="group cursor-pointer" onClick={handleCardClick}>
      {/* Image Container */}
      <div
        className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 aspect-square mb-4 product-hover"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="w-full h-full object-cover product-hover group-hover:scale-105"
        />

        {/* Stock Badge */}
        {!inStock && (
          <div className="absolute top-4 right-4 bg-gray-900 dark:bg-white text-white dark:text-black px-3 py-1 text-xs uppercase tracking-wider font-medium">
            Sold Out
          </div>
        )}

        {/* Overlay Actions */}
        <div className={`absolute inset-0 bg-black/50 flex flex-col items-center justify-center gap-6 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex gap-4">
            <button
              onClick={(e) => {
                e.stopPropagation()
                setIsFavorite(!isFavorite)
              }}
              className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 luxury-shadow ${
                isFavorite ? 'bg-red-600' : 'bg-white/95'
              }`}
            >
              <Heart
                className={`w-5 h-5 ${isFavorite ? 'fill-white text-white' : 'text-black'}`}
              />
            </button>
            <button 
              onClick={(e) => e.stopPropagation()}
              className="p-3 bg-white/95 rounded-full transition-all duration-300 transform hover:scale-110 luxury-shadow"
            >
              <ShoppingCart className="w-5 h-5 text-black" />
            </button>
          </div>

          {/* Quick View Button */}
          <button 
            onClick={(e) => e.stopPropagation()}
            className="px-8 py-2 bg-white text-black text-sm uppercase tracking-wider font-light hover:bg-gray-100 transition-colors luxury-shadow"
          >
            Quick View
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <p className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400">
            {category}
          </p>
          <div className="flex items-center gap-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3 h-3 ${
                    i < Math.floor(rating)
                      ? 'fill-gray-800 dark:fill-white text-gray-800 dark:text-white'
                      : 'text-gray-300 dark:text-gray-600'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400">({reviews})</span>
          </div>
        </div>

        <h3 className="text-base font-light text-balance group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
          {name}
        </h3>

        {/* Specs Preview */}
        <div className={`text-xs text-gray-600 dark:text-gray-400 space-y-1 transition-all duration-300 ${isHovered ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0 overflow-hidden'}`}>
          {safeSpecs.slice(0, 2).map((spec, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <span className="w-1 h-1 bg-gray-400 dark:bg-gray-600 rounded-full"></span>
              <span>{spec}</span>
            </div>
          ))}
        </div>

        {/* Price and Rating */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-200 dark:border-gray-800">
          <p className="text-lg font-light">${price.toLocaleString()}</p>
          <div className="text-xs font-medium text-gray-600 dark:text-gray-400">
            {rating}/5
          </div>
        </div>
      </div>
    </div>
  )
}
