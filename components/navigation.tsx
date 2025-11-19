'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import SearchBar from './search-bar'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-950/95 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-10 h-10 bg-black dark:bg-white rounded flex items-center justify-center">
              <span className="text-white dark:text-black font-bold text-lg">L</span>
            </div>
            <span className="font-light tracking-widest text-sm uppercase hidden sm:inline">Luxury</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/collection" className="text-sm font-light uppercase tracking-wider hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
              Collections
            </Link>
            <Link href="/about" className="text-sm font-light uppercase tracking-wider hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm font-light uppercase tracking-wider hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
              Contact
            </Link>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex flex-1 max-w-xs">
            <SearchBar />
          </div>

          {/* Cart */}
          <button className="relative flex-shrink-0">
            <div className="w-6 h-6 border border-black dark:border-white"></div>
            <span className="absolute -top-2 -right-2 w-4 h-4 bg-black dark:bg-white text-white dark:text-black text-xs flex items-center justify-center font-bold">
              0
            </span>
          </button>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors flex-shrink-0"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-6 space-y-4 pb-6 border-t border-gray-200 dark:border-gray-800 pt-6">
            <div className="mb-4">
              <SearchBar />
            </div>
            <Link href="/collection" className="block text-sm font-light uppercase tracking-wider hover:text-gray-600 dark:hover:text-gray-300">Collections</Link>
            <Link href="/about" className="block text-sm font-light uppercase tracking-wider hover:text-gray-600 dark:hover:text-gray-300">About</Link>
            <Link href="/contact" className="block text-sm font-light uppercase tracking-wider hover:text-gray-600 dark:hover:text-gray-300">Contact</Link>
          </div>
        )}
      </div>
    </nav>
  )
}
