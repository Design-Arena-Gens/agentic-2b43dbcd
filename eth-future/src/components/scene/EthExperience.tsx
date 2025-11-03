"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  Float,
  MeshDistortMaterial,
  OrbitControls,
  Sparkles,
} from "@react-three/drei";
import { Suspense, useRef, useState } from "react";
import * as THREE from "three";

function EthCrystal() {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime();
    meshRef.current.rotation.x = Math.sin(t / 2) * 0.35;
    meshRef.current.rotation.y = t * 0.6;
  });

  return (
    <Float speed={2.4} rotationIntensity={1.1} floatIntensity={1.4}>
      <mesh ref={meshRef} scale={1.7}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color="#8be6ff"
          emissive="#51b8ff"
          emissiveIntensity={0.4}
          roughness={0.12}
          metalness={0.85}
          thickness={1.1}
          clearcoat={1}
          clearcoatRoughness={0.1}
          distort={0.35}
          speed={2}
        />
      </mesh>
    </Float>
  );
}

function OrbitingFragments() {
  const groupRef = useRef<THREE.Group>(null);
  const [fragments] = useState(() =>
    new Array(12).fill(null).map((_, idx) => ({
      radius: 2.6 + Math.random() * 1.4,
      speed: 0.2 + Math.random() * 0.2,
      scale: 0.15 + Math.random() * 0.3,
      phase: Math.random() * Math.PI * 2,
      color: idx % 2 === 0 ? "#60a5fa" : "#a855f7",
    })),
  );

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const t = clock.getElapsedTime();
    groupRef.current.children.forEach((child, idx) => {
      const fragment = fragments[idx];
      const angle = t * fragment.speed + fragment.phase;
      const position = new THREE.Vector3(
        Math.cos(angle) * fragment.radius,
        Math.sin(angle * 0.6) * fragment.radius * 0.15,
        Math.sin(angle) * fragment.radius * 0.6,
      );
      child.position.copy(position);
      child.lookAt(0, 0, 0);
    });
  });

  return (
    <group ref={groupRef}>
      {fragments.map((fragment, idx) => (
        <mesh key={idx} scale={fragment.scale}>
          <icosahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color={fragment.color}
            emissive={fragment.color}
            emissiveIntensity={0.45}
            roughness={0.35}
            metalness={0.9}
          />
        </mesh>
      ))}
    </group>
  );
}

function EnergyField() {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.z = clock.getElapsedTime() * 0.1;
  });

  return (
    <mesh ref={meshRef} rotation-x={Math.PI / 2}>
      <ringGeometry args={[2.4, 3.6, 128]} />
      <meshBasicMaterial
        color="#60a5fa"
        transparent
        opacity={0.2}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

export default function EthExperience() {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[32px] border border-slate-800/60 bg-slate-950/70 shadow-[0_0_120px_rgba(96,165,250,0.3)]">
      <div className="gradient-ring" />
      <Suspense
        fallback={
          <div className="flex h-full w-full items-center justify-center text-slate-200">
            Rendering web3 future...
          </div>
        }
      >
        <Canvas
          camera={{ position: [0, 0, 6], fov: 45 }}
          dpr={[1, 2]}
          gl={{ alpha: true }}
        >
          <color attach="background" args={["#020617"]} />
          <ambientLight intensity={0.6} />
          <directionalLight
            position={[4, 6, 2]}
            intensity={1.4}
            color="#93c5fd"
          />
          <spotLight
            position={[-6, -8, -2]}
            angle={0.6}
            intensity={1.1}
            color="#8b5cf6"
            penumbra={0.8}
          />
          <EthCrystal />
          <OrbitingFragments />
          <EnergyField />
          <Sparkles
            count={120}
            scale={8}
            size={3}
            speed={0.4}
            color="#bae6fd"
          />
          <Environment preset="night" />
          <OrbitControls
            enablePan={false}
            enableRotate
            enableZoom={false}
            autoRotate
            autoRotateSpeed={0.35}
            minPolarAngle={Math.PI / 3.2}
            maxPolarAngle={(Math.PI * 2) / 3}
          />
        </Canvas>
      </Suspense>
    </div>
  );
}
