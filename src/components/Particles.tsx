import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function Stars() {
  const ref = useRef<THREE.Points>(null!);
  const [sphere] = useState(() => {
    const points = new Float32Array(3000 * 3);
    for (let i = 0; i < 3000; i++) {
      points[i * 3] = (Math.random() - 0.5) * 10;
      points[i * 3 + 1] = (Math.random() - 0.5) * 10;
      points[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return points;
  });

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 15;
    ref.current.rotation.y -= delta / 20;
    
    // Subtle mouse interaction
    const mouseX = (state.mouse.x * Math.PI) / 20;
    const mouseY = (state.mouse.y * Math.PI) / 20;
    ref.current.rotation.x += (mouseY - ref.current.rotation.x) * 0.05;
    ref.current.rotation.y += (mouseX - ref.current.rotation.y) * 0.05;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#3b82f6"
          size={0.008}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  );
}

export default function Particles() {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 0, 1.5] }}>
        <Stars />
      </Canvas>
    </div>
  );
}
