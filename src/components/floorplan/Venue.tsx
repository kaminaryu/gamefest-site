import { useEffect, useRef } from "react";
import SectionTitle from "../homepage/sectionTitle";

export default function Venue() {
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
        <section id="gdgoc" className="relative pt-32 pb-16 md:py-32" ref={ref}>
            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <SectionTitle> 
                    <p className="bg-gradient-to-r from-neon-purple to-neon-cyan text-transparent bg-clip-text inline-block">
                        Event Venue
                    </p>
                </SectionTitle>

                <div className="flex justify-center items-center glass-panel shimmer-sweep p-6 md:p-10 animate-on-scroll">
                    <img src="/floorplans/Venue.png" alt="Venue" className="h-auto w-auto rounded-2xl md:max-w-3xl"/>
                </div>
            </div>
        </section>
    )
}
