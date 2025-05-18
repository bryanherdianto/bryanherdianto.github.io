import Navbar from '../../components/Navbar'; // Adjust path as needed
import Footer from '../../components/Footer'; // Adjust path as needed

// Sample project data (replace with your actual data source or fetching logic)
const projectsData = {
  'neural-network-project': {
    title: 'Neural Network Project',
    imageUrl: '/traffic.jpeg',
    fullDescription: 'This is a detailed description of the Neural Network project, explaining the architecture, dataset, training process, and results. We implemented a convolutional neural network (CNN) for image classification, achieving an accuracy of X% on the Y dataset. Key technologies used include Python, TensorFlow, and Keras.',
    techStack: ['Python', 'TensorFlow', 'Keras', 'NumPy', 'Matplotlib'],
    skillsUsed: ['Deep Learning', 'Image Classification', 'Model Training', 'Data Preprocessing'],
    githubUrl: 'https://github.com/yourusername/neural-network-repo',
    liveDemoUrl: '#' // or actual live demo URL
  },
  'ecommerce-website': {
    title: 'E-commerce Website',
    imageUrl: '/traffic.jpeg',
    fullDescription: 'A comprehensive overview of the E-commerce website project. This project involved building a fully responsive online store using React for the frontend and Node.js with Express for the backend. Features include user authentication, product listings, shopping cart functionality, and a checkout process. Stripe was integrated for payment processing.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe API', 'Tailwind CSS'],
    skillsUsed: ['Full-stack Development', 'API Integration', 'User Authentication', 'Payment Processing', 'Responsive Design'],
    githubUrl: 'https://github.com/yourusername/ecommerce-repo',
    liveDemoUrl: '#'
  },
  'data-visualization-dashboard': {
    title: 'Data Visualization Dashboard',
    imageUrl: '/traffic.jpeg',
    fullDescription: 'Detailed insights into the Data Visualization Dashboard project. This interactive dashboard was built using Tableau and Python (with libraries like Pandas and Matplotlib) to analyze and present complex datasets. It allows users to explore trends, patterns, and key metrics through various charts and graphs.',
    techStack: ['Tableau', 'Python', 'Pandas', 'Matplotlib', 'SQL'],
    skillsUsed: ['Data Visualization', 'Data Analysis', 'Dashboard Design', 'Data Storytelling'],
    githubUrl: 'https://github.com/yourusername/data-viz-repo',
    liveDemoUrl: '#'
  }
  // Add more projects here
};

export default async function ProjectDetailPage({ params }) {
  const { slug } = params;
  const project = projectsData[slug];

  if (!project) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center">
        <Navbar />
        <div className="py-20 px-6 text-center">
          <h1 className="text-4xl font-bold">Project Not Found</h1>
          <p className="text-xl mt-4">Sorry, we couldn\'t find the project you\'re looking for.</p>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <section className="py-12 md:py-20 px-4 md:px-6 flex-grow">
        <div className="max-w-6xl mx-auto rounded-lg overflow-hidden md:p-8">
          {/* 1. A picture of the project */}
          <img src={project.imageUrl} alt={project.title} className="w-full mt-8 h-auto md:h-96 object-cover rounded-lg mb-6 md:mb-8" />

          <div className="px-6 pb-6 md:px-0 md:pb-0">
            {/* 2. The title of the project */}
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">{project.title}</h1>

            {/* 3. The description of the project */}
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 whitespace-pre-line">
              {project.fullDescription}
            </p>

            {/* 4. The tech stack used for this project */}
            {project.techStack && project.techStack.length > 0 && (
              <div className="mb-6">
                <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-3">Tech Stack</h2>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <span key={index} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* 5. The skills used for this project */}
            {project.skillsUsed && project.skillsUsed.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-3">Skills Utilized</h2>
                <div className="flex flex-wrap gap-2">
                  {project.skillsUsed.map((skill, index) => (
                    <span key={index} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* 6. The github and website icon */}
            <div className="flex flex-wrap gap-4 items-center">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gray-800 text-white py-2 px-5 rounded-lg hover:bg-gray-700 transition duration-300 font-medium text-sm md:text-base"
              >
                <img src="/github.png" alt="GitHub" className="w-5 h-5 mr-2 filter invert" />
                View on GitHub
              </a>
              {project.liveDemoUrl && project.liveDemoUrl !== '#' && (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-blue-600 text-white py-2 px-5 rounded-lg hover:bg-blue-500 transition duration-300 font-medium text-sm md:text-base"
                >
                  <img src="/globe.svg" alt="Live Demo" className="w-5 h-5 mr-2 filter invert" />
                  Live Demo / Website
                </a>
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

// Optional: If you have a fixed number of projects and want to pre-render them at build time
// export async function generateStaticParams() {
//   return Object.keys(projectsData).map((slug) => ({
//     slug: slug,
//   }));
// }
