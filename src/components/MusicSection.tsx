'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Headset, ChevronRight, ChevronLeft, Music2, Clock } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const albums = [
    {
        title: "NEON ECHOES",
        release: "2024",
        image: "/album_1.png",
        tracks: 12,
        duration: "48:12",
        genre: "CYBER-SYNTH",
        description: "A deep dive into the high-contrast world of neon-lit cities. Featuring the hit singles 'Vibrations' and 'Glass Horizon'."
    },
    {
        title: "VOID PULSE",
        release: "2023",
        image: "/album_2.png",
        tracks: 9,
        duration: "36:45",
        genre: "DARK AMBIENT",
        description: "The sound of the machine breathing. An exploration of frequency and silence in the deep void of space."
    },
    {
        title: "ELECTRIC DREAMS",
        release: "2022",
        image: "/album_3.png",
        tracks: 10,
        duration: "42:30",
        genre: "ELECTRO-PUNK",
        description: "High-energy glitches meeting soulful analog leads. The album that defined the Navarasa sound system."
    }
];

export const MusicSection = () => {
    const [index, setIndex] = useState(0);

    const next = () => setIndex((prev) => (prev + 1) % albums.length);
    const prev = () => setIndex((prev) => (prev - 1 + albums.length) % albums.length);

    return (
        <section id="music" className="py-24 px-4 bg-[#0a0a0f] border-y border-white/5 relative overflow-hidden">
            {/* Background glow effects */}
            <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-accent-red/5 blur-[150px] pointer-events-none" />
            <div className="absolute bottom-1/2 right-0 w-[400px] h-[400px] bg-accent-crimson/5 blur-[150px] pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter"
                    >
                        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-red to-accent-crimson neon-text-red">Discography</span>
                    </motion.h2>
                    <p className="text-gray-500 mt-4 uppercase tracking-[0.3em] text-sm">Experience the Evolution of Sound</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center min-h-[500px]">

                    {/* Left Side: Stacked Swipeable Cards */}
                    <div className="relative h-[400px] md:h-[500px] flex items-center justify-center">
                        <div className="relative w-full max-w-[400px] aspect-square">
                            <AnimatePresence mode="popLayout">
                                {albums.map((album, i) => {
                                    const isCenter = i === index;
                                    const isNext = i === (index + 1) % albums.length;
                                    const isPrev = i === (index - 1 + albums.length) % albums.length;

                                    if (!isCenter && !isNext && !isPrev) return null;

                                    return (
                                        <motion.div
                                            key={album.title}
                                            initial={{ opacity: 0, x: isNext ? 100 : -100, scale: 0.8 }}
                                            animate={{
                                                opacity: isCenter ? 1 : 0.4,
                                                x: isCenter ? 0 : isNext ? 40 : -40,
                                                z: isCenter ? 0 : -100,
                                                scale: isCenter ? 1 : 0.9,
                                                rotate: isCenter ? 0 : isNext ? 5 : -5,
                                                zIndex: isCenter ? 10 : 5,
                                            }}
                                            exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
                                            drag="x"
                                            dragConstraints={{ left: 0, right: 0 }}
                                            onDragEnd={(_, info) => {
                                                if (info.offset.x > 100) prev();
                                                else if (info.offset.x < -100) next();
                                            }}
                                            className="absolute inset-0 cursor-grab active:cursor-grabbing"
                                            style={{ perspective: 1000 }}
                                        >
                                            <div className={cn(
                                                "relative w-full h-full rounded-2xl overflow-hidden shadow-2xl transition-all duration-500",
                                                isCenter ? "neon-border-red border-accent-red/30" : "border-white/5"
                                            )}>
                                                <Image
                                                    src={album.image}
                                                    alt={album.title}
                                                    fill
                                                    className="object-cover"
                                                    priority
                                                />
                                                {/* Play Button Overlay on Center Card */}
                                                {isCenter && (
                                                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity backdrop-blur-[2px]">
                                                        <motion.button
                                                            whileHover={{ scale: 1.1 }}
                                                            whileTap={{ scale: 0.9 }}
                                                            className="w-20 h-20 bg-accent-red rounded-full flex items-center justify-center text-white shadow-[0_0_30px_rgba(255,0,0,0.5)]"
                                                        >
                                                            <Play size={32} fill="currentColor" />
                                                        </motion.button>
                                                    </div>
                                                )}
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </AnimatePresence>
                        </div>

                        {/* Navigation Buttons for small screens */}
                        <div className="absolute bottom-[-60px] flex gap-4 lg:hidden">
                            <button onClick={prev} className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-accent-red/20 transition-colors"><ChevronLeft /></button>
                            <button onClick={next} className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-accent-red/20 transition-colors"><ChevronRight /></button>
                        </div>
                    </div>

                    {/* Right Side: Details Component */}
                    <div className="relative text-left">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-8"
                            >
                                <div>
                                    <motion.span
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="text-accent-neon font-bold tracking-[0.4em] text-xs uppercase block mb-2"
                                    >
                                        Active Selection
                                    </motion.span>
                                    <h3 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-4">
                                        {albums[index].title}
                                    </h3>
                                    <div className="flex flex-wrap gap-4 items-center">
                                        <span className="px-3 py-1 glass rounded text-[10px] font-bold text-accent-neon tracking-widest">{albums[index].genre}</span>
                                        <span className="text-gray-500 text-sm font-medium tracking-widest uppercase">{albums[index].release} RELEASE</span>
                                    </div>
                                </div>

                                <p className="text-gray-400 text-lg font-light leading-relaxed max-w-lg italic">
                                    "{albums[index].description}"
                                </p>

                                <div className="grid grid-cols-2 gap-8 py-6 border-y border-white/5">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 glass rounded-lg flex items-center justify-center text-accent-red">
                                            <Music2 size={20} />
                                        </div>
                                        <div>
                                            <div className="text-white font-bold">{albums[index].tracks}</div>
                                            <div className="text-gray-500 text-[10px] uppercase font-bold tracking-tight">Tracks</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 glass rounded-lg flex items-center justify-center text-accent-crimson">
                                            <Clock size={20} />
                                        </div>
                                        <div>
                                            <div className="text-white font-bold">{albums[index].duration}</div>
                                            <div className="text-gray-500 text-[10px] uppercase font-bold tracking-tight">Full Length</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-6 pt-4">
                                    <button className="flex-1 bg-white text-black font-black py-4 rounded-xl hover:bg-accent-red hover:text-white transition-all duration-300 uppercase tracking-widest text-sm flex items-center justify-center gap-2 group">
                                        Listen Full Album <Play size={16} fill="currentColor" className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                    <button className="w-16 h-16 glass rounded-xl flex items-center justify-center border-white/10 hover:border-accent-red/50 transition-all text-white hover:text-accent-red group">
                                        <Headset className="group-hover:scale-110 transition-transform" />
                                    </button>
                                </div>

                                {/* Desktop Mini Nav */}
                                <div className="hidden lg:flex gap-4 pt-12 items-center">
                                    <div className="text-gray-600 font-bold text-xs uppercase tracking-widest mr-4">Selection</div>
                                    <div className="flex gap-2">
                                        {albums.map((_, i) => (
                                            <button
                                                key={i}
                                                onClick={() => setIndex(i)}
                                                className={cn(
                                                    "h-1 rounded-full transition-all duration-500",
                                                    i === index ? "w-12 bg-accent-red" : "w-4 bg-white/10"
                                                )}
                                            />
                                        ))}
                                    </div>
                                    <div className="flex ml-auto gap-3">
                                        <button onClick={prev} className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-accent-red/20 transition-colors border-white/5"><ChevronLeft size={18} /></button>
                                        <button onClick={next} className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-accent-red/20 transition-colors border-white/5"><ChevronRight size={18} /></button>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};
