import { Code, Lightbulb, Rocket, Heart } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const aboutCards = [
  {
    icon: Code,
    title: "Love for Coding",
    description: "I started coding at a young age and fell in love with creating things through code. Every project is a new adventure!",
    delay: 0
  },
  {
    icon: Lightbulb,
    title: "Creative Problem Solver",
    description: "I enjoy tackling challenges and finding creative solutions. Coding is like solving puzzles, and I love puzzles!",
    delay: 200
  },
  {
    icon: Rocket,
    title: "Always Learning",
    description: "Technology is always evolving, and so am I. I'm constantly learning new skills and exploring new technologies.",
    delay: 400
  },
  {
    icon: Heart,
    title: "Passionate Builder",
    description: "From small apps to full websites, I pour my heart into every project. Seeing my creations come to life is the best feeling!",
    delay: 600
  }
];

export default function About() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards(aboutCards.map(() => true));
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
    <section ref={sectionRef} id="about" className="py-20 bg-white relative overflow-hidden">
      <div className="parallax-bg"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A young developer with big dreams and endless curiosity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {aboutCards.map((card, index) => {
            const Icon = card.icon;
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                className={`about-card transition-all duration-700 ${
                  visibleCards[index]
                    ? 'opacity-100 translate-x-0'
                    : `opacity-0 ${isLeft ? '-translate-x-20' : 'translate-x-20'}`
                }`}
                style={{ transitionDelay: `${card.delay}ms` }}
              >
                <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border-2 border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 h-full">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-600 rounded-xl">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{card.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
