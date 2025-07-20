import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Camera, Video, Plane, Building2, Clock, Shield, Award, Zap } from 'lucide-react'

export function Services() {
  const services = [
    {
      icon: Camera,
      title: 'Progress Photography',
      description: 'Document every phase of your construction project with high-resolution photos',
      features: ['Weekly/monthly schedules', 'Before & after shots', 'Time-lapse sequences', 'Digital delivery'],
      price: 'From $150',
      popular: false,
    },
    {
      icon: Building2,
      title: 'Design Photoshoots',
      description: 'Showcase your completed projects with professional architectural photography',
      features: ['Interior & exterior shots', 'Professional lighting', 'Multiple angles', 'Edited & enhanced'],
      price: 'From $300',
      popular: true,
    },
    {
      icon: Video,
      title: 'Video Production',
      description: 'Create compelling video content that tells your project story',
      features: ['4K video recording', 'Professional editing', 'Drone integration', 'Custom music'],
      price: 'From $500',
      popular: false,
    },
    {
      icon: Plane,
      title: 'Drone Services',
      description: 'Capture stunning aerial perspectives of your construction sites',
      features: ['Licensed pilot', '4K aerial footage', 'Site mapping', 'Progress tracking'],
      price: 'From $200',
      popular: false,
    },
  ]

  const features = [
    {
      icon: Clock,
      title: 'Fast Turnaround',
      description: '24-48 hour delivery on all standard projects',
    },
    {
      icon: Shield,
      title: 'Licensed & Bonded',
      description: 'Professional credentials and bonding for your peace of mind',
    },
    {
      icon: Award,
      title: 'Professional Quality',
      description: 'Award-winning photography with industry expertise',
    },
    {
      icon: Zap,
      title: 'Easy Booking',
      description: 'Schedule your shoot in under 2 minutes online',
    },
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Professional Construction Photography Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From progress documentation to stunning showcase photography, we provide comprehensive 
            visual solutions for construction professionals.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`relative service-card-hover ${service.popular ? 'ring-2 ring-primary-500' : ''}`}
            >
              {service.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary-600 text-white">
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="bg-primary-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <service.icon className="h-8 w-8 text-primary-600" />
                </div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="text-center">
                  <span className="text-2xl font-bold text-primary-600">{service.price}</span>
                  <span className="text-gray-500 text-sm block">per session</span>
                </div>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full mt-4" 
                  variant={service.popular ? "default" : "outline"}
                  onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="bg-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-md">
                <feature.icon className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 mb-6">
              Book your construction photography session today and get professional results delivered within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-primary-600 hover:bg-primary-700"
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Schedule a Shoot
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Custom Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}