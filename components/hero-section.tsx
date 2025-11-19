'use client'

import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Hero Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-widest text-gray-600 dark:text-gray-400">
                New Collection
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tighter text-black dark:text-white">
                Minimal
                <br />
                <span className="font-black">Design</span>
              </h1>
            </div>
            
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed font-light max-w-md">
              Experience the intersection of form and function. Each piece crafted with precision and purpose.
            </p>

            <div className="flex gap-4 pt-4">
              <button className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black text-sm uppercase tracking-wider font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                Explore Now
              </button>
              <button className="px-8 py-3 border border-black dark:border-white text-black dark:text-white text-sm uppercase tracking-wider font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative h-96 md:h-[500px] overflow-hidden rounded">
            <img
              src="/luxury-minimalist-product.jpg"
              alt="Hero product"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>

        {/* Divider */}
        <div className="thin-divider my-16"></div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <p className="text-3xl md:text-4xl font-light">500+</p>
            <p className="text-xs uppercase tracking-widest text-gray-600 dark:text-gray-400">Products</p>
          </div>
          <div className="space-y-2">
            <p className="text-3xl md:text-4xl font-light">15K+</p>
            <p className="text-xs uppercase tracking-widest text-gray-600 dark:text-gray-400">Customers</p>
          </div>
          <div className="space-y-2">
            <p className="text-3xl md:text-4xl font-light">99%</p>
            <p className="text-xs uppercase tracking-widest text-gray-600 dark:text-gray-400">Satisfaction</p>
          </div>
          <div className="space-y-2">
            <p className="text-3xl md:text-4xl font-light">24h</p>
            <p className="text-xs uppercase tracking-widest text-gray-600 dark:text-gray-400">Support</p>
          </div>
        </div>
      </div>
    </section>
  )
}
