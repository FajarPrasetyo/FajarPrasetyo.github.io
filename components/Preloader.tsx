'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react';

gsap.registerPlugin(useGSAP);

const FIRST_NAME = ['F', 'A', 'J', 'A', 'R'];
const LAST_NAME = ['P', 'R', 'A', 'S', 'E', 'T', 'Y', 'O'];

const Preloader = () => {
    const preloaderRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                defaults: {
                    ease: 'power1.inOut',
                },
            });

            tl.to('.name-text span', {
                y: 0,
                stagger: 0.04,
                duration: 0.2,
            });

            tl.to('.preloader-item', {
                delay: 0.8,
                y: '100%',
                duration: 0.5,
                stagger: 0.08,
            })
                .to('.name-text span', { autoAlpha: 0 }, '<0.4')
                .to(
                    preloaderRef.current,
                    {
                        autoAlpha: 0,
                    },
                    '<0.8',
                );
        },
        { scope: preloaderRef },
    );

    return (
        <div className="fixed inset-0 z-[6] flex pointer-events-none" ref={preloaderRef}>
            <div className="preloader-item h-full w-[10%] bg-black"></div>
            <div className="preloader-item h-full w-[10%] bg-black"></div>
            <div className="preloader-item h-full w-[10%] bg-black"></div>
            <div className="preloader-item h-full w-[10%] bg-black"></div>
            <div className="preloader-item h-full w-[10%] bg-black"></div>
            <div className="preloader-item h-full w-[10%] bg-black"></div>
            <div className="preloader-item h-full w-[10%] bg-black"></div>
            <div className="preloader-item h-full w-[10%] bg-black"></div>
            <div className="preloader-item h-full w-[10%] bg-black"></div>
            <div className="preloader-item h-full w-[10%] bg-black"></div>

            <div className="name-text flex flex-wrap justify-center items-center gap-x-4 sm:gap-x-7 text-[10vw] sm:text-[9vw] lg:text-[120px] font-anton text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 leading-none max-w-[95vw] select-none">
                <div className="flex overflow-hidden">
                    {FIRST_NAME.map((char, idx) => (
                        <span key={`first-${idx}`} className="inline-block translate-y-full">
                            {char}
                        </span>
                    ))}
                </div>
                <div className="flex overflow-hidden">
                    {LAST_NAME.map((char, idx) => (
                        <span key={`last-${idx}`} className="inline-block translate-y-full">
                            {char}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Preloader;
