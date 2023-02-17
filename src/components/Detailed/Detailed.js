import { Canvas } from "@react-three/fiber";
import { Detailed, OrbitControls } from "@react-three/drei";

const CahvasDetailed = () => {
  return (
    <>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <OrbitControls enablePan={false} enableRotate={false} zoomSpeed={0.5} />
        <Detailed distances={[4, 6, 7]}>
          <mesh>
            <circleGeometry args={[1, 64]} />
            <meshBasicMaterial attach="material" color="red" />
          </mesh>
          <mesh>
            <circleGeometry args={[1, 32]} />
            <meshBasicMaterial attach="material" color="green" />
          </mesh>
          <mesh>
            <circleGeometry args={[1, 24]} />
            <meshBasicMaterial attach="material" color="blue" />
          </mesh>
        </Detailed>
      </Canvas>
    </>
  );
};

export default CahvasDetailed;
