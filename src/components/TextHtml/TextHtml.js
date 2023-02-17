import { Html, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "./TextHtml.css";

const Texthtml = () => {
  return (
    <>
      <Canvas>
        <OrbitControls />
        <mesh position={[2, 0, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshBasicMaterial color="blue" />
          <Html className="my-text">My text...</Html>
        </mesh>
      </Canvas>
    </>
  );
};

export default Texthtml;
