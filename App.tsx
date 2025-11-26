import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import { content } from './constants';

function App() {
  return (
    <div className="min-h-screen bg-dark selection:bg-emerald-500/30 text-white font-mono">
      <Navbar />
      <main>
        <Hero data={content} />
        <Skills data={content} />
        <Experience data={content} />
      </main>
      <Contact data={content} />
    </div>
  );
}

export default App;