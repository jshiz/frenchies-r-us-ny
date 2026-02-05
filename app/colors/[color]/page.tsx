import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft, Sparkles, Dna, TrendingUp } from 'lucide-react';
import { getColorInfo, getAllColorInfo } from '@/lib/colors';
import { getPuppiesByColor, PUPPIES } from '@/lib/puppies';
import { generateSEOTitle, generateSEODescription } from '@/lib/seo';

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
        <main className="min-h-screen bg-white pt-24">
            <div className="max-w-7xl mx-auto px-6 py-12">
                {/* Back Link */}
                <Link href="/#puppies" className="inline-flex items-center gap-2 text-text-secondary hover:text-green-primary mb-8 transition-colors">
                    <ChevronLeft size={20} />
                    All Colors
                </Link>

                {/* Hero Section */}
                <div className="mb-16">
                    <div className="flex items-center gap-3 mb-4">
                        <span className={`px-4 py-2 rounded-full text-xs font-bold uppercase ${colorInfo.rarity === 'Ultra Rare' ? 'bg-yellow-500 text-black' :
                            colorInfo.rarity === 'Exotic' ? 'bg-purple-500 text-white' :
                                colorInfo.rarity === 'Rare' ? 'bg-blue-500 text-white' :
                                    'bg-gray-500 text-white'
                            }`}>
                            {colorInfo.rarity}
                        </span>
                    </div>

                    <h1 className="font-serif text-5xl md:text-7xl font-black mb-6">{colorInfo.name}s</h1>
                    <p className="text-xl text-text-secondary max-w-3xl mb-8 leading-relaxed">{colorInfo.description}</p>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        <div className="bg-cream p-6 rounded-2xl">
                            <Dna className="text-green-primary mb-3" size={32} />
                            <p className="text-sm text-text-secondary mb-1">DNA Code</p>
                            <p className="font-mono font-bold text-lg">{colorInfo.dnaCode}</p>
                        </div>

                        <div className="bg-cream p-6 rounded-2xl">
                            <TrendingUp className="text-green-primary mb-3" size={32} />
                            <p className="text-sm text-text-secondary mb-1">Price Range</p>
                            <p className="font-bold text-lg">{colorInfo.priceRange}</p>
                        </div>

                        <div className="bg-cream p-6 rounded-2xl">
                            <Sparkles className="text-green-primary mb-3" size={32} />
                            <p className="text-sm text-text-secondary mb-1">Rarity</p>
                            <p className="font-bold text-lg">{colorInfo.rarity}</p>
                        </div>
                    </div>
                </div>

                {/* Characteristics */}
                <div className="mb-16 bg-gray-50 p-8 md:p-12 rounded-3xl">
                    <h2 className="font-serif text-3xl font-bold mb-6">Key Characteristics</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {colorInfo.characteristics.map((char, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-green-primary rounded-full"></div>
                                <span className="text-lg">{char}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Available Puppies */}
                <div className="mb-16">
                    <h2 className="font-serif text-4xl font-bold mb-8">Available {colorInfo.name}s</h2>

                    {availablePups.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {availablePups.map((pup) => (
                                <Link
                                    key={pup.id}
                                    href={`/puppies/${pup.slug}`}
                                    className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-100"
                                >
                                    <div className="relative h-80 overflow-hidden">
                                        <img
                                            src={pup.img}
                                            alt={`${pup.color} French Bulldog ${pup.name}`}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold ${pup.status === 'Available' ? 'bg-green-primary text-white' : 'bg-gray-800 text-white'
                                            }`}>
                                            {pup.status}
                                        </div>
                                    </div>

                                    <div className="p-6">
                                        <h3 className="font-serif text-2xl font-bold mb-2">{pup.name}</h3>
                                        <p className="text-text-secondary text-sm mb-4">{pup.gender} • {pup.age}</p>
                                        <p className="font-mono text-xs text-gray-400">DNA: {pup.dna}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="bg-cream p-12 rounded-3xl text-center">
                            <p className="text-xl text-text-secondary mb-6">
                                We don't have any {colorInfo.name}s available right now, but we have litters coming soon!
                            </p>
                            <Link
                                href="#contact"
                                className="inline-block bg-green-primary text-white px-8 py-4 rounded-full font-bold hover:bg-green-dark transition-colors"
                            >
                                Join Priority Waitlist
                            </Link>
                        </div>
                    )}
                </div>

                {/* Related Colors */}
                {colorInfo.relatedColors.length > 0 && (
                    <div>
                        <h2 className="font-serif text-3xl font-bold mb-6">Related Colors</h2>
                        <div className="flex flex-wrap gap-4">
                            {colorInfo.relatedColors.map((relatedSlug) => {
                                const related = getColorInfo(relatedSlug);
                                if (!related) return null;

                                return (
                                    <Link
                                        key={relatedSlug}
                                        href={`/colors/${relatedSlug}`}
                                        className="px-6 py-3 bg-cream rounded-full hover:bg-green-primary hover:text-white transition-colors font-semibold"
                                    >
                                        {related.name} →
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}
