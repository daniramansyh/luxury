'use client'

import { useState } from 'react'
import { Heart, Share2, ShoppingCart, Truck, Shield, RotateCcw } from 'lucide-react'
import type { Product } from '@/lib/product-data'

interface ProductInfoProps {
  product: Product
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const [quantity, setQuantity] = useState(1)
  const [isFavorite, setIsFavorite] = useState(false)
  const [isAdded, setIsAdded] = useState(false)

  const handleAddToCart = () => {
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  return (
    <div className="space-y-8">
      {/* Category and Title */}
      <div>
        <p className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-3">
          {product.category}
        </p>
        <h1 className="text-4xl font-light text-gray-900 dark:text-white mb-4">
          {product.name}
        </h1>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          {product.description}
        </p>
      </div>

      {/* Rating and Reviews */}
      <div className="flex items-center gap-6 pb-6 border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-3">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`w-4 h-4 rounded-full transition-colors ${
                  i < Math.floor(product.rating)
                    ? 'bg-gray-900 dark:bg-white'
                    : 'bg-gray-300 dark:bg-gray-700'
                }`}
              />
            ))}
          </div>
          <span className="text-lg font-light">{product.rating}</span>
        </div>
        <a href="#reviews" className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
          {product.reviews} reviews
        </a>
      </div>

      {/* Price */}
      <div>
        <span className="text-4xl font-light text-gray-900 dark:text-white">
          ${product.price.toLocaleString()}
        </span>
        {product.inStock ? (
          <p className="text-sm text-green-600 dark:text-green-400 mt-3 font-medium">In Stock</p>
        ) : (
          <p className="text-sm text-red-600 dark:text-red-400 mt-3 font-medium">Out of Stock</p>
        )}
      </div>

      {/* Quantity Selector */}
      <div className="flex items-center gap-4">
        <p className="text-sm uppercase tracking-wider text-gray-600 dark:text-gray-400">Quantity</p>
        <div className="flex items-center border border-gray-200 dark:border-gray-700 rounded-lg">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors text-lg"
          >
            −
          </button>
          <div className="px-6 py-2 text-gray-900 dark:text-white font-light min-w-12 text-center">
            {quantity}
          </div>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors text-lg"
          >
            +
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4">
        <button
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className={`flex-1 py-3 px-6 rounded-lg font-light uppercase tracking-wider text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
            isAdded
              ? 'bg-green-600 text-white dark:bg-green-500'
              : product.inStock
              ? 'bg-gray-900 dark:bg-white text-white dark:text-black hover:shadow-lg dark:hover:shadow-white/20'
              : 'bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'
          }`}
        >
          <ShoppingCart className="w-5 h-5" />
          {isAdded ? 'Added to Cart' : 'Add to Cart'}
        </button>
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className={`py-3 px-6 rounded-lg font-light transition-all duration-300 flex items-center justify-center gap-2 border ${
            isFavorite
              ? 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-600 dark:text-red-400'
              : 'border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-gray-900 dark:hover:border-white'
          }`}
        >
          <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
        </button>
        <button className="py-3 px-6 rounded-lg font-light border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors flex items-center justify-center gap-2">
          <Share2 className="w-5 h-5" />
        </button>
      </div>

      {/* Trust Badges */}
      <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200 dark:border-gray-800">
        <div className="flex flex-col items-center gap-2 text-center">
          <Truck className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          <p className="text-xs text-gray-600 dark:text-gray-400">Free Shipping</p>
        </div>
        <div className="flex flex-col items-center gap-2 text-center">
          <Shield className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          <p className="text-xs text-gray-600 dark:text-gray-400">2-Year Warranty</p>
        </div>
        <div className="flex flex-col items-center gap-2 text-center">
          <RotateCcw className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          <p className="text-xs text-gray-600 dark:text-gray-400">Easy Returns</p>
        </div>
      </div>
    </div>
  )
}
