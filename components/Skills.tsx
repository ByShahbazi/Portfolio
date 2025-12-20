
import React from 'react';
import { motion } from 'framer-motion';
import { Content } from '../types';

interface SkillsProps {
  data: Content;
}

const Skills: React.FC<SkillsProps> = ({ data }) => {
  return (
    <section id="skills" className="py-24 bg-dark relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white font-mono">
             {data.skillsTitle}
          </h2>
          <div className="w-16 h-1 bg-emerald-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {data.skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              whileHover={{ y: -5 }}
              className="glass p-6 rounded-xl flex flex-col items-center justify-center gap-4 transition-all duration-300 group cursor-default hover:bg-white/5 hover:border-emerald-500/30"
            >
              <div className="w-16 h-16 flex items-center justify-center transition-all">
                {/* Icons are grayscale by default, colored on group hover */}
                <i className={`${skill.iconClass} text-5xl filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 ease-out`}></i>
              </div>
              <span className="font-mono text-gray-500 group-hover:text-emerald-300 text-sm transition-colors">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
