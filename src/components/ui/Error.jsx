import React from "react"
import ApperIcon from "@/components/ApperIcon"

const Error = ({ message = "Er is iets misgegaan", onRetry }) => {
  return (
    <div className="text-center py-16">
      <div className="bg-gradient-to-br from-red-50 to-red-100 border border-red-200 rounded-2xl p-8 max-w-md mx-auto shadow-lg">
        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-lg">
          <ApperIcon name="AlertTriangle" className="text-white" size={28} />
        </div>
        <h3 className="text-xl font-display font-semibold text-red-800 mb-2">
          Oeps, er ging iets mis
        </h3>
        <p className="text-red-700 mb-6">{message}</p>
        {onRetry && (
          <button
            onClick={onRetry}
            className="bg-gradient-to-r from-wara-600 to-wara-500 text-white px-6 py-2 rounded-lg font-medium hover:from-wara-700 hover:to-wara-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <ApperIcon name="RefreshCw" className="inline mr-2" size={16} />
            Opnieuw proberen
          </button>
        )}
      </div>
    </div>
  )
}

export default Error