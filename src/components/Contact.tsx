'use client';

import { motion } from 'framer-motion';
import { Mail, Instagram, Twitter, Music2, MapPin, Send } from 'lucide-react';

export const Contact = () => {
    return (
        <section id="contact" className="py-24 px-4 bg-black relative">
            <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-accent-red/10 blur-[200px]" />
            <div className="absolute bottom-[20%] left-[10%] w-[500px] h-[500px] bg-accent-crimson/10 blur-[200px]" />

            <div className="max-w-7xl mx-auto z-10 relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Info */}
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight tracking-tight uppercase"
                        >
                            CONNECT WITH <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-red to-accent-crimson neon-text-red">NAVARASA</span>
                        </motion.h2>
                        <p className="text-gray-400 max-w-lg mb-12 text-lg font-light leading-relaxed">
                            For booking inquiries, press kits, or just to say hello, get in touch with our team.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-center gap-6 group hover:translate-x-2 transition-transform cursor-pointer">
                                <div className="w-14 h-14 glass rounded-full flex items-center justify-center border-accent-red/30 group-hover:bg-accent-red/20">
                                    <Mail className="text-accent-red" size={24} />
                                </div>
                                <div className="text-white font-bold tracking-widest uppercase text-sm group-hover:text-accent-red transition-colors">bookings@navarasa.music</div>
                            </div>
                            <div className="flex items-center gap-6 group hover:translate-x-2 transition-transform cursor-pointer">
                                <div className="w-14 h-14 glass rounded-full flex items-center justify-center border-accent-crimson/30 group-hover:bg-accent-crimson/20">
                                    <MapPin className="text-accent-crimson" size={24} />
                                </div>
                                <div className="text-white font-bold tracking-widest uppercase text-sm group-hover:text-accent-crimson transition-colors">CRIMSON CITY, VOID 404</div>
                            </div>
                        </div>

                        {/* Socials */}
                        <div className="mt-16 flex gap-6">
                            {[Instagram, Twitter, Music2].map((Icon, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -5, scale: 1.1 }}
                                    className="w-12 h-12 glass rounded-full flex items-center justify-center cursor-pointer hover:border-accent-red group transition-all"
                                >
                                    <Icon size={20} className="group-hover:text-accent-red transition-colors" />
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="glass p-10 rounded-3xl border border-white/10"
                    >
                        <h3 className="text-2xl font-bold mb-8 uppercase tracking-widest flex items-center gap-3">
                            <span className="w-2 h-8 bg-accent-red rounded-full inline-block" />
                            Send a Transmission
                        </h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase ml-1">Your Name</label>
                                    <input type="text" className="w-full bg-[#111] border border-white/5 rounded-xl px-4 py-4 text-white focus:border-accent-red focus:outline-none focus:ring-1 focus:ring-accent-red/30 transition-all font-light" placeholder="AGENT ZERO" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase ml-1">Email Protocol</label>
                                    <input type="email" className="w-full bg-[#111] border border-white/5 rounded-xl px-4 py-4 text-white focus:border-accent-red focus:outline-none focus:ring-1 focus:ring-accent-red/30 transition-all font-light" placeholder="ZERO@NET.COM" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase ml-1">Transmission Subject</label>
                                <input type="text" className="w-full bg-[#111] border border-white/5 rounded-xl px-4 py-4 text-white focus:border-accent-red focus:outline-none focus:ring-1 focus:ring-accent-red/30 transition-all font-light" placeholder="BOOKING ENQUIRY / FAN MAIL" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase ml-1">Message Body</label>
                                <textarea className="w-full bg-[#111] border border-white/5 rounded-xl px-4 py-10 text-white focus:border-accent-red focus:outline-none focus:ring-1 focus:ring-accent-red/30 transition-all font-light resize-none" placeholder="YOUR MESSAGE HERE..."></textarea>
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="button"
                                className="w-full py-4 bg-gradient-to-r from-accent-red to-accent-crimson text-white rounded-xl font-bold tracking-widest uppercase flex items-center justify-center gap-3 mt-4 hover:shadow-[0_0_30px_rgba(255,0,0,0.4)] transition-all"
                            >
                                <Send size={18} /> INITIALIZE TRANSMISSION
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>

            {/* Footer Text */}
            <div className="mt-24 pt-12 border-t border-white/5 text-center text-gray-600 text-[10px] font-medium tracking-[0.5em] uppercase">
                &copy; 2024 NAVARASA MUSIC COLLECTIVE. ALL RIGHTS RESERVED. POWERED BY NEON.
            </div>
        </section>
    );
};
