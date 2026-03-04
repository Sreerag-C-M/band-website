'use client';

import { motion } from 'framer-motion';
import { Play, ExternalLink, Youtube } from 'lucide-react';
import Image from 'next/image';

const videos = [
    {
        title: "VIBRATIONS",
        category: "OFFICIAL MUSIC VIDEO",
        thumbnail: "/album_1.png",
        duration: "4:24"
    },
    {
        title: "SYSTEM OVERRIDE",
        category: "LIVE AT CYBERDOME",
        thumbnail: "/album_2.png",
        duration: "6:15"
    },
    {
        title: "NEON HEARTS",
        category: "VISUALIZER",
        thumbnail: "/album_3.png",
        duration: "3:45"
    }
];

export const Videos = () => {
    return (
        <section id="videos" className="py-24 px-4 bg-black relative">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] to-[#050508]" />
            <div className="absolute top-[10%] left-[10%] w-[400px] h-[400px] bg-accent-red/10 blur-[150px]" />
            <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-accent-crimson/10 blur-[150px]" />

            <div className="z-10 relative max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black mb-4">LATEST <span className="text-accent-neon neon-text-red">VIDEOS</span></h2>
                    <p className="text-gray-400 font-light max-w-lg mx-auto uppercase tracking-widest text-sm">Visual experiences that pulse with the sound.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {videos.map((video, index) => (
                        <motion.div
                            key={video.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card rounded-2xl overflow-hidden group cursor-pointer border border-white/5 hover:border-accent-crimson/30"
                        >
                            <div className="relative aspect-video overflow-hidden">
                                <Image
                                    src={video.thumbnail}
                                    alt={video.title}
                                    fill
                                    className="object-cover transition-transform group-hover:scale-110 saturate-150 brightness-75 duration-700"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all flex items-center justify-center">
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="w-16 h-16 rounded-full glass flex items-center justify-center border-white/20"
                                    >
                                        <Play className="text-white fill-white ml-1" size={24} />
                                    </motion.div>
                                </div>
                                <div className="absolute bottom-4 right-4 px-2 py-1 glass text-[10px] font-bold rounded">
                                    {video.duration}
                                </div>
                            </div>
                            <div className="p-6">
                                <span className="text-accent-neon text-[10px] font-bold tracking-[0.3em] block mb-2">{video.category}</span>
                                <h3 className="text-xl font-bold transition-colors group-hover:text-accent-crimson">{video.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="px-10 py-4 glass border border-accent-crimson/30 text-white rounded-full font-bold text-sm tracking-widest hover:bg-accent-crimson/10 transition-colors uppercase group flex items-center mx-auto gap-3"
                >
                    Visit YouTube Channel <Youtube className="group-hover:scale-110 transition-transform text-red-500" size={20} />
                </motion.button>
            </div>
        </section>
    );
};
