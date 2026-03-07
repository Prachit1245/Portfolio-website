
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface Skill {
  name: string;
  level: number;
  color: string;
  icon: string;
}

interface SkillsSectionProps {
  className?: string;
}

const skills: Skill[] = [
  { 
    name: 'Ethical Hacking / Penetration Testing', 
    level: 88, 
    color: 'bg-gradient-to-r from-neon-blue to-neon-purple',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg'
  },
  { 
    name: 'Network Security', 
    level: 85, 
    color: 'bg-gradient-to-r from-neon-blue to-neon-green',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
  },
  { 
    name: 'Web Application Security (OWASP)', 
    level: 82, 
    color: 'bg-gradient-to-r from-neon-green to-neon-blue',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg'
  },
  { 
    name: 'Cryptography & Encryption', 
    level: 80, 
    color: 'bg-gradient-to-r from-neon-purple to-neon-blue',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
  },
  { 
    name: 'Malware Analysis', 
    level: 75, 
    color: 'bg-gradient-to-r from-neon-pink to-neon-purple',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg'
  },
  { 
    name: 'Cloud Security (AWS/Azure)', 
    level: 78, 
    color: 'bg-gradient-to-r from-neon-orange to-neon-pink',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg'
  },
  { 
    name: 'Incident Response & Forensics', 
    level: 76, 
    color: 'bg-gradient-to-r from-neon-pink to-neon-orange',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg'
  },
  { 
    name: 'Secure Coding Practices', 
    level: 79, 
    color: 'bg-gradient-to-r from-neon-purple to-neon-pink',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
  },
];

const SkillsSection = ({ className }: SkillsSectionProps) => {
  const [visibleSkills, setVisibleSkills] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          // Stagger the animations for better performance
          skills.forEach((_, index) => {
            setTimeout(() => {
              setVisibleSkills(prev => [...prev, index]);
            }, index * 100);
          });
          
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <div ref={sectionRef} className={cn("space-y-8 relative", className)}>
      {/* Background tech grid pattern */}
      <div className="absolute inset-0 cyber-grid opacity-10 -z-10"></div>
      
      <h2 className="text-3xl font-bold text-gradient mb-8">Cybersecurity Arsenal</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skill, index) => (
          <div key={index} className="space-y-2 glass-panel p-4 relative overflow-hidden group">
            {/* Background skill icon */}
            <div className="absolute right-0 bottom-0 opacity-10 w-24 h-24 transition-opacity duration-300 group-hover:opacity-20">
              <img 
                src={skill.icon} 
                alt={skill.name} 
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
            
            <div className="flex justify-between">
              <span className="text-lg flex items-center gap-2">
                <img src={skill.icon} alt="" className="w-5 h-5" loading="lazy" />
                {skill.name}
              </span>
              <span className="text-neon-blue">{skill.level}%</span>
            </div>
            <div className="h-2 bg-cyber-light rounded-full overflow-hidden">
              <div 
                className={cn("h-full transition-all duration-1000 ease-out", skill.color)}
                style={{ 
                  width: visibleSkills.includes(index) ? `${skill.level}%` : '0%',
                  transform: 'translateZ(0)' // Force GPU acceleration
                }}
              />
            </div>
          </div>
        ))}
      </div>
      
      <div className="glass-panel p-6 mt-12 relative overflow-hidden">
        <div className="absolute inset-0 z-[-1] opacity-20 bg-cyber-grid"></div>
        <h3 className="text-xl font-semibold text-neon-green mb-4">Currently Learning</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="glass-panel p-3 flex items-center gap-3 relative overflow-hidden group">
            <div className="absolute right-0 bottom-0 opacity-5 w-16 h-16 transition-opacity duration-300 group-hover:opacity-10">
              <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" 
                alt="Zero Trust" 
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
            <div className="w-3 h-3 rounded-full bg-neon-blue animate-pulse"></div>
            <span>Zero Trust Architecture</span>
          </div>
          <div className="glass-panel p-3 flex items-center gap-3 relative overflow-hidden group">
            <div className="absolute right-0 bottom-0 opacity-5 w-16 h-16 transition-opacity duration-300 group-hover:opacity-10">
              <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" 
                alt="AI Security" 
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
            <div className="w-3 h-3 rounded-full bg-neon-purple animate-pulse"></div>
            <span>AI in Cybersecurity</span>
          </div>
          <div className="glass-panel p-3 flex items-center gap-3 relative overflow-hidden group">
            <div className="absolute right-0 bottom-0 opacity-5 w-16 h-16 transition-opacity duration-300 group-hover:opacity-10">
              <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitcoin/bitcoin-original.svg" 
                alt="Blockchain Security" 
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
            <div className="w-3 h-3 rounded-full bg-neon-pink animate-pulse"></div>
            <span>Blockchain Security</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
