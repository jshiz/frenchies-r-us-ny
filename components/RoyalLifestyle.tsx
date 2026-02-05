'use client';

import { Star, Trophy, Home, Heart } from 'lucide-react';

const PERKS = [
    { icon: <Trophy />, title: "Superior Bloodlines", desc: "We only breed for the 'Nuclear' standard—compact, cobby, and heavy-boned." },
    { icon: <Home />, title: "Living Room Raised", desc: "No cages. Our pups grow up on luxury rugs, watching cartoons with our family." },
    { icon: <Star />, title: "A+ Socialization", desc: "Introduced to kids, cats, and common household vibes from week 1." },
    { icon: <Heart />, title: "Lifetime Mentorship", desc: "Once you take a pup home, you have us on speed dial for life." },
];

export default function RoyalLifestyle() {
    return (
        <section id="lifestyle" className="py-24 bg-white relative">
            {/* Decorative Gradient Background */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#7B9A6D_0%,transparent_70%)]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <div className="inline-block transform rotate-1 bg-text-primary text-white font-marker text-lg px-4 py-1 mb-6 shadow-lg">
                        The Royal Treatment
                    </div>
                    <h2 className="font-serif text-5xl md:text-7xl font-black mb-6">Raising the Bar.</h2>
                    <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        We aren't a kennel. We're a family headquarters. See why our puppies are the most socialized, confident, and healthy Frenchies on the market.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {PERKS.map((perk, i) => (
                        <div key={i} className="group p-10 bg-cream rounded-[2.5rem] hover:bg-green-primary transition-all duration-500 shadow-sm hover:shadow-2xl transform hover:-translate-y-4">
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 text-green-primary shadow-sm group-hover:scale-110 transition-transform">
                                {perk.icon}
                            </div>
                            <h3 className="font-serif text-2xl font-bold mb-4 group-hover:text-white transition-colors">{perk.title}</h3>
                            <p className="text-text-secondary text-sm leading-relaxed group-hover:text-white/80 transition-colors">{perk.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Action Shot Gallery (Small) */}
                <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="h-64 rounded-3xl overflow-hidden shadow-xl transform -rotate-1 hover:rotate-0 transition-all duration-500">
                        <img src="/images/frenchie-pup-6.jpg" className="w-full h-full object-cover" alt="Happy Frenchie" />
                    </div>
                    <div className="h-64 rounded-3xl overflow-hidden shadow-xl translate-y-4 hover:translate-y-0 transition-all duration-500">
                        <img src="/images/frenchie-pup-15.jpg" className="w-full h-full object-cover" alt="Royal Treatment" />
                    </div>
                    <div className="h-64 rounded-3xl overflow-hidden shadow-xl transform rotate-1 hover:rotate-0 transition-all duration-500">
                        <img src="/images/frenchie-pup-22.jpg" className="w-full h-full object-cover" alt="Adventure Pups" />
                    </div>
                </div>
            </div>
        </section>
    );
}
