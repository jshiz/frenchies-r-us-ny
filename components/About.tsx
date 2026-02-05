import Link from 'next/link';

export default function About() {
    return (
        <section id="about" className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Image Side */}
                    <div
                        className="relative rounded-[2rem] overflow-hidden h-[600px] shadow-2xl bg-gray-100 rotate-1 hover:rotate-0 transition-all duration-700 group isolate transform-gpu"
                        style={{ backfaceVisibility: 'hidden', WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}
                    >
                        {/* Using the real image of Kevin D Briggs Jr */}
                        <img
                            src="/images/kbriggs.jpg"
                            alt="Kevin D Briggs Jr - The King of Frenchies"
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                        <div className="absolute top-6 left-6 z-10">
                            <div className="bg-white/90 backdrop-blur-sm text-text-primary px-4 py-2 rounded-lg shadow-xl transform -rotate-3 border-2 border-green-primary">
                                <span className="font-marker text-xs uppercase tracking-widest block">Top Tier</span>
                                <span className="font-serif font-bold text-lg leading-none">Empire Breeder</span>
                            </div>
                        </div>
                        <div className="absolute bottom-8 left-8 text-white z-10">
                            <p className="font-marker text-2xl mb-2 text-green-light drop-shadow-lg">The Man Behind the Brand</p>
                            <p className="font-serif text-xl font-black tracking-wide drop-shadow-md underline decoration-green-primary decoration-4 underline-offset-8">Kevin D Briggs Jr</p>
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
                            <p className="font-bold text-text-primary text-xl">
                                Before it was a brand, it was a bond.
                            </p>
                            <p>
                                Founded in the heart of the Capital Region, Frenchies R Us NY was born from Kevin D Briggs Jr's obsession with perfecting the breed. Disappointed by the lack of structural integrity and health standards in the exotic market, he set out to build a lineage that didn't just look royal—but lived like it.
                            </p>
                            <p>
                                Every breeding at our HQ is a scientific endeavor. We prioritize the "Triple Crown": **Perfect Structure**, **Elite Genetics**, and **Bulletproof Health**. When you join our family, you aren't just buying a pet; you're inheriting a legacy of excellence that Kevin has cultivated over years.
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
