export default function Hero() {
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

            <div className="relative inline-block">
                <img src='/gameFestLogo.png' alt="GameFest" />
            </div>

            {/* Tagline */}
            <p
                className="font-body text-xl md:text-2xl font-light tracking-wider mb-4 max-w-xl mx-auto hero-enter"
                style={{ color: "rgba(241, 245, 249, 0.7)", animationDelay: "0.6s" }}
            >
            The First Game Development Festival in IIUM
            </p>

            {/* Date + Location */}
            <p
                className="font-heading text-xs md:text-sm tracking-[0.4em] uppercase mb-10 hero-enter"
                style={{ color: "rgba(168, 85, 247, 0.6)", animationDelay: "0.8s" }}
            >
                May 08 – 15, 2026 
                <br /> <p className="mb-2" />
                Kulliyah of ICT, IIUM Gombak, Selangor
            </p>

            {/* CTA */}
            <div className="hero-enter" style={{ animationDelay: "1s" }}>
                <a href="#events" className="btn-glow text-sm md:text-base">
                    Learn More
                </a>
            </div>

            {/* Scroll indicator */}
        </div>
        </section>
    );
};
