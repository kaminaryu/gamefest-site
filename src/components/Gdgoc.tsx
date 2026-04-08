import { useEffect, useRef } from "react";
import SectionTitle from "./homepage/sectionTitle";

export default function Gdgoc() {
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
                    Who are <span className="text-neon-purple"> We? </span>
                </SectionTitle>

                <div className="flex flex-col justify-center aign-center glass-panel shimmer-sweep p-10 md:p-10 animate-on-scroll">
                    <img src="gdgociium.png" alt="GDGoC IIUM 25/26 LineUp" className="w-sm h-auto rounded-xl"/>

                    <div className="flex justify-center">
                        <p className="text-center font-body text-base md:text-xl text-muted-foreground leading-relaxed max-w-5xl md:max-w-7xl mt-8">
                            Google Developer Groups on Campus (GDGoC) International Islamic University Malaysia (IIUM)
                            is a student-led tech community under Google’s global network.
                            We help students turn classroom knowledge into real-world skills through hands-on workshops, hackathons, and study jams.
                            Our members build projects such as workshops and competitions in AI, UI/UX, web, and mobile development, guided by industry mentors.
                            We focus on creating an inclusive, collaborative space that prepares students for careers in the tech industry.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
