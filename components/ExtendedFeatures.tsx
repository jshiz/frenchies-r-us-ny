'use client';

import { ShieldCheck, Heart, Zap, Sparkles, BookOpen, Crown, Microscope, Utensils } from 'lucide-react';
import PaintSmear from './PaintSmear';

const FEATURES = [
    {
        icon: Microscope,
        title: "Scientific Ethics",
        desc: "We prioritize the 'Triple Crown': Perfect Structure, Elite Genetics, and Bulletproof Health. Every breeding is a calculated decision based on generational DNA data.",
        tag: "Standards"
    },
    {
        icon: Heart,
        title: "Early Socialization",
        desc: "Our pups undergo Early Neurological Stimulation (ENS) from day 3. They are exposed to sounds, children, and a variety of textures to ensure bulletproof temperaments.",
        tag: "Development"
    },
    {
        icon: Utensils,
        title: "Royal Nutrition",
        desc: "Our dogs aren't fed kibble. They thrive on a raw-infused, human-grade diet tailored to Frenchie-specific inflammatory profiles. Only the best for the bloodline.",
        tag: "Lifestyle"
    },
    {
        icon: Crown,
        title: "24/7 Mentorship",
        desc: "When you leave with a Royal Frenchie, you leave with our phone number. We provide lifetime support for training, health questions, and nutrition advice.",
        tag: "Support"
    }
];

export default function ExtendedFeatures() {
    return (
        <section className="py-24 bg-cream relative overflow-hidden">
            <PaintSmear side="right" opacity="opacity-[0.03]" rotate={-15} />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20 space-y-6">
                    <div className="inline-block transform rotate-1">
                        <span className="font-marker text-green-primary text-xl md:text-2xl tracking-widest uppercase">The Royal Manifesto</span>
                    </div>
                    <h2 className="font-serif text-5xl md:text-8xl font-black text-text-primary tracking-tighter uppercase italic leading-[0.8]">
                        The Breeding <br className="hidden md:block" />
                        <span className="text-green-primary">Standard.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {FEATURES.map((f, i) => (
                        <div key={i} className="group bg-white p-8 rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-cream rounded-2xl flex items-center justify-center text-green-primary mb-6 group-hover:bg-green-primary group-hover:text-white transition-all transform group-hover:rotate-12">
                                <f.icon size={32} />
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-2">{f.tag}</span>
                            <h3 className="font-serif text-2xl font-black mb-4 group-hover:text-green-primary transition-colors">{f.title}</h3>
                            <p className="text-text-secondary text-sm leading-relaxed font-medium">
                                {f.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Second Creative Layer: Reading Material */}
                <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="bg-text-primary rounded-[4rem] p-10 md:p-16 text-white relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-green-primary/10 rounded-full blur-3xl group-hover:bg-green-primary/20 transition-all"></div>
                        <div className="relative z-10">
                            <BookOpen className="text-green-primary mb-8" size={64} />
                            <h3 className="font-serif text-4xl md:text-6xl font-black mb-6 leading-none tracking-tighter uppercase italic">The Frenchie <br />Bible.</h3>
                            <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-sm">
                                Why do they snore? Why are exotic colors rare? We are compiling the world's most detailed library on the French Bulldog breed.
                            </p>
                            <button className="bg-white text-text-primary px-8 py-4 rounded-full font-black text-xs uppercase tracking-widest hover:bg-green-primary hover:text-white transition-all">
                                Launching Spring 2026
                            </button>
                        </div>
                    </div>

                    <div className="bg-white rounded-[4rem] p-10 md:p-16 border-4 border-cream relative overflow-hidden group shadow-xl flex flex-col justify-between">
                        <div>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 bg-green-primary/10 rounded-full flex items-center justify-center text-green-primary">
                                    <Sparkles size={24} />
                                </div>
                                <span className="font-marker text-green-primary text-xl tracking-widest uppercase">Member Spotlight</span>
                            </div>
                            <h3 className="font-serif text-3xl md:text-5xl font-black text-text-primary mb-6 leading-none tracking-tighter uppercase italic">From our HQ <br /> to your home.</h3>
                            <p className="text-text-secondary text-lg leading-relaxed max-w-sm italic">
                                "Kevin helped us choose Kingston specifically based on his calm temperament for our kids. Best decision we ever made." — The Smith Family, Manhattan
                            </p>
                        </div>
                        <div className="mt-8 flex items-center gap-4 border-t border-gray-100 pt-8">
                            <div className="w-16 h-16 bg-cream rounded-full overflow-hidden border-2 border-green-primary p-1">
                                <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center font-black text-text-primary">FR</div>
                            </div>
                            <div>
                                <p className="font-serif font-black text-text-primary italic text-xl leading-none">Kingston</p>
                                <p className="text-[10px] font-black uppercase tracking-widest text-green-primary mt-1">Lilac & Tan / Manhattan, NY</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Third Creative Layer: Interesting Facts Ticker - Full Width */}
            <div className="mt-24 py-12 bg-text-primary border-y-4 border-green-primary overflow-hidden relative group">
                {/* Subtle Grain Overlay */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>

                <div className="flex animate-marquee whitespace-nowrap gap-24 relative z-10">
                    {[
                        "French Bulldogs are nicknamed 'Frog Dogs'",
                        "Gestation is exactly 63 days",
                        "DNA Locus: ay/ay coco dd at/a ky/ky",
                        "Schenectady Bloodlines are Elite",
                        "Bio-Sensor training starts Day 3",
                        "Flight Nanny is standard delivery",
                        // Duplicating for seamless loop
                        "French Bulldogs are nicknamed 'Frog Dogs'",
                        "Gestation is exactly 63 days",
                        "DNA Locus: ay/ay coco dd at/a ky/ky",
                        "Schenectady Bloodlines are Elite",
                        "Bio-Sensor training starts Day 3",
                        "Flight Nanny is standard delivery"
                    ].map((fact, i) => (
                        <div key={i} className="flex items-center gap-6">
                            <div className="w-3 h-3 bg-green-primary rounded-full shadow-[0_0_10px_#7B9A6D]"></div>
                            <span className="font-serif text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter opacity-80 group-hover:opacity-100 transition-opacity">
                                {fact}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
