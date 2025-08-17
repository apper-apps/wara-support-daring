import React, { useState, useEffect } from "react"
import { helpService } from "@/services/api/helpService"
import Loading from "@/components/ui/Loading"
import Error from "@/components/ui/Error"
import ApperIcon from "@/components/ApperIcon"
import Button from "@/components/atoms/Button"
import Input from "@/components/atoms/Input"
import Card from "@/components/atoms/Card"
import { toast } from "react-toastify"

const ContactPage = () => {
  const [contactInfo, setContactInfo] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const [submitting, setSubmitting] = useState(false)
  
  useEffect(() => {
    loadContactInfo()
  }, [])
  
  const loadContactInfo = async () => {
    try {
      setError("")
      setLoading(true)
      const data = await helpService.getContactInfo()
      setContactInfo(data)
    } catch (err) {
      setError("Kon contactgegevens niet laden")
    } finally {
      setLoading(false)
    }
  }
  
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Je bericht is verzonden! We nemen zo snel mogelijk contact op.")
      setFormData({ name: "", email: "", subject: "", message: "" })
      setSubmitting(false)
    }, 1500)
  }
  
  if (loading) return <Loading />
  if (error) return <Error message={error} onRetry={loadContactInfo} />
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-gradient-to-br from-wara-600 via-wara-500 to-orange-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-6 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-2xl">
              <ApperIcon name="MessageCircle" size={40} className="text-white" />
            </div>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
              Neem contact op
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              We staan klaar om je te helpen. Stuur ons een bericht of gebruik een van onze andere contactmogelijkheden.
            </p>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8 bg-gradient-to-r from-white to-gray-50 border-0 shadow-2xl">
              <h2 className="font-display font-bold text-2xl text-gray-900 mb-6">
                Stuur ons een bericht
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Naam *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Je volledige naam"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      E-mailadres *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="je@email.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Onderwerp *
                  </label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Waar gaat je vraag over?"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Bericht *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    placeholder="Beschrijf je vraag of probleem in detail..."
                    required
                    className="flex w-full rounded-lg border-2 border-gray-200 bg-white px-4 py-3 text-base placeholder:text-gray-500 focus:border-wara-500 focus:outline-none focus:ring-2 focus:ring-wara-500/20 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 resize-none"
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={submitting}
                  className="w-full md:w-auto px-8 shadow-2xl"
                >
                  {submitting ? (
                    <>
                      <ApperIcon name="Loader2" size={18} className="mr-2 animate-spin" />
                      Verzenden...
                    </>
                  ) : (
                    <>
                      <ApperIcon name="Send" size={18} className="mr-2" />
                      Bericht verzenden
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="p-6 bg-gradient-to-br from-wara-50 to-orange-50 border-wara-200 shadow-xl">
              <h3 className="font-display font-bold text-xl text-gray-900 mb-6">
                Contactgegevens
              </h3>
              
              {contactInfo && (
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-gradient-to-br from-wara-500 to-wara-600 rounded-lg shadow-lg">
                      <ApperIcon name="Mail" size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">E-mail</p>
                      <p className="text-gray-700">{contactInfo.email}</p>
                      <p className="text-sm text-gray-600 mt-1">{contactInfo.response}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-gradient-to-br from-wara-500 to-wara-600 rounded-lg shadow-lg">
                      <ApperIcon name="Phone" size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Telefoon</p>
                      <p className="text-gray-700">{contactInfo.phone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-gradient-to-br from-wara-500 to-wara-600 rounded-lg shadow-lg">
                      <ApperIcon name="Clock" size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Openingstijden</p>
                      <p className="text-gray-700">{contactInfo.hours}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-gradient-to-br from-wara-500 to-wara-600 rounded-lg shadow-lg">
                      <ApperIcon name="MapPin" size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Adres</p>
                      <p className="text-gray-700">{contactInfo.address}</p>
                    </div>
                  </div>
                </div>
              )}
            </Card>
            
            {/* Languages */}
            {contactInfo && contactInfo.languages && (
              <Card className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 shadow-xl">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg shadow-lg">
                    <ApperIcon name="Languages" size={20} className="text-white" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-gray-900">
                    Talen
                  </h3>
                </div>
                <p className="text-gray-700 mb-3">
                  We bieden ondersteuning in de volgende talen:
                </p>
                <div className="flex flex-wrap gap-2">
                  {contactInfo.languages.map((language) => (
                    <span
                      key={language}
                      className="text-sm bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 px-3 py-1 rounded-full font-medium"
                    >
                      {language}
                    </span>
                  ))}
                </div>
              </Card>
            )}
            
            {/* Quick Links */}
            <Card className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 shadow-xl">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg shadow-lg">
                  <ApperIcon name="Zap" size={20} className="text-white" />
                </div>
                <h3 className="font-display font-bold text-lg text-gray-900">
                  Snelle hulp
                </h3>
              </div>
              <p className="text-gray-700 mb-4">
                Bekijk eerst onze veelgestelde vragen - misschien staat je antwoord er al tussen!
              </p>
              <Button variant="outline" onClick={() => window.location.href = "/"}>
                <ApperIcon name="HelpCircle" size={18} className="mr-2" />
                Naar FAQ
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage