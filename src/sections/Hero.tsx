
import {
    motion,
    useReducedMotion,
    useMotionValue,
    useSpring,
} from "motion/react";

import { ArrowDown, ArrowUpRight } from "lucide-react";
import { lazy, Suspense, useEffect, useState } from "react";


export default function Hero() {
    const HeroScene = lazy(
        () => import("../components/ui/HeroScene")
    );
    const shouldReduceMotion = useReducedMotion();

    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 1024px)");

        const updateViewport = () => {
            setIsDesktop(mediaQuery.matches);
        };

        updateViewport();

        mediaQuery.addEventListener("change", updateViewport);

        return () => {
            mediaQuery.removeEventListener("change", updateViewport);
        };
    }, []);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springX = useSpring(mouseX, {
        stiffness: 80,
        damping: 25,
    });

    const springY = useSpring(mouseY, {
        stiffness: 80,
        damping: 25,
    });

    const handleMouseMove = (
        event: React.MouseEvent<HTMLElement>
    ) => {
        if (shouldReduceMotion) return;

        const rect = event.currentTarget.getBoundingClientRect();

        mouseX.set(
            (event.clientX - rect.left - rect.width / 2) / 30
        );

        mouseY.set(
            (event.clientY - rect.top - rect.height / 2) / 30
        );
    };

    const resetMouse = () => {
        mouseX.set(0);
        mouseY.set(0);
    };


    const entrance = shouldReduceMotion
        ? { opacity: 0 }
        : { opacity: 0, y: 60 };

    const visible = {
        opacity: 1,
        y: 0,
        transition: {
            duration: shouldReduceMotion ? 0.4 : 1.1,
            ease: [0.22, 1, 0.36, 1] as const,
        },
    };

    return (
        <section
            id="home"
            onMouseMove={handleMouseMove}
            onMouseLeave={resetMouse}
            className="relative flex min-h-screen items-center overflow-hidden px-[var(--container-padding)] pt-28 pb-24"
        >
            {/* Subtle background detail */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute right-[8%] top-[15%] h-72 w-72 rounded-full border border-[var(--border)] opacity-40"
            />

            <div className="mx-auto grid w-full max-w-[var(--container-width)] grid-cols-1 items-center gap-8 lg:grid-cols-12">

                {/* Hero Content */}
                <div className="relative z-10 lg:col-span-8">

                    {/* Introduction */}
                    <motion.div
                        initial={entrance}
                        animate={visible}
                        transition={{ delay: 0.15 }}
                        className="mb-10 flex items-center gap-3"
                    >
                        <span className="h-px w-10 bg-[var(--accent)]" />

                        <span className="text-xs font-medium uppercase tracking-[0.25em] text-[var(--text-secondary)]">
                            Full-Stack Developer / AI Enthusiast
                        </span>
                    </motion.div>

                    {/* Animated Name */}
                    <motion.h1
                        initial={shouldReduceMotion ? false : "hidden"}
                        animate="visible"
                        variants={{
                            hidden: {},
                            visible: {
                                transition: {
                                    staggerChildren: shouldReduceMotion ? 0 : 0.16,
                                    delayChildren: 0.3,
                                },
                            },
                        }}
                        className="font-display font-extrabold leading-[0.82] tracking-[-0.085em]"
                    >
                        {["ADITYA", "JAIN"].map((word, index) => (
                            <motion.span
                                key={word}
                                variants={{

                                    hidden: {
                                        opacity: 0,
                                        y: shouldReduceMotion ? 0 : 90,
                                        clipPath: shouldReduceMotion
                                            ? "inset(0 0 0 0)"
                                            : "inset(0 0 100% 0)",
                                    },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        clipPath: "inset(0 0 0 0)",
                                        transition: {
                                            duration: shouldReduceMotion ? 0.4 : 1.2,
                                            ease: [0.22, 1, 0.36, 1],
                                        },
                                    },

                                }}
                                className="block text-[clamp(4rem,11vw,10rem)]"
                            >
                                {word}
                                {index === 1 && (
                                    <span className="text-[var(--accent)]">.</span>
                                )}
                            </motion.span>
                        ))}
                    </motion.h1>

                    {/* Description and CTAs */}
                    <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 md:items-end">

                        <motion.p
                            initial={entrance}
                            animate={visible}
                            transition={{ delay: 0.85 }}
                            className="max-w-md text-base leading-relaxed text-[var(--text-secondary)] md:text-lg"
                        >
                            I build digital products at the intersection of
                            engineering, design, and artificial intelligence.
                            Turning ideas into thoughtful, functional experiences.
                        </motion.p>

                        <motion.div
                            initial={entrance}
                            animate={visible}
                            transition={{ delay: 1 }}
                            className="flex flex-wrap items-center gap-5"
                        >

                            <motion.a
                                href="#work"
                                whileHover={shouldReduceMotion ? {} : { y: -4 }}
                                whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
                                style={{
                                    backgroundColor: "var(--text-primary)",
                                    color: "var(--text-inverse)",
                                }}
                                className="group inline-flex items-center gap-3 whitespace-nowrap px-6 py-4 text-sm font-semibold transition-colors duration-300 hover:!bg-[var(--accent)]"
                            >
                                <span className="relative z-10">
                                    Explore My Work
                                </span>

                                <ArrowUpRight
                                    size={17}
                                    className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                />
                            </motion.a>


                            <motion.a
                                href="#contact"
                                whileHover={shouldReduceMotion ? {} : { y: -3 }}
                                className="group inline-flex items-center gap-2 border-b border-[var(--border)] py-3 text-sm font-medium transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                            >
                                Let's Connect
                                <ArrowUpRight size={15} />
                            </motion.a>
                        </motion.div>
                    </div>
                </div>

                {/* 3D Sculpture */}
                <motion.div
                    initial={entrance}
                    animate={visible}
                    transition={{ delay: 0.5, duration: 1.2 }}
                    style={{
                        x: shouldReduceMotion ? 0 : springX,
                        y: shouldReduceMotion ? 0 : springY,
                    }}
                    className="lg:col-span-4"
                >
                    {isDesktop && (
                        <Suspense
                            fallback={
                                <div
                                    className="h-[420px] w-full lg:h-[560px]"
                                    aria-hidden="true"
                                />
                            }
                        >
                            <HeroScene />
                        </Suspense>
                    )}
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.a
                href="#about"
                initial={entrance}
                animate={visible}
                transition={{ delay: 1.2 }}
                className="absolute bottom-10 left-[var(--container-padding)] flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[var(--text-secondary)] transition-colors hover:text-[var(--accent)]"
            >
                <motion.span
                    animate={shouldReduceMotion ? {} : { y: [0, 5, 0] }}
                    transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <ArrowDown size={16} />
                </motion.span>

                Scroll to about
            </motion.a>

            {/* Portfolio Index */}
            <span className="absolute bottom-10 right-[var(--container-padding)] hidden text-xs tracking-widest text-[var(--text-secondary)] md:block">
                PORTFOLIO — 2026
            </span>
        </section>
    );
}
