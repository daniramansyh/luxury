import { products, Product } from './product-data'

export type { Product }

export function searchProducts(query: string): Product[] {
  if (!query.trim()) return []

  const lowerQuery = query.toLowerCase().trim()
  
  return products.filter(product => {
    // Search in name
    if (product.name.toLowerCase().includes(lowerQuery)) return true
    
    // Search in description
    if (product.description.toLowerCase().includes(lowerQuery)) return true
    
    // Search in category
    if (product.category.toLowerCase().includes(lowerQuery)) return true
    
    // Search in specs
    if (product.specs.some(spec => spec.toLowerCase().includes(lowerQuery))) return true
    
    return false
  })
}

export function getSearchSuggestions(query: string): string[] {
  if (query.length < 2) return []
  
  const lowerQuery = query.toLowerCase()
  const suggestions = new Set<string>()

  products.forEach(product => {
    if (product.name.toLowerCase().includes(lowerQuery)) {
      suggestions.add(product.name)
    }
    if (product.category.toLowerCase().includes(lowerQuery)) {
      suggestions.add(product.category)
    }
  })

  return Array.from(suggestions).slice(0, 8)
}
