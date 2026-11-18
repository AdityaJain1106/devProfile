
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Code2 } from "lucide-react";

import { featuredProjects } from "../data/projects";
import ProjectVisual from "../components/ui/ProjectVisual";

export default function Projects() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section
            id="work"
            className="bg-[var(--background-secondary)] px-[var(--container-padding)] py-24 md:py-25"
        >
            <div className="mx-auto max-w-[var(--container-width)]">

                {/* Section Header */}
                <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
                    <div>
                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-px w-10 bg-[var(--accent)]" />
                            <span className="text-xs uppercase tracking-[0.25em] text-[var(--text-secondary)]">
                                Selected projects / 2024—2026
                            </span>
                        </div>

                        <h2 className="font-display text-[clamp(3rem,7vw,6rem)] font-extrabold leading-[0.9] tracking-[-0.075em]">
                            SELECTED WORK
                            <span className="text-[var(--accent)]">.</span>
                        </h2>
                    </div>

                    <p className="max-w-xs text-sm leading-7 text-[var(--text-secondary)]">
                        A collection of digital products, experiments and
                        engineering solutions built around technology,
                        creativity and problem-solving.
                    </p>
                </div>

                {/* Compact Project Grid */}
                <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-14">

                    {featuredProjects.map((project, index) => (
                        <motion.article
                            key={project.id}
                            initial={
                                shouldReduceMotion
                                    ? false
                                    : { opacity: 0, y: 35 }
                            }
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{
                                duration: shouldReduceMotion ? 0 : 0.65,
                                delay: shouldReduceMotion ? 0 : (index % 2) * 0.12,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="group min-w-0"
                        >
                            {/* Project Artwork */}
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`View ${project.name} on GitHub`}
                                className="mb-5 block overflow-hidden"
                            >
                                <div className="transition-transform duration-700 ease-out group-hover:scale-[0.98]">
                                    <ProjectVisual project={project} />
                                </div>
                            </a>

                            {/* Project Information */}
                            <div className="flex items-start justify-between gap-4">
                                <div className="min-w-0">
                                    <span className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-[var(--text-secondary)]">
                                        {project.number} / {project.category}
                                    </span>

                                    <h3 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
                                        {project.name}
                                        <span className="text-[var(--accent)]">.</span>
                                    </h3>
                                </div>

                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Open ${project.name} GitHub repository`}
                                    className="flex h-11 w-11 shrink-0 items-center justify-center border border-[var(--border)] transition-all duration-300 group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-white"
                                >
                                    <ArrowUpRight size={19} />
                                </a>
                            </div>

                            <p className="mt-4 max-w-lg text-sm leading-6 text-[var(--text-secondary)]">
                                {project.description}
                            </p>

                            {/* Technology Stack */}
                            <div className="mt-5 flex flex-wrap gap-2">
                                {project.technologies.slice(0, 5).map((tech) => (
                                    <span
                                        key={tech}
                                        className="border border-[var(--border)] px-2.5 py-1.5 text-[10px] uppercase tracking-wider text-[var(--text-secondary)]"
                                    >
                                        {tech}
                                    </span>
                                ))}

                                {project.technologies.length > 5 && (
                                    <span className="px-2 py-1.5 text-[10px] text-[var(--text-secondary)]">
                                        +{project.technologies.length - 5} more
                                    </span>
                                )}
                            </div>

                            {/* Repository Link */}
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest transition-colors hover:text-[var(--accent)]"
                            >
                                <Code2 size={15} />
                                View Repository
                                <ArrowUpRight size={14} />
                            </a>
                        </motion.article>
                    ))}

                </div>

                {/* Future Projects Page */}

                <div className="mt-20 flex flex-col justify-between gap-6 border-t border-[var(--border)] pt-8 sm:flex-row sm:items-center">
                    <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-[var(--text-secondary)]">
                            Beyond the featured work
                        </p>

                        <h3 className="mt-2 font-display text-2xl font-bold">
                            There's more to explore.
                        </h3>
                    </div>

                    <a
                        href="/projects"
                        className="group inline-flex items-center gap-3 self-start border-b border-[var(--text-primary)] pb-3 text-sm font-semibold transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                    >
                        View All Projects

                        <ArrowUpRight
                            size={17}
                            className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                        />
                    </a>
                </div>


            </div>
        </section>
    );
}
