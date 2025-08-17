import React from "react"
import ApperIcon from "@/components/ApperIcon"
import QuickLink from "@/components/molecules/QuickLink"
import Card from "@/components/atoms/Card"

const QuickLinks = () => {
  const quickLinks = [
    {
      icon: "Package",
      title: "Mijn bestelling volgen",
      description: "Bekijk de status van je bestelling",
      path: "#"
    },
    {
      icon: "RotateCcw",
      title: "Product retourneren",
      description: "Start een retour aanvraag",
      path: "/category/2"
    },
    {
      icon: "MessageCircle",
      title: "Live chat",
      description: "Chat direct met onze support",
      path: "#",
      external: true
    },
    {
      icon: "Phone",
      title: "Bel ons",
      description: "Telefonische ondersteuning",
      path: "/contact"
    },
    {
      icon: "Mail",
      title: "E-mail support",
      description: "Stuur ons een bericht",
      path: "/contact"
    }
  ]
  
  return (
    <Card className="p-6 bg-gradient-to-br from-white to-gray-50 border-0 shadow-xl">
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-2 bg-gradient-to-br from-wara-100 to-orange-100 rounded-lg">
          <ApperIcon name="Zap" size={24} className="text-wara-600" />
        </div>
        <div>
          <h2 className="font-display font-bold text-xl text-gray-900">
            Snelle acties
          </h2>
          <p className="text-sm text-gray-600">
            De meest gebruikte functies
          </p>
        </div>
      </div>
      
      <div className="space-y-3">
        {quickLinks.map((link, index) => (
          <QuickLink key={index} {...link} />
        ))}
      </div>
    </Card>
  )
}

export default QuickLinks