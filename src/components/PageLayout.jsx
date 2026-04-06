import Navbar from './Navbar'
import Footer from './Footer'

export default function PageLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="pt-[72px]">
        {children}
      </main>
      <Footer />
    </>
  )
}
