export default function PageButton({href, src}: {href: string, src: string}) {
    return (
            <a 
                href={href}
                className="fixed right-5 md:right-20 bottom-5 md:bottom-10 w-16 md:w-24 h-auto p-3 rounded-[10vh] z-10
                           bg-gradient-to-r from-neon-purple to-neon-cyan hover:brightness-125 opacity-75"
            >
                <img
                    className=""
                    src={src}
                    alt="FloorPlan"
                /> 
            </a>
    )
}
