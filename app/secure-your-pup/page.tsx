'use client';

import Link from 'next/link';
import { ChevronLeft, ShieldCheck, Mail, Info, CreditCard, CheckCircle2 } from 'lucide-react';

export default function SecureYourPup() {
    return (
        <main className="min-h-screen bg-white selection:bg-green-primary/30">
            {/* Header / Nav Placeholder */}
            <div className="pt-8 px-6 max-w-7xl mx-auto">
                <Link href="/" className="inline-flex items-center gap-2 text-text-secondary hover:text-green-primary transition-all group">
                    <div className="w-8 h-8 rounded-full bg-cream flex items-center justify-center group-hover:-translate-x-1 transition-transform">
                        <ChevronLeft size={20} />
                    </div>
                    <span className="font-bold uppercase tracking-widest text-xs">Back to HQ</span>
                </Link>
            </div>

            <section className="py-16 md:py-24 px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Hero Header */}
                    <div className="text-center mb-16 space-y-6 animate-fade-in-up">
                        <div className="inline-block transform -rotate-1">
                            <span className="font-marker text-green-primary text-xl md:text-3xl tracking-widest uppercase">The Investment</span>
                        </div>
                        <h1 className="font-serif text-5xl md:text-8xl font-black leading-[0.85] tracking-tighter uppercase italic text-text-primary">
                            Secure Your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-primary to-green-dark">Future Companion.</span>
                        </h1>
                        <p className="text-text-secondary text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
                            Securing an elite Frenchie requires swift action. Follow the steps below to finalize your reservation through our secure payment portal.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                        {[
                            {
                                step: "01",
                                title: "Confirm Availability",
                                desc: "Ensure your chosen pup is still available by contacting us directly.",
                                icon: <Mail className="text-green-primary" size={24} />
                            },
                            {
                                step: "02",
                                title: "Submit Deposit",
                                desc: "Use the secure PayPal link below to submit your holding deposit.",
                                icon: <CreditCard className="text-green-primary" size={24} />
                            },
                            {
                                step: "03",
                                title: "Digital Agreement",
                                desc: "Receive your legally binding health guarantee via email within 24 hours.",
                                icon: <ShieldCheck className="text-green-primary" size={24} />
                            }
                        ].map((item, i) => (
                            <div key={i} className="bg-cream/50 p-8 rounded-[2.5rem] border border-cream-dark/30 relative overflow-hidden group hover:bg-white hover:shadow-2xl hover:border-green-primary/20 transition-all duration-500">
                                <span className="absolute top-4 right-6 font-serif text-6xl font-black text-green-primary/5 group-hover:text-green-primary/10 transition-colors">{item.step}</span>
                                <div className="mb-6 w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm relative z-10">
                                    {item.icon}
                                </div>
                                <h3 className="font-serif text-xl font-black mb-3 relative z-10">{item.title}</h3>
                                <p className="text-sm text-text-secondary leading-relaxed relative z-10">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Payment Central Area */}
                    <div className="bg-text-primary text-white p-8 md:p-16 rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)] relative overflow-hidden group">
                        {/* Background Accents */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-green-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-primary/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>

                        <div className="relative z-10 flex flex-col items-center text-center space-y-10">
                            <img
                                src="/frenchiesrus-logo-plain.png"
                                alt="Logo"
                                className="w-24 h-24 object-contain drop-shadow-[0_0_20px_rgba(123,154,109,0.5)]"
                            />

                            <div className="space-y-4">
                                <h2 className="font-serif text-3xl md:text-5xl font-black italic">Ready to make it official?</h2>
                                <p className="text-gray-400 text-sm md:text-lg uppercase tracking-widest font-black">Secure payment via PayPal</p>
                            </div>

                            <Link
                                href="https://www.paypal.me/kevindbriggsjr"
                                target="_blank"
                                className="w-full max-w-sm bg-white text-text-primary py-6 rounded-[2rem] font-black text-xl md:text-2xl uppercase tracking-[0.1em] hover:bg-green-primary hover:text-white transition-all shadow-[0_20px_40px_rgba(0,0,0,0.3)] flex items-center justify-center gap-4 group/btn"
                            >
                                <img src="https://www.paypalobjects.com/webstatic/mktg/logo-center/PP_Acceptance_Marks_for_LogoCenter_76x48.png" alt="PayPal" className="h-8 md:h-10 object-contain" />
                                Pay with PayPal
                            </Link>

                            <div className="flex flex-col md:flex-row gap-6 text-xs font-bold uppercase tracking-widest text-gray-500">
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 size={16} className="text-green-primary" />
                                    <span>Instant Reservation</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 size={16} className="text-green-primary" />
                                    <span>Invoiced & Tax Reported</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 size={16} className="text-green-primary" />
                                    <span>Secure Encryption</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Extensive Information Section */}
                    <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div className="space-y-8">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-cream rounded-2xl flex items-center justify-center">
                                    <Info size={24} className="text-text-primary" />
                                </div>
                                <h3 className="font-serif text-3xl font-black uppercase italic">The Fine Print</h3>
                            </div>

                            <div className="space-y-6 text-text-secondary leading-relaxed font-medium">
                                <p>
                                    All deposits placed at Frenchies R Us NY are <span className="text-text-primary font-black underline decoration-green-primary decoration-2">strictly non-refundable</span>. This deposit secures your position for a specific puppy or a future litter and prevents it from being marketed to other potential homes.
                                </p>
                                <p>
                                    Once your payment is confirmed, you will receive an automated receipt. Our team will then follow up with your digital sales agreement (contract) which must be signed and returned electronically before any physical transfer of the animal occurs.
                                </p>
                                <div className="p-6 bg-cream rounded-3xl border border-cream-dark/30">
                                    <h4 className="font-serif text-lg font-black text-text-primary mb-2 italic">Important Notice</h4>
                                    <p className="text-sm">Please ensure you have spoken with Kevin or a member of the family to confirm that the puppy you are interested in is still available before sending any funds.</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8 bg-cream/30 p-8 md:p-12 rounded-[3.5rem] border border-dashed border-gray-200">
                            <h3 className="font-marker text-3xl text-green-primary mb-4 rotate-[-2deg]">Payment Support</h3>
                            <p className="text-text-secondary font-medium">If you encounter any issues with the payment portal or prefer an alternative method (Zelle, CashApp, or Wire Transfer), please reach out to us immediately for assistance.</p>

                            <div className="space-y-6 pt-4">
                                <div>
                                    <p className="text-[10px] uppercase tracking-[0.3em] font-black text-gray-400 mb-1">Direct Line</p>
                                    <p className="font-serif text-2xl font-black text-text-primary">(518) 728-6604</p>
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase tracking-[0.3em] font-black text-gray-400 mb-1">Email HQ</p>
                                    <p className="font-serif text-2xl font-black text-text-primary">info@frenchiesrusny.com</p>
                                </div>
                                <div className="pt-6">
                                    <Link href="https://instagram.com/frenchiesrusny" target="_blank" className="font-marker text-xl text-green-primary hover:text-green-dark transition-colors underline underline-offset-8">
                                        DM us on Instagram for fastest reply →
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
