import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Campuses from '../components/Campuses'
import About from '../components/About'
import Philosophy from '../components/Philosophy'
import UnitsOfInquiry from '../components/UnitsOfInquiry'
import Testimonials from '../components/Testimonials'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Campuses />
      <About />
      <Philosophy />
      <UnitsOfInquiry />
      <Testimonials />
      <ContactForm />
      <Footer />
    </>
  )
}
