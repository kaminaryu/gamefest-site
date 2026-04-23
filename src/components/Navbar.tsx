import { useState, useEffect } from "react";

const navLinks = [
    { label: "About Us", href: "#gdgoc" },
    { label: "Info", href: "#info" },
    { label: "Events", href: "#events" },
    { label: "Sponsors", href: "#sponsors" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
            scrolled
            ? "glass-panel-light border-b py-2"
            : "bg-transparent py-5"
        }`}
        style={scrolled ? { borderColor: "rgba(168, 85, 247, 0.1)" } : {}}
        >
            <div className="container mx-auto flex items-center justify-between px-6">
                {/* Left - Logo */}
                <div className="flex-1 flex justify-start">
                    <a href="#">
                        <img src="gameFestLogo.png" alt="GameFest" className="h-12 w-auto"/>
                    </a>
                </div>

                {/* Center - Nav Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="font-body text-sm font-medium tracking-widest uppercase text-muted-foreground hover:text-neon-purple transition-colors duration-300"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Right - CTA */}
                <div className="flex-1 flex justify-end">
                    <a
                        href="#events"
                        className="btn-glow text-xs py-2 px-5 md:inline-block"
                    >
                        Join Events
                    </a>
                </div>
            </div>
        </nav>
    );
};
