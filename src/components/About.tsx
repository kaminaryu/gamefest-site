import { useEffect, useRef } from "react";
import SectionTitle from "./homepage/sectionTitle";

const About = () => {
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
            <div className="container mx-auto px-6 relative z-10">

                <SectionTitle>
                    What is <span className="text-neon-cyan"> GameFest? </span>
                </SectionTitle>

                <div className="glass-panel shimmer-sweep p-10 md:p-12 animate-on-scroll">
                    <div className="flex justify-center">
                        <p className="text-center font-body text-base md:text-xl text-muted-foreground leading-relaxed max-w-5xl mb-10">
                            GameFest 2026 is the inaugural game festival hosted at the International Islamic University Malaysia (IIUM), 
                            organized by GDGOC IIUM. It serves as a premier platform to celebrate the intersection of 
                            technology, creativity, and gaming culture.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex-row justify-center align-center glass-panel p-6 animate-on-scroll" style={{ transitionDelay: "100ms" }}>
                            <h3 className="text-center font-heading text-lg tracking-[0.2em] uppercase text-neon-purple mb-3">
                                Promoting GameDev Culture
                            </h3>
                            <p className="text-center font-body text-md text-muted-foreground leading-relaxed">
                                Fostering a vibrant community of student developers and encouraging the growth of 
                                game design skills on campus.
                            </p>
                        </div>

                        <div className="glass-panel p-6 animate-on-scroll" style={{ transitionDelay: "200ms" }}>
                            <h3 className="flex justify-center font-heading text-lg tracking-[0.2em] uppercase text-neon-cyan mb-3">
                                Raising Sector Awareness
                            </h3>
                            <p className="flex justify-center text-center font-body text-md text-muted-foreground leading-relaxed">
                                Highlighting the diverse and multidisciplinary nature of the creative multimedia sector — 
                                not just coding, but arts, music, and creative production.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
