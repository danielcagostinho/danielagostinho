import NavBar from '@/components/NavBar/NavBar';
import AboutSection from '@/components/AboutSection/AboutSection';
import Projects from '@/components/Projects/Projects';
// import SkillsSection from '@/components/SkillsSection/SkillsSection';
import WorkHistory from '@/components/WorkHistory/WorkHistory';
import WineSection from '@/components/WineSection/WineSection';
import ContactSection from '@/components/ContactSection/ContactSection';
import MaintenancePage from '@/components/MaintenancePage/MaintenancePage';

// Toggle maintenance mode here
const MAINTENANCE_MODE = true;

export default function Home() {
  if (MAINTENANCE_MODE) {
    return <MaintenancePage />;
  }

  return (
    <main className="min-h-screen">
      <NavBar />
      <AboutSection />
      <WorkHistory />
      <Projects />
      {/* <SkillsSection /> */}
      <WineSection />
      <ContactSection />
    </main>
  );
}
