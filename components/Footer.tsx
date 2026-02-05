import Link from 'next/link';
import { Instagram, Facebook, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-text-primary text-white pt-24 pb-32 md:pb-24 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="w-20 h-20 mb-6 transition-transform hover:scale-105">
                            <img
                                src="/frenchiesrus-logo-plain.png"
                                alt="Logo"
                                className="w-full h-full object-contain drop-shadow-[3px_3px_0px_#7B9A6D]"
                            />
                        </div>
                        <h3 className="font-serif text-2xl mb-4 font-bold">Frenchies R Us</h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-8">
                            Raising the bar for French Bulldogs in NY. Quality, Structure, and Health above all.
                        </p>
                        <div className="flex gap-4">
                            <Link href="https://instagram.com/frenchiesrusny" target="_blank" className="bg-gray-800 p-3 rounded-full hover:bg-green-primary transition-all hover:-translate-y-1">
                                <Instagram size={20} />
                            </Link>
                            <Link href="https://facebook.com/kevindbriggsjr" target="_blank" className="bg-gray-800 p-3 rounded-full hover:bg-green-primary transition-all hover:-translate-y-1">
                                <Facebook size={20} />
                            </Link>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-marker text-lg text-gray-200 mb-8 tracking-wider">Explore</h4>
                        <ul className="space-y-4 text-sm text-gray-400 font-medium">
                            <li><Link href="#home" className="hover:text-green-primary transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-green-primary rounded-full"></span>Home</Link></li>
                            <li><Link href="#puppies" className="hover:text-green-primary transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-green-primary rounded-full"></span>Available Puppies</Link></li>
                            <li><Link href="#about" className="hover:text-green-primary transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-green-primary rounded-full"></span>Life at HQ</Link></li>
                            <li><Link href="#trust" className="hover:text-green-primary transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-green-primary rounded-full"></span>Health Guarantee</Link></li>
                        </ul>
                    </div>

                    {/* Service Areas */}
                    <div>
                        <h4 className="font-marker text-lg text-gray-200 mb-8 tracking-wider">Areas Served</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li className="hover:text-white transition-colors">Schenectady, NY</li>
                            <li className="hover:text-white transition-colors">Albany, NY</li>
                            <li className="hover:text-white transition-colors">Troy, NY</li>
                            <li className="hover:text-white transition-colors">NYC & Tri-State</li>
                            <li className="hover:text-white transition-colors">Worldwide Nanny Delivery</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-marker text-lg text-gray-200 mb-8 tracking-wider">Get in Touch</h4>
                        <ul className="space-y-6 text-sm text-gray-400">
                            <li className="flex items-center gap-4 group cursor-pointer">
                                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-green-primary transition-colors">
                                    <Phone size={18} className="text-white" />
                                </div>
                                <span className="group-hover:text-white transition-colors">(518) 227-7773</span>
                            </li>
                            <li className="flex items-center gap-4 group cursor-pointer">
                                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-green-primary transition-colors">
                                    <Mail size={18} className="text-white" />
                                </div>
                                <span className="group-hover:text-white transition-colors">info@frenchiesrusny.com</span>
                            </li>
                            <li className="flex items-center gap-4 group">
                                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-green-primary transition-colors">
                                    <MapPin size={18} className="text-white" />
                                </div>
                                <span className="group-hover:text-white transition-colors">New York Capital Region</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs">
                    <p>&copy; {new Date().getFullYear()} Frenchies R Us NY. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                    </div>
                    <p className="mt-4 md:mt-0 font-marker opacity-50">Est. 2020</p>
                </div>
            </div>
        </footer>
    );
}
