import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Box } from '@react-three/drei';
import { Group } from 'three';

export default function FloatingElements() {
  const group = useRef<Group>(null);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.getElapsedTime() * 0.1;
      group.current.children.forEach((child, i) => {
        child.position.y = Math.sin(state.clock.getElapsedTime() * 0.5 + i) * 0.2;
      });
    }
  });

  return (
    <group ref={group}>
      <Sphere args={[0.3, 32, 32]} position={[-2, 0, 0]}>
        <meshStandardMaterial color="#60A5FA" />
      </Sphere>
      <Box args={[0.4, 0.4, 0.4]} position={[2, 0, 0]}>
        <meshStandardMaterial color="#818CF8" />
      </Box>
      <Sphere args={[0.2, 32, 32]} position={[0, 2, 0]}>
        <meshStandardMaterial color="#34D399" />
      </Sphere>
    </group>
  );
}