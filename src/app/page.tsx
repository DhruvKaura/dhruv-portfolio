import HeroSection from "../components/HeroSection"
import IntroSection from "../components/IntroSection"
import WorkSection from "../components/WorkSection"
import CapabilitiesSection from "../components/CapabilitiesSection"
import TechStackSection from "../components/TechStackSection"
import CreativeLibrarySection from "../components/CreativeLibrarySection"
import FooterSection from "../components/FooterSection"

export default function Home() {
  return (
    <>
      <HeroSection />
      <IntroSection/>
      <WorkSection />
      <CapabilitiesSection/>
      <TechStackSection/>
      <CreativeLibrarySection/>
      <FooterSection/>
    </>
  )
}