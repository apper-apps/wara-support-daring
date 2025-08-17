import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import ApperIcon from "@/components/ApperIcon"
import Button from "@/components/atoms/Button"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()
  
  const navigation = [
    { name: "Home", path: "/", icon: "Home" },
    { name: "Klantenservice", path: "/", icon: "HelpCircle" },
    { name: "Over Ons", path: "#", icon: "Info" },
    { name: "Contact", path: "/contact", icon: "MessageCircle" }
  ]
  
  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-wara-600 to-wara-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
              <span className="text-white font-display font-bold text-lg">W</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-display font-bold text-xl gradient-text">Wara</span>
              <span className="text-gray-600 text-sm ml-2">Support</span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="flex items-center space-x-2 text-gray-700 hover:text-wara-600 px-3 py-2 rounded-lg hover:bg-wara-50 transition-all duration-200 font-medium"
              >
                <ApperIcon name={item.icon} size={18} />
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>
          
          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              onClick={() => navigate("/contact")}
              className="shadow-lg"
            >
              <ApperIcon name="MessageCircle" size={18} className="mr-2" />
              Contact
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:text-wara-600 hover:bg-wara-50 transition-colors duration-200"
          >
            <ApperIcon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 bg-white/95 backdrop-blur-md">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center space-x-3 text-gray-700 hover:text-wara-600 px-4 py-3 rounded-lg hover:bg-wara-50 transition-all duration-200"
                >
                  <ApperIcon name={item.icon} size={20} />
                  <span className="font-medium">{item.name}</span>
                </Link>
              ))}
              <div className="px-4 pt-2">
                <Button 
                  onClick={() => {
                    navigate("/contact")
                    setIsMenuOpen(false)
                  }}
                  className="w-full shadow-lg"
                >
                  <ApperIcon name="MessageCircle" size={18} className="mr-2" />
                  Contact Opnemen
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header