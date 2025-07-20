import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Camera, Video, Plane, Building2, CheckCircle, Star } from 'lucide-react'

export function Hero() {
  const services = [
    { icon: Camera, name: 'Progress Photos', description: 'Document every stage' },
    { icon: Building2, name: 'Design Shoots', description: 'Showcase completed work' },
    { icon: Video, name: 'Video Production', description: 'Dynamic project stories' },
    { icon: Plane, name: 'Drone Services', description: 'Aerial perspectives' },
  ]

  const benefits = [
    'Same-day booking available',
    'Professional equipment included',
    'High-resolution digital delivery',
    'Licensed & bonded',
  ]

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Column - Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-primary-200">
                <Star className="h-5 w-5 fill-current" />
                <span className="font-medium">Trusted by 500+ Construction Companies</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Professional Construction Photography
                <span className="text-accent-400 block">Made Simple</span>
              </h1>
              
              <p className="text-xl text-primary-100 leading-relaxed max-w-lg">
                Book progress photos, design shoots, video, and drone services in under 2 minutes. 
                Professional results delivered within 24 hours.
              </p>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent-400 flex-shrink-0" />
                  <span className="text-primary-100">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-accent-500 hover:bg-accent-600 text-white font-semibold px-8 py-4 text-lg"
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Book Your Shoot Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-primary-600 font-semibold px-8 py-4 text-lg"
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Portfolio
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">24hr</div>
                <div className="text-sm text-primary-200">Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-sm text-primary-200">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">4.9★</div>
                <div className="text-sm text-primary-200">Rating</div>
              </div>
            </div>
          </div>

          {/* Right Column - Service Cards */}
          <div className="grid grid-cols-2 gap-4">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="bg-white/10 backdrop-blur-sm border-white/20 p-6 hover:bg-white/15 transition-all duration-300 cursor-pointer group"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <div className="text-center space-y-4">
                  <div className="bg-accent-500 p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center group-hover:scale-110 transition-transform">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-lg">{service.name}</h3>
                    <p className="text-primary-200 text-sm">{service.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  )
}