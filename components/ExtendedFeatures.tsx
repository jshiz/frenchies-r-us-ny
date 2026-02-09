'use client';

import { ShieldCheck, Heart, Zap, Sparkles, Star, Crown, Microscope, Utensils } from 'lucide-react';
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

                {/* Testimonials Section */}
                <div className="mt-24">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="w-12 h-12 bg-green-primary/10 rounded-full flex items-center justify-center text-green-primary">
                            <Sparkles size={24} />
                        </div>
                        <span className="font-marker text-green-primary text-xl tracking-widest uppercase">Elite Feedback</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                name: "Sarah M.",
                                location: "Brooklyn, NY",
                                rating: 5,
                                text: "Absolutely in love with our lilac pup. The process was seamless and Kevin was so helpful throughout!"
                            },
                            {
                                name: "Marcus R.",
                                location: "Queens, NY",
                                rating: 5,
                                text: "Best breeder in NY! Our little guy is so healthy, well-socialized, and has the best temperament."
                            },
                            {
                                name: "Elena G.",
                                location: "Albany, NY",
                                rating: 4.8,
                                text: "The level of care and genetics here is unmatched. You can tell they really love these dogs."
                            },
                            {
                                name: "The Jacobs Family",
                                location: "Scarsdale, NY",
                                rating: 5,
                                text: "We searched for months and finally found the perfect match. Healthy, happy, and so sweet!"
                            },
                            {
                                name: "David S.",
                                location: "Manhattan, NY",
                                rating: 4.9,
                                text: "Professional, knowledgeable, and genuinely cares. The follow-up support has been incredible."
                            },
                            {
                                name: "Jessica K.",
                                location: "Buffalo, NY",
                                rating: 5,
                                text: "Our vet was deeply impressed by the health clearances and structural quality. Elite bloodlines."
                            }
                        ].map((t, i) => (
                            <div key={i} className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
                                <div className="flex gap-1 mb-4">
                                    {[...Array(5)].map((_, starIndex) => (
                                        <Star
                                            key={starIndex}
                                            size={16}
                                            className={`${starIndex < Math.floor(t.rating) ? 'fill-green-primary text-green-primary' : 'text-gray-200'} ${starIndex === Math.floor(t.rating) && t.rating % 1 !== 0 ? 'fill-green-primary/50 text-green-primary' : ''}`}
                                        />
                                    ))}
                                </div>
                                <p className="text-text-secondary text-sm italic mb-6 leading-relaxed">
                                    "{t.text}"
                                </p>
                                <div className="flex items-center gap-3 border-t border-gray-50 pt-4">
                                    <div className="w-10 h-10 bg-cream rounded-full flex items-center justify-center font-bold text-green-primary text-xs">
                                        {t.name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <div>
                                        <p className="font-serif font-black text-text-primary text-sm italic">{t.name}</p>
                                        <p className="text-[9px] font-black uppercase tracking-wider text-green-primary/70">{t.location}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
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
