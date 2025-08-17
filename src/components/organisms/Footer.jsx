import React from "react"
import { Link } from "react-router-dom"
import ApperIcon from "@/components/ApperIcon"

const Footer = () => {
  const footerLinks = [
    {
      title: "Klantenservice",
      links: [
        { name: "Veelgestelde vragen", path: "/" },
        { name: "Contact opnemen", path: "/contact" },
        { name: "Retourneren", path: "/category/2" },
        { name: "Verzending", path: "/category/1" }
      ]
    },
    {
      title: "Over Wara",
      links: [
        { name: "Over ons", path: "#" },
        { name: "Werkenbij", path: "#" },
        { name: "Nieuws", path: "#" },
        { name: "Duurzaamheid", path: "#" }
      ]
    },
    {
      title: "Juridisch",
      links: [
        { name: "Algemene voorwaarden", path: "#" },
        { name: "Privacybeleid", path: "#" },
        { name: "Cookie beleid", path: "#" },
        { name: "Disclaimer", path: "#" }
      ]
    }
  ]
  
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-gradient-to-br from-wara-600 to-wara-500 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-display font-bold text-xl">W</span>
              </div>
              <div>
                <span className="font-display font-bold text-xl gradient-text">Wara</span>
                <span className="text-gray-400 text-sm block">Support</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Hulp nodig? We staan klaar om je te helpen met al je vragen over onze producten en services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-wara-500 transition-colors">
                <ApperIcon name="Facebook" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-wara-500 transition-colors">
                <ApperIcon name="Twitter" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-wara-500 transition-colors">
                <ApperIcon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-wara-500 transition-colors">
                <ApperIcon name="Linkedin" size={20} />
              </a>
            </div>
          </div>
          
          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="font-display font-semibold text-lg text-white">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-wara-500 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Wara Belgium. Alle rechten voorbehouden.
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>Gemaakt met</span>
              <ApperIcon name="Heart" size={16} className="text-red-500" />
              <span>in België</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer