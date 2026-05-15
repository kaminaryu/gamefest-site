import { useEffect, useRef } from "react";
import SectionTitle from "../homepage/sectionTitle";

export default function SponsorsGJ() {
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
        <section id="gdgoc" className="relative py-16 md:py-32" ref={ref}>
            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <SectionTitle> 
                    <span className="text-neon-purple"> Sponsors </span>
                    and 
                    <span className="text-neon-cyan"> GDGameJam </span>
                    Booths
                </SectionTitle>

                <div className="flex flex-col justify-center aign-center glass-panel shimmer-sweep p-6 md:p-10 animate-on-scroll">
                    <img src="/floorplans/SPONSOR_GDGAMEJAM.png" alt="Sponsors and Gamejam Booths" className="h-auto w-auto rounded-2xl"/>
                </div>
            </div>
        </section>
    )
}
