import { useEffect, useRef } from "react";
import SectionTitle from "./homepage/sectionTitle";

export default function About() {
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
        <section id="about" className="relative py-24 md:py-32" ref={ref}>
            <div className="max-w-6xl mx-auto px-6 relative z-10">

                <SectionTitle>
                    What is <span className="text-neon-cyan">GameFest?</span>
                </SectionTitle>

                <div className="glass-panel shimmer-sweep p-10 md:p-12 animate-on-scroll">
                    <div className="flex justify-center">
                        <p className="text-justify font-body text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-5xl mb-4 text-center">
                            <p>
                                GameFest 2026 is the inaugural game festival hosted at the International Islamic University Malaysia (IIUM), 
                                organized by GDGOC IIUM. Experience a diverse lineup of events, including technical workshops,
                                competitive hackathons, interactive exhibitions, and creative booths.
                            </p>
                            <p className="mt-6 text-center"> The festival lasts for a week and is seperated into two phases: </p>
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <InfoCard 
                            text="Phase One: Fun Week"
                            desc="Whole week dedicated to learning and competing — GameDev + ML/AI Workshops, GameDev + UI/UX Competitions and More!"
                            color="neon-purple"
                        />
                        <InfoCard
                            text="Phase Two: Exhibition Day"
                            desc="Whole day filled with activities for anyone to enjoy for free! Gaming booth, Art booth, GameJam Game Showcasing, and many more awaits!"
                            color="neon-cyan"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

function InfoCard({text, desc, color}: {text: string, desc: string, color: string}) {
    return (
        <div className="flex flex-col glass-panel p-6 animate-on-scroll" style={{ transitionDelay: "200ms" }}>
            <h3 className={`flex-1 text-center font-heading text-xl tracking-[0.2em] uppercase text-${color} mb-3`}>
                {text}
            </h3>
            <p className="flex-1 flex justify-center text-center font-body text-lg text-muted-foreground leading-relaxed">
                {desc}
            </p>
        </div>
    )
}
