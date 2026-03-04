'use client';

import { motion } from 'framer-motion';

export const ParticlesBackground = () => {
    return (
        <div className="fixed inset-0 -z-10 bg-[#050508] overflow-hidden">
            {/* Floating Blobs */}
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    x: [0, 50, 0],
                    y: [0, 30, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                }}
                style={{ willChange: "transform" }}
                className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-accent-red/10 blur-[80px]"
            />
            <motion.div
                animate={{
                    scale: [1.1, 1, 1.1],
                    x: [0, -40, 0],
                    y: [0, -60, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                }}
                style={{ willChange: "transform" }}
                className="absolute top-[40%] -right-[10%] w-[60%] h-[60%] rounded-full bg-accent-crimson/10 blur-[90px]"
            />
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    x: [0, 30, 0],
                    y: [0, -40, 0],
                }}
                transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: "linear",
                }}
                style={{ willChange: "transform" }}
                className="absolute -bottom-[10%] left-[20%] w-[40%] h-[40%] rounded-full bg-accent-neon/10 blur-[70px]"
            />

            {/* Grid Overlay for futuristic look */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
        </div>
    );
};
