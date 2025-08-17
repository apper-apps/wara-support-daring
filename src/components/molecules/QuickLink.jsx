import React from "react"
import { useNavigate } from "react-router-dom"
import ApperIcon from "@/components/ApperIcon"

const QuickLink = ({ icon, title, description, path, external = false }) => {
  const navigate = useNavigate()
  
  const handleClick = () => {
    if (external) {
      window.open(path, "_blank")
    } else {
      navigate(path)
    }
  }
  
  return (
    <button
      onClick={handleClick}
      className="w-full text-left p-4 bg-gradient-to-r from-white to-gray-50 hover:from-wara-50 hover:to-orange-50 rounded-xl border border-gray-100 hover:border-wara-200 transition-all duration-200 hover:shadow-lg group"
    >
      <div className="flex items-start space-x-3">
        <div className="p-2 bg-gradient-to-br from-wara-100 to-orange-100 rounded-lg group-hover:scale-110 transition-transform duration-200">
          <ApperIcon name={icon} size={20} className="text-wara-600" />
        </div>
        <div className="flex-1">
          <h4 className="font-medium text-gray-900 group-hover:text-wara-600 transition-colors">
            {title}
          </h4>
          <p className="text-sm text-gray-600 mt-1">{description}</p>
        </div>
        <ApperIcon 
          name={external ? "ExternalLink" : "ChevronRight"} 
          size={16} 
          className="text-gray-400 group-hover:text-wara-500 group-hover:translate-x-1 transition-all duration-200" 
        />
      </div>
    </button>
  )
}

export default QuickLink