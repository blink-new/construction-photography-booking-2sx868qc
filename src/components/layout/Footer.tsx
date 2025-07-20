import { Camera, Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

export function Footer() {
  const services = [
    'Progress Photography',
    'Design Photoshoots',
    'Video Production',
    'Drone Services',
    'Time-lapse Photography',
    'Virtual Tours',
  ]

  const quickLinks = [
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'Book Now', href: '#booking' },
    { name: 'Contact', href: '#contact' },
  ]

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-primary-600 p-2 rounded-lg">
                <Camera className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">ConstructPhoto</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Professional construction photography services for builders, contractors, 
              and developers. Capturing your projects from groundbreaking to completion.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Phone className="h-4 w-4" />
                <span>(123) 456-7890</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Mail className="h-4 w-4" />
                <span>hello@constructphoto.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <MapPin className="h-4 w-4" />
                <span>Greater Metro Area</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <button 
                    onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-300 hover:text-white text-sm transition-colors text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => document.getElementById(link.href.slice(1))?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-300 hover:text-white text-sm transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Connect With Us</h3>
            <div className="space-y-4">
              <p className="text-gray-300 text-sm">
                Follow us for the latest project showcases and photography tips.
              </p>
              
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <button
                    key={index}
                    onClick={() => alert(`Follow us on ${social.label}! Social media links coming soon.`)}
                    aria-label={social.label}
                    className="bg-gray-800 p-2 rounded-lg hover:bg-primary-600 transition-colors"
                  >
                    <social.icon className="h-5 w-5" />
                  </button>
                ))}
              </div>

              <div className="bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Emergency Contact</h4>
                <p className="text-sm text-gray-300 mb-2">
                  Need same-day photography?
                </p>
                <a 
                  href="tel:+1234567890" 
                  className="text-primary-400 hover:text-primary-300 font-medium text-sm"
                >
                  Call (123) 456-7890
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2024 ConstructPhoto. All rights reserved.
            </div>
            
            <div className="flex space-x-6 text-sm text-gray-400">
              <button onClick={() => alert('Privacy Policy coming soon!')} className="hover:text-white transition-colors">Privacy Policy</button>
              <button onClick={() => alert('Terms of Service coming soon!')} className="hover:text-white transition-colors">Terms of Service</button>
              <button onClick={() => alert('Cookie Policy coming soon!')} className="hover:text-white transition-colors">Cookie Policy</button>
            </div>
            
            <div className="text-sm text-gray-400">
              Licensed & Bonded • Drone Certified
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}