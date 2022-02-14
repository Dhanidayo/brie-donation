import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./Components/Layout";
import LandingPage from "./Pages/LandingPage";
import Clothing from "./Pages/Clothing";
import Shoes from "./Pages/Shoes";
import Handbags from "./Pages/Handbags";
import Accessories from "./Pages/Accessories";
import MysteryBoxes from "./Pages/MysteryBoxes";
import Sustainability from "./Pages/Sustainability";
import OurImpact from "./Pages/OurImpact";

function App() {
  return (
    <BrowserRouter>
        <DefaultLayout>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/Clothing" element={<Clothing />} />
            <Route path="/Shoes" element={<Shoes />} />
            <Route path="/Handbags" element={<Handbags />} />
            <Route path="/Accessories" element={<Accessories />} />
            <Route path="/MysteryBoxes" element={<MysteryBoxes />} />
            <Route path="/Sustainability" element={<Sustainability />} />
            <Route path="/OurImpact" element={<OurImpact />} />
            <Route path="/LandingPage" element={<LandingPage />} />
          </Routes>
        </DefaultLayout>
    </BrowserRouter>
  );
}

export default App;