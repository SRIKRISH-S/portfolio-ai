import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { motion } from 'framer-motion';

// simplified floating sphere to avoid MeshDistortMaterial crashing
const AnimatedSphere = () => {
    const meshRef = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (meshRef.current) {
            meshRef.current.position.y = Math.sin(t) * 0.2;
            meshRef.current.rotation.x = t * 0.3;
            meshRef.current.rotation.y = t * 0.2;
        }
    });

    return (
        <mesh ref={meshRef} scale={1.5}>
            <sphereGeometry args={[1, 64, 64]} />
            <meshStandardMaterial
                color="#06b6d4"
                roughness={0.2}
                metalness={0.8}
                wireframe={true}
            />
        </mesh>
    );
};

const Hero = () => {
    return (
        <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-zinc-950">
            {/* 3D Canvas Background */}
            <div className="absolute inset-0 z-0 cursor-move">
                <Canvas camera={{ position: [0, 0, 5] }}>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[10, 10, 5]} intensity={2} color="#c084fc" />
                    <directionalLight position={[-10, -10, -5]} intensity={1.5} color="#22d3ee" />
                    <Stars radius={50} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
                    <AnimatedSphere />
                    <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.0} />
                </Canvas>
            </div>

            {/* Overlay Content */}
            <div className="relative z-10 text-center px-4 pointer-events-none mt-16">
                <motion.h1
                    className="text-5xl md:text-8xl font-black tracking-tight mb-4 text-white drop-shadow-lg"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    Hi, I'm <span className="text-gradient">Srikrishna S</span>
                </motion.h1>

                <motion.p
                    className="text-lg md:text-2xl text-zinc-300 max-w-2xl mx-auto mb-10 font-medium drop-shadow-md"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    Building intelligent, scalable systems at the intersection of AI, MLOps, and Cloud-Native Engineering.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="pointer-events-auto flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <a href="#projects" className="inline-block px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold backdrop-blur-md hover:bg-cyan-500/20 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all duration-300 group min-w-[220px]">
                        Explore My Work <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                    </a>

                    {/* The Terminal Game relies on its logic in TerminalGame.jsx, but we trigger a custom event or let users jump to it. For now, we'll dispatch an event that TerminalGame.jsx will listen for */}
                    <button
                        onClick={() => window.dispatchEvent(new CustomEvent('open-terminal-game'))}
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 font-semibold backdrop-blur-md hover:bg-green-500/30 hover:shadow-[0_0_30px_rgba(34,197,94,0.3)] transition-all duration-300 group min-w-[220px]"
                    >
                        <span className="font-mono">{'>_'}</span> Play Dev Journey
                    </button>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
            >
                <div className="w-[30px] h-[50px] rounded-full border-2 border-white/20 flex justify-center p-2 backdrop-blur-sm">
                    <div className="w-1 h-3 bg-cyan-400 rounded-full animate-slide-up shadow-[0_0_8px_rgba(6,182,212,0.8)]"></div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
