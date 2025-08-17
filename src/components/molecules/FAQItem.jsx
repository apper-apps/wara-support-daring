import React, { useState } from "react"
import ApperIcon from "@/components/ApperIcon"
import Card from "@/components/atoms/Card"

const FAQItem = ({ article, showRating = true }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [userRating, setUserRating] = useState(null)
  
  const handleRating = (isHelpful) => {
    setUserRating(isHelpful)
    // Here you would typically call the rating service
    // helpService.updateArticleRating(article.Id, isHelpful)
  }
  
  return (
    <Card className="border-0 bg-gradient-to-r from-white to-gray-50/50 backdrop-blur-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-wara-500 rounded-xl"
      >
        <div className="flex items-center justify-between">
          <h3 className="font-display font-medium text-lg text-gray-900 pr-4 hover:text-wara-600 transition-colors">
            {article.question}
          </h3>
          <ApperIcon
            name={isOpen ? "ChevronUp" : "ChevronDown"}
            size={20}
            className={`text-wara-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          />
        </div>
      </button>
      
      <div className={`accordion-content ${isOpen ? 'expanded' : ''} overflow-hidden`}>
        <div className="px-6 pb-6">
          <div className="border-t border-gray-100 pt-4">
<div className="prose prose-gray max-w-none">
              <div 
                className="text-gray-700 leading-relaxed mb-4 rich-content"
                dangerouslySetInnerHTML={{ __html: article.answer }}
              />
            </div>
            
            {article.tags && article.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {article.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs bg-gradient-to-r from-wara-100 to-wara-50 text-wara-700 px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            
            {showRating && (
              <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                <div className="flex items-center space-x-4">
                  <span>Was dit artikel nuttig?</span>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleRating(true)}
                      className={`p-2 rounded-full transition-all duration-200 ${
                        userRating === true 
                          ? 'bg-green-100 text-green-600' 
                          : 'hover:bg-green-50 text-gray-400 hover:text-green-500'
                      }`}
                    >
                      <ApperIcon name="ThumbsUp" size={16} />
                    </button>
                    <button
                      onClick={() => handleRating(false)}
                      className={`p-2 rounded-full transition-all duration-200 ${
                        userRating === false 
                          ? 'bg-red-100 text-red-600' 
                          : 'hover:bg-red-50 text-gray-400 hover:text-red-500'
                      }`}
                    >
                      <ApperIcon name="ThumbsDown" size={16} />
                    </button>
                  </div>
                </div>
                <div className="text-xs text-gray-400">
                  {article.helpful} nuttig • {article.notHelpful} niet nuttig
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Card>
  )
}

export default FAQItem