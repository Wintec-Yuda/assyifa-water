import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProcessStrip from "@/components/ProcessStrip";
import Products from "@/components/Products";
import ServiceOptions from "@/components/ServiceOptions";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import BlogPreview from "@/components/BlogPreview";
import FAQ from "@/components/FAQ";
import ContactMap from "@/components/ContactMap";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProcessStrip />
        <Products />
        <ServiceOptions />
        <WhyUs />
        <Testimonials />
        <BlogPreview />
        <FAQ />
        <ContactMap />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
