import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import { Model } from '../../models/Ferarrif50';

const FerarriModel = () => {
  return (
    <>
      <Canvas camera={{ position: [0, 2, 5], zoom: 1 }}>
        <OrbitControls />
        <color attach="background" args={['lightblue']} />
        <hemisphereLight intensity={0.35} />
        <spotLight position={[5, 25, 5]} angle={0.3} penumbra={1} intensity={5} castShadow />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </Canvas>
    </>
  );
};

export default FerarriModel;
