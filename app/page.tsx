import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import Header from '@/components/Header'
import HeroSearch from '@/components/HeroSearch'
import MapSection from '@/components/MapSection'
import HowItWorks from '@/components/HowItWorks'
import TrustSection from '@/components/TrustSection'
import Footer from '@/components/Footer'

export default async function Page() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (user) {
    const { data: workerProfile } = await supabase
      .from('worker_profiles')
      .select('id')
      .eq('user_id', user.id)
      .single()

    const { data: customerProfile } = await supabase
      .from('customer_profiles')
      .select('id')
      .eq('user_id', user.id)
      .single()

    if (workerProfile) {
      redirect('/dashboard/worker')
    } else if (customerProfile) {
      redirect('/dashboard/customer')
    } else {
      redirect('/auth/role-select')
    }
  }

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
