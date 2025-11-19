'use client'

import { useState, useMemo } from 'react'
import { useRouter } from 'next/navigation'
import ProductCard from '@/components/product-card'
import FilterSidebar from '@/components/filter-sidebar'
import SearchBar from '@/components/search-bar'
import { products, categories } from '@/lib/product-data'

export default function CatalogSection() {
  const router = useRouter()
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('featured')
  const [priceRange, setPriceRange] = useState<{ min: number; max: number } | null>(null)

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.filter(product => {
      const matchesCategory = activeCategory === 'All' || product.category === activeCategory
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesPrice = !priceRange || (product.price >= priceRange.min && product.price <= priceRange.max)
      return matchesCategory && matchesSearch && matchesPrice && product.inStock
    })

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case 'newest':
        filtered.reverse()
        break
      default:
        break
    }

    return filtered
  }, [activeCategory, searchQuery, sortBy, priceRange])

  return (
    <section className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <p className="text-xs uppercase tracking-widest text-gray-600 dark:text-gray-400 mb-4">
            Curated Collection
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-balance mb-6">
            Premium Essentials
            <br />
            <span className="font-black">For Every Lifestyle</span>
          </h2>
          <div className="w-12 h-1 bg-black dark:bg-white mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover our carefully curated collection of luxury products, each selected for exceptional quality and timeless design
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <SearchBar onSearch={setSearchQuery} />
        </div>

        {/* Filter Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <FilterSidebar 
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
              onSortChange={setSortBy}
              onPriceRangeChange={setPriceRange}
            />
          </div>

          {/* Product Grid */}
          <div className="lg:col-span-3">
            {filteredAndSortedProducts.length > 0 ? (
              <>
                <div className="mb-6 flex items-center justify-between">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Showing <span className="font-semibold">{filteredAndSortedProducts.length}</span> products
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredAndSortedProducts.map(product => (
                    <ProductCard key={product.id} {...product} />
                  ))}
                </div>
              </>
            ) : (
              <div className="col-span-full py-24 text-center">
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
                  No products found
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  Try adjusting your filters or search query
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
