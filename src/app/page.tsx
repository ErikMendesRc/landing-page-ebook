import EbookPresentation from '@/components/EbookPresentation';
import HeroSection from '../components/HeroSection';
import SectionForWho from '@/components/SectionForWho';
import TestimonialsSection from '@/components/TestemonialsSection';
import WhatYouWillLearn from '@/components/WhatYouWillLearnSection';
import BonusSection from '@/components/BonusSection';
import FinalCallToAction from '@/components/FinalCallToActionSection';
import FAQSection from '@/components/FAQSection';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

// Exportando o objeto metadata para SEO e social
export const metadata = {
  title: "Iniciando Seu Primeiro Negócio - O Guia Definitivo para Empreendedores Iniciantes",
  description: "Aprenda como transformar suas ideias em um negócio de sucesso com o e-book 'Iniciando Seu Primeiro Negócio'. Um guia completo para novos empreendedores!",
  keywords: "empreendedorismo, guia para empreendedores, como iniciar um negócio, e-book empreendedor, negócios, marketing, plano de negócios, gestão, vendas",
  openGraph: {
    title: "Iniciando Seu Primeiro Negócio - O Guia Definitivo",
    description: "Transforme suas ideias em um negócio de sucesso com nosso e-book prático para empreendedores iniciantes.",
    url: "https://www.masterempreendedor.com.br",
    siteName: "Guia do Empreendedor",
    images: [
      {
        url: "https://www.masterempreendedor.com.br/images/mockup.png",
        width: 800,
        height: 600,
        alt: "Como abrir uma empresa",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Iniciando Seu Primeiro Negócio - O Guia Definitivo",
    description: "O guia essencial para novos empreendedores tirarem suas ideias do papel.",
    images: ["https://www.masterempreendedor.com.br/images/mockup.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

// Exportando o viewport separado
export const generateViewport = () => ({
  width: "device-width",
  initialScale: 1,
});

export default function Home() {
  return (
    <>
      {/* Corpo da página */}
      <main>
        <Header />
        <HeroSection />
        <EbookPresentation />
        <SectionForWho />
        <TestimonialsSection />
        <WhatYouWillLearn />
        <BonusSection />
        <FinalCallToAction />
        <FAQSection />
        <Footer />
      </main>
    </>
  );
}