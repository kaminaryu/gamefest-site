import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { Float, useGLTF, Environment } from '@react-three/drei'
import { Suspense, useMemo, useRef } from 'react'
import { MotionValue, useTransform } from "framer-motion"
import * as THREE from 'three'

interface MeshProp {
    url: string
    position: [number, number, number]
    rotation: [number, number, number]
    scale: number
}

function FloatingMesh({ url, position, rotation, scale }: MeshProp) {
    const { scene } = useGLTF(url)


    return (
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.2}>
            <primitive object={scene.clone()} position={position} rotation={rotation} scale={scale} />
        </Float>
    )
}

function FloatingScene({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
    const { size } = useThree()
    const isMobile = size.width < 768
    const groupRef = useRef<THREE.Group>(null)

    // Map scroll 0.0 - 1.0 to 3D vertical units 0 - 5
    const scrollRef = useRef(0)

    useFrame(() => {
        // Pull latest scroll value from MotionValue without subscribing
        scrollRef.current = scrollYProgress.get()
        if (groupRef.current) {
            // Lerp for smoothness, avoids janky frame-to-frame jumps
            const target = scrollRef.current * 2
            groupRef.current.position.y += (target - groupRef.current.position.y) * 0.08
        }
    })

    const meshes: MeshProp[] = [
        {
            // thank you https://sketchfab.com/violetboom
            url: "/models/xbox_controller_lp.glb",
            position: isMobile ? [-2, 2, 0] : [-4, 2, 0],
            rotation: [0.9, -0.5, 0],
            scale: isMobile ? 0.4 : 0.6,
        },
        {
            // thank you https://sketchfab.com/maxsdejesus
            url: "/models/snes_controller.glb",
            position: isMobile ? [2, -1, -2] : [4, -1, -2],
            rotation: [0.4, 0.5, -0.1],
            scale: isMobile ? 0.004 : 0.005,
        },
        {
            // i made ts myself tqvm -ryu
            url: "/models/joystick.glb",
            position: isMobile ? [-2, -5, -2] : [-4, -4, 0],
            rotation: [0.4, 3.0, -0.1],
            scale: isMobile ? 0.15 : 0.2,
        },
    ]

    return (
        <group ref={groupRef}>
            {meshes.map((mesh, i) => (
                <FloatingMesh key={i} {...mesh} />
            ))}
        </group>
    )
}


export default function FloatingController({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
    return (
        <div className="absolute inset-0 pointer-events-none opacity-100">
            <Canvas
                camera={{ position: [0, 0, 10], fov: 60 }}
                gl={{ alpha: true, antialias: false, powerPreference: 'high-performance' }}
                frameloop="always"
                dpr={Math.min(window.devicePixelRatio, 1.5)}
            >
                <Suspense fallback={null}>
                    <ambientLight intensity={1} color="#a0a" />
                    <directionalLight position={[0, 6, 0]} intensity={1} color="#fff" />
                    <FloatingScene scrollYProgress={scrollYProgress} />
                </Suspense>
            </Canvas>
        </div>
    )
}

useGLTF.preload("/models/xbox_controller_lp.glb")
useGLTF.preload("/models/snes_controller.glb")
useGLTF.preload("/models/joystick.glb")
