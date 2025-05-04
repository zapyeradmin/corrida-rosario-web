
import { Toaster } from '@/components/ui/sonner';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Course from '@/components/Course';
import Sponsors from '@/components/Sponsors';
import Registration from '@/components/Registration';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import FloatingButton from '@/components/FloatingButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Toaster position="top-center" />
      <Navbar />
      <Hero />
      <About />
      <Course />
      <Sponsors />
      <Registration />
      <Footer />
      <FloatingButton />
      <ScrollReveal />
    </div>
  );
};

export default Index;
