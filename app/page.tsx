import Hero from "@/components/home/Hero";
import Partners from "@/components/home/Partners";
import DamageFree from "@/components/home/DamageFree";
import Stats from "@/components/home/Stats";
import ServicesSection from "@/components/home/ServicesSection";
import WhyBest from "@/components/home/WhyBest";
import Process from "@/components/home/Process";
import QuoteAndTestimonials from "@/components/home/QuoteAndTestimonials";
import Cases from "@/components/home/Cases";
import FaqSection from "@/components/home/FaqSection";
import BlogPreview from "@/components/home/BlogPreview";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Partners />
      <DamageFree />
      <Stats />
      <ServicesSection />
      <WhyBest />
      <Process />
      <QuoteAndTestimonials />
      <Cases />
      <FaqSection />
      <BlogPreview />
    </>
  );
}
