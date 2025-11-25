import { Calculator, Scissors, User, Key, ExternalLink } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const projects = [
  {
    icon: Calculator,
    title: "Calculator App",
    description: "A fully functional calculator with a modern UI. Performs basic arithmetic operations with smooth animations.",
    gradient: "from-blue-500 to-cyan-500",
    delay: 0
  },
  {
    icon: Scissors,
    title: "Rock Paper Scissors",
    description: "Interactive game with score tracking and animations. Play against the computer and see who wins!",
    gradient: "from-purple-500 to-pink-500",
    delay: 200
  },
  {
    icon: User,
    title: "Portfolio Website",
    description: "This very website! Built with React, TypeScript, and Tailwind CSS. Features smooth animations and responsive design.",
    gradient: "from-green-500 to-teal-500",
    delay: 400
  },
  {
    icon: Key,
    title: "Password Generator",
    description: "Secure password generator with customizable options. Create strong passwords with just one click!",
    gradient: "from-orange-500 to-red-500",
    delay: 600
  }
];

export default function Projects() {
  const [visibleProjects, setVisibleProjects] = useState<boolean[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleProjects(projects.map(() => true));
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Check out some of the cool things I've built
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <div
                key={index}
                className={`project-card transition-all duration-700 ${
                  visibleProjects[index]
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-95'
                }`}
                style={{ transitionDelay: `${project.delay}ms` }}
              >
                <div className="bg-white rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-blue-300 transition-all duration-300 h-full group hover-tilt">
                  <div className={`p-6 bg-gradient-to-r ${project.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                    <Icon className="w-12 h-12 text-white relative z-10" />
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <button className="flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all duration-300">
                      View Project
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="project-glow"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
