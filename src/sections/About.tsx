
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import aboutPhoto from "../assets/picture.jpeg";
import "./Footer.css";

export default function About() {
  const shouldReduceMotion = useReducedMotion();

  const reveal = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 35,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.3 : 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section
      id="about"
      className="overflow-hidden bg-[var(--background)] px-[var(--container-padding)] py-28 md:py-25"
    >
      <div className="mx-auto max-w-[var(--container-width)]">

        {/* Section Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={reveal}
          className="mb-16"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-[var(--accent)]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[var(--text-secondary)]">
              A little about me / 01
            </span>
          </div>

          <h2 className="font-display text-[clamp(2.8rem,7vw,6.5rem)] font-extrabold leading-[0.9] tracking-[-0.075em]">
            MORE THAN JUST CODE.
            <br />
            <span className="text-[var(--text-secondary)]">
              A MIND THAT BUILDS.
            </span>
          </h2>
        </motion.div>

        {/* Main Composition */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-20">

          {/* Portrait + Abstract Elements */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={reveal}
            className="relative lg:col-span-5"
          >
            <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden bg-[#E9E6DF]">

              {/* Portrait placeholder - replaced with your actual photo later */}
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src={aboutPhoto}
                  alt="Aditya Jain"
                  className="about-photo"
                />
              </div>

              {/* Abstract geometric overlays */}
              <div className="absolute left-[12%] top-[15%] h-36 w-36 rounded-full border border-[#5267E8]/40" />

              <div className="absolute bottom-[15%] right-[12%] h-48 w-48 rotate-45 border border-[#77736D]/40" />

              <div className="absolute bottom-[12%] left-[12%] h-3 w-3 rounded-full bg-[#5267E8]" />

              <div className="absolute right-[12%] top-[12%] h-2 w-2 rounded-full bg-[#5267E8]" />

              <span className="absolute bottom-5 left-5 text-[10px] uppercase tracking-[0.25em] text-[#77736D]">
                The person behind the pixels
              </span>

              <span className="absolute right-5 top-5 text-[10px] tracking-widest text-[#77736D]">
                AJ / 01
              </span>
            </div>

            {/* External caption */}
            <div className="mt-4 flex items-center justify-between">
              <span className="text-xs text-[var(--text-secondary)]">
                Developer · Student · Builder
              </span>

              <span className="text-xs tracking-widest text-[var(--text-secondary)]">
                Agra, INDIA
              </span>
            </div>
          </motion.div>

          {/* Personal Narrative */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={reveal}
            className="lg:col-span-7"
          >
            <p className="mb-8 font-display text-2xl font-semibold leading-snug tracking-tight md:text-3xl">
              I'm Aditya Jain - a developer, builder, and curious mind
              fascinated by what technology can make possible.
            </p>

            <div className="space-y-5 text-sm leading-7 text-[var(--text-secondary)] md:text-base">
              <p>
                I enjoy working at the intersection of engineering,
                design, and artificial intelligence. Whether it's
                building full-stack applications, experimenting with
                AI-powered systems, or exploring new ways to make
                digital experiences more intuitive, I love turning
                ideas into things people can actually use.
              </p>

              <p>
                My approach goes beyond writing code. I enjoy
                understanding the problem, exploring different
                possibilities, designing thoughtful solutions,
                and engineering products that bring those ideas
                to life.
              </p>

              <p>
                Currently exploring the worlds of software
                engineering, AI/LLMs, creative development,
                and product building - one experiment at a time.
              </p>
            </div>

            <div className="mt-10 border-l-2 border-[var(--accent)] py-2 pl-5">
              <p className="font-display text-xl font-bold tracking-tight">
                Always curious. Always building.
              </p>
              <p className="mt-1 text-sm text-[var(--text-secondary)]">
                Never done exploring.
              </p>
            </div>

            {/* Areas of Interest */}
            <div className="mt-12 border-t border-[var(--border)] pt-7">
              <p className="mb-5 text-xs uppercase tracking-[0.2em] text-[var(--text-secondary)]">
                Currently exploring
              </p>

              <div className="flex flex-wrap gap-3">
                {[
                  "AI / LLMs",
                  "Full-Stack Engineering",
                  "Creative Development",
                  "Product Thinking",
                ].map((item) => (
                  <span
                    key={item}
                    className="border border-[var(--border)] px-4 py-2.5 text-xs transition-colors duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

          </motion.div>
        </div>

        {/* Closing Statement */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={reveal}
          className="mt-24 border-t border-[var(--border)] pt-8"
        >
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
            <p className="max-w-xl font-display text-2xl font-semibold tracking-tight md:text-3xl">
              The best way to predict the future is to build something.
            </p>

            <a
              href="#contact"
              className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold transition-colors hover:text-[var(--accent)]"
            >
              Get in touch
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
