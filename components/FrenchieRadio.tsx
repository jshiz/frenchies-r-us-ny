'use client';

import { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Music2, Volume2, X, ChevronUp, ChevronDown, ListMusic } from 'lucide-react';

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

export default function FrenchieRadio() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [trackIndex, setTrackIndex] = useState(0);
    const [isExpanded, setIsExpanded] = useState(false); // Start collapsed as requested
    const [volume, setVolume] = useState(0.7);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // Toggle Play/Pause
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

    // Update audio source when track changes
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.src = PLAYLIST[trackIndex].src;
            if (isPlaying) {
                audioRef.current.play().catch(e => console.error("Playback failed:", e));
            }
        }
    }, [trackIndex]);

    // Update volume
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume;
        }
    }, [volume]);

    // Handle end of track
    const handleEnded = () => {
        nextTrack();
    };

    return (
        <>
            <audio
                ref={audioRef}
                onEnded={handleEnded}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
            />

            {/* Collapsed Widget */}
            {!isExpanded && (
                <button
                    onClick={() => setIsExpanded(true)}
                    className={`fixed bottom-6 right-6 z-50 group flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 p-2 pr-6 rounded-full shadow-2xl hover:bg-white/20 transition-all duration-500 cursor-pointer animate-fade-in-up ${isPlaying ? 'animate-bounce-slow' : ''}`}
                    aria-label="Open Frenchie Radio"
                >
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white relative overflow-hidden transition-transform duration-700 group-hover:scale-110 ${isPlaying ? 'bg-green-primary shadow-[0_0_30px_rgba(123,154,109,0.5)]' : 'bg-text-primary'}`}>
                        {/* Album Art Overlay */}
                        <img
                            src={PLAYLIST[trackIndex].art}
                            alt="Art"
                            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isPlaying ? 'opacity-40' : 'opacity-20'}`}
                        />

                        {isPlaying ? (
                            <div className="flex gap-1 items-end h-4 relative z-10">
                                <span className="w-1 bg-white animate-[bounce_1s_infinite] h-2"></span>
                                <span className="w-1 bg-white animate-[bounce_1.2s_infinite] h-4"></span>
                                <span className="w-1 bg-white animate-[bounce_0.8s_infinite] h-1.5"></span>
                                <span className="w-1 bg-white animate-[bounce_1.4s_infinite] h-3"></span>
                            </div>
                        ) : (
                            <Music2 size={24} className="relative z-10" />
                        )}
                        {/* Spinning Record Disc Detail */}
                        <div className={`absolute inset-0 border-[8px] border-black/10 rounded-full ${isPlaying ? 'animate-spin-slow' : ''}`}></div>
                    </div>

                    {/* Fun Floating Notes */}
                    {isPlaying && (
                        <>
                            <div className="absolute -top-4 left-4 animate-bounce delay-100 opacity-60">
                                <Music2 size={12} className="text-green-primary" />
                            </div>
                            <div className="absolute top-0 -left-2 animate-bounce delay-300 opacity-40">
                                <Music2 size={10} className="text-white" />
                            </div>
                        </>
                    )}

                    <div className="flex flex-col items-start translate-x-2 group-hover:translate-x-3 transition-transform">
                        <span className="text-[10px] font-black uppercase tracking-widest text-green-primary">Now Playing</span>
                        <span className="text-sm font-serif font-black italic text-white truncate max-w-[120px]">
                            {isPlaying ? PLAYLIST[trackIndex].title : "Frenchie Radio"}
                        </span>
                    </div>
                </button>
            )}

            {/* Expanded Player */}
            <div className={`fixed bottom-0 left-0 right-0 z-50 p-4 md:p-8 transition-all duration-700 ease-in-out pointer-events-none ${isExpanded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                <div className="max-w-4xl mx-auto bg-text-primary/95 backdrop-blur-2xl border border-white/10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] rounded-[3rem] p-4 md:p-6 flex flex-col md:flex-row items-center gap-6 pointer-events-auto relative overflow-hidden group">

                    {/* Background Fun: Animated Glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-green-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-green-primary/20 transition-all duration-1000"></div>

                    {/* Album Art / Fun Visualizer */}
                    <div className="relative group/art">
                        <div className={`w-20 md:w-24 h-20 md:h-24 bg-text-primary rounded-3xl flex-shrink-0 flex items-center justify-center text-white shadow-2xl transition-all duration-700 overflow-hidden relative ${isPlaying ? 'rotate-[360deg] rounded-full' : 'hover:scale-105'}`}>
                            {/* Actual Album Art Image */}
                            <img
                                src={PLAYLIST[trackIndex].art}
                                alt={PLAYLIST[trackIndex].title}
                                className={`absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ${isPlaying ? 'scale-110' : 'scale-100'}`}
                            />

                            {/* Inner Circle to look like Vinyl */}
                            {isPlaying && (
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <div className="w-4 h-4 bg-white rounded-full z-20 border-2 border-black/20"></div>
                                    <div className="absolute inset-0 border-[10px] border-black/40 rounded-full"></div>
                                    <div className="absolute inset-0 border-4 border-black/20 rounded-full"></div>
                                    <div className="absolute inset-[20px] border border-white/10 rounded-full"></div>
                                    <div className="absolute inset-[30px] border border-white/10 rounded-full"></div>
                                </div>
                            )}
                        </div>
                        {/* Audio Bars Overlay */}
                        {isPlaying && (
                            <div className="absolute -bottom-2 -right-2 flex gap-0.5 items-end h-8 bg-black/40 backdrop-blur-md px-2 py-1.5 rounded-lg border border-white/10">
                                {[1.2, 0.8, 1.5, 1.1, 0.9, 1.3].map((delay, i) => (
                                    <span
                                        key={i}
                                        className="w-1 bg-green-primary rounded-full animate-bounce h-full"
                                        style={{ animationDelay: `${delay}s`, height: `${Math.random() * 100}%` }}
                                    ></span>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Track Info */}
                    <div className="flex-1 text-center md:text-left min-w-0 space-y-1">
                        <div className="flex items-center justify-center md:justify-start gap-2">
                            <span className="flex h-2 w-2 rounded-full bg-green-primary animate-pulse"></span>
                            <p className="text-[10px] text-green-primary font-black tracking-[0.3em] uppercase">Vibing Worldwide</p>
                        </div>
                        <h4 className="font-serif text-2xl md:text-3xl font-black text-white italic leading-tight truncate">
                            {PLAYLIST[trackIndex].title}
                        </h4>
                        <p className="text-gray-400 text-xs font-medium uppercase tracking-widest">{PLAYLIST[trackIndex].artist}</p>
                    </div>

                    {/* Controls Component */}
                    <div className="flex flex-col items-center gap-4">
                        <div className="flex items-center gap-6">
                            <button
                                onClick={prevTrack}
                                className="p-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-full transition-all active:scale-90"
                                title="Previous Track"
                            >
                                <SkipBack size={24} fill="currentColor" />
                            </button>

                            <button
                                onClick={togglePlay}
                                className="w-16 h-16 bg-white text-text-primary rounded-full flex items-center justify-center hover:bg-green-primary hover:text-white transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-green-primary/40 active:scale-95 group/play"
                            >
                                {isPlaying ? (
                                    <Pause size={28} fill="currentColor" />
                                ) : (
                                    <Play size={28} fill="currentColor" className="ml-1 transition-transform group-hover/play:scale-110" />
                                )}
                            </button>

                            <button
                                onClick={nextTrack}
                                className="p-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-full transition-all active:scale-90"
                                title="Next Track"
                            >
                                <SkipForward size={24} fill="currentColor" />
                            </button>
                        </div>

                        {/* Volume Control */}
                        <div className="flex items-center gap-3 w-32 md:w-40 opacity-60 hover:opacity-100 transition-opacity">
                            <Volume2 size={14} className="text-gray-400" />
                            <input
                                type="range"
                                min="0"
                                max="1"
                                step="0.01"
                                value={volume}
                                onChange={(e) => setVolume(parseFloat(e.target.value))}
                                className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-green-primary"
                            />
                        </div>
                    </div>

                    {/* Close / Minimize */}
                    <button
                        onClick={() => setIsExpanded(false)}
                        className="absolute top-4 right-4 md:relative md:top-auto md:right-auto p-3 text-gray-500 hover:text-white hover:bg-white/5 rounded-full transition-all group/close"
                        aria-label="Minimize Radio"
                    >
                        <ChevronDown size={24} className="group-hover:translate-y-0.5 transition-transform" />
                    </button>
                </div>
            </div>
        </>
    );
}

