import Hero from '@/components/Hero';
import GlobalFootprintSection from '@/components/GlobalFootprintSection';
import PrivateEquitySection from '@/components/PrivateEquitySection';
import DivisionsSection from '@/components/DivisionsSection';
import InvestmentHighlightsSection from '@/components/InvestmentHighlightsSection';
import ImpactSection from '@/components/ImpactSection';
import LeadershipTeaserSection from '@/components/LeadershipTeaserSection';

export default function HomePageClient() {
  return (
    <>
      <Hero />
      <GlobalFootprintSection />
      <PrivateEquitySection />
      <DivisionsSection />
      <InvestmentHighlightsSection />
      <ImpactSection />
      <LeadershipTeaserSection />
    </>
  );
}

