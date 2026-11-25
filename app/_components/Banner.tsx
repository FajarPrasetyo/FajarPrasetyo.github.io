'use client';
import ArrowAnimation from '@/components/ArrowAnimation';
import Button from '@/components/Button';
import { GENERAL_INFO } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Banner = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);

    // move the content a little up on scroll
    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 70%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            });

            tl.fromTo(
                '.slide-up-and-fade',
                { y: 0 },
                { y: -150, opacity: 0, stagger: 0.02 },
            );
        },
        { scope: containerRef },
    );

    return (
        <section className="relative overflow-hidden" id="banner">
            <ArrowAnimation />
            <div
                className="container h-[100svh] min-h-[530px] max-md:pb-10 flex justify-between items-center max-md:flex-col"
                ref={containerRef}
            >
                <div className="max-md:grow max-md:flex flex-col justify-center items-start max-w-[580px]">
                    <h1 className="banner-title slide-up-and-fade leading-[.95] text-5xl sm:text-[76px] font-anton">
                        <span className="text-primary">WEB DEVELOPER</span>
                        <br /> <span className="ml-3 sm:ml-4 text-foreground text-4xl sm:text-[60px]">| SOFTWARE ENGINEER</span>
                    </h1>
                    <p className="banner-description slide-up-and-fade mt-6 text-lg text-muted-foreground">
                        Hi! I&apos;m{' '}
                        <span className="font-medium text-foreground">
                            {GENERAL_INFO.name}
                        </span>
                        . A passionate Web Developer and Software Engineer with
                        expertise in crafting modern, responsive, and user-centric
                        digital solutions — from multi-role web platforms to scalable
                        software architectures.
                    </p>
                    <div className="flex flex-wrap items-center gap-4 mt-8 slide-up-and-fade">
                        <Button
                            as="link"
                            href={`mailto:${GENERAL_INFO.email}?subject=${encodeURIComponent(GENERAL_INFO.emailSubject)}`}
                            variant="primary"
                            className="banner-button"
                        >
                            Let&apos;s Connect
                        </Button>
                        <Button
                            as="link"
                            href="#selected-projects"
                            variant="secondary"
                            className="banner-button"
                        >
                            View Projects
                        </Button>
                    </div>

                    <div className="flex items-center gap-2 mt-5 slide-up-and-fade">
                        <span className="size-3 rounded-full bg-emerald-400 animate-pulse"></span>
                        <span className="text-sm text-muted-foreground">
                            Available for full-time & collaboration opportunities
                        </span>
                    </div>
                </div>

                <div className="md:absolute bottom-[10%] right-[4%] flex md:flex-col gap-4 md:gap-8 text-center md:text-right">
                    <div className="slide-up-and-fade">
                        <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                            6+
                        </h5>
                        <p className="text-muted-foreground">
                            Years of Coding
                        </p>
                    </div>
                    <div className="slide-up-and-fade">
                        <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                            6+
                        </h5>
                        <p className="text-muted-foreground">
                            Completed Projects
                        </p>
                    </div>
                    <div className="slide-up-and-fade">
                        <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                            3.71
                        </h5>
                        <p className="text-muted-foreground">Gunadarma GPA</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
