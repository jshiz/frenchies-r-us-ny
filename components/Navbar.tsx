'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Instagram, Facebook } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    const isHome = pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Force solid state if not on home page OR if mobile menu is open
    const isSolid = !isHome || scrolled || isOpen;

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isSolid ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                {/* Logo Area */}
                <Link href="/" className="flex items-center gap-1.5 sm:gap-2 lg:gap-3 group shrink-0">
                    <div className="relative w-8 h-8 sm:w-10 sm:h-10 lg:w-16 lg:h-16 transition-transform group-hover:scale-110">
                        <img
                            src="/frenchiesrus-logo-plain.png"
                            alt="Frenchies R Us NY"
                            className="w-full h-full object-contain drop-shadow-[4px_4px_0px_#7B9A6D]"
                        />
                    </div>
                    <div className="flex flex-row items-center gap-1 lg:gap-4 ml-1 transition-all">
                        <span className={`font-serif text-base sm:text-lg lg:text-3xl font-black tracking-tight ${isSolid ? 'text-text-primary' : 'text-white'} drop-shadow-md leading-none`}>
                            Frenchies
                        </span>
                        <span className={`font-marker text-[10px] sm:text-sm lg:text-2xl tracking-widest ${isSolid ? 'text-green-primary' : 'text-green-light'} rotate-[-2deg] leading-none whitespace-nowrap`}>
                            R US
                        </span>
                    </div>
                </Link>

                <div className="hidden lg:flex items-center gap-8">
                    {['The Man', 'The Studs', 'The Pups', 'The Lab'].map((item) => {
                        const slug = item.toLowerCase().replace(' ', '-').replace('the-', '');
                        const targetId = slug === 'man' ? 'about' :
                            slug === 'pups' ? 'puppies' :
                                slug === 'lab' ? 'dna' : 'studs';

                        return (
                            <Link
                                key={item}
                                href={`${isHome ? '' : '/'}#${targetId}`}
                                className={`text-sm font-bold uppercase tracking-wider hover:text-green-primary transition-colors ${isSolid ? 'text-text-primary' : 'text-white drop-shadow-sm'}`}
                            >
                                {item}
                            </Link>
                        );
                    })}

                    <div className="h-6 w-px bg-gray-300/50"></div>

                    <div className="flex gap-4">
                        <Link href="https://instagram.com/frenchiesrusny" target="_blank" className={`hover:text-green-primary transition-colors ${isSolid ? 'text-text-primary' : 'text-white'}`}>
                            <Instagram size={20} />
                        </Link>
                        <Link href="https://facebook.com/kevindbriggsjr" target="_blank" className={`hover:text-green-primary transition-colors ${isSolid ? 'text-text-primary' : 'text-white'}`}>
                            <Facebook size={20} />
                        </Link>
                    </div>

                    <div className="flex items-center gap-3">
                        <Link
                            href={`${isHome ? '' : '/'}#contact`}
                            className={`text-sm font-bold uppercase tracking-wider px-4 py-2 hover:text-green-primary transition-colors ${isSolid ? 'text-text-primary' : 'text-white'}`}
                        >
                            Contact
                        </Link>
                        <Link
                            href="/secure-your-pup"
                            className="bg-green-primary text-white px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest hover:bg-green-dark transition-all transform hover:-translate-y-0.5 shadow-[0_10px_20px_rgba(123,154,109,0.3)] border-b-2 border-black/20"
                        >
                            Secure Your Pup
                        </Link>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <button
                    className={`lg:hidden p-2 transition-colors ${isSolid ? 'text-gray-800' : 'text-white'}`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {isOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-2xl py-12 flex flex-col items-center gap-10 animate-fade-in-up">
                    {['The Man', 'The Studs', 'The Pups', 'The Lab'].map((item) => {
                        const slug = item.toLowerCase().replace(' ', '-').replace('the-', '');
                        const targetId = slug === 'man' ? 'about' :
                            slug === 'pups' ? 'puppies' :
                                slug === 'lab' ? 'dna' : 'studs';

                        return (
                            <Link
                                key={item}
                                href={`${isHome ? '' : '/'}#${targetId}`}
                                className="text-3xl font-serif font-black text-text-primary tracking-tight hover:text-green-primary transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {item}
                            </Link>
                        );
                    })}

                    <div className="flex flex-col w-full px-10 gap-4 mt-4">
                        <Link
                            href="/secure-your-pup"
                            className="w-full bg-green-primary text-white py-6 rounded-2xl text-center font-black uppercase tracking-[0.2em] shadow-xl text-lg"
                            onClick={() => setIsOpen(false)}
                        >
                            Secure Your Pup
                        </Link>
                        <Link
                            href={`${isHome ? '' : '/'}#contact`}
                            className="w-full bg-text-primary text-white py-6 rounded-2xl text-center font-black uppercase tracking-[0.2em] shadow-xl text-lg"
                            onClick={() => setIsOpen(false)}
                        >
                            Contact Us
                        </Link>
                    </div>

                    <div className="flex gap-8 mt-4">
                        <Link href="https://instagram.com/frenchiesrusny" target="_blank" className="bg-gray-100 p-4 rounded-full text-text-primary hover:bg-green-primary hover:text-white transition-all">
                            <Instagram size={28} />
                        </Link>
                        <Link href="https://facebook.com/kevindbriggsjr" target="_blank" className="bg-gray-100 p-4 rounded-full text-text-primary hover:bg-green-primary hover:text-white transition-all">
                            <Facebook size={28} />
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
