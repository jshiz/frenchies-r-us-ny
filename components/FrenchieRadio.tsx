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
const Equalizer = () => (
    <div className="flex gap-1 items-end h-6 w-12 justify-center">
        {[0.6, 0.4, 0.8, 0.5, 0.7, 0.5, 0.8, 0.4, 0.6].map((h, i) => (
            <span
                key={i}
                className="w-1 bg-green-primary rounded-full animate-bounce"
                style={{
                    animationDuration: `${0.6 + Math.abs(i - 4) * 0.15}s`,
                    height: `${h * 100}%`
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
            audioRef.current.volume = 1; // Always 100%
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
                    className={`fixed bottom-6 right-6 z-50 group flex items-center gap-3 bg-text-primary/10 backdrop-blur-xl border border-white/20 p-2 pr-8 rounded-full shadow-2xl hover:bg-white/20 transition-all duration-500 cursor-pointer animate-fade-in-up ${isPlaying ? 'animate-bounce-slow' : ''}`}
                >
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center relative overflow-hidden transition-transform duration-700 group-hover:scale-110 ${isPlaying ? 'bg-green-primary shadow-[0_0_30px_rgba(123,154,109,0.5)]' : 'bg-text-primary'}`}>
                        <img
                            src={PLAYLIST[trackIndex].art}
                            alt="Art"
                            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isPlaying ? 'opacity-40' : 'opacity-20'}`}
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
                        <span className="text-xs font-serif font-black italic text-white truncate max-w-[120px] pr-2">
                            {isPlaying ? PLAYLIST[trackIndex].title : "Radio"}
                        </span>
                    </div>
                </button>
            )}

            {/* Expanded Player - Compact & Mobile Optimized */}
            <div className={`fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 transition-all duration-700 ease-in-out pointer-events-none ${isExpanded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                <div className="max-w-xl mx-auto bg-text-primary/95 backdrop-blur-2xl border border-white/10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] rounded-[2.5rem] p-4 flex items-center gap-4 pointer-events-auto relative overflow-hidden group">

                    {/* Background Glow */}
                    <div className="absolute top-0 right-0 w-48 h-48 bg-green-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-green-primary/20 transition-all duration-1000"></div>

                    {/* Album Art Icon */}
                    <div className="relative flex-shrink-0">
                        <div className={`w-16 h-16 md:w-20 md:h-20 bg-text-primary rounded-2xl flex-shrink-0 flex items-center justify-center shadow-xl transition-all duration-1000 overflow-hidden relative ${isPlaying ? 'rotate-[360deg] rounded-full' : ''}`}>
                            <img
                                src={PLAYLIST[trackIndex].art}
                                alt={PLAYLIST[trackIndex].title}
                                className={`absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ${isPlaying ? 'scale-110 opacity-80' : 'scale-100'}`}
                            />
                            {isPlaying && (
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <div className="w-3 h-3 bg-white rounded-full z-20 border-2 border-black/20"></div>
                                    <div className="absolute inset-0 border-[6px] border-black/40 rounded-full"></div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Track Info & Equalizer */}
                    <div className="flex-1 min-w-0 flex flex-col justify-center min-h-[64px]">
                        <div className="flex items-center gap-2 mb-0.5">
                            <span className="flex h-1.5 w-1.5 rounded-full bg-green-primary animate-pulse"></span>
                            <p className="text-[9px] text-green-primary font-black uppercase tracking-widest">Frenchies R Us Radio</p>
                        </div>
                        <h4 className="font-serif text-lg md:text-xl font-black text-white italic leading-tight truncate">
                            {PLAYLIST[trackIndex].title}
                        </h4>

                        {/* Improved Symmetrical Equalizer */}
                        {isPlaying ? (
                            <div className="mt-1 flex items-center gap-2">
                                <Equalizer />
                            </div>
                        ) : (
                            <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">Paused</p>
                        )}
                    </div>

                    {/* Controls Component - Condensed */}
                    <div className="flex items-center gap-2 md:gap-4">
                        <button
                            onClick={prevTrack}
                            className="p-2 text-gray-500 hover:text-white transition-all active:scale-90"
                        >
                            <SkipBack size={20} fill="currentColor" />
                        </button>

                        <button
                            onClick={togglePlay}
                            className="w-12 h-12 bg-white text-text-primary rounded-full flex items-center justify-center hover:bg-green-primary hover:text-white transition-all duration-300 shadow-xl active:scale-95"
                        >
                            {isPlaying ? <Pause size={22} fill="currentColor" /> : <Play size={22} fill="currentColor" className="ml-1" />}
                        </button>

                        <button
                            onClick={nextTrack}
                            className="p-2 text-gray-500 hover:text-white transition-all active:scale-90"
                        >
                            <SkipForward size={20} fill="currentColor" />
                        </button>

                        <button
                            onClick={() => setIsExpanded(false)}
                            className="ml-2 p-2 text-gray-500 hover:text-white rounded-full transition-all group/close"
                        >
                            <ChevronDown size={22} className="group-hover:translate-y-0.5 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
