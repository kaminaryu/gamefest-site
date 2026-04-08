export default function SectionTitle({ children }: {children: React.ReactNode}) {
    return (
        <h2 className="section-heading text-center mb-12 animate-on-scroll">
            {children}
        </h2>
    )
}
