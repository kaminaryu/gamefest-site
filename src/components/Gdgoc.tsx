import { useEffect, useRef } from "react";
import SectionTitle from "./homepage/sectionTitle";

const gradientText: string = "bg-gradient-to-r from-neon-purple to-neon-cyan text-transparent bg-clip-text";

interface socialsDetails {
    name: string,
    logo: string,
    url: string,
    alt: string,
}

const socials: socialsDetails[] = [
    {
        name: "Link Tree",
        logo: "logos/socials/linktree.png",
        url: "https://linktr.ee/gdgiium",
        alt: "LT",
    },
    {
        name:"Instagram",
        logo: "logos/socials/instagram.png",
        url: "https://www.instagram.com/gdg.iium",
        alt: "IG",
    },
    {
        name:"TikTok",
        logo: "logos/socials/tiktok.png",
        url: "https://www.tiktok.com/@gdgiium",
        alt: "TT",
    },
    {
        name:"X",
        logo: "logos/socials/x.png",
        url: "https://x.com/gdgiium",  
        alt: "X",
    },
    {
        name:"LinkedIn",
        logo: "logos/socials/linkedin.png",
        url: "https://www.linkedin.com/company/googledevelopergrouponcampusiium/?viewAsMember=true",
        alt: "LI",
    },
    {
        name:"Whatsapp",
        logo: "logos/socials/whatsapp.png",
        url: "https://chat.whatsapp.com/D3bx0CXqMsJIeP5HEygMsp",
        alt: "WS",
    },
    {
        name:"Discord",
        logo: "logos/socials/discord.png",
        url: "https://discord.com/invite/ye9cA7DhrS",
        alt: "DC",
    },
]


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

                <div className="flex flex-col justify-center aign-center glass-panel shimmer-sweep p-6 md:p-10 animate-on-scroll">
                    <img src="gdgociium.png" alt="GDGoC IIUM 25/26 LineUp" className="h-auto w-auto rounded-2xl"/>

                    <div className="flex flex-col lg:grid lg:grid-cols-[25%_75%] mx-0 md:mx-8 mt-8 gap-8">
                        <Attributes />

                        <div className="flex flex-col justify-center gap-4 justify-evenly">
                            <h1 className={`text-xl md:text-2xl border-l-4 pl-4 ${gradientText}`}>
                                Google Developer Groups on Campus (GDGoC)
                                <br />
                                International Islamic University Malaysia (IIUM)
                            </h1>
                            <p className="text-justify font-body text-base md:text-xl text-muted-foreground leading-relaxed">
                                A student-led tech community under Google’s global network.
                                We help students turn classroom knowledge into real-world skills through hands-on workshops, hackathons, and study jams.
                                Our members build projects such as workshops and competitions in AI, UI/UX, web, and mobile development, guided by industry mentors.
                                We focus on creating an inclusive, collaborative space that prepares students for careers in the tech industry.
                            </p>

                            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
                                <p className="text-muted-foreground font-black">
                                    Our Socials:
                                </p>
                                <div className="flex items-center gap-4">
                                    {
                                        socials.map((social, i) => (
                                            <a
                                                key={i}
                                                href={social.url}
                                                title={social.name}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-gradient-to-r from-neon-purple to-neon-cyan hover:brightness-125 p-2 rounded-3xl"
                                            >
                                                <img src={social.logo} alt={social.alt} className="w-6 grayscale"/>
                                            </a>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


function Attributes() {
    return (
        <div className="flex flex-col md:flex-col gap-2 md:gap-4">
            <AttributeCards number="46" category={"Members"} />
            <AttributeCards number="9"  category={"Teams"} />
            <AttributeCards number="15+" category={"Programmes"} />
        </div>
    )
}

function AttributeCards({number, category}: {number: string, category: string}) {
    return (
        <div className="flex flex-row flex-1 lg:flex-col items-baseline lg:items-start glass-panel gap-2 px-4 py-2 lg:p-6 animate-on-scroll min-w-[200px]">
            <p className={`min-w-12 inline text-3xl lg:text-4xl section-heading ${gradientText}`}>
                {number}
            </p>
            <p className="text-muted-foreground text-xl lg:text-2xl font-bold">
                {category}
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
