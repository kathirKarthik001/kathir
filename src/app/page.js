import ContactForm from '@/components/ContactForm';
import Gallery from '@/components/Gallery';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import ProjectCard from '@/components/ProjectCard';
import { BackgroundBeams } from '@/components/ui/BackgroundBeams';
import About from '@/components/About'

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
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <Hero/>

        <About/>

        {/* Work Experience Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Work Experience</h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold">{exp.role}</h3>
                <p className="text-gray-400">{exp.company} | {exp.duration}</p>
                <p className="mt-2 text-gray-300">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </section>

        {/* Gallery Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Gallery</h2>
          <Gallery images={galleryImages} />
        </section>

        {/* Contact Section */}
        <section>
          <h2 className="text-3xl font-semibold mb-6">Contact Me</h2>
          <ContactForm />
        </section>
      </main>
      
    </div>
  );
};


export default Home;