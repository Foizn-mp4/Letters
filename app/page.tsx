"use client";

import MusicPlayer from '@/components/MusicPlayer';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import PersonalLetters from './letters';

export default function Home() {
  const [currentPath, setCurrentPath] = useState<string>('');

  // Parallax Values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const textMoveX = useTransform(springX, [-500, 500], [-15, 15]);
  const textMoveY = useTransform(springY, [-500, 500], [-15, 15]);

  useEffect(() => {
    const handleHashChange = () => setCurrentPath(window.location.hash || '#/');
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <main className="min-h-screen text-white selection:bg-[#BB8ED0]/30 relative overflow-hidden">
      <MusicPlayer />

      <AnimatePresence mode="wait">
        {/* 1. LETTERS SECTION */}
        {currentPath === '#/Letters' ? (
          <motion.div
            key="letters"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.5 }}
          >
            <PersonalLetters />
          </motion.div>
        ) : currentPath === '#/about' ? (
          /* 2. ABOUT SECTION */
          <motion.div
            key="about"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="max-w-4xl mx-auto px-6 py-32"
          >
            <div className="space-y-12">
              <div className="space-y-4">
                <h2 className="text-sm uppercase tracking-[0.4em] text-[#BB8ED0] font-bold">The Story</h2>
                <h1 className="text-5xl md:text-7xl font-black tracking-tight">Crafted with Love.</h1>
              </div>
              <div className="grid md:grid-cols-2 gap-12 text-zinc-400 leading-relaxed text-lg">
                <p>This space wasn't just built with code; it was built with memories. A digital sanctuary for the things that truly matter.</p>
                <p>Every detail is a reflection of the care I have for you. It is my way of saying that our history is worth protecting.</p>
              </div>
              <div className="flex gap-8">
                <a href="#/" className="text-[#3291B6] hover:text-white transition-colors font-bold tracking-widest uppercase text-xs">← Home</a>
                <a href="#/contact" className="text-white/50 hover:text-white transition-colors font-bold tracking-widest uppercase text-xs">Find Me Online →</a>
              </div>
            </div>
          </motion.div>
        ) : currentPath === '#/contact' ? (
          /* 3. CONTACT SECTION */
          <motion.div
            key="contact"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            className="max-w-4xl mx-auto px-6 py-32 text-center"
          >
            <div className="space-y-12">
              <div className="space-y-4">
                <h2 className="text-sm uppercase tracking-[0.4em] text-[#E0A8A8] font-bold">Connect</h2>
                <h1 className="text-5xl md:text-6xl font-black tracking-tight">Find Me Elsewhere.</h1>
                <p className="text-zinc-500 text-lg">Reach out or follow my journey on these platforms.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                <a href="https://instagram.com/dusk_ditty" target="_blank" rel="noopener noreferrer" className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-[#E0A8A8]/50 transition-all overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#E0A8A8]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10 space-y-4">
                    <div className="text-[#E0A8A8] flex justify-center">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                    </div>
                    <h3 className="font-bold text-xl">Instagram</h3>
                    <p className="text-xs text-zinc-500 uppercase tracking-widest">Follow me</p>
                  </div>
                </a>
                <a href="https://discord.com/users/783960206244708353" target="_blank" rel="noopener noreferrer" className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-[#BB8ED0]/50 transition-all overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#BB8ED0]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10 space-y-4">
                    <div className="text-[#BB8ED0] flex justify-center">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.086 2.157 2.419c0 1.334-.947 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.086 2.157 2.419c0 1.334-.946 2.419-2.157 2.419z"/></svg>
                    </div>
                    <h3 className="font-bold text-xl">Discord</h3>
                    <p className="text-xs text-zinc-500 uppercase tracking-widest">Let's chat</p>
                  </div>
                </a>
                <a href="https://github.com/foizn-mp4" target="_blank" rel="noopener noreferrer" className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-[#3291B6]/50 transition-all overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#3291B6]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10 space-y-4">
                    <div className="text-[#3291B6] flex justify-center">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                    </div>
                    <h3 className="font-bold text-xl">GitHub</h3>
                    <p className="text-xs text-zinc-500 uppercase tracking-widest">My code</p>
                  </div>
                </a>
              </div>

              <div className="pt-12">
                <a href="#/" className="text-zinc-500 hover:text-white transition-colors font-bold tracking-widest uppercase text-xs">← Back to Home</a>
              </div>
            </div>
          </motion.div>
        ) : (
          /* 4. HOME SECTION */
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative flex flex-col items-center justify-center min-h-screen px-6 pt-20 text-center"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#BB8ED0]/10 blur-[120px] rounded-full -z-10" />
            
            <div className="max-w-4xl space-y-16">
              <motion.div style={{ x: textMoveX, y: textMoveY }}>
                <span className="inline-block px-5 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-[0.3em] text-[#BB8ED0] mb-8">
                  Private Collection
                </span>
                <h1 className="text-7xl md:text-[9rem] font-black tracking-tighter leading-[0.85] mb-4">
                  Memories <br />
                  <span className="bg-gradient-to-b from-white via-white to-white/20 bg-clip-text text-transparent">
                    Unwrapped.
                  </span>
                </h1>
              </motion.div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a href="#/Letters" className="px-10 py-5 rounded-2xl bg-white text-black font-bold hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                  Enter the Vault
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}