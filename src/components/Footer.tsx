interface socialsDetails {
    name: string,
    logo: string,
    url: string,
    alt: string,
}

const socials: socialsDetails[] = [
    {
        name:"insta",
        logo: "logos/socials/instagram.png",
        url: "https://www.instagram.com/gamefest.gdgiium",  
        alt: "IG",
    },
    {
        name: "linktree",
        logo: "logos/socials/linktree.png",
        url: "https://linktr.ee/gamefestgdgiium",
        alt: "LT",
    },
]

export default function Footer() {
   return (
        <footer id="contact" className="relative py-10 glass-panel" style={{ borderTop: "1px solid rgba(168, 85, 247, 0.1)" }}>
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex-1 text-center md:text-left">
                        <img src="gameFestLogo.png" alt="GameFest" className="h-14 w-auto"/>

                        <p className="font-body text-lg text-muted-foreground">
                            Create. Play. Innovate.
                        </p>
                    </div>

                    <div className="flex-1 flex flex-col text-center">
                        <p className="font-heading text-lg tracking-[0.3em] uppercase text-muted-foreground mb-2">
                            Get in Touch
                        </p>
                        <a
                            href="https://wa.me/60196223872" target="_blank" rel="noopener noreferrer"
                            className="font-body text-lg text-neon-purple/80 hover:text-neon-purple transition-colors underline"
                        >
                            +6019 622 3872 (Sr. Balqis)
                        </a>
                        <a
                            href="https://wa.me/60124142906"  target="_blank" rel="noopener noreferrer"
                            className="font-body text-lg text-neon-purple/80 hover:text-neon-purple transition-colors underline"
                        >
                            +6012 414 2906 (Sr. Maisarah)
                        </a>
                    </div>

                    <div className="flex-1 flex items-center gap-8 justify-end">
                        {
                            socials.map((social, i) => (
                                <a
                                    key={i}
                                    href={social.url}
                                    className="bg-black hover:bg-black/50 p-2 rounded-3xl"
                                >
                                    <img src={social.logo} alt={social.alt} className="w-6 grayscale"/>
                                </a>
                            ))
                        }
                    </div>
                </div>

                <div className="mt-12 pt-6 text-center" style={{ borderTop: "2px solid rgba(67, 67, 67, 0.2)" }}>
                    <p className="font-body text-xs tracking-wider" style={{ color: "rgba(241, 245, 249, 0.25)" }}>
                        © 2025/2026 GDGoC IIUM. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

