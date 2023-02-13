import { useBox } from "@react-three/cannon";
import React from "react";

const BoxPhysics = (props) => {
  const [ref] = useBox(() => ({
    mass: 1,
    position: [0, 5, 0],
    rotation: [0.4, 0.2, 0.5],
    ...props,
  }));
  return (
    <mesh receiveShadown ref={ref}>
      <boxGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="hotpink" />
    </mesh>
  );
};

export default BoxPhysics;
