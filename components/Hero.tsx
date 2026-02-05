'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

// Hero video rotation - using specific requested videos
const HERO_VIDEOS = [
    '/video/frenchie-cam-1.mp4',
    '/video/frenchie-cam-11.mp4',
    '/video/frenchie-cam-7.mp4',
    '/video/frenchie-cam-14.mp4',
    '/video/frenchie-cam-10.mp4',
    '/video/frenchie-cam-4.mp4',
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
            }, 1000); // 1 second crossfade

        }, 8000); // Switch every 8 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="home" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
            {/* Video Background Carousel */}
            <div className="absolute inset-0 z-0 bg-black">
                {HERO_VIDEOS.map((src, index) => (
                    <div
                        key={src}
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === currentVideoIndex && !isTransitioning
                            ? 'opacity-70'
                            : 'opacity-0'
                            }`}
                    >
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover"
                            poster={`/images/frenchie-pup-${(index % 10) + 1}.jpg`}
                        >
                            <source src={src} type="video/mp4" />
                        </video>
                    </div>
                ))}

                {/* Dark overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60 z-10" />
            </div>

            {/* Content */}
            <div className="relative z-20 text-center max-w-5xl px-4 animate-fade-in-up">
                {/* Graffiti Badge */}
                <div className="inline-block relative mb-6 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                    <div className="absolute inset-0 bg-white transform skew-x-[-10deg] rounded-md shadow-lg"></div>
                    <span className="relative font-marker text-green-dark text-xl md:text-2xl px-6 py-2 block">
                        The King of Frenchies 👑
                    </span>
                </div>

                <h1 className="font-serif text-5xl md:text-8xl font-black text-white mb-6 leading-tight drop-shadow-2xl tracking-tight">
                    FRENCHIES R US<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-light via-white to-green-light animate-pulse">
                        NEW YORK
                    </span>
                </h1>

                <p className="font-sans text-lg md:text-2xl text-white/95 mb-12 max-w-3xl mx-auto leading-relaxed font-medium drop-shadow-md">
                    Suburban Luxury meets Royal Bloodlines. Raising the <span className="font-marker text-yellow-300">highest quality</span> French Bulldogs in the Capital Region.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <Link
                        href="#puppies"
                        className="group bg-green-primary text-white border-2 border-green-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-green-dark hover:border-green-dark transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(123,154,109,0.5)] transform hover:-translate-y-1"
                    >
                        Find Your Puppy
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <Link
                        href="#contact"
                        className="bg-transparent backdrop-blur-md border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-black transition-all shadow-lg"
                    >
                        Join the Family
                    </Link>
                </div>

                {/* Video Progress Indicators */}
                <div className="flex gap-2 justify-center mt-12">
                    {HERO_VIDEOS.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setIsTransitioning(true);
                                setTimeout(() => {
                                    setCurrentVideoIndex(index);
                                    setIsTransitioning(false);
                                }, 500);
                            }}
                            className={`h-1 rounded-full transition-all duration-300 ${index === currentVideoIndex
                                ? 'bg-white w-12'
                                : 'bg-white/40 w-8 hover:bg-white/60'
                                }`}
                            aria-label={`Switch to video ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
