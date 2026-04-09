import { useEffect, useRef } from "react";
import SectionTitle from "./homepage/sectionTitle";

interface EventItem {
    name: string;
    subname: string;
    date: string;
    day: string;
    time: string;
    description: string;
    thumbnail: string;
}

const events: EventItem[] = [
    {
        name: "GDGame Jam",
        subname: "Game Creation Challenge",
        date: "May 08 — May 15, 2026",
        day: "Friday — Friday",
        time: "20:00",
        description: "Unleash your creativity and develop a game in under 7 days and show it to the world!",
        thumbnail: "logos/GameJam.png",
    },
    {
        name: "OSU!Skinning",
        subname: "Game Texture Design Challenge",
        date: "April 16 — May 15, 2026",
        day: "Monday — Friday",
        time: "23:00",
        description: "Compete with other creative artists in crafting a custom skin for osu! the rhythm game!",
        thumbnail: "logos/osu.png",
    },
];

export default function Competitions() {
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
        <section id="events" className="relative py-24 md:pt-32 pb-16" ref={ref}>
            <div className="container mx-auto px-6 relative z-10">
                <SectionTitle>
                    The <span className="text-neon-purple"> Competitions </span>
                </SectionTitle>

                {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> */}
                <div className="flex flex-wrap justify-center gap-6">
                    {events.map((event) => (
                        <Card event={event}/>
                    ))}
                </div>
            </div>
        </section>
    );
};



function Card({event}: {event: EventItem}) {
    return (
        <div
            key={event.name}
            className="relative w-[25vw] glass-panel shimmer-sweep p-6 hover:glow-purple transition-all duration-500 hover:-translate-y-1 animate-on-scroll group cursor-pointer"
        >
            <img src={event.thumbnail} alt={event.thumbnail} className="absolute top-4 right-4 w-24 h-auto object-contain" />

            <span className="inline-block rounded-full p-[2px] bg-gradient-to-r from-neon-purple to-neon-cyan mb-2 mr-2">
                <span className={`block font-heading text-[12px] tracking-[0.2em] uppercase rounded-full px-3 py-1 bg-black`}>
                    <span className={`bg-gradient-to-r from-neon-purple to-neon-cyan text-transparent bg-clip-text`}>
                        Open For ALL
                    </span>
                </span>
            </span>

            <h3 className="font-heading text-2xl font-bold text-foreground group-hover:text-neon-purple transition-colors">
                {event.name}
            </h3>
            <h6 className="font-heading text-sm font-bold text-muted-foreground mb-2 group-hover:text-muted-neon-purple transition-colors">
                {event.subname}
            </h6>

            <p className="font-heading text-md tracking-[0.2em] text-neon-purple/60 mb-1">
                {event.date}
            </p>
            <p className="font-heading text-xs tracking-[0.2em] text-neon-purple/60 mb-3">
                {event.day} · {event.time}
            </p>

            <p className="font-body text-md text-muted-foreground leading-relaxed">
                {event.description}
            </p>
        </div>
    )
}
