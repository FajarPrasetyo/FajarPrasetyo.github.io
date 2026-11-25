'use client';
import { useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

interface ProjectGalleryProps {
    images: string[];
}

const ProjectGallery = ({ images }: ProjectGalleryProps) => {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState<'left' | 'right' | null>(null);
    const [animating, setAnimating] = useState(false);

    const navigate = useCallback(
        (dir: 'left' | 'right') => {
            if (animating || images.length <= 1) return;
            setDirection(dir);
            setAnimating(true);
            setTimeout(() => {
                setCurrent((prev) => {
                    if (dir === 'right') return (prev + 1) % images.length;
                    return (prev - 1 + images.length) % images.length;
                });
                setDirection(null);
                setAnimating(false);
            }, 300);
        },
        [animating, images.length],
    );

    if (!images || images.length === 0) return null;

    const slideClass = animating
        ? direction === 'right'
            ? 'translate-x-[-8px] opacity-0'
            : 'translate-x-[8px] opacity-0'
        : 'translate-x-0 opacity-100';

    return (
        <div className="w-full max-w-[800px] mx-auto mt-12">
            {/* Glass container */}
            <div
                className="relative rounded-2xl overflow-hidden border border-white/10"
                style={{
                    background:
                        'linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    boxShadow:
                        '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)',
                }}
            >
                {/* Header label */}
                <div className="flex items-center justify-between px-5 py-3 border-b border-white/10">
                    <span
                        className="text-xs font-anton uppercase tracking-widest"
                        style={{ color: 'rgba(255,255,255,0.5)' }}
                    >
                        Screenshots
                    </span>
                    <span
                        className="text-xs font-mono"
                        style={{ color: 'rgba(255,255,255,0.35)' }}
                    >
                        {current + 1} / {images.length}
                    </span>
                </div>

                {/* Image area */}
                <div className="relative w-full aspect-[750/400] overflow-hidden bg-black/20">
                    <div
                        className={`absolute inset-0 transition-all duration-300 ease-in-out ${slideClass}`}
                        style={{
                            backgroundImage: `url(${images[current]})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                        }}
                    />

                    {/* Prev button */}
                    {images.length > 1 && (
                        <button
                            onClick={() => navigate('left')}
                            aria-label="Previous image"
                            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 size-10 flex items-center justify-center rounded-full transition-all duration-200 hover:scale-110 active:scale-95"
                            style={{
                                background: 'rgba(0,0,0,0.45)',
                                border: '1px solid rgba(255,255,255,0.15)',
                                backdropFilter: 'blur(8px)',
                                WebkitBackdropFilter: 'blur(8px)',
                                color: 'rgba(255,255,255,0.85)',
                            }}
                        >
                            <ChevronLeft size={18} />
                        </button>
                    )}

                    {/* Next button */}
                    {images.length > 1 && (
                        <button
                            onClick={() => navigate('right')}
                            aria-label="Next image"
                            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 size-10 flex items-center justify-center rounded-full transition-all duration-200 hover:scale-110 active:scale-95"
                            style={{
                                background: 'rgba(0,0,0,0.45)',
                                border: '1px solid rgba(255,255,255,0.15)',
                                backdropFilter: 'blur(8px)',
                                WebkitBackdropFilter: 'blur(8px)',
                                color: 'rgba(255,255,255,0.85)',
                            }}
                        >
                            <ChevronRight size={18} />
                        </button>
                    )}

                    {/* Open full size link */}
                    <a
                        href={images[current]}
                        target="_blank"
                        rel="noreferrer"
                        className="absolute top-3 right-3 z-10 size-9 flex items-center justify-center rounded-full transition-all duration-200 opacity-0 hover:opacity-100 group-hover:opacity-100"
                        style={{
                            background: 'rgba(0,0,0,0.5)',
                            border: '1px solid rgba(255,255,255,0.15)',
                            color: 'rgba(255,255,255,0.8)',
                        }}
                        aria-label="Open full image"
                    >
                        <ExternalLink size={14} />
                    </a>
                </div>

                {/* Dot indicators */}
                {images.length > 1 && (
                    <div className="flex items-center justify-center gap-2 py-4 px-5">
                        {images.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => {
                                    if (animating || i === current) return;
                                    setDirection(i > current ? 'right' : 'left');
                                    setAnimating(true);
                                    setTimeout(() => {
                                        setCurrent(i);
                                        setDirection(null);
                                        setAnimating(false);
                                    }, 300);
                                }}
                                aria-label={`Go to image ${i + 1}`}
                                className="transition-all duration-300 rounded-full"
                                style={{
                                    width: i === current ? '24px' : '8px',
                                    height: '8px',
                                    background:
                                        i === current
                                            ? 'rgba(255,255,255,0.85)'
                                            : 'rgba(255,255,255,0.25)',
                                    border: 'none',
                                    cursor: 'pointer',
                                }}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectGallery;
