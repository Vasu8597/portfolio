import Hero from '@/components/sections/Hero';
import Goals from '@/components/sections/Goals';
import Achievements from '@/components/sections/Achievements';
import FunFacts from '@/components/sections/FunFacts';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';

export const metadata = {
  title: 'Home - Vasu Kaneriya | React JS Developer',
  description: 'Welcome to my portfolio. I\'m a Frontend Developer with 4+ years of experience specializing in React.js, Next.js, and modern web technologies.',
};

export default function Home() {
  return (
    <>
      <Hero />
      <Goals />
      <Achievements />
      <FunFacts />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}
