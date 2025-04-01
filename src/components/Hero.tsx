import { Canvas } from '@react-three/fiber';
import { OrbitControls, ScrollControls } from '@react-three/drei';
import FloatingElements from './3d/FloatingElements';
import Avatar from './3d/Avatar';

export default function Hero() {
  return (
    <div className="relative h-screen w-full">
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
          <ScrollControls pages={3} damping={0.3}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1.5} />
            <spotLight position={[-10, 10, -10]} angle={0.3} intensity={1} />
            
            <group position={[0, 0, 0]}>
              <FloatingElements />
              <Avatar />
            </group>
            
            <OrbitControls 
              enableZoom={false}
              enablePan={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 3}
            />
          </ScrollControls>
        </Canvas>
      </div>
      
      <div className="relative z-10 h-full">
        <div className="h-screen flex items-center justify-center">
          <div className="text-center max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-blue-50">
              Transforming Healthcare & Education Through Technology
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Innovative solutions that bridge the gap between technology and human needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#healthcare"
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all hover:scale-105 transform"
              >
                Healthcare Solutions
              </a>
              <a
                href="#education"
                className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all hover:scale-105 transform"
              >
                Education Platform
              </a>
            </div>
          </div>
        </div>

        <div className="h-screen flex items-center justify-center">
          <div className="text-center max-w-4xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Healthcare Innovation
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Advanced solutions for modern healthcare challenges
            </p>
          </div>
        </div>

        <div className="h-screen flex items-center justify-center">
          <div className="text-center max-w-4xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Educational Excellence
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Empowering learning through cutting-edge technology
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}