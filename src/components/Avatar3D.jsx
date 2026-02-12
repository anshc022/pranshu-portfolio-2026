import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshTransmissionMaterial, Environment, Stars } from '@react-three/drei';

const CrystalShape = () => {
  const meshRef = useRef(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    }
  });

  return (
    <Float speed={4} rotationIntensity={1} floatIntensity={2}>
      {/* Main Glass Crystal */}
      <mesh ref={meshRef} scale={3}>
        <icosahedronGeometry args={[1, 0]} />
        <MeshTransmissionMaterial
          backside
          backsideThickness={5}
          thickness={2}
          roughness={0}
          transmission={1}
          ior={1.5}
          chromaticAberration={0.1} // Premium rainbow edges
          anisotropy={0.5}
          color="#ffffff"
        />
      </mesh>
      
      {/* Inner Glowing Core */}
      <mesh scale={1.2}>
        <icosahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color="#4ade80" // Vibrant emerald
          emissive="#4ade80"
          emissiveIntensity={2}
          wireframe
          transparent
          opacity={0.5}
        />
      </mesh>
    </Float>
  );
};

const Avatar3D = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-80 mix-blend-screen">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }} gl={{ alpha: true }}>
        <color attach="background" args={['transparent']} />
        
        {/* Cinematic Lighting */}
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#4ade80" />
        
        {/* Environment for Reflections */}
        <Environment preset="city" />
        
        {/* Space Dust */}
        <Stars radius={100} depth={50} count={1000} factor={4} saturation={0} fade speed={1} />
        
        <CrystalShape />
      </Canvas>
    </div>
  );
};

export default Avatar3D;
