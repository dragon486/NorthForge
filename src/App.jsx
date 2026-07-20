import Nav from './components/Nav'
import Hero from './components/Hero'
import Stats from './components/Stats'
import HowAIWorks from './components/HowAIWorks'
import Problem from './components/Problem'
import HowItWorks from './components/HowItWorks'
import WhyNorthForge from './components/WhyNorthForge'
import WhoItsFor from './components/WhoItsFor'
import Waitlist from './components/Waitlist'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <div className="noise" aria-hidden="true" />
      <Nav />
      <main>
        <Hero />
        <Stats />
        <HowAIWorks />
        <Problem />
        <HowItWorks />
        <WhyNorthForge />
        <WhoItsFor />
        <Waitlist />
      </main>
      <Footer />
    </>
  )
}
