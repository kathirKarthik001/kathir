import Contact from '@/components/Contact';
import Gallery from '@/components/Gallery';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import ProjectsSection from '@/components/ProjectsSection';
import { BackgroundBeams } from '@/components/ui/BackgroundBeams';
import About from '@/components/About'
import Skills from '@/components/Skills';
import Footer from '@/components/Footer';

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
        <Contact />    
      </main>
      <Footer/>
    </div>
  );
};


export default Home;