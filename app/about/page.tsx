import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Link from 'next/link'

export const metadata = {
  title: 'About Us - Luxury Catalog',
  description: 'Learn about our brand and commitment to premium products',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-gray-950 dark:via-gray-900 dark:to-black">
      <Navigation />
      
      <div className="pt-32 pb-20">
        {/* About Header */}
        <div className="px-6 mb-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-8">About Luxury</h1>
            <div className="w-full h-1 bg-black dark:bg-white mb-8"></div>
          </div>
        </div>

        {/* About Content */}
        <div className="px-6 mb-20">
          <div className="max-w-4xl mx-auto space-y-12">
            <section>
              <h2 className="text-2xl font-light tracking-wider uppercase mb-6">Our Mission</h2>
              <p className="text-gray-700 dark:text-gray-300 font-light leading-relaxed text-lg">
                We curate and present a thoughtfully selected collection of premium products that embody excellence in design, craftsmanship, and functionality. Our mission is to bring sophistication and elegance to everyday living through meticulously chosen items that stand the test of time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light tracking-wider uppercase mb-6">Our Philosophy</h2>
              <p className="text-gray-700 dark:text-gray-300 font-light leading-relaxed text-lg mb-6">
                In a world of excess, we believe in the power of minimalism and intentional design. Every product in our collection tells a story of dedication to quality, sustainability, and aesthetic purity. We partner with brands that share our commitment to these values.
              </p>
              <p className="text-gray-700 dark:text-gray-300 font-light leading-relaxed text-lg">
                Luxury, for us, is not about ostentation—it's about the quiet confidence that comes from owning something truly exceptional.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light tracking-wider uppercase mb-6">Why Choose Us</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="border-t border-gray-300 dark:border-gray-700 pt-6">
                  <h3 className="text-lg font-light uppercase tracking-wider mb-3">Curated Selection</h3>
                  <p className="text-gray-600 dark:text-gray-400 font-light">Each product is carefully selected for quality, design, and value, ensuring only the best reaches our customers.</p>
                </div>
                <div className="border-t border-gray-300 dark:border-gray-700 pt-6">
                  <h3 className="text-lg font-light uppercase tracking-wider mb-3">Premium Quality</h3>
                  <p className="text-gray-600 dark:text-gray-400 font-light">We prioritize durability and craftsmanship, guaranteeing products that will serve you beautifully for years.</p>
                </div>
                <div className="border-t border-gray-300 dark:border-gray-700 pt-6">
                  <h3 className="text-lg font-light uppercase tracking-wider mb-3">Expert Support</h3>
                  <p className="text-gray-600 dark:text-gray-400 font-light">Our dedicated team is available to help you find exactly what you're looking for and answer any questions.</p>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* CTA Section */}
        <div className="px-6">
          <div className="max-w-4xl mx-auto border-t border-gray-300 dark:border-gray-700 pt-12 text-center">
            <p className="text-gray-700 dark:text-gray-300 font-light text-lg mb-8">Ready to explore our collection?</p>
            <Link href="/collection" className="inline-block px-8 py-3 bg-black dark:bg-white text-white dark:text-black font-light uppercase tracking-wider hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
              Browse Collection
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
