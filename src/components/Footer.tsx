const Footer = () => {
  return (
    <footer id="contact" className="relative py-16" style={{ borderTop: "1px solid rgba(168, 85, 247, 0.1)" }}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h3
              className="font-heading text-lg font-bold tracking-[0.3em] mb-2"
              style={{
                background: "linear-gradient(135deg, #A855F7, #06B6D4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              NEXUS
            </h3>
            <p className="font-body text-sm text-muted-foreground">
              The future of festival culture.
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
            © 2026 NEXUS Festival. All rights reserved. A statement, not a template.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
