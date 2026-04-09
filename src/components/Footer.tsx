interface socialsDetails {
    name: string,
    logo: string,
    link: string,
}

const socials: socialsDetails[] = [
    {
        name: "X",
        logo: "logos/socials/x.png",
        link: "twitter.com"  
    }
]

export default function Footer() {
   return (
    <footer id="contact" className="relative py-16" style={{ borderTop: "1px solid rgba(168, 85, 247, 0.1)" }}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <img src="gameFestLogo.png" alt="GameFest" className="h-14 w-auto"/>

            <p className="font-body text-sm text-muted-foreground">
            Create. Play. Innovate.
            </p>
          </div>

          <div className="text-center">
            <p className="font-heading text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">
              Get in Touch
            </p>
            <a
              href="mailto:hello@nexusfestival.io"
              className="font-body text-sm text-neon-purple/80 hover:text-neon-purple transition-colors"
            >
              hello@nexusfestival.io
            </a>
          </div>

          <div className="flex items-center gap-6">
            {["X", "IG", "TG", "DC"].map((social) => (
              <a
                key={social}
                href="#"
                className="font-heading text-xs tracking-[0.2em] text-muted-foreground hover:text-neon-purple transition-colors duration-300"
              >
                {social}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-6 text-center" style={{ borderTop: "1px solid rgba(168, 85, 247, 0.05)" }}>
          <p className="font-body text-xs tracking-wider" style={{ color: "rgba(241, 245, 249, 0.25)" }}>
            © 2025/2026 GDGoC IIUM Festival. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

