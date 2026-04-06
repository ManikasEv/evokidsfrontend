import { useMemo } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Campuses from '../components/Campuses'
import About from '../components/About'
import Philosophy from '../components/Philosophy'
import UnitsOfInquiry from '../components/UnitsOfInquiry'
import Testimonials from '../components/Testimonials'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import { usePhotoManifest } from '../context/PhotoManifestContext'
import { ActivityPhotosProvider } from '../context/ActivityPhotosContext'
import { createActivityPhotoBundle } from '../utils/activityPhotos'

export default function HomePage() {
  const { manifest } = usePhotoManifest()
  const activity = useMemo(() => createActivityPhotoBundle(manifest), [manifest])

  return (
    <>
      <Navbar />
      <Hero />
      <ActivityPhotosProvider value={activity}>
        <Campuses />
        <About />
        <Philosophy />
        <UnitsOfInquiry />
        <Testimonials />
        <ContactForm />
      </ActivityPhotosProvider>
      <Footer />
    </>
  )
}
