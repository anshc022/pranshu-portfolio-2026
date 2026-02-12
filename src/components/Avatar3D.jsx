import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars } from '@react-three/drei';

const CrystalShape = () => {
  const meshRef = useRef(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.15;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      {/* Optimized Lightweight Crystal */}
      <mesh ref={meshRef} scale={2.8}>
        <icosahedronGeometry args={[1, 0]} /> {/* Low Poly for Performance */}
        <meshPhysicalMaterial
          roughness={0}
          metalness={0.1}
          transmission={0.9} // Glass effect without expensive refraction
          thickness={1}
          color="#ffffff"
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>
      
      {/* Inner Core (Simplified) */}
      <mesh scale={1.1}>
        <icosahedronGeometry args={[1, 0]} />
        <meshBasicMaterial
          color="#4ade80" 
          wireframe
          transparent
          opacity={0.4}
        />
      </mesh>
    </Float>
  );
};

const Avatar3D = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-60 mix-blend-screen">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }} gl={{ alpha: true, powerPreference: "low-power" }}>
        {/* Simplified Lighting */}
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#4ade80" />
        
        {/* Low-cost Background Particles */}
        <Stars radius={100} depth={50} count={400} factor={3} saturation={0} fade speed={0.5} />
        
        <CrystalShape />
      </Canvas>
    </div>
  );
};

export default Avatar3D;
