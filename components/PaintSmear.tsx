'use client';

export default function PaintSmear({ side = 'left', color = 'green-primary', opacity = 'opacity-10', rotate = 0 }) {
    const rotation = rotate !== 0 ? `rotate(${rotate}deg)` : 'none';

    return (
        <div
            className={`absolute ${side === 'left' ? '-left-20' : '-right-20'} w-96 h-96 pointer-events-none z-0 ${opacity}`}
            style={{ transform: rotation }}
        >
            <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" className={`text-${color} fill-current`}>
                <path d="M410.5,316.5Q371,383,303.5,417.5Q236,452,168.5,417.5Q101,383,64.5,316.5Q28,250,64.5,183.5Q101,117,168.5,82.5Q236,48,303.5,82.5Q371,117,410.5,183.5Q450,250,410.5,316.5Z" />
            </svg>
        </div>
    );
}
