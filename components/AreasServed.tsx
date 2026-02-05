'use client';

import { MapPin, Navigation, Map } from 'lucide-react';
import PaintSmear from './PaintSmear';

const CITIES = [
    { name: "Schenectady", desc: "Our HQ. The heart of the Royal bloodline." },
    { name: "Saratoga Springs", desc: "Where luxury meets Frenchie elegance." },
    { name: "Albany", desc: "Serving the Capital's most discerning families." },
    { name: "Troy", desc: "Bringing exotic structure to the collar city." },
    { name: "The Hamptons", desc: "Exclusive delivery for the island's elite." },
    { name: "Manhattan", desc: "Hand-delivering Gremlins to the Big Apple." },
];

export default function AreasServed() {
    return (
        <section id="areas" className="py-24 bg-cream-light relative overflow-hidden">
            <PaintSmear side="left" opacity="opacity-[0.02]" rotate={180} />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    <div className="space-y-8">
                        <div className="inline-block transform -rotate-1">
                            <span className="font-marker text-green-primary text-2xl tracking-widest uppercase">Local Roots</span>
                        </div>
                        <h2 className="font-serif text-5xl md:text-7xl font-black leading-tight text-text-primary">
                            Built in New York. <br />
                            <span className="text-green-primary">Known Everywhere.</span>
                        </h2>
                        <p className="text-text-secondary text-lg leading-relaxed">
                            While our puppies find homes across the globe, our hearts remain in the Capital Region. We are proud members of the NY breeding community, bringing a New York toughness and luxury standard to every litter.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                            {CITIES.map((city, i) => (
                                <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                    <MapPin className="text-green-primary mt-1 shrink-0" size={20} />
                                    <div>
                                        <h4 className="font-serif font-bold text-text-primary">{city.name}</h4>
                                        <p className="text-xs text-gray-400">{city.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative mt-12 lg:mt-0">
                        {/* Stylized Local Map Concept */}
                        <div className="bg-text-primary p-8 md:p-12 rounded-[3rem] md:rounded-[4rem] text-white text-center shadow-2xl relative overflow-hidden group border border-gray-800">
                            <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1524660988544-2fd7822d0b3d?auto=format&fit=crop&q=80&w=1000')] bg-cover grayscale group-hover:scale-110 transition-transform duration-700"></div>

                            <div className="relative z-10 space-y-6">
                                <div className="w-16 h-16 md:w-20 md:h-20 bg-green-primary rounded-2xl md:rounded-3xl flex items-center justify-center mx-auto shadow-lg shadow-green-primary/40 transform rotate-12 group-hover:rotate-0 transition-transform">
                                    <Navigation size={32} className="fill-white md:w-10 md:h-10" />
                                </div>
                                <h3 className="font-marker text-3xl md:text-5xl mt-6">NY Standard.</h3>
                                <p className="font-serif italic text-lg md:text-xl text-gray-400 max-w-xs mx-auto">"If they can thrive in the Capital Region, they can thrive anywhere."</p>

                                <div className="pt-6 md:pt-8 flex flex-col items-center gap-4">
                                    <div className="flex -space-x-3 md:-space-x-4">
                                        {[1, 2, 3, 4].map(i => (
                                            <div key={i} className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 md:border-4 border-text-primary bg-gray-200 overflow-hidden shadow-lg">
                                                <img src={`/images/frenchie-pup-${i}.jpg`} className="w-full h-full object-cover" alt="Happy Local Pups" />
                                            </div>
                                        ))}
                                    </div>
                                    <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-green-light">Over 500+ Happy NY Families</p>
                                </div>
                            </div>

                            {/* Floating Map Tag - Adjusted for Mobile */}
                            <div className="absolute top-4 right-4 md:top-10 md:right-10 bg-white text-text-primary px-3 py-1.5 rounded-full font-black text-[8px] md:text-[10px] animate-pulse shadow-xl z-20">
                                LIVE FROM SCHENECTADY
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
