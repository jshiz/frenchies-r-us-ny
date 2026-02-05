'use client';

import { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Music2, Volume2, X, ChevronUp, ChevronDown } from 'lucide-react';

const PLAYLIST = [
    { id: 1, title: "Vibing at the HQ", artist: "Frenchie Radio", src: "#" },
    { id: 2, title: "Puppy Love", artist: "Afternoon Jams", src: "#" },
    { id: 3, title: "Backyard Playtime", artist: "Chill Beats", src: "#" }
];

export default function FrenchieRadio() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [trackIndex, setTrackIndex] = useState(0);
    const [isExpanded, setIsExpanded] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    // Simulated audio toggle
    const togglePlay = () => setIsPlaying(!isPlaying);

    const nextTrack = () => setTrackIndex((prev) => (prev + 1) % PLAYLIST.length);
    const prevTrack = () => setTrackIndex((prev) => (prev - 1 + PLAYLIST.length) % PLAYLIST.length);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // On mobile, default to collapsed
    useEffect(() => {
        if (isMobile) setIsExpanded(false);
    }, [isMobile]);

    if (!isExpanded) {
        return (
            <button
                onClick={() => setIsExpanded(true)}
                className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-green-primary rounded-full shadow-xl flex items-center justify-center text-white hover:scale-110 transition-transform cursor-pointer animate-fade-in-up"
                aria-label="Open Radio"
            >
                {isPlaying ? (
                    <div className="flex gap-1 items-end h-4">
                        <span className="w-1 bg-white animate-[bounce_1s_infinite] h-2"></span>
                        <span className="w-1 bg-white animate-[bounce_1.2s_infinite] h-4"></span>
                        <span className="w-1 bg-white animate-[bounce_0.8s_infinite] h-3"></span>
                    </div>
                ) : (
                    <Music2 size={24} />
                )}
            </button>
        );
    }

    return (
        <div className="fixed bottom-0 left-0 right-0 z-40 p-4 md:p-6 animate-fade-in-up transition-all pointer-events-none">
            <div className="max-w-3xl mx-auto bg-white/90 backdrop-blur-md border border-gray-200 shadow-2xl rounded-2xl md:rounded-full p-3 pr-6 flex items-center gap-4 pointer-events-auto">

                {/* Album Art / Visualizer */}
                <div className="w-12 h-12 bg-green-primary rounded-full flex-shrink-0 flex items-center justify-center text-white overflow-hidden relative">
                    {isPlaying && (
                        <div className="absolute inset-0 bg-green-dark opacity-20 animate-pulse"></div>
                    )}
                    <Music2 size={20} />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                    <p className="text-xs text-green-primary font-bold tracking-wider uppercase mb-0.5">Frenchie Radio Live</p>
                    <h4 className="font-semibold text-sm truncate">{PLAYLIST[trackIndex].title} <span className="text-gray-400 font-normal">- {PLAYLIST[trackIndex].artist}</span></h4>
                </div>

                {/* Controls */}
                <div className="flex items-center gap-3">
                    <button onClick={prevTrack} className="p-2 text-gray-400 hover:text-black hidden sm:block"><SkipBack size={18} /></button>

                    <button
                        onClick={togglePlay}
                        className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-green-primary transition-colors focus:ring-2 ring-offset-2 ring-green-primary"
                    >
                        {isPlaying ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" className="ml-1" />}
                    </button>

                    <button onClick={nextTrack} className="p-2 text-gray-400 hover:text-black hidden sm:block"><SkipForward size={18} /></button>

                    <button
                        onClick={() => setIsExpanded(false)}
                        className="ml-4 p-2 text-gray-400 hover:text-red-500 rounded-full hover:bg-gray-100"
                    >
                        <ChevronDown size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
}
