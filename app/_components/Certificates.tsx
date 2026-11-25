'use client';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import {
    ArrowUpRight,
    Award,
    BadgeCheck,
    CalendarDays,
    ExternalLink,
    ShieldCheck,
    X,
} from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import { MY_CERTIFICATES } from '@/lib/data';
import { ICertificate } from '@/types';
import { cn } from '@/lib/utils';

const Certificates = () => {
    const [active, setActive] = useState<ICertificate | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    useEffect(() => {
        if (!active) return;

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') setActive(null);
        };

        document.addEventListener('keydown', onKeyDown);
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', onKeyDown);
            document.body.style.overflow = '';
        };
    }, [active]);

    return (
        <section className="py-section" id="certifications">
            <div className="container">
                <SectionTitle title="Achievements & Certifications" />

                <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                    <p className="max-w-xl text-lg text-muted-foreground">
                        Verified credentials that reflect my commitment to
                        continuous learning and professional excellence.
                    </p>
                    <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                        <ShieldCheck size={14} className="text-primary" />
                        {String(MY_CERTIFICATES.length).padStart(2, '0')} verified
                        credentials
                    </span>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {MY_CERTIFICATES.map((certificate) => (
                        <article
                            key={certificate.title}
                            className="certificate-card group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 transition-all duration-500 hover:border-primary/40"
                            style={{
                                background:
                                    'linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.015) 100%)',
                                backdropFilter: 'blur(16px)',
                                WebkitBackdropFilter: 'blur(16px)',
                                boxShadow:
                                    '0 8px 32px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.06)',
                            }}
                        >
                            <div className="relative h-56 shrink-0 overflow-hidden sm:h-60">
                                <Image
                                    src={certificate.image}
                                    alt={`${certificate.title} certificate`}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className={cn(
                                        'object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]',
                                        certificate.imagePosition === 'top'
                                            ? 'object-top'
                                            : 'object-center',
                                    )}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background-light via-background-light/25 to-transparent" />

                                <span className="absolute left-5 top-5 z-10 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/45 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-white/80 backdrop-blur-md">
                                    <BadgeCheck
                                        size={12}
                                        className="text-primary"
                                    />
                                    {certificate.category}
                                </span>

                                <button
                                    type="button"
                                    onClick={() => setActive(certificate)}
                                    className="absolute inset-0 z-[1]"
                                    aria-label={`Preview ${certificate.title} certificate`}
                                />
                            </div>

                            <div className="relative -mt-8 flex flex-1 flex-col p-6">
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <h3 className="font-anton text-2xl leading-tight">
                                            {certificate.title}
                                        </h3>
                                        <p className="mt-2 text-sm text-muted-foreground">
                                            {certificate.issuer}
                                        </p>
                                        {certificate.institution && (
                                            <p className="text-xs text-muted-foreground/70">
                                                {certificate.institution}
                                            </p>
                                        )}
                                    </div>

                                    <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-primary">
                                        <Award size={18} />
                                    </span>
                                </div>

                                <p className="mt-4 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                                    {certificate.description}
                                </p>

                                <div className="mt-4 flex flex-wrap gap-1.5">
                                    {certificate.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] uppercase tracking-wider text-muted-foreground"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-auto pt-6">
                                    <div className="flex items-center justify-between gap-4 border-t border-white/10 pt-4">
                                        <button
                                            type="button"
                                            onClick={() => setActive(certificate)}
                                            className="inline-flex items-center gap-2 text-sm transition-colors hover:text-primary"
                                        >
                                            View credential
                                            <ArrowUpRight size={15} />
                                        </button>

                                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                            <CalendarDays size={13} />
                                            {certificate.date}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            {mounted &&
                active &&
                createPortal(
                    <div
                        className="fixed inset-0 z-[30] flex items-center justify-center p-4 sm:p-6"
                        role="dialog"
                        aria-modal="true"
                        aria-label={`${active.title} certificate`}
                    >
                        <div
                            className="absolute inset-0 bg-black/85 backdrop-blur-md"
                            onClick={() => setActive(null)}
                        />

                        <div className="relative z-10 flex max-h-[92dvh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-background-light shadow-2xl md:flex-row">
                            <button
                                type="button"
                                onClick={() => setActive(null)}
                                className="absolute right-3 top-3 z-20 inline-flex size-9 items-center justify-center rounded-full border border-white/15 bg-black/50 backdrop-blur-md transition-colors hover:border-white/30 hover:text-primary"
                                aria-label="Close certificate preview"
                            >
                                <X size={16} />
                            </button>

                            <div
                                className="relative flex min-h-[220px] shrink-0 flex-1 items-center justify-center overflow-hidden bg-black/40 p-4 sm:p-6"
                                data-lenis-prevent
                            >
                                <Image
                                    src={active.image}
                                    alt=""
                                    fill
                                    sizes="(max-width: 768px) 100vw, 60vw"
                                    className="scale-110 object-cover opacity-20 blur-2xl"
                                    aria-hidden
                                />
                                <div className="absolute inset-0 bg-black/30" />
                                <Image
                                    src={active.image}
                                    alt={`${active.title} certificate`}
                                    width={active.imageWidth}
                                    height={active.imageHeight}
                                    className="relative z-[1] h-auto max-h-[42dvh] w-auto max-w-full rounded-lg object-contain shadow-2xl md:max-h-[78dvh]"
                                />
                            </div>

                            <aside
                                className="min-h-0 w-full flex-1 overflow-y-auto p-6 md:w-[320px] md:flex-none md:shrink-0 md:max-h-[92dvh]"
                                data-lenis-prevent
                            >
                                <div className="mb-6 flex items-start justify-between gap-4">
                                    <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.18em] text-primary">
                                        <BadgeCheck size={13} />
                                        Verified credential
                                    </span>
                                </div>

                                <h3 className="font-anton text-3xl leading-none">
                                    {active.title}
                                </h3>
                                <p className="mt-3 text-sm text-muted-foreground">
                                    {active.issuer}
                                </p>
                                {active.institution && (
                                    <p className="text-xs text-muted-foreground/70">
                                        {active.institution}
                                    </p>
                                )}

                                <div className="mt-6 space-y-4 border-t border-white/10 pt-5 text-sm">
                                    <div>
                                        <p className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                                            Issued
                                        </p>
                                        <p className="mt-1">{active.date}</p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                                            Credential ID
                                        </p>
                                        <p className="mt-1 break-words font-mono text-xs text-foreground/90">
                                            {active.credentialId}
                                        </p>
                                    </div>
                                    {active.validity && (
                                        <div>
                                            <p className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                                                Validity
                                            </p>
                                            <p className="mt-1">
                                                {active.validity}
                                            </p>
                                        </div>
                                    )}
                                </div>

                                <div className="mt-6 flex flex-wrap gap-1.5">
                                    {active.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] uppercase tracking-wider text-muted-foreground"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <a
                                    href={active.pdf}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-primary/30 bg-primary/10 px-4 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
                                >
                                    Open original PDF
                                    <ExternalLink size={15} />
                                </a>
                            </aside>
                        </div>
                    </div>,
                    document.body,
                )}
        </section>
    );
};

export default Certificates;
