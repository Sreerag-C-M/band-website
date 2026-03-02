'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const members = [
    {
        name: "KAI",
        role: "Lead Synth & Director",
        image: "/band_1.png",
        bio: "Visionary sound architect blending analog warmth with digital precision."
    },
    {
        name: "LUNA",
        role: "Vocalist / Lyricist",
        image: "/band_3.png",
        bio: "Haunting melodies that bridge the gap between human soul and machine code."
    },
    {
        name: "JAX",
        role: "Bass & Audio Design",
        image: "/band_2.png",
        bio: "Master of low-frequency vibrations that pulse through the neon void."
    }
];

export const About = () => {
    return (
        <section id="about" className="py-24 px-4 max-w-7xl mx-auto relative">
            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold mb-4"
                >
                    THE STORY OF <span className="text-accent-purple">NAVARASA</span>
                </motion.h2>
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100px" }}
                    viewport={{ once: true }}
                    className="h-1 bg-accent-blue mx-auto mb-8"
                />
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-400 max-w-2xl mx-auto text-lg font-light leading-relaxed"
                >
                    Born in the neon-lit alleys of tomorrow, NAVARASA is more than a band.
                    It's a multisensory exploration of the nine human emotions through
                    cinematic soundscapes and futuristic aesthetics.
                </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {members.map((member, index) => (
                    <motion.div
                        key={member.name}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className="glass-card rounded-2xl overflow-hidden group"
                    >
                        <div className="relative h-80 w-full overflow-hidden">
                            <Image
                                src={member.image}
                                alt={member.name}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#050508] to-transparent opacity-60" />
                        </div>
                        <div className="p-6">
                            <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-accent-purple transition-colors">
                                {member.name}
                            </h3>
                            <p className="text-accent-cyan text-sm uppercase tracking-widest mb-4">
                                {member.role}
                            </p>
                            <p className="text-gray-400 text-sm font-light leading-relaxed">
                                {member.bio}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
