import { Canvas } from "@react-three/fiber";

import Box from "./Box";

const CanvasBox = () => {
  return (
    <>
      <Canvas>
        <ambientLight intensity={0.9} />
        {/* <directionalLight color="red" position={[0, 0, 5]} /> */}
        <pointLight position={[10, 10, 10]} />
        <Box position={[-3, 0, 0]} />
        <Box position={[0, 0, 0]} />
        <Box position={[3, 0, 0]} />
      </Canvas>
    </>
  );
};

export default CanvasBox;
