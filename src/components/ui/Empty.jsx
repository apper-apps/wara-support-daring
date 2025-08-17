import React from "react"
import ApperIcon from "@/components/ApperIcon"

const Empty = ({ 
  title = "Geen resultaten gevonden", 
  message = "Probeer een andere zoekterm of bekijk onze categorieën",
  icon = "Search",
  action
}) => {
  return (
    <div className="text-center py-16">
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-dashed border-gray-300 rounded-2xl p-8 max-w-md mx-auto">
        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full flex items-center justify-center shadow-lg">
          <ApperIcon name={icon} className="text-white" size={28} />
        </div>
        <h3 className="text-xl font-display font-semibold text-gray-800 mb-2">
          {title}
        </h3>
        <p className="text-gray-600 mb-6">{message}</p>
        {action && (
          <button
            onClick={action.onClick}
            className="bg-gradient-to-r from-wara-600 to-wara-500 text-white px-6 py-2 rounded-lg font-medium hover:from-wara-700 hover:to-wara-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <ApperIcon name="ArrowRight" className="inline mr-2" size={16} />
            {action.label}
          </button>
        )}
      </div>
    </div>
  )
}

export default Empty