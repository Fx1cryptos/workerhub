import Header from '@/components/Header'
import HeroSearch from '@/components/HeroSearch'
import MapSection from '@/components/MapSection'
import HowItWorks from '@/components/HowItWorks'
import TrustSection from '@/components/TrustSection'
import Footer from '@/components/Footer'

export default function Page() {
  return (
    <main className="bg-white">
      <Header />
      <HeroSearch />
      <MapSection />
      <HowItWorks />
      <TrustSection />
      <Footer />
    </main>
  )
}
