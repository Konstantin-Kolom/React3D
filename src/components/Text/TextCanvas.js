import { Text, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

const TextCanvas = () => {
  return (
    <>
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 500]} />
        <OrbitControls />
        <Text
          color="red"
          fontSize={14}
          maxWidth={500}
          lineHeight={1.5}
          letterSpacing={0.1}
          textAlign="right"
          //  font="https://fonts.gstatic.com/s/cookie/v8/syky-y18lb0tSbf9kgqU.woff"
          //  font="https://fonts.gstatic.com/s/cookie/v8/syky-y18lb0tSbf9kgqU.woff"
          anchorX="center"
          anchorY="middle"
          strokeWidth="3%"
          strokeColor="blue"
        >
          {/* <meshBasicMaterial attach="material" color="green" /> */}
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat exercitationem quod
          minus error beatae tempore non vel deleniti voluptates impedit, aspernatur ducimus magni
          illo modi debitis dolore. Ipsa cupiditate, molestiae beatae nobis voluptates ad quae
          maiores. Eligendi repellat quibusdam perferendis consequuntur ut libero accusantium,
          suscipit pariatur iusto molestiae, labore impedit!"
        </Text>
      </Canvas>
    </>
  );
};

export default TextCanvas;
