'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Instagram, Facebook } from 'lucide-react';
import Image from 'next/image'; // Assuming we can use next/image now

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                {/* Logo Area */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative w-12 h-12 md:w-16 md:h-16 transition-transform group-hover:scale-110">
                        <img
                            src="/frenchiesrus-logo-plain.png"
                            alt="Frenchies R Us NY"
                            className="w-full h-full object-contain drop-shadow-[4px_4px_0px_#7B9A6D]"
                        />
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 ml-2 transition-all">
                        <span className={`font-serif text-xl md:text-3xl font-black tracking-tight ${scrolled ? 'text-text-primary' : 'text-white'} drop-shadow-md leading-tight`}>
                            Frenchies
                        </span>
                        <span className={`font-marker text-base md:text-2xl tracking-widest ${scrolled ? 'text-green-primary' : 'text-green-light'} rotate-[-2deg] leading-tight`}>
                            R US
                        </span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {['The Man', 'The Pups', 'The Lab', 'The Contract'].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase().replace(' ', '-').replace('the-', '') === 'man' ? 'about' :
                                item.toLowerCase().replace(' ', '-').replace('the-', '') === 'pups' ? 'puppies' :
                                    item.toLowerCase().replace(' ', '-').replace('the-', '') === 'lab' ? 'dna' : 'trust'}`}
                            className={`text-sm font-bold uppercase tracking-wider hover:text-green-primary transition-colors ${scrolled ? 'text-text-primary' : 'text-white drop-shadow-sm'}`}
                        >
                            {item}
                        </Link>
                    ))}

                    <div className="h-6 w-px bg-gray-300/50"></div>

                    <div className="flex gap-4">
                        <Link href="https://instagram.com/frenchiesrusny" target="_blank" className={`hover:text-green-primary transition-colors ${scrolled ? 'text-text-primary' : 'text-white'}`}>
                            <Instagram size={20} />
                        </Link>
                        <Link href="https://facebook.com/kevindbriggsjr" target="_blank" className={`hover:text-green-primary transition-colors ${scrolled ? 'text-text-primary' : 'text-white'}`}>
                            <Facebook size={20} />
                        </Link>
                    </div>

                    <Link
                        href="#contact"
                        className="bg-green-primary text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-green-dark transition-all transform hover:-translate-y-0.5 shadow-md flex items-center gap-2"
                    >
                        Reserve Now
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className={`md:hidden p-2 ${scrolled ? 'text-gray-800' : 'text-white'}`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl py-8 flex flex-col items-center gap-8 animate-fade-in-up">
                    {['The Man', 'The Pups', 'The Lab', 'The Contract'].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase().replace(' ', '-').replace('the-', '') === 'man' ? 'about' :
                                item.toLowerCase().replace(' ', '-').replace('the-', '') === 'pups' ? 'puppies' :
                                    item.toLowerCase().replace(' ', '-').replace('the-', '') === 'lab' ? 'dna' : 'trust'}`}
                            className="text-xl font-serif font-bold text-text-primary"
                            onClick={() => setIsOpen(false)}
                        >
                            {item}
                        </Link>
                    ))}

                    <div className="flex gap-6 mt-2">
                        <Link href="https://instagram.com/frenchiesrusny" target="_blank" className="bg-gray-100 p-3 rounded-full text-text-primary">
                            <Instagram size={24} />
                        </Link>
                        <Link href="https://facebook.com/kevindbriggsjr" target="_blank" className="bg-gray-100 p-3 rounded-full text-text-primary">
                            <Facebook size={24} />
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
