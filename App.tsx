
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import { API_BASE_URL, FALLBACK_CONTENT } from './constants';
import { Content } from './types';
import { Loader2 } from 'lucide-react';
import { HashRouter as Router, Route } from 'react-router-dom';

function App() {
  const [data, setData] = useState<Content | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [usingFallback, setUsingFallback] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Attempt to fetch from API with a 2-second timeout to ensure quick fallback
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 2000);

        const response = await fetch(API_BASE_URL, { signal: controller.signal });
        clearTimeout(timeoutId);

        if (!response.ok) {
          throw new Error('Failed to fetch portfolio data');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        console.warn("Backend API not reachable. Switching to fallback data.", err);
        // Silently fail over to fallback data for better UX
        setData(FALLBACK_CONTENT);
        setUsingFallback(true);
      } finally {
        setLoading(false);
      }
      return (
        <Router basename="/Portfolio">
          {/* Routes */}
        </Router>
      );
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-dark flex flex-col items-center justify-center text-white font-mono">
        <Loader2 className="animate-spin mb-4 text-emerald-500" size={48} />
        <p className="text-gray-400 text-sm animate-pulse">Initializing System...</p>
      </div>
    );
  }

  // If even fallback fails (should never happen), show error
  if (!data) {
    return (
      <div className="min-h-screen bg-dark flex flex-col items-center justify-center text-white font-mono p-6 text-center">
        <div className="text-red-500 mb-4 text-4xl">⚠</div>
        <h2 className="text-xl font-bold mb-2">Critical Error</h2>
        <p className="text-gray-400">Data module failed to load.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark selection:bg-emerald-500/30 text-white font-mono">
      <Navbar />
      <main>
        {/* Optional: Indicator for demo mode if backend is down */}
        {usingFallback && (
          <div className="hidden">System Note: Running in Offline Mode</div>
        )}
        <Hero data={data} />
        <Skills data={data} />
        <Experience data={data} />
      </main>
      <Contact data={data} />
    </div>
  );
}

export default App;
