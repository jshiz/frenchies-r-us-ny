'use client';

import { useRef, useEffect } from 'react';

// Using the renamed video files
const VIDEOS = [
    '/video/frenchie-cam-2.mp4',
    '/video/frenchie-cam-3.mp4',
    '/video/frenchie-cam-5.mp4',
];

export default function Gallery() {
    const scrollRef = useRef<HTMLDivElement>(null);

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-12">
                <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                    <div>
                        <span className="font-marker text-green-primary text-xl mb-2 block">Behind the Scenes</span>
                        <h2 className="font-serif text-4xl md:text-5xl font-bold">Life at the HQ 🎥</h2>
                    </div>
                    <p className="text-text-secondary max-w-md text-right md:text-left">
                        Follow our daily adventures. From playtime in the yard to cozy naps, see how our Frenchies live like royalty.
                    </p>
                </div>
            </div>

            {/* Horizontal Video Scroll */}
            <div ref={scrollRef} className="flex gap-6 overflow-x-auto pb-8 px-6 md:px-[max(24px,calc(50vw-40rem))] scrollbar-hide snap-x">
                {VIDEOS.map((src, i) => (
                    <div key={i} className="flex-shrink-0 w-72 md:w-96 aspect-[9/16] rounded-3xl overflow-hidden shadow-xl bg-black snap-center relative group">
                        <video
                            src={src}
                            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                            loop
                            muted
                            playsInline
                            // Auto play on hover
                            onMouseOver={(e) => e.currentTarget.play()}
                            onMouseOut={(e) => e.currentTarget.pause()}
                        />
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:hidden">
                            <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                                <div className="w-0 h-0 border-t-8 border-t-transparent border-l-[14px] border-l-white border-b-8 border-b-transparent ml-1"></div>
                            </div>
                        </div>
                        <div className="absolute bottom-4 left-4 right-4 text-center">
                            <span className="inline-block px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white text-xs font-bold uppercase">
                                Watch Reel
                            </span>
                        </div>
                    </div>
                ))}

                {/* Gallery Images */}
                {[11, 12, 13, 14, 15, 16].map((num) => (
                    <div key={num} className="flex-shrink-0 w-72 md:w-96 aspect-[4/5] rounded-3xl overflow-hidden shadow-xl bg-gray-200 snap-center relative group">
                        <img
                            src={`/images/frenchie-pup-${num}.jpg`}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            alt="Life at HQ"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:opacity-0 transition-opacity"></div>
                    </div>
                ))}
            </div>
        </section>
    );
}
