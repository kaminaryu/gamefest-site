import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Gdgoc from "@/components/Gdgoc";
import About from "@/components/About";
import Info from "@/components/Info";
import Timeline from "@/components/Timeline";
import Workshops from "@/components/Workshops";
import Sponsors from "@/components/Sponsors";
import Footer from "@/components/Footer";
import Competitions from "@/components/Competitions";
import FloatingController from "@/components/homepage/Controller";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Index() {
    const containerRef = useRef(null)

    const { scrollYProgress } = useScroll();

    // When scroll is 0 (top), movement is 0px. 
    // When scroll is 1 (bottom), background has moved up by 300px.
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

    return (
        <div ref={containerRef} className="relative min-h-screen " style={{ backgroundColor: "#05050A" }}>
            <div className="fixed inset-0 pointer-events-none" style={{ inset: "-20% 0" }}>
                <motion.div 
                    style={{ y: backgroundY }} 
                    className="absolute inset-0 opacity-20 bg-[url('/neonBG.jpg')] bg-cover bg-center" 
                />
                {/* 2. Pass the scroll progress to the controller */}
                <FloatingController scrollYProgress={scrollYProgress} />
            </div>

            <div className="relative z-10">
                <Navbar />
                <Hero />
                <Gdgoc />
                <About />
                <Timeline />
                <Workshops />
                <Competitions />
                <Sponsors />
                <Footer />
            </div>
        </div>
    );
};
