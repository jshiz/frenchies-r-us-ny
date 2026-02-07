'use client';

import { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Music2, ChevronDown } from 'lucide-react';

const PLAYLIST = [
    { id: 1, title: "The Anthem", artist: "Frenchie Royal", src: "/music/The Anthem.mp3", art: "/music/The Anthem.jpeg" },
    { id: 2, title: "Exotic Colors", artist: "Frenchie Royal", src: "/music/Exotic Colors.mp3", art: "/music/Exotic Colors.jpeg" },
    { id: 3, title: "Puppy Zoomies", artist: "Frenchie Royal", src: "/music/Puppy Zoomies.mp3", art: "/music/Puppy Zoomies.jpeg" },
    { id: 4, title: "Royal Bloodline", artist: "Frenchie Royal", src: "/music/Royal Bloodline.mp3", art: "/music/Royal Bloodline.jpeg" },
    { id: 5, title: "Not a Kennel", artist: "Frenchie Royal", src: "/music/Not a Kennel.mp3", art: "/music/Not a Kennel.jpeg" },
    { id: 6, title: "The Anthem 2", artist: "Frenchie Royal", src: "/music/The Anthem 2.mp3", art: "/music/The Anthem 2.jpeg" },
    { id: 7, title: "Exotic Colors 2", artist: "Frenchie Royal", src: "/music/Exotic Colors 2.mp3", art: "/music/Exotic Colors 2.jpeg" },
    { id: 8, title: "Royal Bloodline 2", artist: "Frenchie Royal", src: "/music/Royal Bloodline 2.mp3", art: "/music/Royal Bloodline 2.jpeg" },
    { id: 9, title: "Not a Kennel 2", artist: "Frenchie Royal", src: "/music/Not a Kennel 2.mp3", art: "/music/Not a Kennel 2.jpeg" }
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
            <audio
                ref={audioRef}
                onEnded={nextTrack}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
            />

            {/* Collapsed Widget */}
            {!isExpanded && (
                <button
                    onClick={() => setIsExpanded(true)}
                    className={`fixed bottom-6 right-6 z-50 group flex items-center gap-3 bg-text-primary/95 backdrop-blur-xl border border-white/20 p-2 pr-8 rounded-full shadow-2xl hover:bg-white/30 transition-all duration-500 cursor-pointer animate-fade-in-up ${isPlaying ? 'animate-bounce-slow' : ''}`}
                >
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center relative overflow-hidden transition-transform duration-700 group-hover:scale-110 ${isPlaying ? 'bg-green-primary shadow-[0_0_30px_rgba(123,154,109,0.5)]' : 'bg-text-primary'}`}>
                        <img
                            src={PLAYLIST[trackIndex].art}
                            alt="Art"
                            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isPlaying ? 'opacity-40 animate-spin-slow' : 'opacity-20'}`}
                        />
                        {isPlaying ? (
                            <div className="flex gap-0.5 items-end h-3 relative z-10">
                                {[1, 2, 3].map(i => (
                                    <span key={i} className={`w-1 bg-white animate-[bounce_${0.8 + i * 0.2}s_infinite] h-${i === 2 ? '4' : '2'}`}></span>
                                ))}
                            </div>
                        ) : (
                            <Music2 size={24} className="relative z-10 text-white" />
                        )}
                        <div className={`absolute inset-0 border-[8px] border-black/10 rounded-full ${isPlaying ? 'animate-spin-slow' : ''}`}></div>
                    </div>

                    {isPlaying && (
                        <div className="absolute -top-4 left-4 animate-bounce pointer-events-none opacity-60">
                            <Music2 size={12} className="text-green-primary" />
                        </div>
                    )}

                    <div className="flex flex-col items-start translate-x-1 group-hover:translate-x-2 transition-transform pr-2">
                        <span className="text-[9px] font-black uppercase tracking-widest text-green-primary">Playing</span>
                        <span className="text-sm font-serif font-black italic text-white truncate max-w-[120px] pr-2">
                            {isPlaying ? PLAYLIST[trackIndex].title : "Radio"}
                        </span>
                    </div>
                </button>
            )}

            {/* Expanded Player - Repositioned to Bottom Right */}
            <div className={`fixed bottom-0 right-0 z-50 p-4 md:p-8 transition-all duration-700 ease-in-out pointer-events-none ${isExpanded ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-95'}`}>
                <div className="max-w-xl bg-text-primary/95 backdrop-blur-3xl border border-white/10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] rounded-[3rem] p-6 flex flex-row items-center gap-8 pointer-events-auto relative overflow-hidden group">

                    {/* Background Glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-green-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-green-primary/20 transition-all duration-1000"></div>

                    {/* Left Side: Text Info & Controls */}
                    <div className="flex-1 min-w-0 flex flex-col justify-between py-2">
                        <div className="space-y-4">
                            {/* Branding Row */}
                            <div className="flex items-center gap-2">
                                <span className="flex-shrink-0 h-2 w-2 rounded-full bg-green-primary animate-pulse"></span>
                                <p className="text-[10px] text-green-primary font-black uppercase tracking-[0.3em] truncate">Frenchies R Us Radio</p>
                            </div>

                            {/* Large Title Row */}
                            <div className="min-w-0">
                                <h4 className="font-serif text-2xl md:text-4xl font-black text-white italic leading-tight truncate pr-4">
                                    {PLAYLIST[trackIndex].title}
                                </h4>
                                <p className="text-gray-500 text-[10px] md:text-xs font-bold uppercase tracking-widest mt-1 opacity-60">Bred for Perfection</p>
                            </div>
                        </div>

                        {/* Controls Row */}
                        <div className="flex items-center gap-4 mt-8">
                            <button
                                onClick={prevTrack}
                                className="p-2 text-gray-500 hover:text-white transition-all active:scale-90"
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
                                className="p-2 text-gray-500 hover:text-white transition-all active:scale-90"
                            >
                                <SkipForward size={24} fill="currentColor" />
                            </button>
                        </div>
                    </div>

                    {/* Right Side: Visualizer & Large Album Art */}
                    <div className="flex flex-col items-center gap-4">
                        <div className="relative group/art">
                            <div className={`w-28 h-28 md:w-40 md:h-40 bg-text-primary rounded-3xl flex-shrink-0 flex items-center justify-center text-white shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-1000 overflow-hidden relative ${isPlaying ? 'rotate-[360deg] rounded-full scale-105' : 'hover:scale-105'}`}>
                                <img
                                    src={PLAYLIST[trackIndex].art}
                                    alt={PLAYLIST[trackIndex].title}
                                    className={`absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ${isPlaying ? 'scale-110 opacity-90 animate-spin-slow' : 'scale-100'}`}
                                />

                                {isPlaying && (
                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                        <div className="w-4 h-4 md:w-6 md:h-6 bg-white rounded-full z-20 border-2 border-black/20 shadow-inner"></div>
                                        <div className="absolute inset-0 border-[14px] border-black/40 rounded-full"></div>
                                        <div className="absolute inset-0 border-4 border-black/20 rounded-full"></div>
                                        <div className="absolute inset-[30px] md:inset-[40px] border border-white/5 rounded-full"></div>
                                    </div>
                                )}
                            </div>

                            {/* Minimize Button - Integrated near art */}
                            <button
                                onClick={() => setIsExpanded(false)}
                                className="absolute -top-3 -right-3 bg-text-primary/90 backdrop-blur-xl p-2 text-gray-400 hover:text-white rounded-full border border-white/10 shadow-xl transition-all z-30"
                            >
                                <ChevronDown size={20} />
                            </button>
                        </div>

                        {/* Equalizer moved to Right Side under Art */}
                        <div className="h-8 flex items-center">
                            <SymmetricalEQ isPlaying={isPlaying} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
