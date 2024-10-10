// src/app/page.tsx

import EbookPresentation from '@/components/EbookPresentation';
import HeroSection from '../components/HeroSection';
import SectionForWho from '@/components/SectionForWho';
import TestimonialsSection from '@/components/TestemonialsSection';
import WhatYouWillLearn from '@/components/WhatYouWillLearnSection';
import BonusSection from '@/components/BonusSection';
import FinalCallToAction from '@/components/FinalCallToActionSection';
import FAQSection from '@/components/FAQSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <EbookPresentation />
      <SectionForWho />
      <TestimonialsSection />
      <WhatYouWillLearn />
      <BonusSection />
      <FinalCallToAction />
      <FAQSection />
    </main>
  );
}
