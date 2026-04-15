import { useEffect } from "react";
import { createPortal } from "react-dom";
import { animate } from "animejs";

interface Poster {
    setIsPosterOpen: (arg0: boolean) => void;
    src: string,
    url: string,
}

export default function EventPoster({setIsPosterOpen, src, url}: Poster) {
    // detect if the Esc key is being pressed, then close the poster
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsPosterOpen(false);
        };

        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, []);


    const animatePopProp = {
        scale: [0.8, 1],
        duration: 200,
        easing: "easeInOut",
    }

    const animateFadeProp = {
        opacity: [0, 1],
        duration: 200,
        easing: "easeInOut",
    }

    // play animation
    useEffect(() => {
        animate(".animate-pop", animatePopProp);
        animate(".animate-fade", animateFadeProp);
    }, []);

    const playClosingAnimation = () => {
        animate(".animate-pop", {
            ...animatePopProp,
            reversed: true,
        });
        animate(".animate-fade", {
            ...animateFadeProp,
            reversed: true,
            onComplete: () => setIsPosterOpen(false),
        });
    }


    const closePoster = () => {
        playClosingAnimation();
    }


    // createPortal is for making shit outside of the current hierachy
    // in this case, render the shit inside document.body instead
    return createPortal(
        <div
            className="animate-fade flex flex-col fixed inset-0 z-[67] flex items-center justify-center bg-black/30 backdrop-blur-md"
            onClick={() => closePoster()}
        >
            <div className="animate-pop flex flex-col items-center">
                <img src={src} alt="Event Poster" className="h-[67vh] max-w-screen object-contain mb-16" />

                <a 
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl glass-panel-light brightness-150 px-4 py-2 rounded-3xl cursor-pointer hover:brightness-200 "
                    onClick={(e) => e.stopPropagation()}
                > 
                    Learn More
                </a>
            </div>
        </div>, document.body
    );
}
