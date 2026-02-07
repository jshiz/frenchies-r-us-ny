import { STUDS } from '@/lib/dogData';
import PaintSmear from './PaintSmear';

export default function StudGrid() {
    return (
        <section id="studs" className="py-24 bg-cream relative overflow-hidden">
            <PaintSmear side="left" opacity="opacity-[0.03]" rotate={45} />

            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-block transform -rotate-1 mb-2">
                        <span className="font-marker text-green-primary text-xl">Elite Genetics</span>
                    </div>
                    <h2 className="font-serif text-5xl md:text-6xl font-black tracking-tighter uppercase">The Studs</h2>
                    <p className="text-text-secondary max-w-2xl mx-auto text-lg font-medium">
                        World-class structure and rare DNA. Meet the kings of Frenchies R Us NY.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
                    {STUDS.map((stud) => (
                        <div
                            key={stud.id}
                            className="w-full max-w-sm bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-100 flex flex-col items-center text-center"
                        >
                            {/* Image Container */}
                            <div className="relative w-full aspect-square overflow-hidden">
                                <img
                                    src={stud.img}
                                    alt={`${stud.name} Stud`}
                                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-8 w-full border-t border-gray-50 bg-gradient-to-b from-white to-cream/20">
                                <h3 className="font-serif text-3xl font-black text-text-primary mb-2 uppercase tracking-tight leading-tight">{stud.name}</h3>
                                <div className="flex flex-col gap-1 items-center">
                                    {stud.details.map((detail, idx) => (
                                        <p key={idx} className="text-green-primary font-black uppercase tracking-widest text-[10px] leading-tight">
                                            {detail}
                                        </p>
                                    ))}
                                    <p className="text-text-secondary font-bold text-sm italic mt-2">{stud.gender}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
