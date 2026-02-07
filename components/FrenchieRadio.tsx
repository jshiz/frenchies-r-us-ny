'use client';

import { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Music2, ChevronDown, ChevronLeft, X } from 'lucide-react';

const PLAYLIST = [
    { id: 1, title: "The Anthem", artist: "Frenchie Royal", src: "/music/The Anthem.mp3", art: "/music/The Anthem.jpeg" },
    { id: 2, title: "Exotic Colors", artist: "Frenchie Royal", src: "/music/Exotic Colors.mp3", art: "/music/Exotic Colors.jpeg" },
    { id: 3, title: "Puppy Zoomies", artist: "Frenchie Royal", src: "/music/Puppy Zoomies.mp3", art: "/music/Puppy Zoomies.jpeg" },
    { id: 4, title: "Royal Bloodline", artist: "Frenchie Royal", src: "/music/Royal Bloodline.mp3", art: "/music/Royal Bloodline.jpeg" },
    { id: 5, title: "Not a Kennel", artist: "Frenchie Royal", src: "/music/Not a Kennel.mp3", art: "/music/Not a Kennel.jpeg" },
    { id: 6, title: "Champion’s Creed", artist: "Frenchie Royal", src: "/music/Champion’s Creed.mp3", art: "/music/Champion’s Creed.jpeg" },
    { id: 7, title: "Vivid Pedigree", artist: "Frenchie Royal", src: "/music/Vivid Pedigree.mp3", art: "/music/Vivid Pedigree.jpeg" },
    { id: 8, title: "Noble Genetics", artist: "Frenchie Royal", src: "/music/Noble Genetics.mp3", art: "/music/Noble Genetics.jpeg" },
    { id: 9, title: "Living Room Legacy", artist: "Frenchie Royal", src: "/music/Living Room Legacy.mp3", art: "/music/Living Room Legacy.jpeg" }
];

// Symmetrical Audio Bar Animation
const SymmetricalEQ = ({ isPlaying }: { isPlaying: boolean }) => (
    <div className="flex gap-1 items-end h-6 w-12 justify-center">
        {[0.6, 0.4, 0.8, 0.5, 0.7, 0.5, 0.8, 0.4, 0.6].map((h, i) => (
            <span
                key={i}
                className={`w-1 bg-green-primary rounded-full ${isPlaying ? 'animate-bounce' : ''}`}
                style={{
                    animationDuration: `${0.6 + Math.abs(i - 4) * 0.15}s`,
                    height: isPlaying ? `${h * 100}%` : '2px'
                }}
            ></span>
        ))}
    </div>
);

export default function FrenchieRadio() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [trackIndex, setTrackIndex] = useState(0);
    const [isExpanded, setIsExpanded] = useState(false);

    const audioRef = useRef<HTMLAudioElement | null>(null);

    const togglePlay = () => {
        if (!audioRef.current) return;
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch(e => console.error("Playback failed:", e));
        }
        setIsPlaying(!isPlaying);
    };

    const nextTrack = () => {
        setTrackIndex((prev) => (prev + 1) % PLAYLIST.length);
        setIsPlaying(true);
    };

    const prevTrack = () => {
        setTrackIndex((prev) => (prev - 1 + PLAYLIST.length) % PLAYLIST.length);
        setIsPlaying(true);
    };

    const handleSongEnd = () => {
        nextTrack();
    };

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.src = PLAYLIST[trackIndex].src;
            audioRef.current.volume = 1;
            if (isPlaying) {
                audioRef.current.play().catch(e => console.error("Playback failed:", e));
            }
        }
    }, [trackIndex]);

    return (
        <>
            <style jsx global>{`
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-spin-slow { animation: spin-slow 12s linear infinite; }
            `}</style>

            <audio
                ref={audioRef}
                onEnded={handleSongEnd}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
            />

            {/* Collapsed Widget - Ultra Condensed */}
            {!isExpanded && (
                <div className={`fixed bottom-6 right-6 z-[60] flex items-center gap-2 bg-text-primary/95 backdrop-blur-xl border-t border-l border-white/20 p-1.5 rounded-full shadow-[6px_6px_20px_rgba(0,0,0,0.6),inset_-2px_-2px_5px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-green-primary/30 ${isPlaying ? 'animate-bounce-slow' : ''}`}>
                    {/* Pop out arrow - Left side */}
                    <button
                        onClick={() => setIsExpanded(true)}
                        className="p-1.5 text-white/40 hover:text-green-primary transition-colors cursor-pointer"
                    >
                        <ChevronLeft size={20} />
                    </button>

                    {/* Art Container - Simple spinning record */}
                    <button
                        onClick={() => setIsExpanded(true)}
                        className="w-11 h-11 flex-shrink-0 flex items-center justify-center relative overflow-hidden rounded-full cursor-pointer group/art"
                    >
                        {/* The record artwork with crossfade */}
                        <div className="absolute inset-0 w-full h-full rounded-full overflow-hidden">
                            <img
                                key={trackIndex}
                                src={PLAYLIST[trackIndex].art}
                                alt="Art"
                                className={`absolute inset-0 w-full h-full object-cover rounded-full ${isPlaying ? 'animate-spin-slow' : ''} transition-opacity duration-1000 opacity-100`}
                            />
                            {/* Inner Vinyl detail */}
                            <div className="absolute inset-0 border-[6px] border-black/10 rounded-full pointer-events-none"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-1.5 h-1.5 bg-white/20 rounded-full border border-black/10"></div>
                            </div>
                        </div>
                    </button>

                    {/* Small Play Button - Right side */}
                    <button
                        onClick={togglePlay}
                        className="w-9 h-9 flex items-center justify-center text-white hover:text-green-primary transition-all active:scale-90 cursor-pointer mr-0.5"
                    >
                        {isPlaying ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" className="ml-0.5" />}
                    </button>
                </div>
            )}

            {/* Expanded Player - Fixed Size */}
            <div className={`fixed bottom-0 right-0 z-50 p-4 md:p-8 transition-all duration-700 ease-in-out pointer-events-none ${isExpanded ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-95 invisible'}`}>
                <div className={`w-[90vw] md:w-[540px] bg-text-primary/95 backdrop-blur-3xl border-t border-l border-white/20 shadow-[12px_12px_40px_rgba(0,0,0,0.7),inset_-4px_-4px_10px_rgba(0,0,0,0.5)] rounded-[3rem] p-6 flex flex-row items-center gap-8 relative overflow-hidden group transition-all duration-500 ${isExpanded ? 'pointer-events-auto' : 'pointer-events-none'}`}>

                    <div className="absolute top-0 right-0 w-64 h-64 bg-green-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-green-primary/20 transition-all duration-1000"></div>

                    <div className="flex-1 min-w-0 flex flex-col justify-between py-2">
                        <div className="space-y-4">
                            <div className="flex items-center gap-2">
                                <span className="flex-shrink-0 h-2 w-2 rounded-full bg-green-primary animate-pulse"></span>
                                <p className="text-[10px] text-green-primary font-black uppercase tracking-[0.2em]">Frenchies R Us Radio</p>
                            </div>

                            <div className="min-w-0">
                                <h4 className={`font-serif font-black text-white italic leading-tight transition-all duration-500 ${PLAYLIST[trackIndex].title.length > 15 ? 'text-xl md:text-3xl' : 'text-2xl md:text-4xl'}`}>
                                    {PLAYLIST[trackIndex].title}
                                </h4>
                                <p className="text-gray-300 text-[10px] md:text-xs font-bold uppercase tracking-widest mt-1">Bred for Perfection</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 mt-8">
                            <button
                                onClick={prevTrack}
                                className="p-2 text-gray-400 hover:text-white transition-all active:scale-90"
                            >
                                <SkipBack size={24} fill="currentColor" />
                            </button>

                            <button
                                onClick={togglePlay}
                                className="w-14 h-14 bg-white text-text-primary rounded-full flex items-center justify-center hover:bg-green-primary hover:text-white transition-all duration-500 shadow-2xl active:scale-95 group/play"
                            >
                                {isPlaying ? <Pause size={28} fill="currentColor" /> : <Play size={28} fill="currentColor" className="ml-1" />}
                            </button>

                            <button
                                onClick={nextTrack}
                                className="p-2 text-gray-400 hover:text-white transition-all active:scale-90"
                            >
                                <SkipForward size={24} fill="currentColor" />
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-4">
                        <div className="relative group/art">
                            {/* Art Container - Always Circle */}
                            <div
                                className={`w-28 h-28 md:w-40 md:h-40 flex-shrink-0 flex items-center justify-center text-white shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-[1000ms] cubic-bezier(0.4, 0, 0.2, 1) overflow-hidden relative rounded-full ${isPlaying ? 'scale-105' : 'bg-white/5'}`}
                            >
                                {/* Simple artwork container without exit/enter slide */}
                                <div className="absolute inset-0 w-full h-full rounded-full overflow-hidden">
                                    <img
                                        key={trackIndex}
                                        src={PLAYLIST[trackIndex].art}
                                        alt={PLAYLIST[trackIndex].title}
                                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 opacity-100 ${isPlaying ? 'scale-110 animate-spin-slow' : 'scale-100'}`}
                                    />

                                    {isPlaying && (
                                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                                            <div className="w-4 h-4 md:w-6 md:h-6 bg-white rounded-full border-2 border-black/20 shadow-inner"></div>
                                            <div className="absolute inset-0 border-[14px] border-black/40 rounded-full"></div>
                                            <div className="absolute inset-0 border-4 border-black/20 rounded-full"></div>
                                            <div className="absolute inset-[30px] md:inset-[40px] border border-white/5 rounded-full"></div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <button
                                onClick={() => setIsExpanded(false)}
                                className="absolute -top-3 -right-3 bg-text-primary/95 backdrop-blur-xl p-2 text-white hover:text-green-primary rounded-full border-t border-l border-white/20 shadow-lg transition-all z-30 active:scale-90"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <div className="h-8 flex items-center">
                            <SymmetricalEQ isPlaying={isPlaying} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
