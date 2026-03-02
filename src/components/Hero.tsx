'use client';

import { motion } from 'framer-motion';
import { Play, TrendingUp } from 'lucide-react';
import Image from 'next/image';

export const Hero = () => {
    return (
        <section className="relative min-h-[100vh] flex flex-col justify-center items-center px-4 pt-20 overflow-hidden">

            {/* Background Elements */}
            <div className="absolute top-[20%] right-[10%] w-[350px] h-[350px] bg-accent-purple/20 blur-[150px] animate-pulse-slow" />
            <div className="absolute bottom-[20%] left-[5%] w-[300px] h-[300px] bg-accent-blue/15 blur-[120px] animate-pulse-slow" />

            {/* Main Content */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="z-10 text-center max-w-4xl"
            >
                <motion.span
                    initial={{ opacity: 0, letterSpacing: "-0.5em" }}
                    animate={{ opacity: 1, letterSpacing: "0.2em" }}
                    transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                    className="text-accent-cyan font-semibold text-sm uppercase tracking-[0.2em] mb-4 block"
                >
                    New Album Available Now
                </motion.span>

                <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-tight tracking-tighter">
                    NAVA <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-blue neon-text-purple">RASA</span>
                </h1>

                <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                    An immersive journey through sound and light. Experience the next era of cinematic electronic music.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-accent-purple text-white rounded-full font-bold flex items-center gap-2 group transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]"
                    >
                        <Play className="fill-current" size={20} />
                        LISTEN NOW
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 glass text-white rounded-full font-bold flex items-center gap-2 transition-all duration-300 hover:bg-white/10"
                    >
                        <TrendingUp size={20} className="text-accent-cyan" />
                        BOOK TICKETS
                    </motion.button>
                </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
                <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
            </motion.div>
        </section>
    );
};
