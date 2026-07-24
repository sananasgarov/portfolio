import { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

/** Scale the starfield to the device: phones get fewer points and capped DPR. */
function getProfile() {
  if (typeof window === 'undefined') {
    return { count: 3000, maxDpr: 2, hidden: false };
  }

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const width = window.innerWidth;

  if (reducedMotion) return { count: 0, maxDpr: 1, hidden: true };
  if (width <= 480) return { count: 900, maxDpr: 1.5, hidden: false };
  if (width <= 768) return { count: 1500, maxDpr: 1.5, hidden: false };
  return { count: 3000, maxDpr: 2, hidden: false };
}

function Stars({ count }: { count: number }) {
  const ref = useRef<THREE.Points>(null!);
  const [sphere] = useState(() => {
    const points = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
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
  const [profile, setProfile] = useState(() => getProfile());

  // Rotating a phone changes which profile is appropriate. Only swap when the
  // bucket actually changes so ordinary resizes don't rebuild the geometry.
  useEffect(() => {
    const onResize = () => {
      const next = getProfile();
      setProfile((prev) =>
        prev.count === next.count && prev.hidden === next.hidden ? prev : next
      );
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  if (profile.hidden) return null;

  return (
    <div className="particles-layer">
      <Canvas
        camera={{ position: [0, 0, 1.5] }}
        // Uncapped DPR on a 3x phone screen renders ~9x the pixels for no
        // visible gain on a field of 1px dots.
        dpr={[1, profile.maxDpr]}
        gl={{ antialias: false, powerPreference: 'low-power' }}
      >
        {/* key forces fresh geometry when the point count bucket changes */}
        <Stars key={profile.count} count={profile.count} />
      </Canvas>
    </div>
  );
}
