import { Header } from '@/components/layout/Header'
import { Hero } from '@/components/sections/Hero'
import { Services } from '@/components/sections/Services'
import { Portfolio } from '@/components/sections/Portfolio'
import { Booking } from '@/components/sections/Booking'
import { Testimonials } from '@/components/sections/Testimonials'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/layout/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Booking />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App