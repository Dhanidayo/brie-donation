import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DefaultLayout from "./Components/Layout";
import Clothing from "./Pages/Clothing";
import Shoes from "./Pages/Shoes";
import Handbags from "./Pages/Handbags";
import Accessories from "./Pages/Accessories";
import MysteryBoxes from "./Pages/MysteryBoxes";
import Sustainability from "./Pages/Sustainability";
import OurImpact from "./Pages/OurImpact";
import About from "./Pages/About";
import FourOhFour from "./Pages/404";
import FaqPage from "./Pages/FAQ";

function App() {
  return (
    <BrowserRouter>
        <DefaultLayout>
          <Routes>
            <Route path="/shoes" element={<Shoes />} />
            <Route path="/handbags" element={<Handbags />} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/mystery-boxes" element={<MysteryBoxes />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/our-impact" element={<OurImpact />} />
            <Route path="/clothing" element={<Clothing />} />
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Navigate replace to="/clothing" />} />
            <Route path="/*" element={<FourOhFour />} />
            <Route path="/faq-page" element={<FaqPage />} />
          </Routes>
        </DefaultLayout>
    </BrowserRouter>  
  );
}

export default App;