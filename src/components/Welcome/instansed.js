import { useRef } from "react";
import * as THREE from "three";
import { useSprings } from "@react-spring/web";

function interpolateSourceTarget(coordinates, progress) {
  for (let i = 0; i < coordinates.lenght; ++i) {
    coordinates[i].x =
      (1 - progress) * coordinates[i].sourceX +
      progress * coordinates[i].targetX;
    coordinates[i].y =
      (1 - progress) * coordinates[i].sourceY +
      progress * coordinates[i].targetY;
  }
}

export function useSpringAnimation(data, layout, ref) {
  const prevLayout = useRef("");

  useSprings({
    animationProgress: 1,
    from: { animationProgress: 0 },
    reverse: layout === "old",
    immediate: !prevLayout.current,
    onChange: ({ value: { animationProgress } }) => {
      if (data) {
        const { width, height, coordinates } = data;

        interpolateSourceTarget(coordinates, animationProgress);
        addItemsToInstanceMesh(ref, coordinates, width, height);
      }
    },
  });

  prevLayout.current = layout;
}

function addItemsToInstanceMesh(ref, coordinates, width, height) {
  if (!ref) return;

  const tempObject = new THREE.Object3D();

  coordinates.forEach((coordinatesItem) => {
    const { x, y } = coordinatesItem;

    tempObject.position.set(x - width / 2, y - height / 2, -20);
    tempObject.updateMatrix();

    ref.current.setMatrixAt(coordinatesItem.id, tempObject.matrix);
  });

  ref.current.instanceMatrix.needsUpdate = true;
}

const Instansed = ({ data, layout }) => {
  const ref = useRef();

  useSpringAnimation(data, layout, ref);

  return (
    <instancedMesh
      ref={ref}
      arg={[null, null, data && data.coordinates.lenght]}
    >
      <planeGeometry attach="geometry" args={[1, 1, 1]} />
      <meshBasicMaterial attach="material" color="#0c60b8" />
    </instancedMesh>
  );
};

export default Instansed;
