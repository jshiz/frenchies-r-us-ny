'use client';

import { Microscope, Beaker, ShieldCheck, Zap } from 'lucide-react';

export default function DNAEducation() {
    return (
        <section id="dna" className="py-24 bg-text-primary text-white relative overflow-hidden">
            {/* Background Graffiti Decor */}
            <div className="absolute top-[-50px] right-[-50px] w-96 h-96 bg-green-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-[-50px] left-[-50px] w-64 h-64 bg-green-primary/5 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <div className="space-y-8">
                        <div className="inline-block transform -rotate-1">
                            <span className="font-marker text-green-light text-2xl tracking-widest uppercase">The Lab at HQ</span>
                        </div>
                        <h2 className="font-serif text-5xl md:text-6xl font-black leading-tight">
                            Decoding the <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-light to-white">Perfect Frenchie.</span>
                        </h2>
                        <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl">
                            We aren't just breeders; we're genetic architects. Every Royal Frenchie is the result of precision matching, ensuring superior structure, health, and "Nuclear" color patterns.
                        </p>
                    </div>

                    <div className="relative">
                        {/* DNA Molecule Visualizer (CSS Animation) */}
                        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[3rem] p-12 relative overflow-hidden aspect-square flex flex-col items-center justify-center shadow-2xl">
                            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]"></div>

                            <div className="text-center space-y-4">
                                <div className="inline-flex items-center justify-center w-20 h-20 bg-green-primary text-white rounded-full mb-4 shadow-[0_0_30px_rgba(123,154,109,0.4)] animate-pulse">
                                    <Microscope size={32} />
                                </div>
                                <h4 className="font-marker text-3xl">100% Verified</h4>
                                <p className="font-sans text-gray-400 uppercase tracking-widest text-xs font-bold">Scientific & Royal Standards</p>
                            </div>

                            <div className="mt-12 space-y-4 w-full max-w-xs">
                                <div className="flex justify-between text-xs font-bold">
                                    <span>STRUCTURE</span>
                                    <span className="text-green-primary">99.9%</span>
                                </div>
                                <div className="w-full bg-white/10 h-1.5 rounded-full">
                                    <div className="bg-green-primary h-full w-[99%] rounded-full shadow-[0_0_10px_#7B9A6D]"></div>
                                </div>

                                <div className="flex justify-between text-xs font-bold pt-2">
                                    <span>HEALTH SCORE</span>
                                    <span className="text-green-primary">A+ ROYAL</span>
                                </div>
                                <div className="w-full bg-white/10 h-1.5 rounded-full">
                                    <div className="bg-green-primary h-full w-[100%] rounded-full shadow-[0_0_10px_#7B9A6D]"></div>
                                </div>
                            </div>

                            <div className="absolute bottom-8 flex gap-4">
                                <Zap size={16} className="text-green-primary animate-bounce" />
                                <ShieldCheck size={16} className="text-green-primary animate-bounce delay-100" />
                                <Beaker size={16} className="text-green-primary animate-bounce delay-200" />
                            </div>
                        </div>

                        {/* Float Card */}
                        <div className="absolute -bottom-6 -right-6 bg-white text-text-primary p-6 rounded-2xl shadow-2xl max-w-[200px] transform rotate-3 hidden md:block group hover:rotate-0 transition-transform">
                            <span className="font-marker text-green-primary text-sm mb-2 block">Breeder Tip:</span>
                            <p className="text-xs font-bold leading-relaxed">"Never compromise on structure for color. At Frenchies R Us, you get both."</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
