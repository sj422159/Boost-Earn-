import { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useScroll } from '@react-spring/web';
import { Sphere, Torus, Box } from '@react-three/drei';
import { Group } from 'three';

export default function Avatar() {
  const group = useRef<Group>(null);
  const { scrollYProgress } = useScroll();
  const { viewport } = useThree();

  useFrame((state) => {
    if (!group.current) return;
    
    // Rotate based on scroll position
    group.current.rotation.y = state.clock.getElapsedTime() * 0.2 + (scrollYProgress.get() * Math.PI * 2);
    
    // Float up and down
    group.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.2;
    
    // Scale based on viewport
    const scale = viewport.width < 5 ? viewport.width * 0.15 : 0.8;
    group.current.scale.setScalar(scale);
  });

  return (
    <group ref={group}>
      {/* Core sphere */}
      <Sphere args={[1, 32, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#60A5FA" metalness={0.8} roughness={0.2} />
      </Sphere>

      {/* Orbiting rings */}
      <group rotation={[Math.PI / 4, 0, 0]}>
        <Torus args={[1.5, 0.1, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial color="#818CF8" metalness={0.6} roughness={0.3} />
        </Torus>
      </group>

      {/* Floating cubes */}
      {[0, 1, 2, 3].map((i) => (
        <Box 
          key={i}
          args={[0.3, 0.3, 0.3]} 
          position={[
            Math.cos(i * Math.PI / 2) * 2,
            Math.sin(i * Math.PI / 2) * 0.5,
            Math.sin(i * Math.PI / 2) * 2
          ]}
        >
          <meshStandardMaterial color="#34D399" metalness={0.5} roughness={0.4} />
        </Box>
      ))}
    </group>
  );
}