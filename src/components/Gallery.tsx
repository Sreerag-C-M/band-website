'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

const galleryItems = [
    { src: "/band_1.png", alt: "LIVE VORTEX" },
    { src: "/album_1.png", alt: "STUDIO SESSION" },
    { src: "/band_2.png", alt: "BACKSTAGE PASS" },
    { src: "/album_2.png", alt: "NEON STAGE" },
    { src: "/band_3.png", alt: "SYNTH LAB" },
    { src: "/album_3.png", alt: "FAN TRANSMISSION" },
];

export const Gallery = () => {
    // Duplicate items for seamless loop
    const reelItems = [...galleryItems, ...galleryItems];

    return (
        <section id="gallery" className="py-24 bg-[#050508] overflow-hidden">
            <div className="text-center mb-16 px-4">
                <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter uppercase">
                    <span className="text-accent-purple neon-text-purple px-2">MOMENTS</span> CAPTURED
                </h2>
                <p className="text-gray-500 font-light max-w-lg mx-auto tracking-[0.3em] text-[10px] uppercase">
                    The Moving History of a Neon Legacy
                </p>
            </div>

            {/* Reel Container */}
            <div className="relative flex items-center">
                {/* Film Strip Gradient Overlays */}
                <div className="absolute left-0 top-0 bottom-0 w-20 md:w-64 bg-gradient-to-r from-[#050508] to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-20 md:w-64 bg-gradient-to-l from-[#050508] to-transparent z-10 pointer-events-none" />

                {/* The Rolling Reel */}
                <motion.div
                    animate={{ x: [0, -1920] }} // Adjust based on item width * original count
                    transition={{
                        duration: 40,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="flex gap-6 px-3"
                    style={{ willChange: "transform" }}
                >
                    {reelItems.map((item, index) => (
                        <div
                            key={index}
                            className="relative w-[300px] md:w-[450px] aspect-[4/3] flex-shrink-0 group"
                        >
                            {/* Film Sprockets Aesthetic */}
                            <div className="absolute -top-4 left-0 right-0 h-3 flex justify-around opacity-20 group-hover:opacity-50 transition-opacity">
                                {[...Array(8)].map((_, i) => (
                                    <div key={i} className="w-4 h-4 rounded-sm border border-white/40" />
                                ))}
                            </div>
                            <div className="absolute -bottom-4 left-0 right-0 h-3 flex justify-around opacity-20 group-hover:opacity-50 transition-opacity">
                                {[...Array(8)].map((_, i) => (
                                    <div key={i} className="w-4 h-4 rounded-sm border border-white/40" />
                                ))}
                            </div>

                            {/* Main Image Container */}
                            <div className="relative w-full h-full rounded-sm overflow-hidden border-[10px] border-[#0a0a0f] shadow-2xl transition-all duration-500 group-hover:scale-[1.02] group-hover:border-accent-purple/20">
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    fill
                                    className="object-cover saturate-50 group-hover:saturate-100 transition-all duration-700 grayscale group-hover:grayscale-0"
                                />

                                {/* Vintage Reel Overlay */}
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] pointer-events-none" />

                                {/* Meta Info */}
                                <div className="absolute bottom-4 left-4 z-20 overflow-hidden">
                                    <motion.div
                                        initial={{ y: 20, opacity: 0 }}
                                        whileHover={{ y: 0, opacity: 1 }}
                                        className="bg-black/80 backdrop-blur-md px-3 py-1 border-l-2 border-accent-cyan"
                                    >
                                        <span className="text-white text-[10px] font-bold tracking-[0.3em] uppercase">{item.alt}</span>
                                    </motion.div>
                                </div>

                                {/* Light Leak Effect on hover */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-accent-purple/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Aesthetic Footer for Reel */}
            <div className="mt-16 flex justify-center items-center gap-12 text-gray-700 opacity-20 pointer-events-none overflow-hidden">
                {[...Array(5)].map((_, i) => (
                    <div key={i} className="flex items-center gap-6 whitespace-nowrap">
                        <span className="text-4xl font-black italic">35MM</span>
                        <div className="w-32 h-[1px] bg-white/20" />
                        <span className="text-4xl font-black italic">KODAK 400</span>
                    </div>
                ))}
            </div>
        </section>
    );
};
