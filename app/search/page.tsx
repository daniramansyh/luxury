'use client'

import { useSearchParams } from 'next/navigation'
import { useState, useMemo } from 'react'
import Link from 'next/link'
import { ChevronRight, Filter, X } from 'lucide-react'
import Navigation from '@/components/navigation'
import ProductCard from '@/components/product-card'
import Footer from '@/components/footer'
import { searchProducts, Product } from '@/lib/search-utils'

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q') || ''
  const [sortBy, setSortBy] = useState('featured')
  const [showFilters, setShowFilters] = useState(false)

  const searchResults = useMemo(() => {
    const results = searchProducts(query)
    
    // Sort results
    switch (sortBy) {
      case 'price-low':
        return [...results].sort((a, b) => a.price - b.price)
      case 'price-high':
        return [...results].sort((a, b) => b.price - a.price)
      case 'rating':
        return [...results].sort((a, b) => b.rating - a.rating)
      case 'newest':
        return [...results].reverse()
      default:
        return results
    }
  }, [query, sortBy])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-gray-950 dark:via-gray-900 dark:to-black">
      <Navigation />
      
      {/* Breadcrumb */}
      <div className="border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-2 text-sm">
          <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <span className="text-black dark:text-white font-medium">Search Results</span>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-5xl font-bold text-black dark:text-white mb-3 text-balance">
            Search Results
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {query && (
              <>
                Found <span className="font-semibold text-black dark:text-white">{searchResults.length}</span> products for "<span className="font-semibold text-black dark:text-white">{query}</span>"
              </>
            )}
          </p>
        </div>

        {/* No Results */}
        {searchResults.length === 0 ? (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 mb-6">
              <X className="w-8 h-8 text-gray-400 dark:text-gray-600" />
            </div>
            <h2 className="text-2xl font-bold text-black dark:text-white mb-3">No products found</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              {query 
                ? `We couldn't find any products matching "${query}". Try searching with different keywords.`
                : 'Please enter a search term to find products.'
              }
            </p>
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-medium rounded hover:opacity-90 transition-opacity"
            >
              Back to Catalog
            </Link>
          </div>
        ) : (
          <>
            {/* Filters & Sorting */}
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-200 dark:border-gray-800">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
              >
                <Filter className="w-4 h-4" />
                <span className="text-sm font-medium">Filters</span>
              </button>

              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600 dark:text-gray-400">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-black dark:text-white rounded text-sm focus:outline-none focus:border-black dark:focus:border-white transition-colors"
                >
                  <option value="featured">Featured</option>
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {searchResults.map((product) => (
                <ProductCard 
                  key={product.id}
                  {...product}
                />
              ))}
            </div>
          </>
        )}
      </main>

      <Footer />
    </div>
  )
}
