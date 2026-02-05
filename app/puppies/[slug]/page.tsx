import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Phone, Mail, Heart, Share2, ChevronLeft, CheckCircle } from 'lucide-react';
import { getPuppyBySlug, getAllPuppySlugs } from '@/lib/puppies';
import { generateSEOTitle, generateSEODescription, generatePuppyStructuredData } from '@/lib/seo';

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

            <main className="min-h-screen bg-cream-light pt-24">
                <div className="max-w-7xl mx-auto px-6 py-12">
                    {/* Back Link */}
                    <Link href="/#puppies" className="inline-flex items-center gap-2 text-text-secondary hover:text-green-primary mb-8 transition-colors">
                        <ChevronLeft size={20} />
                        Back to All Pups
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Image Side */}
                        <div className="space-y-4">
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square bg-gray-100">
                                <img
                                    src={puppy.img}
                                    alt={`${puppy.color} French Bulldog ${puppy.name}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Details Side */}
                        <div className="space-y-8">
                            {/* Status Badge */}
                            <div className="inline-block">
                                <span className={`px-4 py-2 rounded-full text-sm font-bold uppercase ${puppy.status === 'Available' ? 'bg-green-primary text-white' : 'bg-gray-800 text-white'
                                    }`}>
                                    {puppy.status}
                                </span>
                            </div>

                            <div>
                                <h1 className="font-serif text-5xl font-black mb-4">{puppy.name}</h1>
                                <p className="text-2xl text-green-primary font-bold mb-2">{puppy.color} French Bulldog</p>
                                <p className="text-text-secondary">{puppy.gender} • {puppy.age}</p>
                            </div>

                            {/* DNA Info */}
                            <div className="bg-white p-6 rounded-2xl border border-gray-100">
                                <h3 className="font-marker text-xl mb-4">DNA Profile</h3>
                                <p className="font-mono text-lg font-bold text-green-dark">{puppy.dna}</p>
                                <p className="text-sm text-text-secondary mt-2">Fully verified genetic testing</p>
                            </div>

                            {/* Description */}
                            <div>
                                <h3 className="font-serif text-2xl font-bold mb-4">About {puppy.name}</h3>
                                <p className="text-lg text-text-secondary leading-relaxed">{puppy.description}</p>
                            </div>

                            {/* Features */}
                            <div className="bg-cream p-6 rounded-2xl space-y-3">
                                <h3 className="font-serif text-xl font-bold mb-4">What's Included</h3>
                                {[
                                    'Health Guarantee',
                                    'DNA Verification Certificate',
                                    'Vet Health Certificate',
                                    'Up-to-date Vaccinations',
                                    'Microchipped',
                                    'Lifetime Breeder Support'
                                ].map((feature, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <CheckCircle size={20} className="text-green-primary" />
                                        <span className="text-sm font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col gap-4 pt-4">
                                <Link
                                    href="tel:5182277773"
                                    className="bg-green-primary text-white text-center px-8 py-4 rounded-full font-bold text-lg hover:bg-green-dark transition-all shadow-lg flex items-center justify-center gap-2"
                                >
                                    <Phone size={20} />
                                    Call to Reserve
                                </Link>
                                <Link
                                    href="mailto:info@frenchiesrusny.com?subject=Interested in {puppy.name}"
                                    className="bg-white border-2 border-text-primary text-text-primary text-center px-8 py-4 rounded-full font-bold text-lg hover:bg-text-primary hover:text-white transition-all flex items-center justify-center gap-2"
                                >
                                    <Mail size={20} />
                                    Email Inquiry
                                </Link>
                            </div>

                            {/* Share */}
                            <div className="pt-4 border-t border-gray-200">
                                <p className="text-sm text-text-secondary mb-2">Share this pup:</p>
                                <button className="flex items-center gap-2 text-text-secondary hover:text-green-primary transition-colors">
                                    <Share2 size={18} />
                                    <span className="text-sm">Copy Link</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Related Puppies */}
                    <div className="mt-24">
                        <h2 className="font-serif text-3xl font-bold mb-8">More {puppy.color} Frenchies</h2>
                        <Link
                            href={`/colors/${puppy.colorSlug}`}
                            className="inline-flex items-center gap-2 text-green-primary hover:text-green-dark font-bold transition-colors"
                        >
                            View All {puppy.color} French Bulldogs →
                        </Link>
                    </div>
                </div>
            </main>
        </>
    );
}
