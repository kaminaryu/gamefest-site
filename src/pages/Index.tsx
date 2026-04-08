import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Gdgoc from "@/components/Gdgoc";
import About from "@/components/About";
import FestivalInfo from "@/components/FestivalInfo";
import Events from "@/components/Events";
import Sponsors from "@/components/Sponsors";
import Footer from "@/components/Footer";

const Index = () => {
    return (
        <div className="relative min-h-screen" style={{ backgroundColor: "#05050A" }}>
            <div className="relative z-10">
                <Navbar />
                <Hero />
                <Gdgoc />
                <About />
                <FestivalInfo />
                <Events />
                <Sponsors />
                <Footer />
            </div>
        </div>
    );
};

export default Index;
