import { useState, useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial, Preload, Sphere, MeshDistortMaterial, useTexture } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

// Parallax and shooting star logic
const ParallaxStars = (props) => {
  const ref = useRef();
  const { mouse } = useThree();
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }));

  useFrame((state, delta) => {
    // Parallax: move stars group based on mouse
    if (ref.current) {
      ref.current.position.x = mouse.x * 0.2;
      ref.current.position.y = mouse.y * 0.2;
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]} ref={ref}>
      <Points positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#f272c8'
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <ParallaxStars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
