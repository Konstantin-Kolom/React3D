import { Canvas } from '@react-three/fiber';
import { Stats, OrbitControls, Environment, useGLTF } from '@react-three/drei';
import { useControls } from 'leva';

const Models = [
  {
    title: 'Hammer',
    url: 'https://cdn.jsdelivr.net/gh/Sean-Bradley/React-Three-Fiber-Boilerplate@useGLTF/public/models/hammer.glb',
  },
  {
    title: 'Drill',
    url: 'https://cdn.jsdelivr.net/gh/Sean-Bradley/React-Three-Fiber-Boilerplate@useGLTF/public/models/drill.glb',
  },
  {
    title: 'Tape Measure',
    url: 'https://cdn.jsdelivr.net/gh/Sean-Bradley/React-Three-Fiber-Boilerplate@useGLTF/public/models/tapeMeasure.glb',
  },
];

function Model({ url }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
}

export default function Hammer() {
  const { title } = useControls({
    title: {
      options: Models.map(({ title }) => title),
    },
  });

  return (
    <>
      <Canvas camera={{ position: [0, 0, -0.3], near: 0.025 }}>
        <Environment
          files="https://cdn.jsdelivr.net/gh/Sean-Bradley/React-Three-Fiber-Boilerplate@useGLTF/public/img/workshop_1k.hdr"
          background
        />
        <group>
          <Model url={Models[Models.findIndex(m => m.title === title)].url} />
        </group>
        <OrbitControls autoRotate />
        <Stats />
      </Canvas>
      <span id="info">The {title} is selected.</span>
    </>
  );
}
