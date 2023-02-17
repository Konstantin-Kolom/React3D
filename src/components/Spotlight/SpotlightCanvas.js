import { Canvas } from "@react-three/fiber";
import { OrbitControls, SpotLight, Plane } from "@react-three/drei";
import { useControls } from "leva";

const SpotlightCanvas = () => {
  const { angle, penumbra, intensity, positionX, positionY, positionZ } =
    useControls({
      angle: { value: 0.1, min: 0, max: 1, step: 0.01 },
      penumbra: { value: 0.5, min: 0, max: 1, step: 0.01 },
      intensity: { value: 0.5, min: 0, max: 1, step: 0.01 },
      positionX: { value: 3, min: 0, max: 10, step: 0.1 },
      positionY: { value: 2, min: 0, max: 10, step: 0.1 },
      positionZ: { value: 0, min: 0, max: 10, step: 0.1 },
    });

  return (
    <Canvas camera={{ position: [0, 2, 5] }}>
      <OrbitControls />
      <Plane
        receiveShadow
        rotation-x={[-Math.PI / 2]}
        args={[100, 100]}
        position={[0, -1, 0]}
      >
        <meshPhongMaterial emissive="lightgreen" />
      </Plane>
      <SpotLight
        penumbra={penumbra}
        position={[positionX, positionY, positionZ]}
        intensity={intensity}
        angle={angle}
        color="red"
      />
      <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshPhongMaterial />
      </mesh>
    </Canvas>
  );
};

export default SpotlightCanvas;
