import { usePlane } from "@react-three/cannon";
import React from "react";

const PlanePhysics = (props) => {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }));
  return (
    <mesh ref={ref}>
      <planeGeometry args={[100, 100]} />
    </mesh>
  );
};

export default PlanePhysics;
