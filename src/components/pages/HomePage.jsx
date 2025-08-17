import React, { useState, useEffect } from "react"
import { helpService } from "@/services/api/helpService"
import HeroSection from "@/components/organisms/HeroSection"
import CategoriesGrid from "@/components/organisms/CategoriesGrid"
import QuickLinks from "@/components/organisms/QuickLinks"
import ContactCard from "@/components/organisms/ContactCard"
import FAQItem from "@/components/molecules/FAQItem"
import Loading from "@/components/ui/Loading"
import Empty from "@/components/ui/Empty"
import ApperIcon from "@/components/ApperIcon"

const HomePage = () => {
  const [categories, setCategories] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [loading, setLoading] = useState(true)
  const [searching, setSearching] = useState(false)
  const [error, setError] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  
  useEffect(() => {
    loadCategories()
  }, [])
  
  const loadCategories = async () => {
    try {
      setError("")
      setLoading(true)
      const data = await helpService.getCategories()
      setCategories(data)
    } catch (err) {
      setError("Kon categorieën niet laden")
    } finally {
      setLoading(false)
    }
  }
  
  const handleSearch = async (query) => {
    setSearchQuery(query)
    
    if (!query || query.length < 2) {
      setSearchResults([])
      setSearching(false)
      return
    }
    
    try {
      setSearching(true)
      const results = await helpService.searchArticles(query)
      setSearchResults(results)
    } catch (err) {
      console.error("Zoekfout:", err)
      setSearchResults([])
    } finally {
      setSearching(false)
    }
  }
  
  return (
    <div className="min-h-screen">
      <HeroSection onSearch={handleSearch} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Search Results */}
        {searchQuery && (
          <div className="mb-16">
            <div className="flex items-center space-x-3 mb-8">
              <ApperIcon name="Search" size={24} className="text-wara-600" />
              <h2 className="font-display font-bold text-2xl text-gray-900">
                Zoekresultaten voor "{searchQuery}"
              </h2>
            </div>
            
            {searching ? (
              <Loading />
            ) : searchResults.length > 0 ? (
              <div className="space-y-4">
                {searchResults.map((article) => (
                  <FAQItem key={article.Id} article={article} />
                ))}
              </div>
            ) : (
              <Empty 
                title="Geen resultaten gevonden"
                message={`We konden geen artikelen vinden voor "${searchQuery}". Probeer een andere zoekterm of bekijk onze categorieën hieronder.`}
                icon="Search"
              />
            )}
            
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="font-display font-semibold text-lg text-gray-900 mb-6">
                Of bekijk onze help categorieën
              </h3>
            </div>
          </div>
        )}
        
        {/* Categories or Welcome Section */}
        {!searchQuery && (
          <>
            <div className="text-center mb-12">
              <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-4">
                Wat kunnen we voor je
                <span className="gradient-text"> oplossen?</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Kies een categorie om snel antwoord te vinden op je vraag
              </p>
            </div>
            
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              <div>
                <CategoriesGrid 
                  categories={categories} 
                  loading={loading} 
                  error={error} 
                />
              </div>
              <div className="space-y-8">
                <QuickLinks />
                <ContactCard />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default HomePage