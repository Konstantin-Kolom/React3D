import { OrbitControls } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { Suspense } from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader";

function Circle() {
  const url = "viber.jpg";
  const colorMap = useLoader(TextureLoader, url);

  return (
    <mesh>
      <circleGeometry args={[2, 128]} />
      <meshBasicMaterial
        map={colorMap}
        attach="material"
        color="green"
        displacementScale={2}
      />
    </mesh>
  );
}

const TextureM = () => {
  return (
    <>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <OrbitControls zoomSpeed={[0.5]} />
        <Suspense fallback={null}>
          <Circle />
        </Suspense>
      </Canvas>
    </>
  );
};

export default TextureM;
