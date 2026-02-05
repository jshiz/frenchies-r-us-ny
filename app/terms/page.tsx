import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

export default function TermsOfService() {
    return (
        <main className="min-h-screen bg-cream-light pt-32 pb-24">
            <div className="max-w-4xl mx-auto px-6">
                <Link href="/" className="inline-flex items-center gap-2 text-text-secondary hover:text-green-primary mb-12 transition-colors">
                    <ChevronLeft size={20} />
                    Back to Home
                </Link>

                <h1 className="font-serif text-5xl font-black mb-8">Terms of Service</h1>
                <div className="prose prose-lg max-w-none text-text-secondary space-y-8 bg-white p-12 rounded-[3.5rem] shadow-xl border border-gray-100">
                    <section>
                        <h2 className="font-serif text-2xl font-black text-text-primary mb-4">1. Acceptance of Terms</h2>
                        <p>By accessing and using Frenchies R Us (the "Service"), you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>
                    </section>

                    <section>
                        <h2 className="font-serif text-2xl font-black text-text-primary mb-4">2. Breeding Standards & Ethics</h2>
                        <p>Frenchies R Us is committed to the highest standards of animal welfare. All puppies are raised in a home environment with proper socialization, nutrition, and veterinary care. We do not sell to pet stores, brokers, or any individuals suspected of improper animal treatment.</p>
                    </section>

                    <section>
                        <h2 className="font-serif text-2xl font-black text-text-primary mb-4">3. Sales & Deposits</h2>
                        <p>Deposits are required to reserve a puppy and are generally non-refundable unless otherwise specified in a separate written agreement. The remaining balance must be paid in full prior to delivery or pickup of the puppy.</p>
                    </section>

                    <section>
                        <h2 className="font-serif text-2xl font-black text-text-primary mb-4">4. Health Guarantee</h2>
                        <p>Every puppy comes with a limited health guarantee as outlined in the individual sales contract. It is the buyer's responsibility to have the puppy examined by a licensed veterinarian within 72 hours of receiving the animal.</p>
                    </section>

                    <section>
                        <h2 className="font-serif text-2xl font-black text-text-primary mb-4">5. Intellectual Property</h2>
                        <p>The materials contained on this website are protected by applicable copyright and trademark law. All imagery, branding (including the "Frenchies R Us" logo), and textual content are the property of Kevin D Briggs Jr.</p>
                    </section>

                    <div className="pt-12 border-t border-gray-100 italic text-sm">
                        Last updated: February 5, 2026
                    </div>
                </div>
            </div>
        </main>
    );
}
