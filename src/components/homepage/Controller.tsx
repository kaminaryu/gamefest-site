import { Canvas, useThree } from '@react-three/fiber'
import { Float, useGLTF, Environment } from '@react-three/drei'
import { Suspense, useMemo } from 'react'

interface MeshProp {
    url: string
    position: [number, number, number]
    rotation: [number, number, number]
    scale: number
}

function FloatingMesh({ url, position, rotation, scale }: MeshProp) {
    const { scene } = useGLTF(url)

    const cloned = useMemo(() => {
        const clone = scene.clone()
        clone.traverse((child: any) => {
            if (child.isMesh) {
                child.material = child.material.clone()
                child.material.transparent = true
                child.material.opacity = 0.5 // lower = more transparent
            }
        })
        return clone
    }, [scene])

    return (
        <Float
            speed={1.5}
            rotationIntensity={0.5}
            floatIntensity={1.2}
        >
            <primitive
                object={cloned}
                position={position}
                rotation={rotation}
                scale={scale}
            />
        </Float>
    )
}

function FloatingScene() {
    const { size } = useThree()
    const isMobile = size.width < 768

    const meshes: MeshProp[] = [
        {
            url: "/models/xbox_controller_lp.glb",
            position: isMobile ? [-2, 2, 0] : [-4, 2, 0],
            rotation: [0.9, -0.5, 0],
            scale: isMobile ? 0.4 : 0.6,
        },
        {
            url: "/models/snes_controller.glb",
            position: isMobile ? [2, -1, -2] : [4, -1, -2],
            rotation: [0.4, 0.5, -0.1],
            scale: isMobile ? 0.004 : 0.005,
        },
        // {
        //     url: "/models/another2.glb",
        //     position: isMobile ? [0, 2, 0] : [0, 3, -4],
        //     rotation: [1, 0, 0.2],
        //     scale: isMobile ? 0.3 : 0.6,
        // },
    ]

    return (
        <>
            {meshes.map((mesh, i) => (
                <FloatingMesh key={i} {...mesh} />
            ))}
        </>
    )
}


export default function FloatingController() {
    return (
        <div className="fixed inset-0 pointer-events-none" style={{ filter: 'blur(2px)' }}>
            <Canvas
                camera={{ position: [0, 0, 10], fov: 60 }}
                gl={{ alpha: true }}
            >
                <Suspense fallback={null}>
                    <ambientLight intensity={0.6} />
                    <directionalLight position={[5, 5, 5]} intensity={1} />
                    <Environment preset="city" />

                    <FloatingScene />

                    {/* <FloatingMesh */}
                    {/*     // thank you https://sketchfab.com/maxsdejesus */}
                    {/*     url="/models/snes_controller.glb" */}
                    {/*     position={[4, -1, -2]} */}
                    {/*     rotation={[0.4, 0.5, -0.1]} */}
                    {/*     scale={0.006} */}
                    {/* /> */}
                    {/* <FloatingMesh */}
                    {/*     // thank you https://sketchfab.com/violetboom */}
                    {/*     url="/models/xbox_controller_lp.glb" */}
                    {/*     position={[-4, 2, 0]} */}
                    {/*     rotation={[0.9, -0.5, 0]} */}
                    {/*     scale={0.67} */}
                    {/* /> */}
                    {/* <FloatingMesh */}
                    {/*     url="/models/your-model.glb" */}
                    {/*     position={[0, 3, -4]} */}
                    {/*     rotation={[1, 0, 0.2]} */}
                    {/*     scale={0.6} */}
                    {/* /> */}
                </Suspense>
            </Canvas>
        </div>
    )
}

useGLTF.preload("/models/xbox_controller_lp.glb")
