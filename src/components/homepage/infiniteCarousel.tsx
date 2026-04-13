// this code is a mess, dont bother
import { useRef, useEffect, useCallback } from "react";
import { Partner } from "../Sponsors";

// ─── EASY CONFIG ────────────────────────────────────────────────────────────
interface CarouselConfig {
    width: number;
    height: number;
    gap: number;
    itemWidth: number;
    fadeWidth: number;
    speed: number;
    minOpacity: number;
    // minScale: number;
}

const CAROUSEL_CONFIG: CarouselConfig = {
    /** Total visible width of the carousel track */
    width: 640,

    /** Height of the carousel strip */
    height: 80,

    /** Gap between each logo item (px) */
    gap: 10,

    /** Width of each logo slot (px) */
    itemWidth: 100,

    /** How wide the fade-out gradient is on each edge (px) */
    fadeWidth: 120,

    /** Scroll speed in pixels per second */
    speed: 80,

    /** Minimum opacity for logos at the far edges (0–1) */
    minOpacity: 0.1,

    /** Minimum scale for logos at the far edges (0–1) */
    // minScale:  0.9,
};
// ─────────────────────────────────────────────────────────────────────────────


interface InfiniteCarouselProps {
  items: Partner[];
  /** Override any config value per instance */
  config?: Partial<CarouselConfig>;
  className?: string;
}

export default function InfiniteCarousel({
    items,
    config,
    className = "",
}: InfiniteCarouselProps) {
    const cfg = { ...CAROUSEL_CONFIG, ...config };

    const trackRef = useRef<HTMLDivElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const offsetRef = useRef(0);
    const rafRef = useRef<number>(0);
    const lastTimeRef = useRef<number | null>(null);

    // Double the items so the seam is invisible
    const doubled = [...items, ...items];

    // Total width of ONE copy of all items
    const singleWidth =
        items.length * cfg.itemWidth + (items.length - 1) * cfg.gap;

    const updateOpacities = useCallback(() => {
        if (!trackRef.current || !wrapperRef.current) return;

        const wrapperRect = wrapperRef.current.getBoundingClientRect();
        const centerX = wrapperRect.left + wrapperRect.width / 2;
        const half = wrapperRect.width / 2;

        const slots = trackRef.current.querySelectorAll<HTMLDivElement>("[data-slot]");
        slots.forEach((el) => {
        const r = el.getBoundingClientRect();
        const itemCenter = r.left + r.width / 2;

        // const opacity = Math.max(cfg.minOpacity, 1 - t * (1 - cfg.minOpacity));
        // const scale  = Math.max(cfg.minScale,   1 - t * (1 - cfg.minScale));

        const fadeStart = half * 0.90; // start fading at 90% from center
        const dist = Math.abs(itemCenter - centerX);
        const t = dist <= fadeStart
            ? 0
            : Math.min((dist - fadeStart) / (half - fadeStart), 1);

        const opacity = 1 - t;
        el.style.opacity = opacity.toFixed(3);

// const wrapperLeft = wrapperRect.left;
// const wrapperRight = wrapperRect.right;
// const fadeZone = wrapperRect.width * 0.15; // fade over last 15% of wrapper width
//
// // Distance from item's outer edge to wrapper's edge
// const distFromLeft = r.left - wrapperLeft;
// const distFromRight = wrapperRight - r.right;
// const distFromEdge = Math.min(distFromLeft, distFromRight);
//
// const t = Math.min(Math.max(1 - distFromEdge / fadeZone, 0), 1);
// const opacity = 1 - t;
// el.style.opacity = opacity.toFixed(3);

        // el.style.transform = `scale(${scale.toFixed(3)})`;
        });
    }, [cfg.minOpacity]);

    useEffect(() => {
        let paused = false;

        // const onEnter = () => { paused = true; };
        // const onLeave = () => { paused = false; };
        // wrapperRef.current?.addEventListener("mouseenter", onEnter);
        // wrapperRef.current?.addEventListener("mouseleave", onLeave);

        const animate = (timestamp: number) => {
        if (lastTimeRef.current === null) lastTimeRef.current = timestamp;
        const delta = timestamp - lastTimeRef.current;
        lastTimeRef.current = timestamp;

        if (!paused) {
            offsetRef.current += (cfg.speed * delta) / 1000;
            // Reset cleanly when we've scrolled one full copy
            if (offsetRef.current >= singleWidth + cfg.gap) {
            offsetRef.current -= singleWidth + cfg.gap;
            }
            if (trackRef.current) {
            trackRef.current.style.transform = `translateX(-${offsetRef.current}px)`;
            }
        }

        updateOpacities();
        rafRef.current = requestAnimationFrame(animate);
        };

        rafRef.current = requestAnimationFrame(animate);
        return () => {
        cancelAnimationFrame(rafRef.current);
        // wrapperRef.current?.removeEventListener("mouseenter", onEnter);
        // wrapperRef.current?.removeEventListener("mouseleave", onLeave);
        };
    }, [cfg.speed, singleWidth, cfg.gap, updateOpacities]);

    return (
        <div
            className={`relative overflow-hidden ${className} border-x-67`}
            style={{ width: cfg.width, height: cfg.height }}
            ref={wrapperRef}
        >
            {/* Left line */}
            <div
                className="pointer-events-none absolute left-0 top-0 bottom-0 z-10"
                style={{
                    width: "4px",
                    background: "hsl(var(--neon-purple))",
                    boxShadow: "0 0 32px 4px hsl(var(--neon-purple))",
                }}
            />
            {/* Right line */}
            <div
                className="pointer-events-none absolute right-0 top-0 bottom-0 z-10"
                style={{
                    width: "4px",
                    background: "hsl(var(--neon-cyan))",
                    boxShadow: "0 0 32px 4px hsl(var(--neon-cyan))",
                }}
            />

            {/* Scrolling track */}
            <div
                ref={trackRef}
                className="flex will-change-transform"
                style={{
                    gap: cfg.gap,
                    width: "max-content",
                    height: "100%",
                    alignItems: "center",
                }}
            >
                {doubled.map((item, index) => (
                    <div
                        key={`${item.name}-${index}`}
                        data-slot
                        className="flex items-center justify-center transition-opacity "
                        style={{ width: cfg.itemWidth, height: cfg.height }}
                    >
                        <img
                            src={item.src}
                            alt={item.name}
                            title={item.name}
                            draggable={false}
                            className="w-full h-full object-contain select-none grayscale"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
