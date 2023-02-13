import { Routes, Route } from "react-router-dom";

import { Navigation } from "./components/Novigation/Novigation";
import CanvasBox from "./components/Box/CanvasBox";
import CanvasPhysics from "./components/physics/CanvasPhysics";
import FerarriModel from "./components/model3D/canvasModel";

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<CanvasBox />}></Route>
        <Route path="/physics" element={<CanvasPhysics />}></Route>
        <Route path="/ferarri" element={<FerarriModel />}></Route>
        <Route path="*" element={<p />}></Route>
      </Routes>
    </>
  );
};

export default App;
