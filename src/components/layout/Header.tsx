import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu, Camera, Phone } from 'lucide-react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Book Now', href: '#booking' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-primary-600 p-2 rounded-lg">
              <Camera className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">ConstructPhoto</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => document.getElementById(item.href.slice(1))?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-600 hover:text-primary-600 font-medium transition-colors"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+1234567890"
              className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="font-medium">(123) 456-7890</span>
            </a>
            <Button 
              className="bg-primary-600 hover:bg-primary-700"
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col space-y-6 mt-6">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => {
                      document.getElementById(item.href.slice(1))?.scrollIntoView({ behavior: 'smooth' })
                      setIsOpen(false)
                    }}
                    className="text-lg font-medium text-gray-900 hover:text-primary-600 transition-colors text-left"
                  >
                    {item.name}
                  </button>
                ))}
                <div className="pt-6 border-t border-gray-200">
                  <a
                    href="tel:+1234567890"
                    className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors mb-4"
                  >
                    <Phone className="h-4 w-4" />
                    <span className="font-medium">(123) 456-7890</span>
                  </a>
                  <Button 
                    className="w-full bg-primary-600 hover:bg-primary-700"
                    onClick={() => {
                      document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })
                      setIsOpen(false)
                    }}
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}