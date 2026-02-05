import Link from 'next/link';
import { Heart, Activity, Sparkles, ShieldCheck } from 'lucide-react';
import { PUPPIES } from '@/lib/puppies';
import PaintSmear from './PaintSmear';

export default function PuppyGrid() {
    return (
        <section id="puppies" className="py-24 bg-cream-light relative overflow-hidden">
            <PaintSmear side="left" opacity="opacity-[0.03]" rotate={45} />
            <PaintSmear side="right" opacity="opacity-[0.03]" rotate={-15} />

            {/* Decorative Paint Smear Banner */}
            {/* Decorative Paint Smear */}
            <div className="absolute top-0 left-0 w-full h-24 bg-paint-smear opacity-10 transform rotate-180"></div>

            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-block transform -rotate-1 mb-2">
                        <span className="font-marker text-green-primary text-xl">Top Quality</span>
                    </div>
                    <h2 className="font-serif text-5xl font-bold">Fluffy Frenchie Pups</h2>
                    <p className="text-text-secondary max-w-2xl mx-auto text-lg">
                        DNA verified, Health Tested, and raised in our home. Pick your future royal family member.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PUPPIES.map((pup, i) => (
                        <Link
                            key={pup.id}
                            href={`/puppies/${pup.slug}`}
                            className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group border border-gray-100"
                        >
                            {/* Image Container */}
                            <div className="relative h-80 overflow-hidden">
                                {/* Status Badge */}
                                <div className={`absolute top-4 right-4 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider z-10 shadow-md ${pup.status === 'Available' ? 'bg-green-primary text-white' :
                                    pup.status === 'Reserved' ? 'bg-gray-800 text-white' : 'bg-wood text-white'
                                    }`}>
                                    {pup.status}
                                </div>

                                <img
                                    src={pup.img}
                                    alt={`${pup.color} French Bulldog puppy`}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                {/* Royal Seal */}
                                <div className="absolute bottom-4 left-4 z-10 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                                    <div className="bg-white/20 backdrop-blur-md border border-white/30 text-white text-[10px] font-bold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-xl">
                                        <ShieldCheck size={12} className="text-green-light" />
                                        ROYAL VERIFIED
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="font-serif text-3xl font-bold text-text-primary">{pup.name}</h3>
                                    <div className="flex flex-col items-end">
                                        <span className="text-xs font-bold px-2 py-1 bg-cream rounded-md text-text-secondary uppercase mb-1">{pup.gender}</span>
                                    </div>
                                </div>

                                <div className="space-y-3 mb-8">
                                    <div className="flex items-center text-sm font-medium text-text-secondary gap-2">
                                        <Sparkles size={16} className="text-green-primary" />
                                        {pup.color} • {pup.age}
                                    </div>
                                    <div className="flex items-center text-xs text-gray-400 gap-1.5 font-mono bg-gray-50 p-2 rounded-lg">
                                        <Activity size={12} />
                                        DNA: {pup.dna}
                                    </div>
                                </div>

                                <div className="block w-full text-center py-4 rounded-2xl font-bold text-sm tracking-widest uppercase transition-all shadow-md group-hover:shadow-lg bg-text-primary text-white group-hover:bg-green-primary">
                                    {pup.status === 'Available' ? 'View Details 🐾' : pup.status === 'Reserved' ? 'Adopted' : 'Join Waitlist'}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Color Filter Links for SEO */}
                <div className="text-center mt-16 space-y-6">
                    <h3 className="font-marker text-2xl text-text-primary">Browse by Color</h3>
                    <div className="flex flex-wrap justify-center gap-3">
                        {['blue', 'lilac', 'merle', 'isabella', 'platinum', 'cream', 'chocolate'].map((color) => (
                            <Link
                                key={color}
                                href={`/colors/${color}`}
                                className="px-6 py-3 bg-white border-2 border-gray-200 rounded-full hover:border-green-primary hover:bg-green-primary hover:text-white transition-all font-semibold capitalize"
                            >
                                {color} Frenchies
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
