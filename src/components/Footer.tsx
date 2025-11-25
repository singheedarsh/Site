import { Code2, Heart } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={footerRef}
      className={`bg-gradient-to-r from-blue-600 to-blue-700 text-white py-12 transition-all duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center gap-2">
            <Code2 className="w-6 h-6" />
            <span className="text-xl font-bold">Darsh Singhee</span>
          </div>

          <p className="text-blue-100 text-center flex items-center gap-2">
            Made with <Heart className="w-4 h-4 fill-current animate-pulse" /> by a 12-year-old coder
          </p>

          <p className="text-blue-200 text-sm">
            {new Date().getFullYear()} - Keep Learning, Keep Building
          </p>
        </div>
      </div>
    </footer>
  );
}
