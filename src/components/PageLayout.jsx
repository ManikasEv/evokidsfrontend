import Navbar from './Navbar'
import Footer from './Footer'

export default function PageLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="pt-[5.25rem] sm:pt-24 md:pt-28">
        {children}
      </main>
      <Footer />
    </>
  )
}
