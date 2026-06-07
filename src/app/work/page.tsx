import WorkHeroSection from '@/src/components/work/WorkHero'
import FooterSection from '@/src/components/FooterSection'
import ProjectsSection from '@/src/components/work/ProjectsSection'
import CaseStudiesSection from '@/src/components/work/CaseStudiesSection'


export default function WorkPage() {
  return (
    <main className="bg-black dark-cursor-area">
      <WorkHeroSection/>
      <ProjectsSection />
      <CaseStudiesSection />
      <FooterSection />
    </main>
  )
}