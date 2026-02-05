'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

// Hero video rotation - specifically Cam 14 and Cam 12 for a professional loop
const HERO_VIDEOS = [
    '/video/frenchie-cam-14.mp4',
    '/video/frenchie-cam-12.mp4',
];

export default function Hero() {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsTransitioning(true);

            // Wait for fade out
            setTimeout(() => {
                setCurrentVideoIndex((prev) => (prev + 1) % HERO_VIDEOS.length);
                setIsTransitioning(false);
            }, 1500); // 1.5s ultra-smooth crossfade

        }, 10000); // Switch every 10 seconds for a flowing feel

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="home" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
            {/* Video Background Carousel */}
            <div className="absolute inset-0 z-0 bg-black">
                {HERO_VIDEOS.map((src, index) => (
                    <div
                        key={src}
                        className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${index === currentVideoIndex && !isTransitioning
                            ? 'opacity-60'
                            : 'opacity-0'
                            }`}
                    >
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover md:object-top"
                            poster={`/images/frenchie-pup-${index + 1}.jpg`}
                        >
                            <source src={src} type="video/mp4" />
                        </video>
                    </div>
                ))}

                {/* Dark overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/70 z-10" />
            </div>

            {/* Content */}
            <div className="relative z-20 text-center max-w-5xl px-4 animate-fade-in-up">
                {/* Graffiti Badge */}
                <div className="inline-block relative mb-8 transform -rotate-1 hover:rotate-0 transition-all duration-500">
                    <div className="absolute inset-0 bg-white transform skew-x-[-15deg] rounded-lg shadow-2xl"></div>
                    <span className="relative font-marker text-green-dark text-xl md:text-3xl px-8 py-3 block leading-none">
                        NYC'S FINEST FRENCHIES 👑
                    </span>
                </div>

                <h1 className="font-serif text-6xl md:text-[9rem] font-black text-white mb-8 leading-[0.8] drop-shadow-2xl tracking-tighter uppercase italic">
                    Royal <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-light via-white to-green-light animate-pulse">
                        Standard.
                    </span>
                </h1>

                <p className="font-sans text-xl md:text-3xl text-white/90 mb-12 max-w-3xl mx-auto leading-tight font-black drop-shadow-md uppercase tracking-tight">
                    Suburban Luxury. <span className="text-green-light">Elite Bloodlines.</span> <br className="hidden md:block" />
                    Raising the bar in New York's Capital Region.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                    <Link
                        href="#puppies"
                        className="group bg-green-primary text-white px-12 py-5 rounded-full font-black text-xs uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all shadow-[0_0_30px_rgba(123,154,109,0.3)] transform hover:-translate-y-1 flex items-center gap-4"
                    >
                        Explore Pups
                        <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                    </Link>

                    <Link
                        href="#contact"
                        className="bg-transparent backdrop-blur-md border-2 border-white/30 text-white px-12 py-5 rounded-full font-black text-xs uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all shadow-xl"
                    >
                        Join The HQ
                    </Link>
                </div>
            </div>
        </section>
    );
}
