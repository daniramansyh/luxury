'use client'

import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { categories, priceRanges } from '@/lib/product-data'

interface FilterSidebarProps {
  activeCategory: string
  onCategoryChange: (category: string) => void
  onSortChange: (sort: string) => void
  onPriceRangeChange: (range: { min: number; max: number } | null) => void
}

export default function FilterSidebar({ 
  activeCategory, 
  onCategoryChange,
  onSortChange,
  onPriceRangeChange 
}: FilterSidebarProps) {
  const [expandedSections, setExpandedSections] = useState({
    category: true,
    price: true,
    sort: true,
  })
  const [selectedPriceRange, setSelectedPriceRange] = useState<string | null>(null)

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const handlePriceRangeClick = (label: string, min: number, max: number) => {
    if (selectedPriceRange === label) {
      setSelectedPriceRange(null)
      onPriceRangeChange(null)
    } else {
      setSelectedPriceRange(label)
      onPriceRangeChange({ min, max })
    }
  }

  return (
    <aside className="sticky top-24">
      <div className="space-y-8">
        {/* Category Filter */}
        <div className="space-y-4">
          <button
            onClick={() => toggleSection('category')}
            className="flex items-center justify-between w-full group"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-black dark:text-white">
              Categories
            </h3>
            <ChevronDown className={`w-4 h-4 transition-transform ${expandedSections.category ? '' : '-rotate-90'}`} />
          </button>
          {expandedSections.category && (
            <div className="space-y-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => onCategoryChange(category)}
                  className={`block w-full text-left text-sm py-2 px-3 rounded transition-all duration-200 thin-divider ${
                    activeCategory === category
                      ? 'bg-black text-white dark:bg-white dark:text-black font-medium'
                      : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Price Filter */}
        <div className="space-y-4 pb-8 border-b border-gray-200 dark:border-gray-800">
          <button
            onClick={() => toggleSection('price')}
            className="flex items-center justify-between w-full"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-black dark:text-white">
              Price Range
            </h3>
            <ChevronDown className={`w-4 h-4 transition-transform ${expandedSections.price ? '' : '-rotate-90'}`} />
          </button>
          {expandedSections.price && (
            <div className="space-y-2">
              {priceRanges.map((range) => (
                <button
                  key={range.label}
                  onClick={() => handlePriceRangeClick(range.label, range.min, range.max)}
                  className={`w-full text-left text-sm px-3 py-2 rounded transition-all duration-200 ${
                    selectedPriceRange === range.label
                      ? 'bg-black text-white dark:bg-white dark:text-black'
                      : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  {range.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Sort */}
        <div className="space-y-4">
          <button
            onClick={() => toggleSection('sort')}
            className="flex items-center justify-between w-full"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-black dark:text-white">
              Sort By
            </h3>
            <ChevronDown className={`w-4 h-4 transition-transform ${expandedSections.sort ? '' : '-rotate-90'}`} />
          </button>
          {expandedSections.sort && (
            <select 
              onChange={(e) => onSortChange(e.target.value)}
              className="w-full px-3 py-2 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded text-sm focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
            >
              <option value="featured">Featured</option>
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          )}
        </div>

        {/* Reset Button */}
        <button 
          onClick={() => {
            onCategoryChange('All')
            onSortChange('featured')
            onPriceRangeChange(null)
            setSelectedPriceRange(null)
          }}
          className="w-full py-2 text-sm font-light uppercase tracking-wider border border-gray-300 dark:border-gray-700 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors rounded"
        >
          Reset Filters
        </button>
      </div>
    </aside>
  )
}
