import React, { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { helpService } from "@/services/api/helpService"
import Loading from "@/components/ui/Loading"
import Error from "@/components/ui/Error"
import Empty from "@/components/ui/Empty"
import ApperIcon from "@/components/ApperIcon"
import Button from "@/components/atoms/Button"
import Card from "@/components/atoms/Card"
import { toast } from "react-toastify"

const ArticlePage = () => {
  const { articleId } = useParams()
  const [article, setArticle] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [userRating, setUserRating] = useState(null)
  
  useEffect(() => {
    loadArticle()
  }, [articleId])
  
  const loadArticle = async () => {
    try {
      setError("")
      setLoading(true)
      const data = await helpService.getArticleById(articleId)
      setArticle(data)
    } catch (err) {
      setError("Kon artikel niet laden")
    } finally {
      setLoading(false)
    }
  }
  
  const handleRating = async (isHelpful) => {
    try {
      setUserRating(isHelpful)
      await helpService.updateArticleRating(articleId, isHelpful)
      toast.success("Bedankt voor je feedback!")
    } catch (err) {
      toast.error("Kon rating niet opslaan")
    }
  }
  
  if (loading) return <Loading />
  if (error) return <Error message={error} onRetry={loadArticle} />
  if (!article) return <Empty title="Artikel niet gevonden" />
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-gray-600 mb-8">
          <Link to="/" className="hover:text-wara-600 transition-colors">
            <ApperIcon name="Home" size={18} />
          </Link>
          <ApperIcon name="ChevronRight" size={16} />
          <Link to="/" className="hover:text-wara-600 transition-colors">
            Help Center
          </Link>
          <ApperIcon name="ChevronRight" size={16} />
          <span className="text-gray-900 font-medium">Artikel</span>
        </nav>
        
        {/* Article */}
        <Card className="p-8 mb-8 bg-gradient-to-r from-white to-gray-50 border-0 shadow-2xl">
          <div className="mb-6">
            <h1 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-4 leading-tight">
              {article.question}
            </h1>
            
            {article.tags && article.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {article.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-sm bg-gradient-to-r from-wara-100 to-orange-100 text-wara-700 px-3 py-1 rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
          
          <div className="prose prose-lg prose-gray max-w-none mb-8">
            <p className="text-gray-700 leading-relaxed text-lg">
              {article.answer}
            </p>
          </div>
          
          {/* Rating */}
          <div className="border-t border-gray-200 pt-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-4">
                <span className="font-medium text-gray-900">Was dit artikel nuttig?</span>
                <div className="flex items-center space-x-2">
                  <Button
                    variant={userRating === true ? "primary" : "outline"}
                    size="sm"
                    onClick={() => handleRating(true)}
                  >
                    <ApperIcon name="ThumbsUp" size={16} className="mr-2" />
                    Ja
                  </Button>
                  <Button
                    variant={userRating === false ? "primary" : "outline"}
                    size="sm"
                    onClick={() => handleRating(false)}
                  >
                    <ApperIcon name="ThumbsDown" size={16} className="mr-2" />
                    Nee
                  </Button>
                </div>
              </div>
              
              <div className="text-sm text-gray-500">
                {article.helpful} mensen vonden dit nuttig • {article.notHelpful} niet nuttig
              </div>
            </div>
          </div>
        </Card>
        
        {/* Related Help */}
        <Card className="p-6 bg-gradient-to-br from-wara-50 to-orange-50 border-wara-200 shadow-xl">
          <h2 className="font-display font-bold text-xl text-gray-900 mb-4">
            Nog steeds hulp nodig?
          </h2>
          <p className="text-gray-600 mb-6">
            Kon je je vraag niet beantwoorden met dit artikel? Neem contact op met onze klantenservice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={() => window.location.href = "/contact"}>
              <ApperIcon name="MessageCircle" size={18} className="mr-2" />
              Contact opnemen
            </Button>
            <Button variant="outline" onClick={() => window.history.back()}>
              <ApperIcon name="ArrowLeft" size={18} className="mr-2" />
              Terug
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default ArticlePage