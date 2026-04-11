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
                    What is <span className="text-neon-cyan"> GameFest? </span>
                </SectionTitle>

                <div className="glass-panel shimmer-sweep p-10 md:p-12 animate-on-scroll">
                    <div className="flex justify-center">
                        <p className="text-center font-body text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-5xl mb-10 text-center">
                            GameFest 2026 is the inaugural game festival hosted at the International Islamic University Malaysia (IIUM), 
                            organized by GDGOC IIUM. It serves as a premier platform to celebrate the intersection of 
                            technology, creativity, and gaming culture.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <InfoCard 
                            text="Promoting Game Development Culture"
                            desc="To foster a vibrant community of student developers and encourage the growth of game design skills on campus."
                            color="neon-purple"
                        />
                        <InfoCard
                            text="Raising Sector Awareness"
                            desc="To highlight the diverse and multidisciplinary nature of the creative multimedia sector 
                                  that involves not just coding, but also arts, music, and creative production."
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
