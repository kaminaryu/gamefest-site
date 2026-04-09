import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Gdgoc from "@/components/Gdgoc";
import About from "@/components/About";
import FestivalInfo from "@/components/FestivalInfo";
import Workshops from "@/components/Workshops";
import Sponsors from "@/components/Sponsors";
import Footer from "@/components/Footer";
import Competitions from "@/components/Competitions";

export default function Index() {
    return (
        <div className="relative min-h-screen" style={{ backgroundColor: "#05050A" }}>
            <div className="relative z-10">
                <Navbar />
                <Hero />
                <Gdgoc />
                <About />
                <FestivalInfo />
                <Workshops />
                <Competitions />
                <Sponsors />
                <Footer />
            </div>
        </div>
    );
};
