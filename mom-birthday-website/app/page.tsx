import ScrollProgress from '@/components/ui/ScrollProgress'
import BackToTop from '@/components/ui/BackToTop'
import Hero from '@/components/sections/Hero'
import PersonalLetter from '@/components/sections/PersonalLetter'
import ThingsIAdmire from '@/components/sections/ThingsIAdmire'
import ThankYou from '@/components/sections/ThankYou'
import FavoriteMemories from '@/components/sections/FavoriteMemories'
import Timeline from '@/components/sections/Timeline'
import ReasonsILoveYou from '@/components/sections/ReasonsILoveYou'
import FinalMessage from '@/components/sections/FinalMessage'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <main>
        <Hero />
        <PersonalLetter />
        <ThingsIAdmire />
        <ThankYou />
        <FavoriteMemories />
        <Timeline />
        <ReasonsILoveYou />
        <FinalMessage />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
