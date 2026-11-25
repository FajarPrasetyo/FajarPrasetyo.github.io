'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import {
    ChevronLeft,
    ChevronRight,
    ExternalLink,
    Images,
} from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface ProjectGalleryProps {
    images: string[];
}

const ProjectGallery = ({ images }: ProjectGalleryProps) => {
    const [current, setCurrent] = useState(0);
    const touchStartX = useRef<number | null>(null);

    const goTo = useCallback(
        (index: number) => {
            if (!images.length) return;
            setCurrent(((index % images.length) + images.length) % images.length);
        },
        [images.length],
    );

    const navigate = useCallback(
        (dir: 'left' | 'right') => {
            goTo(current + (dir === 'right' ? 1 : -1));
        },
        [current, goTo],
    );

    useEffect(() => {
        setCurrent(0);
    }, [images]);

    if (!images || images.length === 0) return null;

    const fileName = (path: string) =>
        decodeURIComponent(path.split('/').pop() ?? '')
            .replace(/\.[^.]+$/, '')
            .replace(/[-_]+/g, ' ');

    return (
        <div className="w-full mt-2">
            <div
                className="group relative overflow-hidden rounded-2xl border border-white/10"
                style={{
                    background:
                        'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    boxShadow:
                        '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)',
                }}
                tabIndex={0}
                role="region"
                aria-label="Project screenshot gallery"
                onKeyDown={(e) => {
                    if (e.key === 'ArrowLeft') navigate('left');
                    if (e.key === 'ArrowRight') navigate('right');
                }}
                onTouchStart={(e) => {
                    touchStartX.current = e.touches[0].clientX;
                }}
                onTouchEnd={(e) => {
                    if (touchStartX.current === null) return;
                    const delta =
                        e.changedTouches[0].clientX - touchStartX.current;
                    if (Math.abs(delta) > 45) {
                        navigate(delta < 0 ? 'right' : 'left');
                    }
                    touchStartX.current = null;
                }}
            >
                {/* Header label */}
                <div className="flex items-center justify-between gap-4 px-5 py-3 border-b border-white/10">
                    <span
                        className="inline-flex items-center gap-2 text-xs font-anton uppercase tracking-widest"
                        style={{ color: 'rgba(255,255,255,0.55)' }}
                    >
                        <Images size={14} />
                        Screenshot Gallery
                    </span>
                    <span
                        className="text-xs font-mono tabular-nums"
                        style={{ color: 'rgba(255,255,255,0.35)' }}
                    >
                        {String(current + 1).padStart(2, '0')} /{' '}
                        {String(images.length).padStart(2, '0')}
                    </span>
                </div>

                {/* Image stage */}
                <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] overflow-hidden bg-black/30">
                    {/* Ambient blurred backdrop */}
                    <div
                        key={`backdrop-${current}`}
                        className="absolute inset-0 scale-125 opacity-40 blur-2xl transition-all duration-700"
                        style={{
                            backgroundImage: `url(${images[current]})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                    <div className="absolute inset-0 bg-black/20" />

                    {/* Slides */}
                    {images.map((image, index) => (
                        <Image
                            key={image}
                            src={image}
                            alt={`${fileName(image)} screenshot`}
                            fill
                            priority={index === 0}
                            sizes="(max-width: 768px) 100vw, 800px"
                            className={cn(
                                'z-[1] object-contain p-2 transition-all duration-500 ease-out sm:p-4',
                                index === current
                                    ? 'opacity-100 scale-100'
                                    : 'pointer-events-none opacity-0 scale-[0.97]',
                            )}
                        />
                    ))}

                    {images.length > 1 && (
                        <>
                            <button
                                onClick={() => navigate('left')}
                                aria-label="Previous image"
                                className="absolute left-3 top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full transition-all duration-200 hover:scale-110 active:scale-95 sm:left-4"
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
                            <button
                                onClick={() => navigate('right')}
                                aria-label="Next image"
                                className="absolute right-3 top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full transition-all duration-200 hover:scale-110 active:scale-95 sm:right-4"
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
                        </>
                    )}

                    {/* Open full size */}
                    <a
                        href={images[current]}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Open full image"
                        className="absolute right-3 top-3 z-10 flex size-9 items-center justify-center rounded-full opacity-60 transition-all duration-200 hover:scale-110 hover:opacity-100 sm:right-4 sm:top-4"
                        style={{
                            background: 'rgba(0,0,0,0.5)',
                            border: '1px solid rgba(255,255,255,0.15)',
                            backdropFilter: 'blur(8px)',
                            WebkitBackdropFilter: 'blur(8px)',
                            color: 'rgba(255,255,255,0.85)',
                        }}
                    >
                        <ExternalLink size={14} />
                    </a>

                    {/* Caption */}
                    <div className="absolute inset-x-0 bottom-0 z-[2] bg-gradient-to-t from-black/70 via-black/20 to-transparent px-4 pb-3 pt-10">
                        <p className="truncate text-xs capitalize tracking-wide text-white/70">
                            {fileName(images[current])}
                        </p>
                    </div>
                </div>

                {/* Thumbnail rail */}
                <div className="flex items-center gap-2 overflow-x-auto px-4 py-3 [scrollbar-width:thin]">
                    {images.map((image, index) => (
                        <button
                            key={image}
                            onClick={() => goTo(index)}
                            aria-label={`Go to image ${index + 1}`}
                            aria-current={index === current}
                            className={cn(
                                'relative h-14 w-20 shrink-0 overflow-hidden rounded-lg border transition-all duration-300',
                                index === current
                                    ? 'border-white/70 opacity-100'
                                    : 'border-white/10 opacity-50 hover:opacity-90',
                            )}
                        >
                            <Image
                                src={image}
                                alt=""
                                width={80}
                                height={56}
                                className="h-full w-full object-cover"
                            />
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectGallery;
