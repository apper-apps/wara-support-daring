import React, { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { helpService } from "@/services/api/helpService"
import FAQItem from "@/components/molecules/FAQItem"
import Loading from "@/components/ui/Loading"
import Error from "@/components/ui/Error"
import Empty from "@/components/ui/Empty"
import ApperIcon from "@/components/ApperIcon"

const CategoryPage = () => {
  const { categoryId } = useParams()
  const [category, setCategory] = useState(null)
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  
  useEffect(() => {
    loadCategoryData()
  }, [categoryId])
  
  const loadCategoryData = async () => {
    try {
      setError("")
      setLoading(true)
      
      const [categoryData, articlesData] = await Promise.all([
        helpService.getCategoryById(categoryId),
        helpService.getArticlesByCategory(parseInt(categoryId))
      ])
      
      setCategory(categoryData)
      setArticles(articlesData)
    } catch (err) {
      setError("Kon categorie gegevens niet laden")
    } finally {
      setLoading(false)
    }
  }
  
  if (loading) return <Loading />
  if (error) return <Error message={error} onRetry={loadCategoryData} />
  if (!category) return <Empty title="Categorie niet gevonden" />
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-gradient-to-br from-wara-600 via-wara-500 to-orange-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-white/80 mb-8">
            <Link to="/" className="hover:text-white transition-colors">
              <ApperIcon name="Home" size={18} />
            </Link>
            <ApperIcon name="ChevronRight" size={16} />
            <span className="text-white font-medium">{category.title}</span>
          </nav>
          
          <div className="flex items-center space-x-4 mb-6">
            <div className={`p-4 rounded-2xl ${category.color} bg-white/20 backdrop-blur-sm shadow-2xl`}>
              <ApperIcon name={category.icon} size={40} className="text-white" />
            </div>
            <div>
              <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-2">
                {category.title}
              </h1>
              <p className="text-xl text-white/90">{category.description}</p>
            </div>
          </div>
          
          <div className="text-white/80">
            <ApperIcon name="FileText" size={18} className="inline mr-2" />
            {category.articleCount} artikelen in deze categorie
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {articles.length > 0 ? (
          <div className="space-y-4">
            {articles.map((article) => (
              <FAQItem key={article.Id} article={article} />
            ))}
          </div>
        ) : (
          <Empty 
            title="Geen artikelen gevonden"
            message="Er zijn momenteel geen artikelen in deze categorie beschikbaar"
            action={{
              label: "Terug naar overzicht",
              onClick: () => window.history.back()
            }}
          />
        )}
      </div>
    </div>
  )
}

export default CategoryPage