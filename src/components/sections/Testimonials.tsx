import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Star, Quote } from 'lucide-react'

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      title: 'Project Manager',
      company: 'Metro Construction',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'ConstructPhoto made documenting our 18-month project incredibly easy. The booking process was seamless, and the quality of photos exceeded our expectations. Their drone footage really helped us showcase the scale of our work.',
    },
    {
      id: 2,
      name: 'Mike Rodriguez',
      title: 'Site Supervisor',
      company: 'Skyline Builders',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'We needed same-day photography for a client presentation, and they delivered perfectly. Professional, reliable, and the photos were delivered within hours. This is now our go-to photography service.',
    },
    {
      id: 3,
      name: 'Jennifer Chen',
      title: 'Marketing Director',
      company: 'Urban Development Co.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'The design photoshoot for our luxury residential project was outstanding. They captured every detail beautifully and helped us create marketing materials that really stand out. Highly recommend!',
    },
    {
      id: 4,
      name: 'David Thompson',
      title: 'General Contractor',
      company: 'Thompson Construction',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'Their progress photography service has been invaluable for keeping our clients informed and documenting our work for insurance purposes. The scheduling system makes it so easy to book regular shoots.',
    },
  ]

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '4.9/5', label: 'Average Rating' },
    { number: '24hr', label: 'Average Delivery' },
    { number: '98%', label: 'Client Retention' },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">
            Trusted by Leading Construction Companies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what our clients say about our photography services and why they choose us 
            for their construction documentation needs.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="relative">
              <CardContent className="p-8">
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                <div className="space-y-4">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">
                        {testimonial.title}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}