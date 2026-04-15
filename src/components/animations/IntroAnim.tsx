import { useEffect, useState, useRef, RefObject } from "react";
import { createPortal } from "react-dom";
import { animate, utils, splitText, stagger, createTimeline } from "animejs";

export default function IntroAnim({actualLogoRef}: {actualLogoRef: RefObject<HTMLImageElement>}) {
    const [introFinished, setIntroFinished] = useState(false);

    const animatedLogoRef = useRef<HTMLImageElement>(null);
    let targetHash = "";
    // useEffect(() => {
    //     const handleKey = (e: KeyboardEvent) => {
    //         if(e.key == " ") playAnim();
    //     };
    //
    //     window.addEventListener('keydown', handleKey);
    //     // detach the event listener when component is no more
    //     return () => window.removeEventListener('keydown', handleKey); 
    // }, [])


    // run once at mount
    useEffect(() => {
        // disable scrolling
        document.documentElement.style.overflow = "hidden";

        // save url hash (section)
        targetHash = window.location.hash;
        console.log(targetHash)

        // move to top of the viewport
        window.scrollTo({ top: 0, behavior: "auto" });
    }, []);

 
    const onLogoLoad = () => {
        const actualRect = actualLogoRef.current.getBoundingClientRect();
        const bigW = actualRect.width
        const bigH = actualRect.height

        const isMedium = window.matchMedia("(min-width: 768px)").matches;
        const isLarge = window.matchMedia("(min-width: 1024px)").matches;
        let startingScale = 1.1;

        if (isMedium) {
            startingScale = 1.25;
        }
        else if (isLarge) {
            startingScale = 1.5;
        }

        const el = animatedLogoRef.current;
        el.style.position = "fixed";
        el.style.width = `${bigW}px`;
        el.style.left = `${Math.round(window.innerWidth / 2 - bigW / 2)}px`;
        el.style.top = `${Math.round(window.innerHeight / 2 - bigH / 2)}px`;

        animate(el, {
            opacity: [0, 1],
            filter: {from: 'blur(20px)'},
            scale: [0, startingScale],
            duration: 1000,
            ease: "outQuad",
            onComplete: () => playAnim(startingScale),
        });
    };


    const playAnim = (startingScale: number) => {
        const actualRect = actualLogoRef.current.getBoundingClientRect();
        const animatedLogo = animatedLogoRef.current;
        // const { words } = splitText('#tagline', { chars: { wrap: true}});
        const revealTimeline = createTimeline();


        revealTimeline.set('#tagline', {y: -100, opacity: 0})
            .set('.diamond-icon', {opacity: 0})
            .add(animatedLogo, {
                left: actualRect.left,
                top: actualRect.top,
                width: actualRect.width,
                height: actualRect.height,
                scale: [startingScale, 1],
                duration: 1000,
                delay: 500,
                ease: "inOutExpo",
            })
            .add(".background-black", {
                opacity: [1, 0],
                duration: 1000,
                ease: "outQuad",
            }, '-=500')
            .add(".background-pattern", {
                opacity: [0.20, 0],
                duration: 1000,
                ease: "outQuad",
                onComplete: () => fishingIntro(animatedLogo),
            }, '<<')
            .add('#tagline', {
                y: {to: 0},
                opacity: 1,
                duration: 500,
                ease: 'outExpo',
            }, '<<+=250')
            .add('.diamond-icon', {
                x: {from: stagger([-20, 20])},
                opacity: 1,
                duration: 500,
                ease: 'outExpo',
            })
    };


    const fishingIntro = (ani: HTMLImageElement) => {
        ani.style.opacity = "0";
        actualLogoRef.current.style.opacity = "1";
        document.documentElement.style.overflow = "";

        scrollDown();
        setIntroFinished(true);
    }

    const scrollDown = () => {
        if (targetHash) {
            const targetSection = document.querySelector(targetHash);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        }
    }

    return createPortal(
        <>
            {
                !introFinished &&
                    <>
                        <div className="background-black fixed inset-0 bg-black bg-cover bg-fixed bg-center z-[10]" />
                        <div className="background-pattern fixed inset-0 opacity-20 bg-[url('/neonBG.jpg')] bg-cover bg-fixed bg-center z-[20]" />

                        <div className="fixed inset-0 z-[30]">
                            <img 
                                ref={animatedLogoRef} src='/gameFestLogo.png'
                                alt="GameFest" onLoad={() => onLogoLoad()}
                                className="logo opacity-0 scale-110 md:scale-150"
                            />
                        </div>
                    </>
            }
        </>,
        document.body
    )
}
