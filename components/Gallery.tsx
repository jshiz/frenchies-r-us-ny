'use client';

import { useRef, useState } from 'react';
import { Play, Volume2, VolumeX } from 'lucide-react';

const VIDEOS = Array.from({ length: 16 }, (_, i) => `/video/frenchie-cam-${i + 1}.mp4`);

function VideoCard({ src, index }: { src: string; index: number }) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(true);

    // Map video index to a poster image (rotating through available pup images)
    const posterIndex = (index % 32) + 1;
    const posterSrc = `/images/frenchie-pup-${posterIndex}.jpg`;

    const togglePlay = () => {
        if (!videoRef.current) return;
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            // Lazy load and play
            videoRef.current.play();
            setIsMuted(false);
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div
            className="flex-shrink-0 w-72 md:w-96 aspect-[9/16] rounded-[2.5rem] overflow-hidden shadow-2xl bg-black snap-center relative group cursor-pointer border-4 border-white transform hover:scale-[1.02] transition-all duration-500"
            onClick={togglePlay}
        >
            <video
                ref={videoRef}
                src={src}
                poster={posterSrc}
                preload="none"
                className={`w-full h-full object-cover transition-opacity duration-700 ${isPlaying ? 'opacity-100' : 'opacity-80'}`}
                loop
                muted={isMuted}
                playsInline
            />

            {/* Play/Pause Overlay */}
            {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[2px] group-hover:bg-black/20 transition-all">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-white/50 animate-pulse shadow-2xl">
                        <Play size={40} className="text-white fill-white ml-1" />
                    </div>
                </div>
            )}

            {/* Sound Toggle Indicator */}
            <div className="absolute top-4 right-4 z-20">
                <div className="p-3 bg-black/40 backdrop-blur-md rounded-full text-white border border-white/20">
                    {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                </div>
            </div>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full px-6 text-center z-20">
                <span className={`inline-block px-6 py-2 rounded-full text-white text-[10px] font-black uppercase tracking-[0.2em] transition-all ${isPlaying ? 'bg-green-primary/80 opacity-0 group-hover:opacity-100' : 'bg-black/60 backdrop-blur-md'}`}>
                    {isPlaying ? 'Now Playing' : `Experience POV ${index + 1}`}
                </span>
            </div>
        </div>
    );
}

export default function Gallery() {
    return (
        <section className="py-24 bg-cream-light overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
                <div className="inline-block transform -rotate-1 mb-4">
                    <span className="font-marker text-green-primary text-xl md:text-2xl tracking-widest uppercase italic font-black">The POV Diary</span>
                </div>
                <h2 className="font-serif text-5xl md:text-8xl font-black mb-8 tracking-tighter uppercase leading-[0.85] text-text-primary">
                    Life at <br className="md:hidden" />
                    <span className="text-green-primary">The HQ. 🎥</span>
                </h2>
                <p className="text-text-secondary text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
                    Unfiltered daily adventures from the heart of NY. We've added more cams! Scroll through all 16 perspectives and tap to listen.
                </p>
            </div>

            {/* Horizontal Scroll Experience */}
            <div className="flex gap-6 overflow-x-auto pb-12 px-6 md:px-[max(24px,calc(50vw-40rem))] scrollbar-hide snap-x scroll-smooth">
                {/* Videos First - All 16 */}
                {VIDEOS.map((src, i) => (
                    <VideoCard key={i} src={src} index={i} />
                ))}

                {/* Legacy Snapshots - Just a few high density ones */}
                {[20, 25, 30, 1, 5, 8].map((num) => (
                    <div key={num} className="flex-shrink-0 w-72 md:w-96 aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl bg-gray-200 snap-center relative group border-4 border-white transform hover:rotate-1 transition-all duration-500">
                        <img
                            src={`/images/frenchie-pup-${num}.jpg`}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            alt="Life at HQ Snapshot"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity"></div>
                        <div className="absolute bottom-6 left-6">
                            <span className="font-marker text-white text-xl tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                                Fresh Heir
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="max-w-7xl mx-auto px-6 mt-8 flex flex-col items-center gap-2">
                <div className="w-48 h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div className="w-1/3 h-full bg-green-primary animate-pulse"></div>
                </div>
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">
                    Scroll to Explore (16 Channels Live)
                </p>
            </div>
        </section>
    );
}
