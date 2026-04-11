import { useEffect, useRef, useState } from "react";
import SectionTitle from "./homepage/sectionTitle";
import EventPoster from "./homepage/EventPoster";

interface EventItem {
    name: string;
    subname: string;
    date: string;
    day: string;
    time: string;
    description: string;
    category: string[];
    thumbnail: string;
    thumbnailSize?: string;
    posterSrc: string;
    url: string;
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
        thumbnailSize: "40%",
        posterSrc: "posters/pyxel.jpeg",
        url: "https://gdg.community.dev/e/mjzrjb/",
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
        thumbnailSize: "60%",
        posterSrc: "posters/hellogame.jpeg",
        url: "https://gdg.community.dev/e/mgtmvh/",
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
        thumbnailSize: "70%",
        posterSrc: "posters/minecraft.jpeg",
        url: "https://gdg.community.dev/e/mp9hmz",
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
        <section id="events" className="relative  md:pt-32" ref={ref}>
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


//bg-[url('${event.thumbnail}')]

function Card({event}: {event: EventItem}) {
    const [isPosterOpen, setIsPosterOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = isPosterOpen ? 'hidden' : '';
    }, [isPosterOpen]);

    return (
        <>
            {
                isPosterOpen && 
                    <EventPoster 
                        setIsPosterOpen={setIsPosterOpen} 
                        src={event.posterSrc}
                        url={event.url}
                    />
            }

            <div
                key={event.name}
                className="
                    relative min-w-[350px] max-w-[500px] flex-1 glass-panel shimmer-sweep p-6 hover:glow-purple 
                    transition-all duration-500 hover:-translate-y-1 animate-on-scroll cursor-pointer
                "
                onClick={() => setIsPosterOpen(true)}
            >
                <div 
                    style={{
                        backgroundImage: `url(${event.thumbnail})`,
                        backgroundSize: event.thumbnailSize ?? "80%",
                    }}
                    className="absolute inset-0 bg-no-repeat bg-center opacity-15" 
                />

                <div className="opacity-100">
                    {
                        event.category.map((category) => (
                            <span className={`inline-block font-heading text-[12px] tracking-[0.2em] uppercase border rounded-full px-3 py-1 mb-4 mr-2 ${categoryColor[category]}`}>
                                {category}
                            </span>
                        ))
                    }

                    <h3 className="font-heading text-3xl font-bold text-foreground group-hover:text-neon-purple transition-colors">
                        {event.name}
                    </h3>
                    <h6 className="font-heading text-md font-bold text-muted-foreground mb-3 group-hover:text-neon-cyan transition-colors">
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

                    <p className="font-medium text-lg text-muted-foreground leading-relaxed">
                        {event.description}
                    </p>

                    <p 
                        className="mt-2 text-md md:text-lg font-semibold tracking-[0.15em]"
                        style={{ color: "#87CEEB" }}
                    >
                        &rarr; <span className="underline underline-offset-4"> learn more </span>
                    </p>
                </div>
            </div>
        </>
    )
}
