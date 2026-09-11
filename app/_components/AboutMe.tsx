'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';
import { GENERAL_INFO } from '@/lib/data';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AboutMe = () => {
    const container = React.useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-in',
                    trigger: container.current,
                    start: 'top 70%',
                    end: 'bottom bottom',
                    scrub: 0.5,
                },
            });

            tl.from('.slide-up-and-fade', {
                y: 150,
                opacity: 0,
                stagger: 0.05,
            });
        },
        { scope: container },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-out',
                    trigger: container.current,
                    start: 'bottom 50%',
                    end: 'bottom 10%',
                    scrub: 0.5,
                },
            });

            tl.to('.slide-up-and-fade', {
                y: -150,
                opacity: 0,
                stagger: 0.02,
            });
        },
        { scope: container },
    );

    return (
        <section className="pb-section" id="about-me">
            <div className="container" ref={container}>
                <h2 className="text-4xl md:text-6xl font-thin mb-20 slide-up-and-fade">
                    Passionate about engineering responsive, intuitive, and
                    high-performance web solutions that deliver seamless user
                    experiences and robust system reliability.
                </h2>

                <p className="pb-3 border-b text-muted-foreground slide-up-and-fade">
                    About me.
                </p>

                <div className="grid md:grid-cols-12 mt-9 gap-y-6">
                    <div className="md:col-span-5">
                        <p className="text-4xl sm:text-5xl font-anton slide-up-and-fade">
                            Hi, I&apos;m {GENERAL_INFO.shortName}.
                        </p>
                    </div>
                    <div className="md:col-span-7">
                        <div className="text-lg text-muted-foreground max-w-[500px]">
                            <p className="slide-up-and-fade">
                                I am a final-year Information Systems undergraduate
                                at Gunadarma University with an educational background
                                in Software Engineering from SMKN 1 Kota Bekasi.
                                I specialize in front-end development, full-stack web
                                platforms, and modern web architectures.
                            </p>
                            <p className="mt-3 slide-up-and-fade">
                                With practical industry experience as a Web Developer
                                at WGN Sport Center and serving as a Computer Lab &
                                LSP Assessor Assistant, I combine structured relational
                                database design (MySQL), modular backends (PHP, Laravel),
                                dynamic JavaScript/React interfaces, and machine learning
                                web deployment to build comprehensive digital applications.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
