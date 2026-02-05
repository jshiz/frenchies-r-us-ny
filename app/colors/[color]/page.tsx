import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft, Sparkles, Dna, TrendingUp, ShieldCheck } from 'lucide-react';
import { getColorInfo, getAllColorInfo } from '@/lib/colors';
import { getPuppiesByColor } from '@/lib/puppies';
import { generateSEOTitle, generateSEODescription } from '@/lib/seo';
import PaintSmear from '@/components/PaintSmear';

interface Props {
    params: Promise<{ color: string }>;
}

export async function generateStaticParams() {
    const colors = getAllColorInfo();
    return colors.map((color) => ({ color: color.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { color } = await params;
    const colorInfo = getColorInfo(color);
    if (!colorInfo) return {};

    return {
        title: generateSEOTitle('color', colorInfo),
        description: generateSEODescription('color', colorInfo),
        keywords: colorInfo.seoKeywords.join(', '),
        openGraph: {
            title: `${colorInfo.name}s for Sale | Frenchies R Us NY`,
            description: colorInfo.description,
        },
    };
}

export default async function ColorLandingPage({ params }: Props) {
    const { color } = await params;
    const colorInfo = getColorInfo(color);
    if (!colorInfo) notFound();

    const availablePups = getPuppiesByColor(color);

    return (
        <main className="min-h-screen bg-cream-light pt-32 pb-24 relative overflow-hidden">
            <PaintSmear side="left" opacity="opacity-[0.03]" rotate={45} />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Back Link */}
                <Link href="/#puppies" className="inline-flex items-center gap-2 text-text-secondary hover:text-green-primary mb-12 transition-colors group">
                    <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Collection
                </Link>

                {/* Condensed Hero Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <span className={`px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter ${colorInfo.rarity === 'Ultra Rare' ? 'bg-yellow-500 text-black' :
                                    colorInfo.rarity === 'Exotic' ? 'bg-green-primary text-white' :
                                        'bg-gray-800 text-white'
                                }`}>
                                {colorInfo.rarity}
                            </span>
                            <span className="font-marker text-green-primary text-sm uppercase tracking-widest">Scientific Standard</span>
                        </div>

                        <h1 className="font-serif text-6xl md:text-8xl font-black mb-8 leading-none tracking-tighter">
                            {colorInfo.name}s
                        </h1>
                        <p className="text-xl text-text-secondary max-w-xl mb-10 leading-relaxed font-medium italic">
                            "{colorInfo.description}"
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 transform -rotate-1 hover:rotate-0 transition-transform">
                                <Dna className="text-green-primary mb-3" size={24} />
                                <p className="text-[10px] uppercase font-black text-gray-400 mb-1">DNA Profile</p>
                                <p className="font-mono font-bold text-lg text-text-primary">{colorInfo.dnaCode}</p>
                            </div>
                            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 transform rotate-1 hover:rotate-0 transition-transform">
                                <TrendingUp className="text-green-primary mb-3" size={24} />
                                <p className="text-[10px] uppercase font-black text-gray-400 mb-1">Market Value</p>
                                <p className="font-bold text-lg text-text-primary">{colorInfo.priceRange}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-100 rounded-[3rem] overflow-hidden aspect-[4/5] relative shadow-2xl skew-y-1">
                        <div className="absolute inset-0 bg-gradient-to-tr from-green-primary/20 to-transparent"></div>
                        <div className="absolute inset-0 flex items-center justify-center p-12 text-center opacity-50">
                            <p className="font-marker text-4xl text-gray-400 rotate-12 uppercase">{colorInfo.name} Gallery</p>
                        </div>
                        {availablePups.length > 0 && (
                            <img
                                src={availablePups[0].img}
                                alt={colorInfo.name}
                                className="absolute inset-0 w-full h-full object-cover -skew-y-1"
                            />
                        )}
                    </div>
                </div>

                {/* Simplified Available Puppies Grid */}
                <div className="mb-24">
                    <div className="flex items-end justify-between mb-12 border-b border-gray-200 pb-8">
                        <div>
                            <h2 className="font-serif text-4xl font-black">Available Offspring</h2>
                            <p className="text-text-secondary mt-2">Currently ready for their forever homes.</p>
                        </div>
                        <div className="hidden md:block">
                            <span className="font-marker text-gray-300 text-5xl">The Lineage</span>
                        </div>
                    </div>

                    {availablePups.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {availablePups.map((pup) => (
                                <Link
                                    key={pup.id}
                                    href={`/puppies/${pup.slug}`}
                                    className="group bg-white rounded-[2.5rem] overflow-hidden shadow-md hover:shadow-2xl transition-all border border-gray-100 relative"
                                >
                                    <div className="relative h-96 overflow-hidden">
                                        <img
                                            src={pup.img}
                                            alt={pup.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute top-6 left-6 z-10">
                                            <div className="bg-white/90 backdrop-blur-sm text-text-primary px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-green-primary">
                                                {pup.status}
                                            </div>
                                        </div>
                                        <div className="absolute bottom-6 left-6 z-10">
                                            <div className="bg-green-primary/30 backdrop-blur-md border border-white/30 text-white text-[10px] font-bold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-xl">
                                                <ShieldCheck size={12} className="text-white" />
                                                ROYAL VERIFIED
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-8">
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <h3 className="font-serif text-3xl font-black leading-none mb-1 group-hover:text-green-primary transition-colors">{pup.name}</h3>
                                                <p className="text-text-secondary text-xs uppercase tracking-widest font-bold">{pup.gender} • {pup.age}</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="font-mono text-[10px] text-gray-400 font-bold mb-1">GENETICS</p>
                                                <p className="font-mono text-xs font-black text-green-dark">{pup.dna}</p>
                                            </div>
                                        </div>
                                        <div className="block w-full text-center py-4 rounded-2xl font-black text-xs tracking-widest uppercase bg-text-primary text-white group-hover:bg-green-primary transition-colors">
                                            View Profile 🐾
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="bg-white p-16 rounded-[3.5rem] shadow-sm border border-gray-100 text-center">
                            <h3 className="font-serif text-3xl font-black mb-4">Production in Progress</h3>
                            <p className="text-xl text-text-secondary mb-10 max-w-xl mx-auto italic">
                                We are currently awaiting our next flagship litter of {colorInfo.name}s. Join the inner circle to be notified first.
                            </p>
                            <Link
                                href="#contact"
                                className="inline-block bg-text-primary text-white px-10 py-5 rounded-full font-black text-xs uppercase tracking-widest hover:bg-green-primary transition-colors shadow-xl"
                            >
                                Secure a Priority Spot
                            </Link>
                        </div>
                    )}
                </div>

                {/* Condensed Characteristics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
                    <div className="bg-text-primary text-white p-12 rounded-[3.5rem] shadow-2xl relative overflow-hidden group">
                        <PaintSmear side="right" opacity="opacity-10" rotate={-10} />
                        <h2 className="font-serif text-3xl font-black mb-8 relative z-10">Signature Profile</h2>
                        <ul className="space-y-6 relative z-10">
                            {colorInfo.characteristics.map((char, i) => (
                                <li key={i} className="flex items-center gap-4 group/item">
                                    <div className="w-1.5 h-1.5 bg-green-primary rounded-full group-hover/item:scale-150 transition-transform"></div>
                                    <span className="text-lg font-medium text-gray-300 group-hover/item:text-white transition-colors">{char}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-serif text-4xl font-black mb-6">Scientific Accuracy</h2>
                        <p className="text-lg text-text-secondary leading-relaxed mb-8 font-medium">
                            Every {colorInfo.name} in our program is DNA verified and physically evaluated against the "Empire Standard" for structure and soundness.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            {colorInfo.relatedColors.map((relatedSlug) => {
                                const related = getColorInfo(relatedSlug);
                                if (!related) return null;
                                return (
                                    <Link
                                        key={relatedSlug}
                                        href={`/colors/${relatedSlug}`}
                                        className="px-6 py-3 bg-white border border-gray-200 rounded-full hover:border-green-primary hover:text-green-primary hover:-translate-y-1 transition-all font-black text-[10px] uppercase tracking-widest"
                                    >
                                        {related.name} Lineage
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
