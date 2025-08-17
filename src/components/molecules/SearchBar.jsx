import React, { useState } from "react"
import ApperIcon from "@/components/ApperIcon"
import Input from "@/components/atoms/Input"

const SearchBar = ({ onSearch, placeholder = "Zoek in onze kennisbank..." }) => {
  const [query, setQuery] = useState("")
  
  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch(query)
  }
  
  const handleInputChange = (e) => {
    const value = e.target.value
    setQuery(value)
    // Trigger search on input change for instant results
    onSearch(value)
  }
  
  return (
    <form onSubmit={handleSubmit} className="relative max-w-2xl mx-auto">
      <div className="relative">
        <ApperIcon 
          name="Search" 
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" 
          size={20} 
        />
        <Input
          value={query}
          onChange={handleInputChange}
          placeholder={placeholder}
          className="pl-12 pr-12 h-14 text-lg shadow-lg border-0 bg-white/80 backdrop-blur-sm search-glow"
        />
        {query && (
          <button
            type="button"
            onClick={() => {
              setQuery("")
              onSearch("")
            }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <ApperIcon name="X" size={20} />
          </button>
        )}
      </div>
    </form>
  )
}

export default SearchBar