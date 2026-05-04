import { useEffect, useRef, useState } from "react";
import IntroAnim from "./animations/IntroAnim";
import { animate } from "animejs";


export function startLogoFloatingAnim() {
    animate(".actualLogo", {
        delay: 200,
        translateY: [0, -10],
        loop: true,
        alternate: true,
        ease: "inOutQuad",
        duration: 2000,
    })
}

export default function Hero() {
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

                { /* Logo */}
                <div className="actualLogo relative inline-block mt-8 mb-4">
                    <div className="absolute inset-0 blur-3xl bg-neon-cyan opacity-20 rounded-full scale-x-110 scale-y-75" />
                    <img
                        ref={actualLogoRef} src='/gameFestLogo.png' alt="GameFest" 
                        className="w-[32rem] md:w-[36rem] lg:w-[48rem] h-auto object-contain opacity-0"
                    />
                </div>


                {/* SerpAPI Special Place */}
                <a 
                    className="flex flex-col md:flex-row justify-center items-center gap-3 mb-8 opacity-60 
                               hover:opacity-100 transition-opacity duration-300 py-4 hover:cursor-pointer"
                    href="https://serpapi.com/"
                >
                    {/* Desktop Line */}
                    <div className="hidden md:block h-[2px] w-24 bg-gradient-to-r from-transparent to-neon-purple" />

                    {/* Mobile Line */}
                    <div className="block md:hidden flex flex-row items-center justify-center">
                        <div className="h-px w-36 bg-gradient-to-r from-transparent to-neon-purple" />
                            <span className="font-heading text-md text-neon-purple mx-2">
                                ✦
                            </span>
                        <div className="h-px w-36 bg-gradient-to-l from-transparent to-neon-purple" />
                    </div>

                        <img src="/PoweredBy.svg" alt="Powered By SerpAPI" className="w-[16rem] md:w-[24rem]" />

                    {/* Desktop Line */}
                    <div className="hidden md:block h-[2px] w-24 bg-gradient-to-l from-transparent to-neon-purple" />

                    {/* Mobile Line */}
                    <div className="block md:hidden flex flex-row items-center justify-center">
                        <div className="h-px w-36 bg-gradient-to-r from-transparent to-neon-purple" />
                            <span className="font-heading text-md text-neon-purple mx-2">
                                ✦
                            </span>
                        <div className="h-px w-36 bg-gradient-to-l from-transparent to-neon-purple" />
                    </div>
                </a>


                {/* Tagline */}
                <p
                    className="font-body text-2xl md:text-3xl tracking-wider mb-0 max-w-xl mx-auto hero-enter"
                    style={{ color: "rgba(241, 245, 249, 0.9)", animationDelay: "0.6s" }}
                >
                    The First Game Festival in IIUM
                </p>
                <p
                    className="font-body text-lg md:text-xl tracking-wider mb-4 max-w-xl mx-auto hero-enter"
                    style={{ color: "rgba(241, 245, 249, 0.8)", animationDelay: "0.6s" }}
                >
                    By GDGoC IIUM
                </p>


                {/* Date + Location */}
                <p
                    className="flex flex-col tracking-[0.4em] uppercase mt-8 mb-10 hero-enter font-semibold text-neon-purple"
                    style={{ animationDelay: "0.8s" }}
                >
                    <p className="text-2xl md:text-3xl mb-2">
                        May 08 – 16, 2026 
                    </p>
                    <p className="text-md md:text-xl text-muted-neon-purple">
                        Kulliyah of ICT, IIUM Gombak, Selangor
                    </p>
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
