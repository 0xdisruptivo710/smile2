import { ScrollProgress } from "@/components/ScrollProgress";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { AuthorityStrip } from "@/components/AuthorityStrip";
import { Ticker } from "@/components/Ticker";
import { Causes } from "@/components/Causes";
import { OrnamentalDivider } from "@/components/OrnamentalDivider";
import { Investigation } from "@/components/Investigation";
import { Technology } from "@/components/Technology";
import { VideoShowcase } from "@/components/VideoShowcase";
import { EmotionalImpact } from "@/components/EmotionalImpact";
import { Protocols } from "@/components/Protocols";
import { Multidisciplinary } from "@/components/Multidisciplinary";
import { Doctor } from "@/components/Doctor";
import { ScientificProduction } from "@/components/ScientificProduction";
import { ClinicalRecords } from "@/components/ClinicalRecords";
import { Testimonials } from "@/components/Testimonials";
import { Quiz } from "@/components/Quiz";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { FloatingCta } from "@/components/FloatingCta";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main id="conteudo">
        <Hero />
        <AuthorityStrip />
        <Ticker />
        <Causes />
        <OrnamentalDivider />
        <Investigation />
        <Technology />
        <VideoShowcase />
        <EmotionalImpact />
        <Protocols />
        <Multidisciplinary />
        <OrnamentalDivider />
        <Doctor />
        <ScientificProduction />
        <ClinicalRecords />
        <Testimonials />
        <OrnamentalDivider />
        <Quiz />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <FloatingCta />
    </>
  );
}
