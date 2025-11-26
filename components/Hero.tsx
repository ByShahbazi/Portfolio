import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Content } from '../types';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  data: Content;
}

// Custom hook for typing effect (cycling roles)
const useTypewriterCycle = (words: string[]) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  // Blinking cursor effect
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  // Typing logic
  useEffect(() => {
    if (index >= words.length) {
      setIndex(0);
      return;
    }

    const currentWord = words[index];
    
    // Typing speed
    const typeSpeed = 100;
    const deleteSpeed = 50;
    const pauseTime = 2000;

    if (subIndex === currentWord.length + 1 && !reverse) {
      // Finished typing word, wait then delete
      const timeout = setTimeout(() => {
        setReverse(true);
      }, pauseTime);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      // Finished deleting, move to next word
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  return { text: words[index].substring(0, subIndex), blink };
};

// Custom hook for typing slogan (single pass)
const useTypewriterSingle = (text: string, startDelay: number = 0) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(timeout);
  }, [startDelay]);

  useEffect(() => {
    if (!started) return;
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50); // Speed for slogan
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, started]);

  return displayText;
};

const Hero: React.FC<HeroProps> = ({ data }) => {
  const { text: typedRole, blink: roleBlink } = useTypewriterCycle(data.personalInfo.roles);
  
  // Construct slogan text for animation
  const sloganFull = `${data.personalInfo.sloganPart1} ${data.personalInfo.sloganPart2} ${data.personalInfo.sloganHighlight}`;
  const typedSlogan = useTypewriterSingle(sloganFull, 1000); // Start after 1s

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden bg-dark">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-emerald-900/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[100px]"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
      </div>
      
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-items-center">
        
        {/* Image Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="order-1 flex justify-center relative"
        >
          <div className="relative w-64 h-64 md:w-[400px] md:h-[400px] flex items-center justify-center">
            {/* The Image with Fade Mask */}
            <div className="w-full h-full relative z-10 image-fade-mask">
              <img 
                src="./profile.jpg" 
                alt={data.personalInfo.name} 
                className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700 ease-in-out"
              />
            </div>
            {/* Glow behind image */}
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/20 to-transparent blur-2xl rounded-full transform translate-y-10"></div>
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center md:text-start order-2 z-10 flex flex-col items-center md:items-start"
        >
          {/* Main Name */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-white font-mono tracking-tighter">
            {data.personalInfo.name}
          </h1>
          
          {/* Roles - Typing Animation */}
          <div className="text-xl md:text-2xl text-emerald-400 font-mono h-8 mb-6">
             <span>I am a </span>
             <span>{typedRole}</span>
             <span className={`${roleBlink ? 'opacity-100' : 'opacity-0'} text-white`}>|</span>
          </div>

          {/* Slogan */}
          <div className="text-lg md:text-xl font-light text-gray-400 font-mono mt-4 relative">
              <p>
                  {/* Render typed slogan but highlight 'Tester' if it appears */}
                  {typedSlogan.split(data.personalInfo.sloganHighlight).map((part, i, arr) => (
                      <React.Fragment key={i}>
                          {part}
                          {i < arr.length - 1 && (
                              <span className="text-emerald-400 font-bold text-glow">
                                  {data.personalInfo.sloganHighlight}
                              </span>
                          )}
                      </React.Fragment>
                  ))}
                  {/* Cursor for slogan */}
                   <span className="animate-pulse text-emerald-500">_</span>
              </p>
          </div>

        </motion.div>

      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-700">
        <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        >
            <ArrowDown size={20} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;