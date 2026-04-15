import { useRef, useState } from "react";
import IntroAnim from "./animations/IntroAnim";

export default function Hero() {
    const [introFinished, setIntroFinished] = useState(false);

    const actualLogoRef = useRef<HTMLImageElement>(null);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Subtle grid overlay */}
            <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                backgroundImage:
                    "linear-gradient(rgba(168, 85, 247, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(168, 85, 247, 0.3) 1px, transparent 1px)",
                backgroundSize: "80px 80px",
                }}
            />

            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                <div className="flex justify-center gap-4 mt-8">
                    <span className="diamond-icon text-xl md:text-3xl text-neon-purple"> ✦ </span>

                    <p
                        id="tagline"
                        className="text-xl md:text-3xl tracking-[0.15em] pl-[0.15em] md:tracking-[0.3em] md:pl-[0.15em] 
                        uppercase bg-gradient-to-r from-neon-purple to-neon-cyan text-transparent bg-clip-text text-center"
                    >
                            Create. Play. Innovate.
                    </p>

                    <span className="diamond-icon text-xl md:text-3xl text-neon-cyan"> ✦ </span>
                </div>

                <div className="relative inline-block my-8">
                    <img
                        ref={actualLogoRef} src='/gameFestLogo.png' alt="GameFest" 
                        className="w-[32rem] md:w-[36rem] lg:w-[48rem] h-auto object-contain opacity-0"
                    />
                </div>

                {/* Tagline */}
                <p
                    className="font-body text-2xl md:text-3xl tracking-wider mb-0 max-w-xl mx-auto hero-enter"
                    style={{ color: "rgba(241, 245, 249, 0.7)", animationDelay: "0.6s" }}
                >
                    The First Game Festival in IIUM
                </p>
                <p
                    className="font-body text-lg md:text-xl tracking-wider mb-4 max-w-xl mx-auto hero-enter"
                    style={{ color: "rgba(241, 245, 249, 0.7)", animationDelay: "0.6s" }}
                >
                    By GDGoC IIUM
                </p>


                {/* Date + Location */}
                <p
                    className="text-md md:text-xl tracking-[0.4em] uppercase mb-10 hero-enter font-semibold text-neon-purple"
                    style={{ animationDelay: "0.8s" }}
                >
                    May 08 – 16, 2026 
                    <br /> <p className="mb-2" />
                    Kulliyah of ICT, IIUM Gombak, Selangor
                </p>

                {/* CTA */}
                <div className="hero-enter" style={{ animationDelay: "1s" }}>
                    <a href="#gdgoc" className="btn-glow text-sm md:text-base">
                        Learn More
                    </a>
                </div>

                {/* Scroll indicator */}
            </div>

            <IntroAnim actualLogoRef={actualLogoRef}/>
        </section>
    );
};
