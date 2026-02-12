import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from '@react-three/drei';

const AnimatedShape = () => {
  const meshRef = useRef(null);

  useFrame((state) => {
    if (meshRef.current) {
      // Gentle rotation
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <mesh ref={meshRef} scale={2.5}>
        <icosahedronGeometry args={[1, 0]} />
        <MeshDistortMaterial
          color="#ffffff"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.9}
          wireframe={true}
        />
      </mesh>
      {/* Inner solid core for depth */}
      <mesh scale={1.5}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color="#4ade80" // Emerald green to match "Available for hire" dot
          transparent
          opacity={0.1}
          roughness={0}
          metalness={0.5}
        />
      </mesh>
    </Float>
  );
};

const Avatar3D = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-40 md:opacity-60">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -10]} color="#4ade80" intensity={2} />
        <AnimatedShape />
      </Canvas>
    </div>
  );
};

export default Avatar3D;
