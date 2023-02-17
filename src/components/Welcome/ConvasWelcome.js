import { useState, useLayoutEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { MapControls, OrthographicCamera } from "@react-three/drei";

import Instansed from "./instansed";
import { parselImage } from "./tools";

import s from "./Welcome.module.css";

const Welcome = () => {
  const [data, dataChahge] = useState(null);
  const [layout, layoutChenge] = useState("old");

  useLayoutEffect(() => {
    parselImage("/new.png", "/old.png", (data) => {
      dataChahge(data);
    });
  }, []);

  return (
    <>
      <div className={s.box}>
        <button
          className={s.button}
          disabled={layout === "old"}
          onClick={() => {
            layoutChenge("old");
          }}
        >
          One
        </button>
        <button
          className={s.button}
          disabled={layout === "new"}
          onClick={() => {
            layoutChenge("new");
          }}
        >
          Two
        </button>
      </div>

      <div className={s.boxCanvas}>
        <Canvas>
          <OrthographicCamera makeDefault position={[0, 0, 1]} up={[0, 0, 0]} />
          <Instansed data={data} layout={layout} />
          <MapControls />
        </Canvas>
      </div>
    </>
  );
};

export default Welcome;
