import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Classes from "@/components/Classes";
import Staff from "@/components/Staff";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="headlight-theme">
      <div className="min-h-screen bg-background">
        <Header />
        <Hero />
        <About />
        <Classes />
        <Staff />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
