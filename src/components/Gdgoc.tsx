import { useEffect, useRef } from "react";
import SectionTitle from "./homepage/sectionTitle";

const gradientText: string = "bg-gradient-to-r from-neon-purple to-neon-cyan text-transparent bg-clip-text";

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
        <section id="gdgoc" className="relative py-16 md:py-16" ref={ref}>
            <div className="max-w-6xl mx-auto px-6 relative z-10">

                <SectionTitle>
                    Meet The <span className={gradientText}> Organizers </span>
                </SectionTitle>

                <div className="flex flex-col justify-center aign-center glass-panel shimmer-sweep p-10 md:p-10 animate-on-scroll">
                    <img src="gdgociium.png" alt="GDGoC IIUM 25/26 LineUp" className="h-auto w-auto rounded-2xl"/>

                    <div className="grid grid-cols-[30%_70%] mx-8 mt-8 gap-8">
                        <Attributes />

                        <div className="flex flex-col justify-center">
                            <h1 className={`mb-4 text-2xl border-l-4 pl-4 ${gradientText}`}>
                                Google Developer Groups on Campus (GDGoC)
                                <br />
                                International Islamic University Malaysia (IIUM)
                            </h1>
                            <p className="text-justify font-body text-base md:text-xl text-muted-foreground leading-relaxed max-w-5xl md:max-w-7xl">
                                A student-led tech community under Google’s global network.
                                We help students turn classroom knowledge into real-world skills through hands-on workshops, hackathons, and study jams.
                                Our members build projects such as workshops and competitions in AI, UI/UX, web, and mobile development, guided by industry mentors.
                                We focus on creating an inclusive, collaborative space that prepares students for careers in the tech industry.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


function Attributes() {
    return (
        <div className="grid text-black gap-y-4">
            <AttributeCards number={67} category={"Members"} />
            <AttributeCards number={9}  category={"Teams"} />
            <AttributeCards number={6769} category={"????"} />
        </div>
    )
}

function AttributeCards({number, category}: {number: number, category: string}) {
    return (
        <div className="flex items-end glass-panel p-6 animate-on-scroll">
            <p className={`inline text-4xl section-heading ${gradientText}`}>
                {number}
            </p>
            <p className="text-muted-foreground text-2xl">
                &nbsp;{category}
            </p>
        </div>
    )
}

// Teams
// 1 WebDev
// 2 GameDev
// 3 AppDev
// 4 MLAI
// 5 PuMa
// 6 CrePro
// 7 Community
// 8 UI/UX
// 9 Mainboard
