'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X, Instagram, Twitter, Music2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        // { name: 'Music', href: '#music' },
        { name: 'Videos', href: '#videos' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={cn(
            "fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-6 px-6",
            isScrolled ? "bg-black/60 backdrop-blur-xl border-b border-white/5 py-4" : "bg-transparent"
        )}>
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="group flex items-center gap-2">
                    <div className="relative h-12 w-auto min-w-[120px]">
                        <Image
                            src="/logo.png"
                            alt="NAVARASA"
                            fill
                            className="object-contain saturate-150 brightness-115 contrast-110 mix-blend-screen"
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-12">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 hover:text-accent-neon transition-all relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent-neon transition-all group-hover:w-full" />
                        </Link>
                    ))}
                </div>

                {/* Socials & CTA */}
                <div className="hidden lg:flex items-center gap-6">
                    <div className="flex gap-4 items-center">
                        {[Instagram, Twitter, Music2].map((Icon, i) => (
                            <motion.div key={i} whileHover={{ y: -2 }} className="text-gray-500 hover:text-white cursor-pointer transition-colors">
                                <Icon size={16} />
                            </motion.div>
                        ))}
                    </div>
                    <div className="w-[1px] h-6 bg-white/10 mx-2" />
                    {/* <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="px-6 py-2 glass border border-white/10 hover:border-accent-red text-[10px] font-bold tracking-widest uppercase rounded-full transition-all"
                    >
                        Latest Release
                    </motion.button> */}
                </div>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="lg:hidden absolute top-full left-0 right-0 bg-[#0a0a0f] border-b border-white/5 py-10 px-6 flex flex-col items-center gap-8 backdrop-blur-3xl"
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-lg font-bold uppercase tracking-[0.2em] text-white hover:text-accent-red transition-all"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="flex gap-6 items-center mt-4">
                        {[Instagram, Twitter, Music2].map((Icon, i) => (
                            <Icon key={i} size={24} className="text-gray-400 hover:text-white" />
                        ))}
                    </div>
                </motion.div>
            )}
        </nav>
    );
};
