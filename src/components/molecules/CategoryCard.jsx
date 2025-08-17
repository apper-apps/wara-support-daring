import React from "react"
import { useNavigate } from "react-router-dom"
import ApperIcon from "@/components/ApperIcon"
import Card from "@/components/atoms/Card"

const CategoryCard = ({ category }) => {
  const navigate = useNavigate()
  
  const handleClick = () => {
    navigate(`/category/${category.Id}`)
  }
  
  return (
    <Card 
      className="p-6 cursor-pointer group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-0 bg-gradient-to-br from-white to-gray-50"
      onClick={handleClick}
    >
      <div className="flex items-start space-x-4">
        <div className={`p-3 rounded-xl ${category.color} group-hover:scale-110 transition-transform duration-200 shadow-sm`}>
          <ApperIcon name={category.icon} size={24} />
        </div>
        <div className="flex-1">
          <h3 className="font-display font-semibold text-lg text-gray-900 mb-2 group-hover:text-wara-600 transition-colors">
            {category.title}
          </h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {category.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
              {category.articleCount} artikelen
            </span>
            <ApperIcon 
              name="ChevronRight" 
              size={18} 
              className="text-gray-400 group-hover:text-wara-500 group-hover:translate-x-1 transition-all duration-200" 
            />
          </div>
        </div>
      </div>
    </Card>
  )
}

export default CategoryCard