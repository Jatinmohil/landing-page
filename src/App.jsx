import { LanguageProvider } from './i18n/LanguageContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Services from './components/Services'
import Process from './components/Process'
import Investment from './components/Investment'
import Testimonials from './components/Testimonials'
import Gallery from './components/Gallery'
import Transformation from './components/Transformation'
import Reels from './components/Reels'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingActions from './components/FloatingActions'

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-cream font-body">
        <Navbar />
        <main>
          <Hero />
          <Stats />
          <Services />
          <Process />
          <Investment />
          <Testimonials />
          <Gallery />
          <Transformation />
          <Reels />
          <FAQ />
          <Contact />
        </main>
        <Footer />
        <FloatingActions />
      </div>
    </LanguageProvider>
  )
}
