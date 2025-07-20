import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, Play } from 'lucide-react'

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'progress', label: 'Progress Photos' },
    { id: 'design', label: 'Design Shoots' },
    { id: 'video', label: 'Video' },
    { id: 'drone', label: 'Drone' },
  ]

  const projects = [
    {
      id: 1,
      title: 'Downtown Office Complex',
      category: 'design',
      type: 'Commercial',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop',
      description: 'Modern office building architectural photography',
      isVideo: false,
    },
    {
      id: 2,
      title: 'Residential Development Progress',
      category: 'progress',
      type: 'Residential',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=400&fit=crop',
      description: '6-month construction documentation',
      isVideo: false,
    },
    {
      id: 3,
      title: 'Highway Bridge Construction',
      category: 'drone',
      type: 'Infrastructure',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
      description: 'Aerial progress documentation',
      isVideo: false,
    },
    {
      id: 4,
      title: 'Luxury Hotel Showcase',
      category: 'video',
      type: 'Hospitality',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop',
      description: 'Complete project story video',
      isVideo: true,
    },
    {
      id: 5,
      title: 'Industrial Warehouse',
      category: 'design',
      type: 'Industrial',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop',
      description: 'Interior and exterior photography',
      isVideo: false,
    },
    {
      id: 6,
      title: 'Shopping Center Development',
      category: 'progress',
      type: 'Commercial',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop',
      description: 'Monthly progress documentation',
      isVideo: false,
    },
    {
      id: 7,
      title: 'Stadium Construction Timelapse',
      category: 'drone',
      type: 'Sports',
      image: 'https://images.unsplash.com/photo-1459865264687-595d652de67e?w=600&h=400&fit=crop',
      description: 'Aerial timelapse over 18 months',
      isVideo: true,
    },
    {
      id: 8,
      title: 'Modern Apartment Complex',
      category: 'design',
      type: 'Residential',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop',
      description: 'Architectural showcase photography',
      isVideo: false,
    },
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Explore our recent construction photography projects across various industries and project types.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                onClick={() => setActiveFilter(filter.id)}
                className="mb-2"
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <Card 
              key={project.id} 
              className="group overflow-hidden cursor-pointer service-card-hover"
              onClick={() => alert(`Opening ${project.title} gallery. Contact us to see full resolution images!`)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.isVideo ? (
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                        <Play className="h-8 w-8 text-white" />
                      </div>
                    ) : (
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                        <ExternalLink className="h-8 w-8 text-white" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Project Type Badge */}
                <Badge className="absolute top-3 left-3 bg-white/90 text-gray-800">
                  {project.type}
                </Badge>

                {/* Video Indicator */}
                {project.isVideo && (
                  <Badge className="absolute top-3 right-3 bg-red-500 text-white">
                    Video
                  </Badge>
                )}
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600">{project.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => alert('More projects coming soon! Contact us to see our full portfolio.')}
          >
            View More Projects
          </Button>
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gray-50 rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
              <div className="text-gray-600">Construction Companies</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">10K+</div>
              <div className="text-gray-600">Photos Delivered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">4.9★</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}