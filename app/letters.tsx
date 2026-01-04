"use client";

import React, { useState, KeyboardEvent } from 'react';
import TiltedCard from '@/components/TiltedCard';   
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface Letter {
  id: number;
  name: string;
  initial: string;
  image: string;
  question: string;
  answer: string;
  letter: string;
  color: string;
}

const letters: Letter[] = [
  { 
    id: 1, 
    name: "Sarah", 
    initial: "S", 
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600",
    question: "What's your favorite color?", 
    answer: "blue", 
    letter: "Lorem ipsum Golbat learned Wing Attack. Poliwag evolved into Poliwhirl. Smasher took Route 206 from Route 207 to Eterna City. You can earn the Freeze Badge at Icirrus Gym. Lorem ipsum Cooltrainer's favorite Pokémon is Magneton. Top Champion spotted Eevee in Unova. Raichu was found in Route 22. Jr. Trainer♀ used a Luxury Ball to catch Ninetales. Lickitung was found in Route 210. Nidoran♂ used Poison Sting. Ninja Boy used a Beast Ball to catch Diglett. Super Nerd explored Iceberg Ruins in Sinnoh. Gastly is a Gas Pokémon.Lorem ipsum Golbat learned Wing Attack. Poliwag evolved into Poliwhirl. Smasher took Route 206 from Route 207 to Eterna City. You can earn the Freeze Badge at Icirrus Gym. Lorem ipsum Cooltrainer's favorite Pokémon is Magneton. Top Champion spotted Eevee in Unova. Raichu was found in Route 22. Jr. Trainer♀ used a Luxury Ball to catch Ninetales. Lickitung was found in Route 210. Nidoran♂ used Poison Sting. Ninja Boy used a Beast Ball to catch Diglett. Super Nerd explored Iceberg Ruins in Sinnoh. Gastly is a Gas Pokémon.Lorem ipsum Golbat learned Wing Attack. Poliwag evolved into Poliwhirl. Smasher took Route 206 from Route 207 to Eterna City. You can earn the Freeze Badge at Icirrus Gym. Lorem ipsum Cooltrainer's favorite Pokémon is Magneton. Top Champion spotted Eevee in Unova. Raichu was found in Route 22. Jr. Trainer♀ used a Luxury Ball to catch Ninetales. Lickitung was found in Route 210. Nidoran♂ used Poison Sting. Ninja Boy used a Beast Ball to catch Diglett. Super Nerd explored Iceberg Ruins in Sinnoh. Gastly is a Gas Pokémon.Lorem ipsum Golbat learned Wing Attack. Poliwag evolved into Poliwhirl. Smasher took Route 206 from Route 207 to Eterna City. You can earn the Freeze Badge at Icirrus Gym. Lorem ipsum Cooltrainer's favorite Pokémon is Magneton. Top Champion spotted Eevee in Unova. Raichu was found in Route 22. Jr. Trainer♀ used a Luxury Ball to catch Ninetales. Lickitung was found in Route 210. Nidoran♂ used Poison Sting. Ninja Boy used a Beast Ball to catch Diglett. Super Nerd explored Iceberg Ruins in Sinnoh. Gastly is a Gas Pokémon.Lorem ipsum Golbat learned Wing Attack. Poliwag evolved into Poliwhirl. Smasher took Route 206 from Route 207 to Eterna City. You can earn the Freeze Badge at Icirrus Gym. Lorem ipsum Cooltrainer's favorite Pokémon is Magneton. Top Champion spotted Eevee in Unova. Raichu was found in Route 22. Jr. Trainer♀ used a Luxury Ball to catch Ninetales. Lickitung was found in Route 210. Nidoran♂ used Poison Sting. Ninja Boy used a Beast Ball to catch Diglett. Super Nerd explored Iceberg Ruins in Sinnoh. Gastly is a Gas Pokémon.Lorem ipsum Golbat learned Wing Attack. Poliwag evolved into Poliwhirl. Smasher took Route 206 from Route 207 to Eterna City. You can earn the Freeze Badge at ", 
    color: "#3291B6" 
  },
  { 
    id: 2, 
    name: "Michael", 
    initial: "M", 
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600",
    question: "What city were you born in?", 
    answer: "seattle", 
    letter: "Dear Michael,\n\nI hope this letter finds you well...", 
    color: "#BB8ED0" 
  },
  { 
    id: 3, 
    name: "Emily", 
    initial: "E", 
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=600",
    question: "What's your pet's name?", 
    answer: "max", 
    letter: "Dear Emily,\n\nWhere do I even begin?...", 
    color: "#E0A8A8" 
  },
  { 
    id: 4, 
    name: "David", 
    initial: "D", 
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600",
    question: "What's your favorite food?", 
    answer: "pizza", 
    letter: "Dear David,\n\nI wanted to write this to express how much I value our friendship...", 
    color: "#3291B6" 
  },
  { 
    id: 5, 
    name: "Jessica", 
    initial: "J", 
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600",
    question: "What month is your birthday?", 
    answer: "july", 
    letter: "Dear Jessica,\n\nYou bring so much energy and enthusiasm...", 
    color: "#BB8ED0" 
  },
  { 
    id: 6, 
    name: "Alex", 
    initial: "A", 
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600",
    question: "What's your favorite season?", 
    answer: "summer", 
    letter: "Dear Alex,\n\nI've been reflecting on our journey together...", 
    color: "#E0A8A8" 
  },
  { 
    id: 7, 
    name: "Jordan", 
    initial: "J", 
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600",
    question: "What instrument do you play?", 
    answer: "guitar", 
    letter: "Dear Jordan,\n\nWriting this letter feels long overdue...", 
    color: "#3291B6" 
  }
];

export default function PersonalLetters() {
  const [selectedLetter, setSelectedLetter] = useState<Letter | null>(null);
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [isUnlocked, setIsUnlocked] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleSelectLetter = (letter: Letter) => {
    setSelectedLetter(letter);
    setUserAnswer('');
    setIsUnlocked(false);
    setError('');
  };

  const handleSubmitAnswer = () => {
    if (selectedLetter && userAnswer.toLowerCase().trim() === selectedLetter.answer.toLowerCase()) {
      setIsUnlocked(true);
      setError('');
    } else {
      setError('Incorrect answer.');
      setUserAnswer('');
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSubmitAnswer();
  };

  return (
    <section className="relative z-10 py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-4 bg-gradient-to-r from-[#3291B6] via-[#BB8ED0] to-[#E0A8A8] bg-clip-text text-transparent tracking-tighter">
            Personal Letters
          </h2>
          <p className="text-xl text-zinc-500 font-light">Protected by memories, shared with the few.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {letters.map((letter) => (
            <div 
              key={letter.id} 
              onClick={() => handleSelectLetter(letter)} 
              className="cursor-pointer group"
            >
              <TiltedCard
                imageSrc={letter.image}
                altText={`Memory with ${letter.name}`}
                captionText={letter.name}
                containerHeight="320px"
                containerWidth="100%"
                borderRadius={24}
                scaleOnHover={1.05}
                rotateAmplitude={12}
                // ENABLED THE NEW FEATURES HERE
                showTooltip={true}
                showOverlay={true}
              >
                {/* Custom Overlay UI */}
                <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-black/60 backdrop-blur-[2px] border border-white/10 rounded-[24px] z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div 
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-4 shadow-2xl"
                  style={{ backgroundColor: `${letter.color}80`, color: 'white' }}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                  {letter.name}
                </h3>

                <div 
                  className="px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] border bg-black/40 backdrop-blur-md shadow-lg"
                  style={{ borderColor: `${letter.color}60`, color: 'white' }}
                >
                  Locked Vault
                </div>
              </div>
              </TiltedCard>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedLetter && (
          <div 
            className="fixed inset-0 bg-black/40 backdrop-blur-xl z-[100] flex items-center justify-center p-4"
            onClick={() => setSelectedLetter(null)}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, y: 40, rotateX: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 40, rotateX: -15 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#0a0a0a]/80 shadow-[0_0_100px_rgba(0,0,0,0.5)]"
              onClick={(e) => e.stopPropagation()}
            >

              <div 
                className="absolute -top-24 -right-24 w-64 h-64 blur-[100px] opacity-20"
                style={{ backgroundColor: selectedLetter.color }}
              />

              <div className="relative z-10 p-8 md:p-12">
 
                <button 
                  onClick={() => setSelectedLetter(null)} 
                  className="absolute top-8 right-8 text-zinc-500 hover:text-white transition-colors group"
                >
                  <span className="text-xs font-bold uppercase tracking-widest mr-2 opacity-0 group-hover:opacity-100 transition-opacity">Close</span>
                  <span className="text-3xl leading-none">×</span>
                </button>

                {!isUnlocked ? (
                  <div className="text-center py-6">
                    <motion.div 
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="mb-8 inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/5 border border-white/10 shadow-inner"
                    >
                      <svg className="w-8 h-8 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 00-2 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </motion.div>

                    <h3 className="text-4xl font-black text-white tracking-tighter mb-2">Memory Check</h3>
                    <p className="text-zinc-500 text-xs font-bold uppercase tracking-[0.3em] mb-10">Accessing {selectedLetter.name}'s Vault</p>
                    
                    <div className="bg-white/[0.03] border border-white/5 rounded-3xl p-8 mb-10 text-left backdrop-blur-md relative group overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-zinc-500/50 to-transparent" />
                      <p className="text-[10px] text-zinc-500 uppercase tracking-[0.4em] font-black mb-4">The Challenge</p>
                      <p className="text-white text-2xl font-light italic leading-relaxed">"{selectedLetter.question}"</p>
                    </div>

                    <div className="relative group">
                      <input
                        type="text"
                        value={userAnswer}
                        onChange={(e) => setUserAnswer(e.target.value)}
                        onKeyDown={handleKeyPress}
                        placeholder="The secret answer..."
                        className="w-full px-8 py-6 rounded-2xl bg-white/5 border border-white/10 text-white text-xl text-center focus:bg-white/10 focus:border-zinc-500 outline-none transition-all placeholder:text-zinc-700"
                        autoFocus
                      />
                    </div>

                    {error && (
                      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400/80 text-sm mt-4 font-medium tracking-wide">
                        {error}
                      </motion.p>
                    )}

                    <button
                      onClick={handleSubmitAnswer}
                      className="mt-10 w-full py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-sm text-white shadow-2xl hover:scale-[1.02] active:scale-95 transition-all"
                      style={{ background: `linear-gradient(135deg, ${selectedLetter.color}, #000)` }}
                    >
                      Verify Identity
                    </button>
                  </div>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-10"
                  >
                    <div className="flex items-center gap-6 border-b border-white/5 pb-10">
                      <div className="relative">
                        <img src={selectedLetter.image} className="w-20 h-20 rounded-2xl object-cover grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl" />
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-green-500 border-4 border-[#0a0a0a] flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-3xl font-black text-white tracking-tighter">Decrypted Message</h3>
                        <p className="text-zinc-500 text-xs font-bold uppercase tracking-[0.3em]">Confidential for {selectedLetter.name}</p>
                      </div>
                    </div>

                    <div className="relative group">
                      <div className="absolute -inset-4 bg-gradient-to-br from-white/5 to-transparent rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                      <p className="text-zinc-200 leading-[1.8] text-xl font-serif italic selection:bg-white/20">
                        {selectedLetter.letter}
                      </p>
                    </div>

                    <div className="pt-6 flex justify-center">
                      <div className="h-[1px] w-20 bg-zinc-800" />
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}