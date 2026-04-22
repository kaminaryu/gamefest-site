import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Gdgoc from "@/components/Gdgoc";
import About from "@/components/About";
import Info from "@/components/Info";
import Workshops from "@/components/Workshops";
import Sponsors from "@/components/Sponsors";
import Footer from "@/components/Footer";
import Competitions from "@/components/Competitions";
import FloatingController from "@/components/homepage/Controller";
import { useEffect, useRef } from "react";

export default function Index() {
    const parallaxRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleScroll = () => {
            if (!parallaxRef.current) return
            parallaxRef.current.style.transform = `translateY(-${window.scrollY * 0.02}px)`
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className="relative min-h-screen " style={{ backgroundColor: "#05050A" }}>
            <div ref={parallaxRef} className="fixed inset-0 pointer-events-none" style={{inset: "-20% 0"}}>
                <div className="absolute inset-0 opacity-20 bg-[url('/neonBG.jpg')] bg-cover bg-center" />
                <FloatingController />
            </div>

            <div className="relative z-10">
                <Navbar />
                <Hero />
                <Gdgoc />
                <About />
                <Info />
                <Workshops />
                <Competitions />
                <Sponsors />
                <Footer />
            </div>
        </div>
    );
};
