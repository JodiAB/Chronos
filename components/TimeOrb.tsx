"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";

export default function TimeOrb() {
  return (
    <div className="h-[400px] w-full">
      <Canvas>
        <ambientLight />
        <OrbitControls />
        <Sphere args={[1, 32, 32]}>
          <meshStandardMaterial color="#00ffff" emissive="#00ffff" emissiveIntensity={0.3} />
        </Sphere>
      </Canvas>
    </div>
  );
}
