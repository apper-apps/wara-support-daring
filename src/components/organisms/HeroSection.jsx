import React from "react"
import ApperIcon from "@/components/ApperIcon"
import SearchBar from "@/components/molecules/SearchBar"

const HeroSection = ({ onSearch }) => {
  return (
    <div className="bg-gradient-to-br from-wara-600 via-wara-500 to-orange-500 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute top-32 right-20 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl shadow-2xl">
              <ApperIcon name="HelpCircle" size={48} className="text-white" />
            </div>
          </div>
          
          <h1 className="font-display font-bold text-4xl md:text-6xl text-white mb-6 leading-tight">
            Hoe kunnen we je
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-200 bg-clip-text text-transparent">
              helpen?
            </span>
          </h1>
          
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Doorzoek onze kennisbank of bekijk onze categorieën om snel antwoord te vinden op je vraag
          </p>
          
          <div className="mb-8">
            <SearchBar onSearch={onSearch} />
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-4 text-white/80">
            <span className="text-sm">Populaire onderwerpen:</span>
            <div className="flex flex-wrap gap-2">
              {["Levering", "Retourneren", "Betaling", "Account"].map((topic) => (
                <button
                  key={topic}
                  onClick={() => onSearch(topic.toLowerCase())}
                  className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm hover:bg-white/30 transition-all duration-200 hover:scale-105 shadow-lg"
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection