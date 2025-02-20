import Contact from '@/components/Contact';
import Gallery from '@/components/Gallery';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import ProjectsSection from '@/components/ProjectsSection';
import { BackgroundBeams } from '@/components/ui/BackgroundBeams';
import About from '@/components/About'
import Skills from '@/components/Skills';

const Home = () => {
  // Sample data for projects
  const projects = [
    {
      title: 'Project 1',
      description: 'This is a description of project 1.',
      imageUrl: '/images/project1.jpg',
      projectUrl: '#',
    },
    {
      title: 'Project 2',
      description: 'This is a description of project 2.',
      imageUrl: '/images/project2.jpg',
      projectUrl: '#',
    },
  ];

  // Sample data for work experiences
  const experiences = [
    {
      company: 'Company A',
      role: 'FullStack Developer',
      duration: 'Jan 2021 - Present',
      description: 'Worked on building scalable web applications using modern technologies.',
    },
    {
      company: 'Company B',
      role: 'Frontend Developer',
      duration: 'Jun 2019 - Dec 2020',
      description: 'Developed user-friendly interfaces and collaborated with backend teams.',
    },
  ];

  // Sample data for gallery
  const galleryImages = [
    '/images/gallery1.jpg',
    '/images/gallery2.jpg',
    '/images/gallery3.jpg',
  ];

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


        <Gallery images={galleryImages} />

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