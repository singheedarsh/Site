import { ArrowDown, Code2, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-blue-50 to-blue-100">
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
        <div className="shape shape-5"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-30 animate-pulse"></div>
                <Code2 className="w-24 h-24 text-blue-600 relative z-10 animate-float" />
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900">
              Hi, I'm <span className="text-gradient">Darsh</span>
            </h1>

            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-blue-600">
                A Young Coder
              </h2>
            </div>

            <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                12-year-old student passionate about coding, building websites, and creating awesome apps.
                I love turning ideas into reality with code!
              </p>
            </div>

            <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex gap-4 justify-center">
                <a
                  href="#projects"
                  className="glow-button px-8 py-4 bg-blue-600 text-white rounded-full font-semibold text-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-2"
                >
                  <Sparkles className="w-5 h-5" />
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold text-lg border-2 border-blue-600 hover:bg-blue-50 transition-all duration-300 hover:scale-105"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-8 h-8 text-blue-600" />
      </div>
    </section>
  );
}
