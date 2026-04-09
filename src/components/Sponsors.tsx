import { useEffect, useRef } from "react";
import SectionTitle from "./homepage/sectionTitle";

interface Sponsor {
    name: string;
    tier: "platinum" | "gold";
}

const sponsors: Sponsor[] = [
    { name: "HYPERDRIVE", tier: "platinum" },
    { name: "QUANTUM AUDIO", tier: "platinum" },
    { name: "NEONLABS", tier: "gold" },
    { name: "SYNTHWAVE CO", tier: "gold" },
    { name: "VOID SYSTEMS", tier: "gold" },
    { name: "PULSE ENERGY", tier: "gold" },
];

const Sponsors = () => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
        (entries) => entries.forEach((entry) => {
            if (entry.isIntersecting) entry.target.classList.add("is-visible");
        }),
        { threshold: 0.15 }
        );
        const els = ref.current?.querySelectorAll(".animate-on-scroll");
        els?.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const platinum = sponsors.filter((s) => s.tier === "platinum");
    const gold = sponsors.filter((s) => s.tier === "gold");

    return (
        <section id="sponsors" className="relative py-24 md:py-32" ref={ref}>
            <div className="container mx-auto px-6 relative z-10">
                <SectionTitle>
                    Our <span className="text-neon-cyan">Partners</span>
                </SectionTitle>
                

                {/* Platinum tier */}
                <div className="mb-6 animate-on-scroll">
                    <div className="flex items-center gap-4 mb-8 justify-center">
                        <div className="h-px flex-1 max-w-[100px]" style={{ background: "linear-gradient(to right, transparent, rgba(168, 85, 247, 0.3))" }} />
                            <span className="font-heading text-xs tracking-[0.4em] uppercase text-neon-purple/70">
                                Platinum
                            </span>
                        <div className="h-px flex-1 max-w-[100px]" style={{ background: "linear-gradient(to left, transparent, rgba(168, 85, 247, 0.3))" }} />
                    </div>
                    <div className="flex flex-wrap justify-center gap-6">
                        {platinum.map((s) => (
                        <a
                            key={s.name}
                            href="#"
                            className="glass-panel shimmer-sweep glow-cyan-strong px-12 py-8 text-center hover:-translate-y-2 transition-all duration-500 min-w-[220px]"
                        >
                            <span className="font-heading text-xl md:text-2xl font-bold tracking-[0.2em] text-foreground">
                            {s.name}
                            </span>
                        </a>
                        ))}
                    </div>
                </div>

                {/* Gold tier */}
                <div className="animate-on-scroll" style={{ transitionDelay: "200ms" }}>
                    <div className="flex items-center gap-4 mb-8 justify-center mt-12">
                        <div className="h-px flex-1 max-w-[100px]" style={{ background: "linear-gradient(to right, transparent, rgba(6, 182, 212, 0.3))" }} />
                            <span className="font-heading text-xs tracking-[0.4em] uppercase text-neon-cyan/70">
                                Gold
                            </span>
                        <div className="h-px flex-1 max-w-[100px]" style={{ background: "linear-gradient(to left, transparent, rgba(6, 182, 212, 0.3))" }} />
                    </div>
                    <div className="flex flex-wrap justify-center gap-5">
                        {gold.map((s) => (
                        <a
                            key={s.name}
                            href="#"
                            className="glass-panel-light shimmer-sweep glow-cyan px-8 py-5 text-center hover:-translate-y-1 transition-all duration-500"
                        >
                            <span className="font-heading text-sm md:text-base font-semibold tracking-[0.15em] text-foreground/80">
                            {s.name}
                            </span>
                        </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sponsors;
