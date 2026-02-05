import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-cream-light pt-32 pb-24">
            <div className="max-w-4xl mx-auto px-6">
                <Link href="/" className="inline-flex items-center gap-2 text-text-secondary hover:text-green-primary mb-12 transition-colors">
                    <ChevronLeft size={20} />
                    Back to Home
                </Link>

                <h1 className="font-serif text-5xl font-black mb-8">Privacy Policy</h1>
                <div className="prose prose-lg max-w-none text-text-secondary space-y-8 bg-white p-12 rounded-[3.5rem] shadow-xl border border-gray-100">
                    <section>
                        <h2 className="font-serif text-2xl font-black text-text-primary mb-4">1. Information We Collect</h2>
                        <p>We collect information that you provide directly to us, such as when you fill out a contact form, request a puppy reservation, or communicate with us via email. This may include your name, email address, phone number, and location.</p>
                    </section>

                    <section>
                        <h2 className="font-serif text-2xl font-black text-text-primary mb-4">2. How We Use Your Information</h2>
                        <p>We use the information we collect to communicate with you regarding puppy availability, process transactions, and improve our services. We do not sell or lease your personal information to third parties.</p>
                    </section>

                    <section>
                        <h2 className="font-serif text-2xl font-black text-text-primary mb-4">3. Data Security</h2>
                        <p>We implement reasonable security measures to protect the security of your personal information. However, please be aware that no method of transmission over the internet or method of electronic storage is 100% secure.</p>
                    </section>

                    <section>
                        <h2 className="font-serif text-2xl font-black text-text-primary mb-4">4. Cookies</h2>
                        <p>Our website uses basic cookies to improve the user experience and track website performance. You can choose to disable cookies in your browser settings, though this may affect your ability to use certain features of the site.</p>
                    </section>

                    <div className="pt-12 border-t border-gray-100 italic text-sm">
                        Last updated: February 5, 2026
                    </div>
                </div>
            </div>
        </main>
    );
}
