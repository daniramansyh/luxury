'use client'

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-gray-950 dark:via-gray-900 dark:to-black">
      <Navigation />
      
      <div className="pt-32 pb-20">
        {/* Contact Header */}
        <div className="px-6 mb-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-6">Get In Touch</h1>
            <p className="text-gray-600 dark:text-gray-400 font-light text-lg">
              We'd love to hear from you. Whether you have a question about our products or need assistance, our team is ready to help.
            </p>
          </div>
        </div>

        {/* Contact Content */}
        <div className="px-6">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-light uppercase tracking-wider mb-3 text-gray-700 dark:text-gray-300">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:border-black dark:focus:border-white focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-light uppercase tracking-wider mb-3 text-gray-700 dark:text-gray-300">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:border-black dark:focus:border-white focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-light uppercase tracking-wider mb-3 text-gray-700 dark:text-gray-300">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:border-black dark:focus:border-white focus:outline-none transition-colors"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-light uppercase tracking-wider mb-3 text-gray-700 dark:text-gray-300">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:border-black dark:focus:border-white focus:outline-none transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-black dark:bg-white text-white dark:text-black font-light uppercase tracking-wider hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                >
                  {submitted ? 'Message Sent!' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-12">
              <div className="border-l-2 border-black dark:border-white pl-6">
                <h3 className="text-sm font-light uppercase tracking-wider mb-2 text-gray-700 dark:text-gray-300">Email</h3>
                <p className="text-lg font-light text-black dark:text-white">
                  <a href="mailto:hello@luxury.com" className="hover:text-gray-600 dark:hover:text-gray-400 transition-colors">
                    hello@luxury.com
                  </a>
                </p>
              </div>

              <div className="border-l-2 border-black dark:border-white pl-6">
                <h3 className="text-sm font-light uppercase tracking-wider mb-2 text-gray-700 dark:text-gray-300">Phone</h3>
                <p className="text-lg font-light text-black dark:text-white">
                  <a href="tel:+1234567890" className="hover:text-gray-600 dark:hover:text-gray-400 transition-colors">
                    +1 (234) 567-890
                  </a>
                </p>
              </div>

              <div className="border-l-2 border-black dark:border-white pl-6">
                <h3 className="text-sm font-light uppercase tracking-wider mb-2 text-gray-700 dark:text-gray-300">Address</h3>
                <p className="text-lg font-light text-black dark:text-white leading-relaxed">
                  123 Luxury Avenue<br />
                  New York, NY 10001<br />
                  United States
                </p>
              </div>

              <div className="border-l-2 border-black dark:border-white pl-6">
                <h3 className="text-sm font-light uppercase tracking-wider mb-4 text-gray-700 dark:text-gray-300">Business Hours</h3>
                <p className="text-lg font-light text-black dark:text-white leading-relaxed">
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday: 10:00 AM - 4:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
