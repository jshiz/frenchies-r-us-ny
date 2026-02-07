'use client';

import { ShieldCheck, Stethoscope, HeartPulse, FileText, CheckCircle2 } from 'lucide-react';

const GUARANTEES = [
    {
        icon: <ShieldCheck className="text-green-primary" />,
        title: "1-Year Health Guarantee",
        desc: "We stand behind our bloodlines. Every pup comes with a protective 1-year health agreement sent directly to your email."
    },
    {
        icon: <Stethoscope className="text-green-primary" />,
        title: "Triple Vet Checked",
        desc: "A thorough evaluation by NY's top reproductive vets before they ever leave our sight."
    },
    {
        icon: <HeartPulse className="text-green-primary" />,
        title: "De-wormed & Vaccinated",
        desc: "Up-to-date on all age-appropriate shots and preventative treatments. No shortcuts."
    },
    {
        icon: <FileText className="text-green-primary" />,
        title: "DNA Verification",
        desc: "Animal Genetics verified certificates provided with every 'Exotic' or 'New Shade' listing."
    },
];

export default function HealthGuarantee() {
    return (
        <section id="trust" className="py-24 bg-cream relative overflow-hidden">
            {/* Background Graphic */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-white/50 -skew-x-12 transform translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    <div className="order-2 lg:order-1">
                        <div className="bg-white p-8 md:p-12 rounded-[3.5rem] shadow-2xl border-4 border-white transform rotate-0 md:-rotate-1 relative group hover:rotate-0 transition-transform duration-500">
                            <div className="absolute -top-6 -right-6 bg-green-primary text-white p-4 rounded-full shadow-lg transform rotate-12 group-hover:scale-110 transition-transform">
                                <ShieldCheck size={40} />
                            </div>

                            <h3 className="font-serif text-3xl font-black mb-6">The Royal Covenant</h3>
                            <p className="text-text-secondary leading-relaxed mb-8">
                                Security isn't just a word; it's a commitment. When you bring home a Frenchie from our HQ, you receive a digital documentation packet via email detailing their lineage, health history, and our lifetime commitment to you.
                            </p>

                            <ul className="space-y-4">
                                {[
                                    "Standard 1-Year Congenital Guarantee",
                                    "Health Certificate from Licensed Vet",
                                    "Microchip Registration Information",
                                    "Detailed Feeding & Care Guide",
                                    "Lifetime Breeder Support & Advice"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 font-bold text-sm text-text-primary">
                                        <CheckCircle2 size={18} className="text-green-primary" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-10 p-6 bg-cream-dark/30 rounded-2xl border border-cream-dark/50">
                                <p className="text-xs font-mono uppercase tracking-tighter text-gray-500 mb-2">Guarantee Status:</p>
                                <p className="font-marker text-green-dark text-xl">Legally Verified & Binding</p>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 space-y-8">
                        <div className="inline-block transform rotate-1">
                            <span className="font-marker text-green-primary text-2xl tracking-widest uppercase">Ironclad Trust</span>
                        </div>
                        <h2 className="font-serif text-5xl md:text-7xl font-black leading-tight text-text-primary">
                            Peace of Mind <br />
                            <span className="italic">Is Standard.</span>
                        </h2>
                        <p className="text-text-secondary text-lg leading-relaxed max-w-xl">
                            Buying a high-end Frenchie is an investment. We protect that investment with the industry's most transparent and comprehensive health guarantee.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6">
                            {GUARANTEES.map((g, i) => (
                                <div key={i} className="space-y-3">
                                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md">
                                        {g.icon}
                                    </div>
                                    <h4 className="font-serif text-xl font-bold">{g.title}</h4>
                                    <p className="text-sm text-gray-500 leading-relaxed">{g.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
