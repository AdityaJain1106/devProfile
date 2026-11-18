
import type { Project } from "../../types/project";

interface ProjectVisualProps {
    project: Project;
}

export default function ProjectVisual({ project }: ProjectVisualProps) {
    return (
        <div
            className="relative flex aspect-[5/4] w-full items-center justify-center overflow-hidden bg-[#E9E6DF] p-8"
            aria-label={`${project.name} abstract project artwork`}
        >
            {project.visualTheme === "healthcare" && (
                <div className="relative flex h-full w-full items-center justify-center">
                    <div className="absolute h-64 w-64 rounded-full border border-[#B9B5AC]" />
                    <div className="absolute h-48 w-48 rounded-full border border-[#5267E8]/40" />
                    <div className="relative flex h-28 w-28 items-center justify-center bg-[#5267E8] text-5xl font-light text-white shadow-xl">
                        +
                    </div>
                    <span className="absolute left-4 top-4 text-xs tracking-widest text-[#77736D]">
                        HEALTH / TECHNOLOGY
                    </span>
                    <span className="absolute bottom-4 right-4 font-display text-5xl font-bold text-[#242424]/10">
                        01
                    </span>
                </div>
            )}

            {project.visualTheme === "commerce" && (
                <div className="relative flex h-full w-full items-center justify-center">
                    <div className="absolute h-56 w-56 rotate-12 border border-[#77736D]/40" />
                    <div className="absolute h-48 w-48 -rotate-12 border border-[#5267E8]/50" />
                    <div className="relative flex h-36 w-36 rotate-12 items-center justify-center bg-[#242424] shadow-2xl">
                        <div className="h-20 w-20 -rotate-12 border border-[#F4F1EA]/60" />
                    </div>
                    <span className="absolute left-4 top-4 text-xs tracking-widest text-[#77736D]">
                        OBJECT / INTERACTION
                    </span>
                    <span className="absolute bottom-4 right-4 font-display text-5xl font-bold text-[#242424]/10">
                        02
                    </span>
                </div>
            )}

            {project.visualTheme === "accessibility" && (
                <div className="relative flex h-full w-full items-center justify-center">
                    <div className="relative w-[85%] border border-[#B9B5AC] bg-[#FAF9F6] p-6 shadow-xl">
                        <div className="mb-6 flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-[#5267E8]" />
                            <span className="h-2 w-2 rounded-full bg-[#B9B5AC]" />
                            <span className="h-2 w-2 rounded-full bg-[#B9B5AC]" />
                        </div>
                        <div className="space-y-3">
                            <div className="h-3 w-3/4 bg-[#242424]" />
                            <div className="h-2 w-full bg-[#DDD9D0]" />
                            <div className="h-2 w-5/6 bg-[#DDD9D0]" />
                            <div className="mt-5 h-16 w-full border-l-2 border-[#5267E8] bg-[#5267E8]/10" />
                            <div className="h-2 w-2/3 bg-[#DDD9D0]" />
                        </div>
                        <span className="absolute right-0 top-0 bg-[#5267E8] px-4 py-3 text-xs tracking-widest text-white">
                            AI / OCR
                        </span>
                    </div>
                    <span className="absolute bottom-4 right-4 font-display text-5xl font-bold text-[#242424]/10">
                        03
                    </span>
                </div>
            )}

            {project.visualTheme === "analytics" && (
                <div className="relative flex h-full w-full items-center justify-center">
                    <div className="relative h-[75%] w-[85%] border border-[#B9B5AC] bg-[#242424] p-5">
                        <div className="mb-5 text-[10px] tracking-widest text-white/60">
                            DATA / ANALYTICS
                        </div>

                        <div className="grid h-[75%] grid-cols-8 gap-1">
                            {Array.from({ length: 48 }).map((_, i) => (
                                <div
                                    key={i}
                                    className="transition-opacity duration-300 hover:opacity-50"
                                    style={{
                                        backgroundColor:
                                            i % 7 === 0
                                                ? "#5267E8"
                                                : i % 4 === 0
                                                    ? "#8D9BF0"
                                                    : i % 3 === 0
                                                        ? "#77736D"
                                                        : "#454545",
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                        <span className="absolute bottom-4 right-4 font-display text-5xl font-bold text-[#242424]/10">
                            04
                        </span>
                </div>
            )}

            {project.visualTheme === "voice" && (
                <div className="relative flex h-full w-full items-center justify-center">
                    <div className="absolute h-64 w-64 rounded-full border border-[#5267E8]/30" />
                    <div className="absolute h-48 w-48 rounded-full border border-[#5267E8]/50" />
                    <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-[#242424] shadow-2xl">
                        <div className="h-8 w-8 rounded-full bg-[#5267E8]" />
                    </div>
                    <div className="absolute bottom-10 flex items-center gap-1">
                        {[16, 28, 40, 22, 34, 18, 42, 24, 14].map((height, i) => (
                            <div
                                key={i}
                                className="w-1.5 rounded-full bg-[#5267E8]"
                                style={{ height }}
                            />
                        ))}
                    </div>
                    <span className="absolute left-4 top-4 text-xs tracking-widest text-[#77736D]">
                        VOICE / INTELLIGENCE
                    </span>
                    <span className="absolute bottom-4 right-4 font-display text-5xl font-bold text-[#242424]/10">
                        05
                    </span>
                </div>
            )}
        </div>
    );
}
