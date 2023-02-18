import { Routes, Route } from "react-router-dom";

import { Navigation } from "./components/Novigation/Novigation";
import CanvasBox from "./components/Box/CanvasBox";
import CanvasPhysics from "./components/physics/CanvasPhysics";
import FerarriModel from "./components/model3D/canvasModel";
import CahvasDetailed from "./components/Detailed/Detailed";
import TextureM from "./components/TextureM/TextureM";
import TextCanvas from "./components/Text/TextCanvas";
import Texthtml from "./components/TextHtml/TextHtml";
import SpotlightCanvas from "./components/Spotlight/SpotlightCanvas";
import SoundM from "./components/SoundM/SoundM";

// import Welcome from "./components/Welcome/ConvasWelcome";

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<CanvasBox />}></Route>
        <Route path="/physics" element={<CanvasPhysics />}></Route>
        <Route path="/ferarri" element={<FerarriModel />}></Route>
        {/* <Route path="/welcome" element={<Welcome />}></Route> */}
        <Route path="/detailed" element={<CahvasDetailed />}></Route>
        <Route path="/texture" element={<TextureM />}></Route>
        <Route path="/text" element={<TextCanvas />}></Route>
        <Route path="/texthtml" element={<Texthtml />}></Route>
        <Route path="/spotlight" element={<SpotlightCanvas />}></Route>
        <Route path="/sound" element={<SoundM />}></Route>
        <Route path="*" element={<CanvasBox />}></Route>
      </Routes>
    </>
  );
};

export default App;
