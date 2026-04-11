import { useEffect, useRef } from "react";
import SectionTitle from "./homepage/sectionTitle";

const gradientTextOnHover: string = "bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-neon-purple group-hover:to-neon-cyan";

interface EventItem {
    name: string;
    subname: string;
    date: string;
    day: string;
    time: string;
    description: string;
    thumbnail: string;
    thumbnailSize?: string;
}

const events: EventItem[] = [
    {
        name: "GDGame Jam",
        subname: "Game Creation Challenge",
        date: "May 08 — May 15, 2026",
        day: "Friday — Friday",
        time: "20:00",
        description: "Unleash your creativity and develop a game in under 7 days and show it to the world!",
        thumbnail: "logos/events/GameJam.png",
        thumbnailSize: "50%",
    },
    {
        name: "OSU!Skinning",
        subname: "Game Texture Design Challenge",
        date: "April 16 — May 15, 2026",
        day: "Monday — Friday",
        time: "23:00",
        description: "Compete with other creative artists in crafting a custom skin for osu! the rhythm game!",
        thumbnail: "logos/events/osu.png",
        thumbnailSize: "40%",
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
            className="
                relative min-w-[400px] max-w-[500px] flex-1 glass-panel shimmer-sweep p-6 hover:glow-purple
                transition-all duration-500 hover:-translate-y-1 animate-on-scroll group cursor-pointer
            "
        >
            <div 
                style={{
                    backgroundImage: `url(${event.thumbnail})`,
                    backgroundSize: event.thumbnailSize ?? "80%",
                }}
                className="absolute inset-0 bg-no-repeat bg-center opacity-15" 
            />

            <span className="inline-block rounded-full p-[2px] bg-gradient-to-r from-neon-purple to-neon-cyan mb-2 mr-2">
                <span className={`block font-heading text-[12px] tracking-[0.2em] uppercase rounded-full px-3 py-1 bg-black`}>
                    <span className={`bg-gradient-to-r from-neon-purple to-neon-cyan text-transparent bg-clip-text`}>
                        Open For ALL
                    </span>
                </span>
            </span>

            <h3 className={`font-heading text-3xl font-bold text-foreground transition-colors ${gradientTextOnHover}`}>
                {event.name}
            </h3>
            <h6 className={`font-heading text-md font-bold text-muted-foreground mb-3 group-hover:text-muted-neon-purple transition-colors ${gradientTextOnHover}`}>
                {event.subname}
            </h6>


            <p className="font-heading text-lg tracking-[0.2em] text-neon-purple mb-1">
                {event.date}
            </p>
            <p className="font-heading text-sm tracking-[0.1em] text-neon-cyan mb-1">
                {event.day}
            </p>
            <p className="font-heading text-sm tracking-[0.1em] text-neon-cyan mb-3">
                {event.time}
            </p>

            <p className="font-body text-md text-muted-foreground leading-relaxed">
                {event.description}
            </p>
        </div>
    )
}
