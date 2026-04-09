import { useEffect, useRef } from "react";
import SectionTitle from "./homepage/sectionTitle";

const infoCards = [
    { icon: "📅", title: "Phase 1", detail: "May 08–15, 2026", sub: "Workshop and Competiton Phase" },
    { icon: "📅", title: "Phase 2", detail: "May 16, 2026", sub: "Exhibition Day" },
    { icon: "📍", title: "Venue", detail: "Khulliyah ICT", sub: "IIUM Gombak, Selangor" },
    { icon: "🕐", title: "Time", detail: "Game starts 09:00", sub: "Play until 18:00" },
];

const FestivalInfo = () => {
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

    return (
        <section id="info" className="relative py-24 md:py-32" ref={ref}>
            <div className="container mx-auto px-6 relative z-10">
                <SectionTitle>
                    The <span className="text-neon-purple">Experience</span>
                </SectionTitle>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {infoCards.map((card, i) => (
                    <div
                    key={card.title}
                    className="glass-panel shimmer-sweep p-8 text-center hover:glow-purple transition-all duration-500 hover:-translate-y-2 animate-on-scroll group"
                    style={{ transitionDelay: `${i * 100}ms` }}
                    >
                    <div className="text-4xl mb-4">{card.icon}</div>
                    <h3 className="font-heading text-xs tracking-[0.3em] uppercase text-neon-purple/70 mb-2">
                        {card.title}
                    </h3>
                    <p className="font-heading text-lg font-bold text-foreground mb-1">
                        {card.detail}
                    </p>
                    <p className="font-body text-sm text-muted-foreground">
                        {card.sub}
                    </p>
                    </div>
                ))}
                </div>
            </div>
        </section>
    );
};

export default FestivalInfo;
