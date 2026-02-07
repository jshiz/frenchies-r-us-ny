'use client';

import { useRef, useState } from 'react';
import { Play, Volume2, VolumeX } from 'lucide-react';

// Explicitly listing the 14 available videos to avoid 404s on missing indexes
const VIDEOS = [
    '/video/frenchie-cam-1.mp4',
    '/video/frenchie-cam-2.mp4',
    '/video/frenchie-cam-3.mp4',
    '/video/frenchie-cam-4.mp4',
    '/video/frenchie-cam-5.mp4',
    '/video/frenchie-cam-6.mp4',
    '/video/frenchie-cam-7.mp4',
    '/video/frenchie-cam-8.mp4',
    '/video/frenchie-cam-10.mp4',
    '/video/frenchie-cam-12.mp4',
    '/video/frenchie-cam-13.mp4',
    '/video/frenchie-cam-14.mp4',
    '/video/frenchie-cam-15.mp4',
    '/video/frenchie-cam-16.mp4',
];

function VideoCard({ src }: { src: string }) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(true);

    const togglePlay = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!videoRef.current) return;
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
            setIsMuted(false);
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div
            className="flex-shrink-0 w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-md bg-black relative group cursor-pointer border-2 border-white transition-all duration-500 hover:shadow-xl hover:scale-[1.02]"
            onClick={togglePlay}
        >
            <video
                ref={videoRef}
                src={`${src}#t=2`}
                preload="metadata"
                className="w-full h-full object-cover"
                loop
                muted={isMuted}
                playsInline
            />

            {/* Play/Pause Overlay - Clean & Minimal */}
            {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 shadow-lg">
                        <Play size={20} className="text-white fill-white ml-0.5" />
                    </div>
                </div>
            )}

            {/* Sound Toggle Indicator */}
            <div className="absolute top-3 right-3 z-20">
                <div className="p-1.5 bg-black/20 backdrop-blur-md rounded-full text-white border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                    {isMuted ? <VolumeX size={12} /> : <Volume2 size={12} />}
                </div>
            </div>
        </div>
    );
}

export default function Gallery() {
    return (
        <section id="gallery" className="py-24 bg-cream-light">
            <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
                <div className="inline-block transform -rotate-1 mb-3">
                    <span className="font-marker text-green-primary text-lg md:text-xl tracking-widest uppercase italic font-black">The POV Diary</span>
                </div>
                <h2 className="font-serif text-4xl md:text-7xl font-black mb-6 tracking-tighter uppercase leading-tight text-text-primary">
                    Life at <br className="md:hidden" />
                    <span className="text-green-primary">The Headquarters. 🎥</span>
                </h2>
                <p className="text-text-secondary text-sm md:text-lg font-medium max-w-2xl mx-auto leading-relaxed italic opacity-80">
                    Unfiltered daily adventures from the heart of the Capital Region.
                </p>
            </div>

            {/* Condensed Grid Layout - Centered with Flex */}
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                    {VIDEOS.map((src, i) => (
                        <div key={i} className="w-[calc(50%-0.75rem)] sm:w-[calc(33.33%-0.75rem)] md:w-[calc(25%-1rem)]">
                            <VideoCard src={src} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
