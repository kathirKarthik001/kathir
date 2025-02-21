import Contact from '@/components/Contact';
import Gallery from '@/components/Gallery';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import ProjectsSection from '@/components/ProjectsSection';
import { BackgroundBeams } from '@/components/ui/BackgroundBeams';
import About from '@/components/About'
import Skills from '@/components/Skills';

const Home = () => {


  return (
    <div className="min-h-screen">
    <BackgroundBeams />
      <Navbar />
      <main className="container mx-auto px-2 py-8">
        {/* Hero Section */}
        <Hero/>

        <About/>

        <Skills/>

        <ProjectsSection  />


        <Gallery />

        {/* Contact Section */}
        <section>
          <h2 className="text-3xl font-semibold mb-6">Contact Me</h2>
          <Contact />
        </section>
      </main>
      
    </div>
  );
};


export default Home;