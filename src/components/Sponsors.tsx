import { useEffect, useRef } from "react";
import SectionTitle from "./homepage/sectionTitle";
import InfiniteCarousel from "./homepage/infiniteCarousel";

interface Sponsor {
    name: string,
    url: string,
    tier: string,
    src: string,
}

export interface Partner {
    name: string,
    src: string,
}

const sponsors: Sponsor[] = [
    {
        name: "SerpApi", url: "https://www.serpapi.com/", tier: "diamond",
        src: "logos/sponsors/SerpAPI.svg"
    },
    {
        name: "SEAGM", url: "https://www.seagm.com/", tier: "platinum",
        src: "logos/sponsors/seagm_white.png"
    },
    {
        name: "DeTA Technologies", url: "https://www.deta.com.my", tier: "gold",
        src: "logos/sponsors/DeTA_white.png"
    },
    {
        name: "Keychron", url: "https://www.keychron.com", tier: "gold",
        src: "logos/sponsors/keychron_white.png"
    },
    {
        name: "AZP Group", url: "https://www.azpgroup.org/", tier: "silver",
        src: "logos/sponsors/azp.png"
    },
    {
        name: "Here Be Dragons", url: "https://www.herebedragonsgames.com/", tier: "silver",
        src: "logos/sponsors/hbd.png"
    },
    {
        name: "Zus Coffee", url: "https://www.zuscoffee.com/", tier: "silver",
        src: "logos/sponsors/zus.png"
    },
]

const communityPartners: Partner[] = [
    { name: "Passion Replubic Games",   src: "/logos/partners/passionrepublic.png", },
    { name: "Kaigan Games",             src: "/logos/partners/kaigangames.png", },
    { name: "TODAK",                    src: "/logos/partners/todak.png", },
    { name: "MDEC",                     src: "/logos/partners/mdec.png", },
    { name: "DICE MMU",                 src: "/logos/partners/dicemmu.png", },
    { name: "APU GDC",                  src: "/logos/partners/apugdc.png", },
    { name: "Dreamonaut",               src: "/logos/partners/dreamonaut.png", },
];

const mediaPartners: Partner[] = [
    { name: "UDCY",         src: "/logos/partners/udcy.png", },
    { name: "PSYCSTA",      src: "/logos/partners/psycsta.png", },
    { name: "LEVEL UP",     src: "/logos/partners/levelup.png", },
    { name: "ICTSS",        src: "/logos/partners/ictss.png", },
    { name: "IIUM TODAY",   src: "/logos/partners/iiumtoday.jpeg", },
];


export default function Sponsors() {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
        (entries) => entries.forEach((entry) => {
            if (entry.isIntersecting) entry.target.classList.add("is-visible");
        }),
        { threshold: 0.15 }
        );
        const els = ref.current?.querySelectorAll(".animate-on-scroll");
        els?.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const diamond = sponsors.filter((s) => s.tier === "diamond");
    const platinum = sponsors.filter((s) => s.tier === "platinum");
    const gold = sponsors.filter((s) => s.tier === "gold");
    const silver = sponsors.filter((s) => s.tier === "silver");

    return (
        <section id="sponsors" className="relative py-24 md:py-32" ref={ref}>
            <div className="container mx-auto px-6 relative z-10">
                <SectionTitle>
                    Special <span className="bg-gradient-to-r from-neon-purple to-neon-cyan text-transparent bg-clip-text"> Thanks </span> To
                </SectionTitle>
                

                {/* Diamond tier */}
                <div className="mb-4 animate-on-scroll">
                    {/* The Title */}
                    <div className="flex items-center gap-4 mb-4 justify-center mt-4">
                        <div className="h-[3px] flex-1 max-w-[75vw] lg:max-w-[30vw] bg-gradient-to-r from-transparent to-neon-purple/50" />
                            <span className="font-heading text-xl bg-gradient-to-r from-neon-purple to-neon-cyan text-transparent bg-clip-text">
                                Powered By
                            </span>
                        <div className="h-[3px] flex-1 max-w-[75vw] lg:max-w-[30vw] bg-gradient-to-r from-neon-cyan/50 to-transparent" />
                    </div>

                    {/* The Cards */}
                    <div className="flex flex-wrap justify-center gap-6">
                        {diamond.map((sponsor) => (
                            <a
                                key={sponsor.name}
                                href={sponsor.url}
                                className="flex flex-col justify-center items-center w-96 glass-panel-light shimmer-sweep glow-cyan-strong
                                           px-12 py-8 text-center hover:-translate-y-2 transition-all duration-500 min-w-[220px]"
                            >
                                <img src={sponsor.src} alt={sponsor.name} className="h-24 w-auto mx-auto mb-4"/>

                                <span className="font-heading text-2xl md:text-3xl font-semibold tracking-[0.15em] bg-gradient-to-r from-neon-purple to-neon-cyan text-transparent bg-clip-text block h-12 flex items-center justify-center">
                                    {sponsor.name}
                                </span>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Platinum tier */}
                <div className="animate-on-scroll" style={{ transitionDelay: "200ms" }}>
                    {/* The Title */}
                    <div className="flex items-center gap-4 mb-4 justify-center mt-4">
                        <div className="h-[3px] flex-1 max-w-[60vw] lg:max-w-[25vw] bg-gradient-to-l from-neon-cyan/50 to-transparent" />
                            <span className="font-heading text-xl text-neon-cyan">
                                Sponsored By
                            </span>
                        <div className="h-[3px] flex-1 max-w-[60vw] lg:max-w-[25vw] bg-gradient-to-r from-neon-cyan/50 to-transparent" />
                    </div>

                    {/* The Cards */}
                    <div className="flex flex-wrap justify-center gap-5">
                        {platinum.map((sponsor) => (
                            <a
                                key={sponsor.name}
                                href={sponsor.url}
                                className="w-72 px-2 py-6 glass-panel-light shimmer-sweep glow-cyan text-center hover:-translate-y-1 transition-all duration-500"
                            >
                                <img src={sponsor.src} alt={sponsor.name} className="h-20 w-full mx-auto object-contain "/>

                                <span className="h-6 font-heading text-md md:text-lg mt-4 font-semibold tracking-[0.15em] text-foreground/80 block flex items-center justify-center">
                                    {sponsor.name}
                                </span>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Gold tier */}
                <div className="animate-on-scroll" style={{ transitionDelay: "200ms" }}>
                    {/* The Title */}
                    <div className="flex items-center gap-4 mb-4 justify-center mt-4">
                        <div className="h-[3px] flex-1 max-w-[30vw] lg:max-w-[20vw] bg-gradient-to-l from-neon-purple/50 to-transparent" />
                            <span className="font-heading text-3xl text-neon-purple">
                                ✦
                            </span>
                        <div className="h-[3px] flex-1 max-w-[30vw] lg:max-w-[20vw] bg-gradient-to-r from-neon-purple/50 to-transparent" />
                    </div>

                    {/* The Cards */}
                    <div className="flex flex-wrap justify-center gap-5">
                        {gold.map((sponsor) => (
                            <a
                                key={sponsor.name}
                                href={sponsor.url}
                                className="w-[10rem] flex flex-col items-center px-4 py-4 gap-4 glass-panel-light shimmer-sweep glow-cyan text-center hover:-translate-y-1 transition-all duration-500"
                            >
                                <img src={sponsor.src} alt={sponsor.name} className="h-16 max-w-[8rem] w-full object-contain"/>

                                {/* <span className="font-heading text-sm md:text-base font-semibold tracking-[0.15em] text-foreground/80"> */}
                                <span className="font-heading text-sm md:text-md mt-0 font-semibold tracking-[0.15em] text-foreground/80 block h-12 flex items-center justify-center">
                                    {sponsor.name}
                                </span>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Silver tier */}
                <div className="animate-on-scroll" style={{ transitionDelay: "200ms" }}>
                    {/* The Title */}
                    <div className="flex items-center gap-4 mb-4 justify-center mt-4">
                        <div className="h-[3px] flex-1 max-w-[30vw] lg:max-w-[20vw] bg-gradient-to-l from-neon-cyan/50 to-transparent" />
                            <span className="font-heading text-3xl text-neon-cyan">
                                ✦
                            </span>
                        <div className="h-[3px] flex-1 max-w-[30vw] lg:max-w-[20vw] bg-gradient-to-r from-neon-cyan/50 to-transparent" />
                    </div>

                    {/* The Cards */}
                    <div className="flex flex-col justify-center items-center gap-5">
                        {silver.map((sponsor) => (
                            <a
                                key={sponsor.name}
                                    href={sponsor.url}
                                    className="flex flex-row items-center w-72 px-8 py-4 glass-panel-light shimmer-sweep glow-cyan hover:-translate-y-1 transition-all duration-500"
                                >
                                    <div className="w-[30%] flex items-center justify-center">
                                        <img src={sponsor.src} alt={sponsor.name} className="h-12 md:h-14 w-full object-contain"/>
                                    </div>
                                    <span className="w-[70%] font-heading text-sm md:text-md pl-4 font-semibold tracking-[0.15em] text-foreground/80 flex items-center justify-start">
                                        {sponsor.name}
                                    </span>
                                </a>
                        ))}
                    </div>
                </div>

                {/* Media Partnerships */}
                <div className="flex items-center gap-4 mb-8 justify-center mt-12">
                    <div className="h-[3px] flex-1 max-w-[20vw] bg-gradient-to-l from-neon-purple/50 to-transparent" />
                        <span className="font-heading text-xl text-neon-purple">
                            Community Partners
                        </span>
                    <div className="h-[3px] flex-1 max-w-[20vw] bg-gradient-to-r from-neon-purple/50 to-transparent" />
                </div>

                <div className="flex justify-center">
                    <InfiniteCarousel
                        items={communityPartners}
                        config={{ width: 600, speed: 50 }}
                    />
                </div>

                <div className="flex items-center gap-4 mb-8 justify-center mt-12">
                    <div className="h-[3px] flex-1 max-w-[20vw] bg-gradient-to-l from-neon-cyan/50 to-transparent" />
                        <span className="font-heading text-xl text-neon-cyan">
                            Media Partners
                        </span>
                    <div className="h-[3px] flex-1 max-w-[20vw] bg-gradient-to-r from-neon-cyan/50 to-transparent" />
                </div>

                <div className="flex justify-center">
                    <InfiniteCarousel
                        items={mediaPartners}
                        config={{ width: 600, speed: 50, reversed: true }}
                    />
                </div>
            </div>
        </section>
    );
}
