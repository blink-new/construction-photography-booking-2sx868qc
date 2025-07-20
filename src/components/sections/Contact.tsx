import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  })

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '(123) 456-7890',
      description: 'Call us for immediate assistance',
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'hello@constructphoto.com',
      description: 'Send us your project details',
    },
    {
      icon: MapPin,
      title: 'Service Area',
      details: 'Greater Metro Area',
      description: 'We travel to your location',
    },
    {
      icon: Clock,
      title: 'Response Time',
      details: 'Within 2 hours',
      description: 'Quick turnaround guaranteed',
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    alert('Thank you for your message! We\'ll get back to you within 2 hours.')
    console.log('Contact form submitted:', formData)
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: '',
    })
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to capture your construction project? Contact us today for a free consultation 
            and custom quote.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MessageCircle className="h-6 w-6 text-blue-600" />
                <span>Send us a Message</span>
              </CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you within 2 hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contact-name">Name *</Label>
                    <Input 
                      id="contact-name" 
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-email">Email *</Label>
                    <Input 
                      id="contact-email" 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      required 
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contact-phone">Phone</Label>
                    <Input 
                      id="contact-phone" 
                      type="tel" 
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-company">Company</Label>
                    <Input 
                      id="contact-company" 
                      value={formData.company}
                      onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="contact-subject">Subject *</Label>
                  <Input 
                    id="contact-subject" 
                    placeholder="e.g., Quote Request for Office Building Photography" 
                    value={formData.subject}
                    onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="contact-message">Message *</Label>
                  <Textarea 
                    id="contact-message" 
                    placeholder="Tell us about your project, timeline, and any specific requirements..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    required 
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  disabled={!formData.name || !formData.email || !formData.subject || !formData.message}
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h3>
              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                      <info.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{info.title}</h4>
                      <p className="text-lg text-blue-600 font-medium">{info.details}</p>
                      <p className="text-gray-600 text-sm">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Emergency Contact */}
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Need Urgent Photography?
                </h4>
                <p className="text-gray-600 mb-4">
                  For same-day or emergency photography needs, call us directly. 
                  We offer expedited services for time-sensitive projects.
                </p>
                <Button 
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={() => window.open('tel:+1234567890', '_self')}
                >
                  Call Now: (123) 456-7890
                </Button>
              </CardContent>
            </Card>

            {/* Service Areas */}
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-900 mb-4">
                  Service Areas
                </h4>
                <div className="space-y-2 text-gray-600">
                  <p>• Downtown Metro Area</p>
                  <p>• Suburban Construction Sites</p>
                  <p>• Industrial Districts</p>
                  <p>• Surrounding Counties</p>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  Travel fees may apply for locations beyond 50 miles
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                How quickly can you schedule a shoot?
              </h4>
              <p className="text-gray-600 text-sm">
                We typically can schedule within 24-48 hours. For urgent needs, 
                same-day service is available with additional fees.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                What's included in the photography package?
              </h4>
              <p className="text-gray-600 text-sm">
                All packages include professional photography, basic editing, 
                high-resolution digital files, and online gallery access.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Do you provide drone services?
              </h4>
              <p className="text-gray-600 text-sm">
                Yes, we have licensed drone pilots and can provide aerial photography 
                and videography for construction sites.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                What's your cancellation policy?
              </h4>
              <p className="text-gray-600 text-sm">
                We require 24-hour notice for cancellations. Weather-related 
                cancellations can be rescheduled at no additional cost.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}