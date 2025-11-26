import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { Content } from '../types';

interface ContactProps {
  data: Content;
}

const Contact: React.FC<ContactProps> = ({ data }) => {
  return (
    <footer id="contact" className="bg-dark pt-16 pb-10 border-t border-gray-900 font-mono relative overflow-hidden">
        {/* Subtle glow at footer */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-24 bg-emerald-900/20 blur-[80px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="flex flex-col items-center text-center max-w-2xl mx-auto"
        >
           <h2 className="text-3xl font-bold mb-6 text-white">
             {data.personalInfo.contactTitle}
           </h2>
           <p className="text-gray-500 mb-10 font-sans leading-relaxed text-sm">
             {data.personalInfo.contactSubtitle}
           </p>
           
           <div className="flex flex-col md:flex-row gap-8 md:gap-16 justify-center w-full mb-12">
              <a href={`tel:${data.personalInfo.phone}`} className="flex flex-col items-center gap-3 group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 group-hover:border-blue-500 group-hover:text-blue-500 transition-all hover:scale-110">
                  <Phone size={20} />
                </div>
                <p className="text-base font-medium text-gray-400 font-mono dir-ltr group-hover:text-white transition-colors">{data.personalInfo.phone}</p>
              </a>

              <a href={`mailto:${data.personalInfo.email}`} className="flex flex-col items-center gap-3 group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 group-hover:border-emerald-500 group-hover:text-emerald-500 transition-all hover:scale-110">
                  <Mail size={20} />
                </div>
                <p className="text-base font-medium text-gray-400 font-mono group-hover:text-white transition-colors">{data.personalInfo.email}</p>
              </a>
           </div>
        </motion.div>

        <div className="border-t border-white/5 pt-8 text-center">
          <p className="text-gray-700 text-xs font-mono">
            © {new Date().getFullYear()} {data.personalInfo.name}. {data.personalInfo.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;