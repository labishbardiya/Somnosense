import HeroSection from '@/components/HeroSection';
import AboutBruxismSection from '@/components/AboutBruxismSection';
import OurSolutionSection from '@/components/OurSolutionSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import ForResearchersSection from '@/components/ForResearchersSection';
import ContactSection from '@/components/ContactSection';

// Prevent search engines from indexing the home page that contains forms
export const metadata = {
  robots: 'noindex, nofollow',
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutBruxismSection />
      <OurSolutionSection />
      <HowItWorksSection />
      <ForResearchersSection />
      <ContactSection />
    </>
  );
}

