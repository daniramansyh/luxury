'use client'

import { Search, X } from 'lucide-react'
import { useState, useMemo } from 'react'
import { useRouter } from 'next/navigation'
import { getSearchSuggestions } from '@/lib/search-utils'

interface SearchBarProps {
  onSearch?: (query: string) => void
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  const router = useRouter()

  const suggestions = useMemo(() => {
    return getSearchSuggestions(query)
  }, [query])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setQuery(value)
    onSearch?.(value)
  }

  const handleClear = () => {
    setQuery('')
    onSearch?.('')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`)
      setIsFocused(false)
    }
  }

  const handleSuggestionClick = (suggestion: string) => {
    router.push(`/search?q=${encodeURIComponent(suggestion)}`)
    setIsFocused(false)
  }

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className={`relative flex items-center px-6 py-3 bg-white dark:bg-gray-900 border rounded-lg transition-all duration-300 luxury-shadow ${
        isFocused
          ? 'border-black dark:border-white'
          : 'border-gray-300 dark:border-gray-700'
      }`}>
        <Search className="w-5 h-5 text-gray-400 dark:text-gray-600 flex-shrink-0" />
        <input
          type="text"
          placeholder="Search by name, category, or specs..."
          value={query}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          className="flex-1 ml-4 bg-transparent text-sm focus:outline-none text-foreground placeholder-gray-400 dark:placeholder-gray-600"
        />
        {query && (
          <button
            type="button"
            onClick={handleClear}
            className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors"
          >
            <X className="w-4 h-4 text-gray-400 dark:text-gray-600" />
          </button>
        )}
      </div>

      {/* Search Suggestions */}
      {isFocused && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg p-4 space-y-2 z-10 luxury-shadow">
          <p className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 px-2 mb-3">
            Suggestions
          </p>
          {suggestions.map((suggestion, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handleSuggestionClick(suggestion)}
              className="w-full text-left px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors"
            >
              {suggestion}
            </button>
          ))}
        </div>
      )}
    </form>
  )
}
