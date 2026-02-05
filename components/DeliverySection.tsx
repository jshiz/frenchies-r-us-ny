'use client';

import { Plane, Truck, MapPin, Globe, CheckCircle } from 'lucide-react';

const METHODS = [
    {
        title: "Flight Nanny Service",
        desc: "Your puppy flies in the cabin at the nanny's feet. Hand-delivered at your local airport.",
        price: "Premium Option"
    },
    {
        title: "Ground Transport",
        desc: "Climate-controlled private puppy transport for East Coast & Tri-state families.",
        price: "Reliable & Fast"
    },
    {
        title: "HQ Pickup",
        desc: "Visit our Capital Region HQ. Meet the parents and see how your pup was raised.",
        price: "Always Recommended"
    },
];

export default function DeliverySection() {
    return (
        <section id="delivery" className="py-24 bg-white relative overflow-hidden">
            {/* Subtle Gradient background instead of missing image */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-cream/30 to-transparent pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20 space-y-4">
                    <div className="inline-block transform -rotate-2">
                        <span className="font-marker text-green-primary text-2xl tracking-widest uppercase">Coast to Coast</span>
                    </div>
                    <h2 className="font-serif text-5xl md:text-7xl font-black text-text-primary">Worldwide Shipping.</h2>
                    <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                        Distance is never an issue for royalty. Whether you're in NYC, LA, or London, we ensure your companion arrives in style, comfort, and safety.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {METHODS.map((m, i) => (
                        <div key={i} className="group relative bg-cream p-10 rounded-[3rem] border border-transparent hover:border-green-primary/20 hover:bg-white transition-all duration-500 shadow-sm hover:shadow-2xl overflow-hidden">
                            {/* Decorative Plane Icon */}
                            <div className="absolute -top-4 -right-4 text-green-primary opacity-10 group-hover:opacity-20 transition-opacity">
                                <Plane size={150} />
                            </div>

                            <h3 className="font-serif text-3xl font-black mb-4 relative z-10">{m.title}</h3>
                            <p className="text-text-secondary mb-8 leading-relaxed relative z-10">{m.desc}</p>

                            <div className="flex items-center gap-2 font-marker text-green-primary relative z-10">
                                <CheckCircle size={18} />
                                <span>{m.price}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Dynamic Map Component Placeholder / Illustration */}
                <div className="mt-20 relative p-1 md:p-6 bg-gray-100 rounded-[3rem] md:rounded-[5rem] overflow-hidden shadow-inner border-4 md:border-8 border-white">
                    <div className="aspect-[4/5] md:aspect-[21/9] bg-[url('https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center grayscale opacity-30"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 md:p-12 bg-green-dark/30 backdrop-blur-[2px]">
                        <div className="bg-white/95 backdrop-blur-md p-6 md:p-16 rounded-[2.5rem] md:rounded-[4rem] shadow-2xl text-center max-w-2xl transform transition-transform border border-white">
                            <Globe className="text-green-primary mx-auto mb-4 md:mb-8 animate-spin-slow" size={48} />
                            <h4 className="font-serif text-2xl md:text-5xl font-black mb-4 uppercase tracking-tighter leading-none">NO CARGO.<br className="md:hidden" /> EVER.</h4>
                            <p className="text-text-secondary font-bold text-sm md:text-xl leading-snug md:leading-relaxed">
                                We refuse to ship our puppies in the cargo hold. Every Royal Frenchie is accompanied by a human guardian door-to-door. Luxury deserves nothing less.
                            </p>
                            <div className="mt-6 md:mt-12 flex flex-wrap justify-center gap-2 md:gap-4">
                                {['NYC', 'LAX', 'MIA', 'SFO', 'DXB', 'LHR'].map(airport => (
                                    <span key={airport} className="px-3 py-1 bg-text-primary text-white font-mono text-[9px] md:text-xs rounded-full shadow-lg shrink-0">
                                        {airport} READY
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
