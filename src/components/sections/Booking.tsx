import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { CalendarIcon, Clock, Camera, Video, Plane, Building2, CheckCircle } from 'lucide-react'
import { format } from 'date-fns'

export function Booking() {
  const [selectedDate, setSelectedDate] = useState<Date>()
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    location: '',
    timeSlot: '',
    description: '',
  })

  const services = [
    { id: 'progress', name: 'Progress Photos', icon: Camera, price: 150 },
    { id: 'design', name: 'Design Photoshoot', icon: Building2, price: 300 },
    { id: 'video', name: 'Video Production', icon: Video, price: 500 },
    { id: 'drone', name: 'Drone Services', icon: Plane, price: 200 },
  ]

  const timeSlots = [
    '8:00 AM - 10:00 AM',
    '10:00 AM - 12:00 PM',
    '12:00 PM - 2:00 PM',
    '2:00 PM - 4:00 PM',
    '4:00 PM - 6:00 PM',
  ]

  const projectTypes = [
    'Residential Construction',
    'Commercial Building',
    'Infrastructure Project',
    'Industrial Facility',
    'Renovation/Remodel',
    'Other',
  ]

  const toggleService = (serviceId: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    )
  }

  const calculateTotal = () => {
    return selectedServices.reduce((total, serviceId) => {
      const service = services.find(s => s.id === serviceId)
      return total + (service?.price || 0)
    }, 0)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    alert('Thank you for your booking request! We\'ll contact you within 2 hours to confirm your session.')
    console.log('Booking submitted:', {
      ...formData,
      selectedDate,
      selectedServices,
      total: calculateTotal(),
    })
  }

  return (
    <section id="booking" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Book Your Photography Session
          </h2>
          <p className="text-xl text-gray-600">
            Schedule your construction photography in just a few simple steps
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Service Selection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <div className="bg-blue-100 p-2 rounded-full">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <span>Select Services</span>
              </CardTitle>
              <CardDescription>
                Choose the photography services you need for your project
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {services.map((service) => (
                  <div
                    key={service.id}
                    onClick={() => toggleService(service.id)}
                    className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      selectedServices.includes(service.id)
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <service.icon className="h-6 w-6 text-blue-600" />
                        <div>
                          <h3 className="font-semibold">{service.name}</h3>
                          <p className="text-sm text-gray-600">From ${service.price}</p>
                        </div>
                      </div>
                      {selectedServices.includes(service.id) && (
                        <CheckCircle className="h-6 w-6 text-blue-600" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              {selectedServices.length > 0 && (
                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Estimated Total:</span>
                    <span className="text-2xl font-bold text-blue-600">
                      ${calculateTotal()}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    Final pricing may vary based on project requirements
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Date & Time Selection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <div className="bg-blue-100 p-2 rounded-full">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                <span>Choose Date & Time</span>
              </CardTitle>
              <CardDescription>
                Select your preferred date and time slot
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Date Picker */}
                <div className="space-y-2">
                  <Label>Preferred Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {selectedDate ? format(selectedDate, 'PPP') : 'Pick a date'}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        initialFocus
                        disabled={(date) => date < new Date()}
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Time Slot */}
                <div className="space-y-2">
                  <Label>Time Slot</Label>
                  <Select value={formData.timeSlot} onValueChange={(value) => 
                    setFormData(prev => ({ ...prev, timeSlot: value }))
                  }>
                    <SelectTrigger>
                      <Clock className="mr-2 h-4 w-4" />
                      <SelectValue placeholder="Select time slot" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((slot) => (
                        <SelectItem key={slot} value={slot}>
                          {slot}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Project Details */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <div className="bg-blue-100 p-2 rounded-full">
                  <span className="text-blue-600 font-bold">3</span>
                </div>
                <span>Project Details</span>
              </CardTitle>
              <CardDescription>
                Tell us about your project and contact information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Project Type</Label>
                  <Select value={formData.projectType} onValueChange={(value) => 
                    setFormData(prev => ({ ...prev, projectType: value }))
                  }>
                    <SelectTrigger>
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent>
                      {projectTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="location">Project Location *</Label>
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                    placeholder="City, State"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Project Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  placeholder="Tell us about your project, specific requirements, or any special considerations..."
                  rows={4}
                />
              </div>
            </CardContent>
          </Card>

          {/* Submit Button */}
          <div className="text-center">
            <Button 
              type="submit" 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 px-12 py-4 text-lg"
              disabled={selectedServices.length === 0 || !selectedDate || !formData.name || !formData.email || !formData.phone || !formData.location}
            >
              Submit Booking Request
            </Button>
            <p className="text-sm text-gray-600 mt-2">
              We'll contact you within 2 hours to confirm your booking
            </p>
          </div>
        </form>
      </div>
    </section>
  )
}