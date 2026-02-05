import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Phone, Mail, Share2, ChevronLeft, CheckCircle, ShieldCheck, Dna, Info } from 'lucide-react';
import { getPuppyBySlug, getAllPuppySlugs } from '@/lib/puppies';
import { generateSEOTitle, generateSEODescription, generatePuppyStructuredData } from '@/lib/seo';
import PaintSmear from '@/components/PaintSmear';

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const slugs = getAllPuppySlugs();
    return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const puppy = getPuppyBySlug(slug);
    if (!puppy) return {};

    return {
        title: generateSEOTitle('puppy', puppy),
        description: generateSEODescription('puppy', puppy),
        keywords: puppy.seoKeywords?.join(', '),
        openGraph: {
            title: `${puppy.color} French Bulldog - ${puppy.name}`,
            description: puppy.description || '',
            images: [puppy.img],
        },
    };
}

export default async function PuppyDetailPage({ params }: Props) {
    const { slug } = await params;
    const puppy = getPuppyBySlug(slug);
    if (!puppy) notFound();

    const structuredData = generatePuppyStructuredData(puppy);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />

            <main className="min-h-screen bg-cream-light pt-32 pb-24 relative overflow-hidden">
                <PaintSmear side="right" opacity="opacity-[0.03]" rotate={-15} />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    {/* Back Link */}
                    <Link href="/#puppies" className="inline-flex items-center gap-2 text-text-secondary hover:text-green-primary mb-12 transition-colors group">
                        <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Available Pups
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        {/* Image Gallery Side */}
                        <div className="space-y-6">
                            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl aspect-square bg-white border-8 border-white group">
                                <img
                                    src={puppy.img}
                                    alt={puppy.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute top-8 right-8 z-10">
                                    <div className="bg-white/90 backdrop-blur-md px-6 py-2 rounded-full shadow-xl transform rotate-3 border-2 border-green-primary font-black text-xs uppercase tracking-widest">
                                        Royal Verified
                                    </div>
                                </div>
                            </div>

                            {/* DNA Spotlight Card */}
                            <div className="bg-text-primary text-white p-8 rounded-[2.5rem] shadow-xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-green-primary/10 rounded-full blur-3xl group-hover:bg-green-primary/20 transition-colors"></div>
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-10 h-10 bg-green-primary rounded-full flex items-center justify-center">
                                        <Dna size={20} className="text-white" />
                                    </div>
                                    <h3 className="font-serif text-xl font-black">Genetic Blueprint</h3>
                                </div>
                                <p className="font-mono text-3xl font-black text-green-light mb-2 tracking-tighter">{puppy.dna}</p>
                                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Fully Tested & Verified Lineage</p>
                            </div>
                        </div>

                        {/* Narrative & Reservation Side */}
                        <div className="space-y-10">
                            <div>
                                <div className="flex items-center gap-3 mb-4 font-marker text-green-primary text-xl tracking-widest uppercase">
                                    Featured Prospect
                                </div>
                                <h1 className="font-serif text-6xl md:text-8xl font-black mb-4 leading-none tracking-tighter">{puppy.name}</h1>
                                <p className="text-2xl md:text-3xl text-text-secondary font-serif italic border-l-4 border-green-primary pl-6 mb-8">
                                    {puppy.color} French Bulldog • {puppy.gender} • {puppy.age}
                                </p>
                            </div>

                            <div className="prose prose-lg text-text-secondary font-medium leading-relaxed max-w-xl">
                                <p>"{puppy.description}"</p>
                            </div>

                            {/* Trust Factors Grid */}
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    '1-Year Health Guarantee',
                                    'Triple Vet Checked',
                                    'Microchipped & Registered',
                                    'Lifetime Mentorship'
                                ].map((feature, i) => (
                                    <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                                        <div className="w-6 h-6 bg-green-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                            <CheckCircle size={14} className="text-green-primary" />
                                        </div>
                                        <span className="text-[10px] font-black uppercase tracking-tight text-text-primary">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Reservation Engine */}
                            <div className="bg-white p-8 md:p-10 rounded-[3rem] shadow-2xl border border-gray-100 space-y-6 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-cream blur-3xl"></div>

                                <div className="flex items-center justify-between border-b border-gray-100 pb-6 mb-6">
                                    <div>
                                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-1">Reservation Status</p>
                                        <p className={`text-xl font-black uppercase ${puppy.status === 'Available' ? 'text-green-primary' : 'text-gray-800'}`}>
                                            {puppy.status === 'Available' ? '🟢 Open for Deposit' : '🔒 Secured'}
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-1">Global Standard</p>
                                        <p className="text-xl font-black">NY HQ Delivery</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <Link
                                        href="tel:5182277773"
                                        className="bg-green-primary text-white text-center px-8 py-5 rounded-full font-black text-xs uppercase tracking-widest hover:bg-green-dark transition-all shadow-xl flex items-center justify-center gap-2 group"
                                    >
                                        <Phone size={16} className="group-hover:rotate-12 transition-transform" />
                                        Call Breeder
                                    </Link>
                                    <Link
                                        href={`mailto:info@frenchiesrusny.com?subject=Interested in ${puppy.name}`}
                                        className="bg-text-primary text-white text-center px-8 py-5 rounded-full font-black text-xs uppercase tracking-widest hover:bg-black transition-all flex items-center justify-center gap-2"
                                    >
                                        <Mail size={16} />
                                        Secure Puppy
                                    </Link>
                                </div>
                                <p className="text-center text-[10px] text-gray-400 font-bold italic">
                                    *Worldwide flight nanny delivery available upon request
                                </p>
                            </div>

                            {/* Share & More */}
                            <div className="flex items-center gap-8 pt-4">
                                <Link
                                    href={`/colors/${puppy.colorSlug}`}
                                    className="text-xs font-black uppercase tracking-widest text-green-primary hover:text-green-dark underline decoration-2 underline-offset-8 transition-colors"
                                >
                                    More {puppy.color} Lineage
                                </Link>
                                <button className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-text-secondary hover:text-text-primary transition-colors border-l border-gray-300 pl-8">
                                    <Share2 size={14} />
                                    Broadcast PFP
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
