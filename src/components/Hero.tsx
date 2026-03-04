'use client';

import { motion } from 'framer-motion';
import { Play, TrendingUp } from 'lucide-react';
import Image from 'next/image';

export const Hero = () => {
    return (
        <section className="relative min-h-[100vh] flex flex-col justify-center items-center px-4 pt-20 overflow-hidden">

            {/* Background Elements */}
            <div className="absolute top-[20%] right-[10%] w-[350px] h-[350px] bg-accent-red/20 blur-[150px] animate-pulse-slow" />
            <div className="absolute bottom-[20%] left-[5%] w-[300px] h-[300px] bg-accent-crimson/15 blur-[120px] animate-pulse-slow" />

            {/* Main Content */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="z-10 text-center max-w-4xl"
            >
                {/* <motion.span
                    initial={{ opacity: 0, letterSpacing: "-0.5em" }}
                    animate={{ opacity: 1, letterSpacing: "0.2em" }}
                    transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                    className="text-accent-neon font-semibold text-sm uppercase tracking-[0.2em] mb-4 block"
                >
                    New Album Available Now
                </motion.span> */}

                <div className="relative w-full h-[200px] md:h-[300px] lg:h-[400px] mb-8">
                    <Image
                        src="/logo.png"
                        alt="NAVARASA"
                        fill
                        className="object-contain saturate-150 brightness-125 contrast-110 mix-blend-screen"
                        priority
                    />
                </div>

                <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                    An immersive journey through sound and crimson shadows. Experience the next era of cinematic electronic music.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-10 py-4 bg-accent-red text-white rounded-full font-bold flex items-center gap-2 group transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,0,0,0.5)]"
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        CONNECT WITH US
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-10 py-4 glass text-white rounded-full font-bold flex items-center gap-2 transition-all duration-300 hover:bg-white/10"
                        onClick={() => document.getElementById('videos')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        <TrendingUp size={20} className="text-accent-neon" />
                        EXPLORE WORKS
                    </motion.button>
                </div>
            </motion.div>
        </section>
    );
};
