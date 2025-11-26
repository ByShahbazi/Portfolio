import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, CheckCircle2 } from 'lucide-react';
import { Content } from '../types';

interface ExperienceProps {
  data: Content;
}

const Experience: React.FC<ExperienceProps> = ({ data }) => {
  return (
    <section id="experience" className="py-24 relative bg-dark overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-blue-900/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white font-mono">
            {data.experienceTitle}
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Work Experience */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="p-3 bg-white/5 rounded-xl text-blue-400 border border-white/10">
                <Briefcase size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white font-mono">{data.workTitle}</h3>
            </div>
            
            <div className="space-y-12 border-l-2 border-gray-800 pl-8 ml-4 relative">
              {data.experiences.map((exp, index) => (
                <motion.div 
                  key={exp.id}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute top-0 w-4 h-4 rounded-full bg-dark border-2 border-blue-500 z-10 shadow-[0_0_10px_rgba(59,130,246,0.5)] -left-[41px]"></div>
                  
                  <div className="glass p-6 rounded-2xl hover:border-blue-500/30 transition-all hover:bg-white/5">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
                       <div>
                          <h4 className="text-xl font-bold text-blue-400 font-mono">{exp.role}</h4>
                          <span className="font-semibold text-lg text-white block mt-1">{exp.company}</span>
                       </div>
                       <span className="flex items-center gap-1.5 bg-blue-500/10 text-blue-300 px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap border border-blue-500/20 font-mono">
                          <Calendar size={12} />
                          {exp.period}
                       </span>
                    </div>
                    
                    {exp.description && <p className="text-gray-300 mb-4 text-sm leading-relaxed">{exp.description}</p>}
                    
                    <ul className="space-y-3 mt-4">
                      {exp.tasks.map((task, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-400 group">
                          <CheckCircle2 size={16} className="text-emerald-500 mt-1 min-w-[16px] group-hover:text-emerald-400 transition-colors opacity-80" />
                          <span className="leading-relaxed">{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education & About */}
          <div className="flex flex-col gap-12">
            <div>
              <div className="flex items-center gap-4 mb-10">
                <div className="p-3 bg-white/5 rounded-xl text-emerald-400 border border-white/10">
                  <GraduationCap size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white font-mono">{data.educationTitle}</h3>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-2xl relative overflow-hidden group hover:border-emerald-500/30 transition-all"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-emerald-500 to-emerald-800"></div>
                
                <h4 className="text-xl font-bold text-emerald-400 font-mono">{data.education.degree}</h4>
                <p className="text-white font-semibold mt-2 text-lg">{data.education.university}</p>
                <div className="flex items-center gap-2 mt-3 text-sm text-gray-400 bg-white/5 w-fit px-3 py-1 rounded-lg font-mono">
                   <Calendar size={14} />
                   <span>{data.education.year}</span>
                </div>
                <p className="text-gray-400 mt-4 leading-relaxed font-mono text-sm">
                  {data.education.description}
                </p>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-2xl border border-gray-800"
            >
               <h3 className="text-xl font-bold mb-6 text-white border-b border-gray-800 pb-4 font-mono">{data.personalInfo.aboutTitle}</h3>
               <p className="text-gray-300 leading-8 text-justify font-light opacity-90">
                 {data.personalInfo.about}
               </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;