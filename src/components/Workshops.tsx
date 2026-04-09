import { useEffect, useRef } from "react";
import SectionTitle from "./homepage/sectionTitle";

interface EventItem {
    name: string;
    subname: string;
    date: string;
    day: string;
    time: string;
    description: string;
    category: string[];
    thumbnail: string;
}

const events: EventItem[] = [
    { 
        name: "Pyxel",
        subname: "Python Game Workshop",
        date: "May 08, 2026",
        day: "Friday",
        time: "09:00 — 17:00",
        description: "Build a Python AI that learns to play games by itself interactively.",
        category: ["Intermediate"],
        thumbnail: "logos/events/PYXEL.png",
    },
    { 
        name: "HelloGame",
        subname: "Game Development Workshop",
        date: "May 09 — May 10, 2026",
        day: "Saturday & Sunday",
        time: "09:00 — 17:00",
        description: "Learn game development with beginner and intermediate tracks, building playable games.",
        category: ["Beginner", "Intermediate"],
        thumbnail: "logos/events/HelloGame.png",
    },
    {
        name: "Modding Mayhem",
        subname: "Minecraft Workshop",
        date: "May 15, 2026",
        day: "Friday",
        time: "09:00 — 17:00",
        description: "Mastering the essence of minecraft modding skills via manipulating the game code using a visual tool.",
        category: ["Beginner"],
        thumbnail: "logos/events/minecraft.png",
    },
];

const categoryColor: Record<string, string> = {
    Beginner: "border-neon-cyan/50 text-neon-cyan",
    Intermediate: "border-neon-purple/50 text-neon-purple",
};

export default function Events() {
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
                    The <span className="text-neon-cyan"> Workshops </span>
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

            {
                event.category.map((category) => (
                    <span className={`inline-block font-heading text-[10px] tracking-[0.2em] uppercase border rounded-full px-3 py-1 mb-4 mr-2 ${categoryColor[category]}`}>
                        {category}
                    </span>
                ))
            }

            <h3 className="font-heading text-2xl font-bold text-foreground group-hover:text-neon-purple transition-colors">
                {event.name}
            </h3>
            <h6 className="font-heading text-sm font-bold text-muted-foreground mb-3 group-hover:text-muted-neon-purple transition-colors">
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
