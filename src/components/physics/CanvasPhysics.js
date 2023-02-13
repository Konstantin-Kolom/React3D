import { Canvas } from "@react-three/fiber";

//Элементы управления орбитой позволяют камере вращаться вокруг цели.
import { OrbitControls } from "@react-three/drei";

// Для добавления физики для елементов в нутри компонента.
import { Physics } from "@react-three/cannon";

import PlanePhysics from "./PlanePhysics";
import BoxPhysics from "./BoxPhysics";

// import Box from "./Box";

const CanvasPhysics = () => {
  return (
    <>
      <Canvas camera={{ position: [0, 2, 5], zoom: 1 }}>
        <OrbitControls />
        <Physics>
          <color attach="background" args={["lightblue"]} />
          <hemisphereLight intensity={0.35} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.3}
            penumbra={1}
            intensity={2}
            castShadow
          />
          <PlanePhysics />
          <BoxPhysics />
          <BoxPhysics position={[0, 10, 0]} />
        </Physics>
      </Canvas>
    </>
  );
};

export default CanvasPhysics;
