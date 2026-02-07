import Link from 'next/link';

export default function About() {
    return (
        <section id="about" className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Image/Art Side - Brand Focused */}
                    <div className="relative group p-4">
                        {/* Main Brand Image - Graffiti Style */}
                        <div className="relative z-10 transition-transform duration-700 group-hover:scale-[1.02]">
                            <img
                                src="/images/frenchies-r-us-graffiti.png"
                                alt="Frenchies R Us NY Brand Art"
                                className="w-full h-auto drop-shadow-[0_20px_50px_rgba(123,154,109,0.3)]"
                            />
                        </div>

                        {/* Top Left Overlay Card - Brand Focus */}
                        <div className="absolute top-0 left-0 z-20 transition-all duration-500 group-hover:translate-x-2 group-hover:-translate-y-2">
                            <div className="bg-text-primary/95 backdrop-blur-xl text-white px-6 py-4 rounded-[2rem] shadow-[10px_10px_30px_rgba(0,0,0,0.3)] border-t border-l border-white/20 transform md:-rotate-3">
                                <span className="font-marker text-green-primary text-sm uppercase tracking-[0.2em] block mb-1">Established</span>
                                <span className="font-serif font-black text-2xl leading-none italic uppercase tracking-tighter">Elite NY Legacy</span>
                            </div>
                        </div>

                        {/* Secondary Brand Badge */}
                        <div className="absolute bottom-4 right-4 z-20 transition-all duration-500 group-hover:-translate-x-2 group-hover:translate-y-2 hidden md:block">
                            <div className="bg-green-primary text-white p-4 rounded-full shadow-2xl transform rotate-12 border-4 border-white/30">
                                <span className="font-marker text-lg tracking-widest uppercase italic">DNA Certified</span>
                            </div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="space-y-8 animate-fade-in-up text-center lg:text-left">
                        <div className="inline-block transform -rotate-1 mb-2">
                            <span className="font-marker text-green-primary text-xl md:text-2xl tracking-widest uppercase">The Story</span>
                        </div>
                        <h2 className="font-serif text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter uppercase italic">
                            Not a Kennel, <br />
                            <span className="text-green-primary">But a Home. 🏡</span>
                        </h2>

                        <div className="space-y-6 text-text-secondary text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                            <p className="font-bold text-text-primary text-xl uppercase tracking-tighter italic">
                                Built on Logic. Defined by Structure.
                            </p>
                            <p>
                                Frenchies R Us NY is more than a breeder—it&apos;s a standard of excellence established in the heart of the Capital Region. Born from a relentless drive to perfect the French Bulldog lineage, the brand focuses on correcting the structural and health flaws prevalent in the exotic market.
                            </p>
                            <p>
                                Every breeding at our headquarters is a high-level scientific endeavor. Founder Kevin D Briggs Jr directs our focus toward the &quot;Triple Crown&quot; of elite breeding: **Perfect Structure**, **Elite Genetics**, and **Bulletproof Health**. When you choose a puppy from our program, you are securing a piece of an world-class legacy.
                            </p>
                        </div>

                        <div className="pt-4 flex justify-center lg:justify-start">
                            <p className="font-marker text-2xl md:text-4xl text-wood-dark rotate-[-2deg] inline-block whitespace-nowrap">
                                – Kevin D Briggs Jr & Family
                            </p>
                        </div>

                        <div className="pt-8 flex justify-center lg:justify-start">
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 w-full max-w-md lg:max-w-none">
                                <div className="text-center p-5 md:p-6 bg-cream rounded-3xl transform hover:-translate-y-1 transition-all border border-cream-dark shadow-sm">
                                    <div className="text-3xl md:text-5xl font-black text-green-dark mb-1 tracking-tighter">5+</div>
                                    <div className="text-[9px] md:text-xs uppercase tracking-widest font-black text-gray-400">Years Exp.</div>
                                </div>
                                <div className="text-center p-5 md:p-6 bg-cream rounded-3xl transform hover:-translate-y-1 transition-all border border-cream-dark shadow-sm">
                                    <div className="text-3xl md:text-5xl font-black text-green-dark mb-1 tracking-tighter">100%</div>
                                    <div className="text-[9px] md:text-xs uppercase tracking-widest font-black text-gray-400">Health Gtd.</div>
                                </div>
                                <div className="text-center p-5 md:p-6 bg-cream rounded-3xl transform hover:-translate-y-1 transition-all border border-cream-dark shadow-sm col-span-2 md:col-span-1">
                                    <div className="text-3xl md:text-5xl font-black text-green-dark mb-1 tracking-tighter">24/7</div>
                                    <div className="text-[9px] md:text-xs uppercase tracking-widest font-black text-gray-400">Global Support</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
