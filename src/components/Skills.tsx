import { useEffect, useRef, useState } from 'react';

const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "TypeScript", level: 75 },
  { name: "React", level: 80 },
  { name: "Tailwind CSS", level: 85 },
  { name: "Git & GitHub", level: 70 },
  { name: "Responsive Design", level: 85 }
];

export default function Skills() {
  const [visibleSkills, setVisibleSkills] = useState<boolean[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSkills(skills.map(() => true));
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
    <section ref={sectionRef} id="skills" className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`skill-badge transition-all duration-700 ${
                  visibleSkills[index]
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-6 rounded-2xl text-center hover:scale-105 transition-all duration-300 hover:shadow-2xl border-2 border-blue-500 hover:border-blue-400 skill-glow cursor-pointer group">
                  <div className="text-3xl font-bold text-white mb-2">{skill.level}%</div>
                  <div className="text-blue-100 font-semibold group-hover:text-white transition-colors duration-300">{skill.name}</div>

                  <div className="mt-4 bg-white bg-opacity-20 rounded-full h-2 overflow-hidden">
                    <div
                      className="h-full bg-white rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: visibleSkills[index] ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 100 + 300}ms`
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
