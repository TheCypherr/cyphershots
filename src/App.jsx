import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import HomeGallery from "./Components/HomeGallery/HomeGallery";
import { PictureProvider } from "./utils/PictureContext";
import ScrollToTop from "./Components/ScrollToTop";
import Footer from "./Components/Footer/Footer";
import IbadanDetails from "./Components/IbadanDetails/IbadanDetails";
import BlockParty from "./Components/BlockParty/BlockParty";
import Faraheint from "./Components/Faraheint/Faraheint";
import Ceci from "./Components/Ceci/Ceci";
import FaraheintPlus from "./Components/FaraheintPlus/FaraheintPlus";
import Bella from "./Components/Bella/Bella";
import OouStreet1 from "./Components/OouStreet1/OouStreet1";
import Pocolee from "./Components/Pocolee/Pocolee";
import Victony from "./Components/Victony/Victony";
import OouStreet2 from "./Components/OouStreet2/OouStreet2";
import Tizzy from "./Components/Tizzy/Tizzy";

function App() {
  return (
    <>
      <PictureProvider>
        <div>
          <ScrollToTop />
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <HomeGallery />
                </>
              }
            />
            <Route path="/IbadanDetails/:id" element={<IbadanDetails />} />
            <Route path="/BlockParty/:id" element={<BlockParty />} />
            <Route path="/Faraheint/:id" element={<Faraheint />} />
            <Route path="/Ceci/:id" element={<Ceci />} />
            <Route path="/FaraheintPlus/:id" element={<FaraheintPlus />} />
            <Route path="/Bella/:id" element={<Bella />} />
            <Route path="/OouStreet1/:id" element={<OouStreet1 />} />
            <Route path="/Pocolee/:id" element={<Pocolee />} />
            <Route path="/Victony/:id" element={<Victony />} />
            <Route path="/OouStreet2/:id" element={<OouStreet2 />} />
            <Route path="/Tizzy/:id" element={<Tizzy />} />
          </Routes>
          <Footer />
        </div>
      </PictureProvider>
    </>
  );
}

export default App;
