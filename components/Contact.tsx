import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-cream">
            <div className="max-w-7xl mx-auto px-6">
                <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2">

                        {/* Info Side */}
                        <div className="p-12 lg:p-16 flex flex-col justify-center">
                            <h2 className="font-serif text-4xl font-bold mb-6">Let's Chat About Pups! 🐾</h2>
                            <p className="text-text-secondary mb-10 text-lg">
                                Whether you're ready to reserve your new family member or just want to learn more about our Frenchies, reach out anytime!
                            </p>

                            <div className="space-y-8">
                                <Link href="tel:5182277773" className="flex items-center gap-6 group">
                                    <div className="w-14 h-14 bg-green-primary/10 rounded-full flex items-center justify-center text-green-primary group-hover:bg-green-primary group-hover:text-white transition-colors">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-400 uppercase tracking-wider font-bold mb-1">Call or Text</div>
                                        <div className="text-xl font-medium text-text-primary">(518) 227-7773</div>
                                    </div>
                                </Link>

                                <Link href="mailto:info@frenchiesrusny.com" className="flex items-center gap-6 group">
                                    <div className="w-14 h-14 bg-green-primary/10 rounded-full flex items-center justify-center text-green-primary group-hover:bg-green-primary group-hover:text-white transition-colors">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-400 uppercase tracking-wider font-bold mb-1">Email Us</div>
                                        <div className="text-xl font-medium text-text-primary">info@frenchiesrusny.com</div>
                                    </div>
                                </Link>

                                <div className="flex items-center gap-6 group">
                                    <div className="w-14 h-14 bg-green-primary/10 rounded-full flex items-center justify-center text-green-primary group-hover:bg-green-primary group-hover:text-white transition-colors">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-400 uppercase tracking-wider font-bold mb-1">Visit Us</div>
                                        <div className="text-xl font-medium text-text-primary">Schenectady, New York</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CTA Side */}
                        <div className="bg-wood p-12 lg:p-16 text-white flex flex-col justify-center items-center text-center relative overflow-hidden">
                            {/* Pattern overlay */}
                            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>

                            <div className="relative z-10">
                                <div className="text-6xl mb-6">🐕</div>
                                <h3 className="font-serif text-3xl font-bold mb-4">Your New Best Friend Awaits</h3>
                                <p className="text-white/80 mb-8 max-w-sm mx-auto">
                                    We have new litters coming soon! Join our priority waitlist to be the first to know.
                                </p>
                                <Link
                                    href="mailto:info@frenchiesrusny.com?subject=Join Waitlist"
                                    className="inline-block bg-white text-wood-dark px-8 py-3 rounded-full font-bold hover:bg-cream transition-colors shadow-lg"
                                >
                                    Join Priority Waitlist
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
