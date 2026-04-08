import { useEffect, useRef } from "react";
import SectionTitle from "./homepage/sectionTitle";

interface EventItem {
  name: string;
  day: string;
  time: string;
  description: string;
  category: string;
}

const events: EventItem[] = [
    { name: "AURA", day: "Day 1 — Aug 15", time: "20:00", description: "Ambient techno odyssey with immersive laser environments and surround-sound architecture.", category: "Techno" },
    { name: "PRISM", day: "Day 1 — Aug 15", time: "23:00", description: "High-energy drum & bass showcase featuring holographic stage design.", category: "DnB" },
    { name: "VOID", day: "Day 2 — Aug 16", time: "21:00", description: "Deep house and minimal explorations in the underground dome.", category: "House" },
    { name: "FLUX", day: "Day 2 — Aug 16", time: "00:00", description: "Experimental electronic and audiovisual performances pushing sonic boundaries.", category: "Experimental" },
    { name: "ZENITH", day: "Day 3 — Aug 17", time: "19:00", description: "The grand finale. A multi-stage convergence of every genre, ending with a city-wide drone light show.", category: "Multi-genre" },
    { name: "AFTERGLOW", day: "Day 3 — Aug 17", time: "02:00", description: "Intimate sunrise set with downtempo and chill electronic soundscapes.", category: "Chill" },
];

const categoryColor: Record<string, string> = {
    Techno: "border-neon-cyan/50 text-neon-cyan",
    DnB: "border-neon-purple/50 text-neon-purple",
    House: "border-neon-cyan/50 text-neon-cyan",
    Experimental: "border-neon-pink/50 text-neon-pink",
    "Multi-genre": "border-neon-purple/50 text-neon-purple",
    Chill: "border-neon-cyan/50 text-neon-cyan",
};

const Events = () => {
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
        <section id="events" className="relative py-24 md:py-32" ref={ref}>
            <div className="container mx-auto px-6 relative z-10">
                <SectionTitle>
                    The <span className="text-neon-cyan">Programme</span>
                </SectionTitle>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.map((event, i) => (
                    <div
                        key={event.name}
                        className="glass-panel shimmer-sweep p-6 hover:glow-purple transition-all duration-500 hover:-translate-y-1 animate-on-scroll group"
                        style={{ transitionDelay: `${i * 80}ms` }}
                    >
                        <span
                            className={`inline-block font-heading text-[10px] tracking-[0.2em] uppercase border rounded-full px-3 py-1 mb-4 ${
                                categoryColor[event.category] || "border-muted-foreground/30 text-muted-foreground"
                            }`}
                        >
                            {event.category}
                        </span>

                        <h3 className="font-heading text-2xl font-bold text-foreground mb-1 group-hover:text-neon-purple transition-colors">
                            {event.name}
                        </h3>

                        <p className="font-heading text-xs tracking-[0.2em] text-neon-purple/60 mb-3">
                            {event.day} &nbsp;·&nbsp; {event.time}
                        </p>

                        <p className="font-body text-sm text-muted-foreground leading-relaxed">
                            {event.description}
                        </p>
                    </div>
                ))}
                </div>
            </div>
        </section>
    );
};

export default Events;
