import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import HomeGallery from "./Components/HomeGallery/HomeGallery";
import { PictureProvider } from "./utils/PictureContext";
import ScrollToTop from "./Components/ScrollToTop";
import Footer from "./Components/Footer/Footer";
import IbadanDetails from "./Components/IbadanDetails/IbadanDetails";

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
          </Routes>
          <Footer />
        </div>
      </PictureProvider>
    </>
  );
}

export default App;
