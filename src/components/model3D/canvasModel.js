import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import { Model } from "../../models/ferarri f50/Ferarri f50";

const FerarriModel = () => {
  return (
    <>
      <Canvas camera={{ position: [0, 2, 5], zoom: 1 }}>
        <OrbitControls />
        <color attach="background" args={["lightblue"]} />
        <hemisphereLight intensity={0.35} />
        <spotLight
          position={[5, 15, 0]}
          angle={0.3}
          penumbra={1}
          intensity={5}
          castShadow
        />
        <Suspense>
          <Model />
        </Suspense>
      </Canvas>
    </>
  );
};

export default FerarriModel;
