import { useEffect, useRef } from "react";
import SectionTitle from "./homepage/sectionTitle";

const gradientText: string = "bg-gradient-to-r from-neon-purple to-neon-cyan text-transparent bg-clip-text";

interface timelineProp {
    date: string,
    tag: string,
    title: string,
    description: string,
    color: string,
    specialTitle?: boolean,
}

// ─── EDIT THIS LIST ───────────────────────────────────────────────────────────
const timelineEvents: timelineProp[] = [
    {
        date: "May 08",
        tag: "Live Session",
        title: "GameFest Kick-Off Session",
        description: "A live session where we introduce GameFest to you!",
        color: "neon-cyan",
    },
    {
        date: "May 08",
        tag: "Phase One",
        title: "Start of an Eventful Week",
        description: "A whole week full with workshops and competitions!",
        color: "neon-purple",
    },
    {
        date: "May 09",
        tag: "Competition Deadline",
        title: "Osu!Skin Competition",
        description: "Participants must submit their skin in google form provided.",
        color: "neon-cyan",
    },
    {
        date: "May 15",
        tag: "Competition Deadline",
        title: "GDGame Jam",
        description: "(8:00am) Participants must submit their game/prototype on itch.io page.",
        color: "neon-purple",
    },
    {
        date: "May 16",
        tag: "Phase 2",
        title: "Exhibition Day",
        description: "Whole day filled with tons of activities! Join in on the fun, free for all!",
        color: "white",
        specialTitle: true,
    },
];
// ─────────────────────────────────────────────────────────────────────────────

export default function Timeline() {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((entry) => {
                if (entry.isIntersecting) entry.target.classList.add("is-visible");
            }),
            { threshold: 0.1 }
        );
        const els = ref.current?.querySelectorAll(".animate-on-scroll");
        els?.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section id="timeline" className="relative py-24 md:py-32" ref={ref}>
            <div className="max-w-4xl mx-auto px-6 relative z-10">

                <SectionTitle>
                    The <span className="text-neon-purple">Timeline</span>
                </SectionTitle>

                <div className="relative">
                    {/* Vertical line - Adjusted top/bottom to prevent overhang */}
                    <div className="absolute left-[7rem] top-0 bottom-0 w-px bg-white/20" />

                    <div className="flex flex-col gap-8">
                        {timelineEvents.map((ev, i) => (
                            <div
                                key={i}
                                className="flex items-stretch group animate-on-scroll"
                                style={{ transitionDelay: `${i * 100}ms` }}
                            >
                                {/* Date label — Centered vertically via flex items-center */}
                                <div className="w-28 shrink-0 text-right pr-6 flex items-center justify-end">
                                    <span className="font-heading text-sm tracking-[0.25em] uppercase text-muted-foreground">
                                        {ev.date}
                                    </span>
                                </div>

                                {/* Dot on the line — Centered vertically via flex items-center */}
                                <div className="w-8 right-4 shrink-0 flex items-center justify-center relative z-20">
                                    <div
                                        className={`w-6 h-6 rounded-full border border-white/20 bg-background transition-all duration-300 group-hover:border-${ev.color} group-hover:shadow-[0_0_8px_var(--${ev.color})]`}
                                    />
                                </div>

                                {/* Content card */}
                                <div className="flex-1">
                                    <div className="glass-panel shimmer-sweep p-6 min-h-[5rem] flex flex-col justify-center hover:glow-purple transition-all duration-500 hover:-translate-y-1">
                                        <span
                                            className={`font-heading text-xs md:text-sm tracking-[0.3em] uppercase text-${ev.color} mb-2 block`}
                                        >
                                            {ev.tag}
                                        </span>
                                        <h3 className={`w-fit font-heading text-xl font-bold text-foreground mb-1 ${ev.specialTitle ? gradientText : ""}`}>
                                            {ev.title}
                                        </h3>
                                        {ev.description && (
                                            <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
                                                {ev.description}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};
