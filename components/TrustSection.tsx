import { ShieldCheck, Dna, Clock } from 'lucide-react';

export default function TrustSection() {
    return (
        <section id="trust" className="py-24 bg-cream-light border-y border-cream">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-4xl font-bold mb-4">The Frenchie Promise 💖</h2>
                    <p className="text-text-secondary max-w-2xl mx-auto">
                        When you bring home a pup from Frenchies R Us NY, you're getting more than a pet — you're getting our commitment to quality and care.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* Card 1 */}
                    <div className="bg-white p-10 rounded-3xl shadow-sm text-center hover:shadow-md transition-shadow">
                        <div className="w-20 h-20 bg-green-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                            <ShieldCheck size={40} className="text-green-primary" />
                        </div>
                        <h3 className="font-serif text-xl font-bold mb-3">Health Guaranteed</h3>
                        <p className="text-text-secondary text-sm leading-relaxed">
                            Every puppy comes with a comprehensive health guarantee. We stand behind the genetics and health of our Frenchies 100%.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white p-10 rounded-3xl shadow-sm text-center hover:shadow-md transition-shadow">
                        <div className="w-20 h-20 bg-green-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Dna size={40} className="text-green-primary" />
                        </div>
                        <h3 className="font-serif text-xl font-bold mb-3">DNA Verified</h3>
                        <p className="text-text-secondary text-sm leading-relaxed">
                            No guessing games here. All our pups are DNA tested for structural health markers and color genetics.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white p-10 rounded-3xl shadow-sm text-center hover:shadow-md transition-shadow">
                        <div className="w-20 h-20 bg-green-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Clock size={40} className="text-green-primary" />
                        </div>
                        <h3 className="font-serif text-xl font-bold mb-3">Lifetime Support</h3>
                        <p className="text-text-secondary text-sm leading-relaxed">
                            We're here for you forever! Questions at 2 AM? Need dietary advice? Our phone line is always open to our Frenchie family.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
