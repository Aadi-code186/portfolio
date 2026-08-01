'use client';

import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

function SculptureMesh() {
  const saturnGroupRef = useRef<THREE.Group>(null);
  const sphereRef = useRef<THREE.Mesh>(null);

  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  useFrame((state, delta) => {
    // Gentle continuous axial rotation
    if (saturnGroupRef.current) {
      saturnGroupRef.current.rotation.y += delta * (hovered ? 0.35 : 0.2);
    }

    if (sphereRef.current) {
      sphereRef.current.rotation.y += delta * 0.15;
    }

    // Smooth cursor parallax tilt with inertia damping
    if (saturnGroupRef.current) {
      const targetX = (state.pointer.y * Math.PI) / 8;
      const targetY = (state.pointer.x * Math.PI) / 8;
      saturnGroupRef.current.rotation.x = THREE.MathUtils.lerp(
        saturnGroupRef.current.rotation.x,
        targetX + Math.PI / 6, // Natural axial tilt angle
        0.05
      );
      saturnGroupRef.current.rotation.z = THREE.MathUtils.lerp(
        saturnGroupRef.current.rotation.z,
        -targetY * 0.4,
        0.05
      );

      // Smooth subtle scale pulse on click/hover
      const targetScale = clicked ? 1.06 : hovered ? 1.03 : 1.0;
      saturnGroupRef.current.scale.setScalar(
        THREE.MathUtils.lerp(saturnGroupRef.current.scale.x, targetScale, 0.08)
      );
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.4}>
      <group
        ref={saturnGroupRef}
        rotation={[Math.PI / 6, 0, 0]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onPointerDown={() => setClicked(true)}
        onPointerUp={() => setClicked(false)}
      >
        {/* Central Saturn Sphere */}
        <mesh ref={sphereRef} castShadow receiveShadow>
          <sphereGeometry args={[1.35, 64, 64]} />
          <meshPhysicalMaterial
            color="#D1C7BD"
            roughness={0.15}
            metalness={0.2}
            clearcoat={1.0}
            clearcoatRoughness={0.05}
            transmission={0.2}
            ior={1.4}
            thickness={0.8}
            reflectivity={0.9}
          />
        </mesh>

        {/* Primary 3D Saturn Ring (Burgundy Accent #72383D) - True 3D Volumetric Band */}
        <mesh rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.04]} castShadow receiveShadow>
          <torusGeometry args={[2.0, 0.28, 32, 128]} />
          <meshPhysicalMaterial
            color="#72383D"
            roughness={0.2}
            metalness={0.8}
            clearcoat={0.8}
          />
        </mesh>

        {/* Secondary Outer Fine Ring (Border Token #AC9C8D) */}
        <mesh rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.04]} castShadow receiveShadow>
          <torusGeometry args={[2.55, 0.12, 32, 128]} />
          <meshPhysicalMaterial
            color="#AC9C8D"
            roughness={0.3}
            metalness={0.85}
          />
        </mesh>

        {/* Outer Metallic Accent Rim */}
        <mesh rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.04]}>
          <torusGeometry args={[2.72, 0.02, 32, 128]} />
          <meshPhysicalMaterial color="#72383D" roughness={0.15} metalness={0.95} />
        </mesh>

        {/* Floating Ambient Particles */}
        <Sparkles
          count={25}
          scale={5.0}
          size={1.8}
          speed={0.2}
          color="#AC9C8D"
        />
      </group>
    </Float>
  );
}

export function MarbleSculpture() {
  return (
    <div className="w-full h-[380px] sm:h-[480px] md:h-[560px] relative select-none group overflow-hidden">
      {/* Interactive Hint Badge */}
      <div className="absolute top-2 right-4 z-10 pointer-events-none transition-opacity duration-300 opacity-60 group-hover:opacity-100">
        <span className="px-3.5 py-1.5 bg-[#EFE9E1]/85 backdrop-blur-md border border-[#AC9C8D]/40 text-[#72383D] text-[11px] font-mono rounded-full font-semibold shadow-sm flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#72383D] animate-pulse" />
          <span>Interactive 3D • Drag & Tilt</span>
        </span>
      </div>

      <Canvas
        camera={{ position: [0, 0, 9.5], fov: 42 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        className="cursor-grab active:cursor-grabbing"
      >
        {/* Studio Lighting */}
        <ambientLight intensity={0.9} color="#EFE9E1" />
        <directionalLight position={[6, 8, 6]} intensity={1.8} color="#FAF7F2" castShadow />
        <directionalLight position={[-6, -4, -4]} intensity={0.6} color="#AC9C8D" />
        <pointLight position={[0, 2, 4]} intensity={1.4} color="#72383D" />

        <SculptureMesh />

        {/* Smooth 3D Drag Controls */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          rotateSpeed={0.5}
          enableDamping={true}
          dampingFactor={0.05}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3.0}
        />
      </Canvas>
    </div>
  );
}
