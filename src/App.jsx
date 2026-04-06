import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Philosophy from './components/Philosophy'
import KidsInAction from './components/KidsInAction'
import UnitsOfInquiry from './components/UnitsOfInquiry'
import Campuses from './components/Campuses'
import Testimonials from './components/Testimonials'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import MusicPlayer from './components/MusicPlayer'

export default function App() {
  return (
    <div className="font-sans min-h-screen">
      <Navbar />
      <MusicPlayer />
      <Hero />
      <About />
      <Philosophy />
      <KidsInAction />
      <UnitsOfInquiry />
      <Campuses />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  )
}
