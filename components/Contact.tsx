import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-cream">
            <div className="max-w-7xl mx-auto px-6">
                <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2">

                        {/* Info Side */}
                        <div className="p-8 md:p-16 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
                            <div className="inline-block transform -rotate-1 mb-4">
                                <span className="font-marker text-green-primary text-xl tracking-widest uppercase">Direct Line</span>
                            </div>
                            <h2 className="font-serif text-4xl md:text-6xl font-black mb-8 tracking-tighter uppercase">Let's Chat Pups. 🐾</h2>
                            <p className="text-text-secondary mb-12 text-lg md:text-xl font-medium max-w-md">
                                Whether you're ready to reserve your new family member or just want to learn more about our genetics, reach out anytime!
                            </p>

                            <div className="space-y-10 w-full max-w-md">
                                {[
                                    { icon: Phone, title: "Call or Text", value: "(518) 227-7773", href: "tel:5182277773" },
                                    { icon: Mail, title: "Email Us", value: "info@frenchiesrusny.com", href: "mailto:info@frenchiesrusny.com" },
                                    { icon: MapPin, title: "Visit Us", value: "Schenectady, New York", href: null }
                                ].map((item, i) => (
                                    <div key={i} className="flex flex-col md:flex-row items-center lg:items-start gap-4 md:gap-6 group">
                                        <div className="w-16 h-16 bg-green-primary/10 rounded-3xl flex items-center justify-center text-green-primary group-hover:bg-green-primary group-hover:text-white transition-all transform group-hover:rotate-6 shadow-sm">
                                            <item.icon size={28} />
                                        </div>
                                        <div>
                                            <div className="text-[10px] text-gray-400 uppercase font-black tracking-[0.2em] mb-1">{item.title}</div>
                                            {item.href ? (
                                                <Link href={item.href} className="text-xl md:text-2xl font-black text-text-primary hover:text-green-primary transition-colors">
                                                    {item.value}
                                                </Link>
                                            ) : (
                                                <div className="text-xl md:text-2xl font-black text-text-primary">{item.value}</div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA Side */}
                        <div className="bg-text-primary p-12 lg:p-16 text-white flex flex-col justify-center items-center text-center relative overflow-hidden">
                            {/* Pattern overlay */}
                            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>

                            <div className="relative z-10 w-full">
                                <div className="text-7xl mb-8 animate-bounce-slow">🐕</div>
                                <h3 className="font-serif text-3xl md:text-5xl font-black mb-6 tracking-tighter uppercase italic">Your New Best Friend Awaits</h3>
                                <p className="text-gray-400 font-bold mb-10 max-w-sm mx-auto leading-relaxed uppercase tracking-widest text-xs">
                                    We have new litters coming soon! Join our priority waitlist to be the first to know.
                                </p>
                                <Link
                                    href="mailto:info@frenchiesrusny.com?subject=Join Waitlist"
                                    className="bg-green-primary text-white px-10 py-5 rounded-full font-black text-xs uppercase tracking-[0.2em] hover:bg-green-dark transition-all shadow-2xl flex items-center justify-center gap-3 group mx-auto w-fit"
                                >
                                    <span>Join Priority Waitlist</span>
                                    <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
