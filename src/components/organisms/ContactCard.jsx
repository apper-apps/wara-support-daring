import React from "react"
import ApperIcon from "@/components/ApperIcon"
import Card from "@/components/atoms/Card"
import Button from "@/components/atoms/Button"
import { useNavigate } from "react-router-dom"

const ContactCard = () => {
  const navigate = useNavigate()
  
  return (
    <Card className="p-6 bg-gradient-to-br from-wara-50 to-orange-50 border-wara-200 shadow-xl">
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-2 bg-gradient-to-br from-wara-500 to-wara-600 rounded-lg shadow-lg">
          <ApperIcon name="Headphones" size={24} className="text-white" />
        </div>
        <div>
          <h2 className="font-display font-bold text-xl text-gray-900">
            Persoonlijke hulp
          </h2>
          <p className="text-sm text-gray-600">
            Onze experts helpen je graag
          </p>
        </div>
      </div>
      
      <div className="space-y-4 mb-6">
        <div className="flex items-center space-x-3 text-gray-700">
          <ApperIcon name="Mail" size={18} className="text-wara-600" />
          <div>
            <p className="font-medium">E-mail ondersteuning</p>
            <p className="text-sm text-gray-600">klantenservice@wara.be</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-3 text-gray-700">
          <ApperIcon name="Phone" size={18} className="text-wara-600" />
          <div>
            <p className="font-medium">Telefoon</p>
            <p className="text-sm text-gray-600">+32 2 123 45 67</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-3 text-gray-700">
          <ApperIcon name="Clock" size={18} className="text-wara-600" />
          <div>
            <p className="font-medium">Openingstijden</p>
            <p className="text-sm text-gray-600">Ma-Vr: 9:00 - 17:00</p>
          </div>
        </div>
      </div>
      
      <Button 
        onClick={() => navigate("/contact")}
        className="w-full shadow-lg"
      >
        <ApperIcon name="MessageCircle" size={18} className="mr-2" />
        Contact opnemen
      </Button>
    </Card>
  )
}

export default ContactCard