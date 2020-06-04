import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import MainNavbar from './components/navbar/main-navbar';
import TopNavbar from './components/navbar/top-navbar';
import MainSliderComponent from './components/sections/main-slider/main-slider';
import Brands from './components/sections/brands/imageLibrary';
import DynamicCam from './components/sections/360/dynamic-cam';
import Partners from './components/sections/partners/partners';
import Footer from './components/footer/footer';
import NewArrivals from './components/sections/new-arrivals/new-arrivals';
import BestSeller from './components/sections/best-seller/best-seller';
import MustHave from './components/sections/must-have/must-have';

function App() {
  return (
    <BrowserRouter>
      {/* Main Container */}
      <div className="container-fluid p-0">
        {/* /////////////// HEADER ////////////// */}
        {/* Header */}
        <header id="navbarSection">
          <TopNavbar />
          <MainNavbar />
        </header>

        {/* /////////////// MAIN SECTIONS ////////////// */}
        {/* Main Slider */}
        <section id="sliderSection">
          <MainSliderComponent />
        </section>
        {/* New Arrival Section */}
        <section id="newArrivalSection" className="sectionMargin">
          <NewArrivals />
        </section>
        {/* Best Seller Section */}
        <section id="bestSellerSection" className="sectionMargin">
          <BestSeller />
        </section>
        {/* Brands Section */}
        <section id="brandsSection" className="sectionMargin">
          <Brands />
        </section>
        {/* Must Have Section */}
        <section id="mustHaveSection" className="sectionMargin">
          <MustHave />
        </section>
        {/* Dynamic 360Degrees Section */}
        <section id="dynamicCamSection" className="sectionMargin">
          <DynamicCam />
        </section>
        {/* Our Partners Section */}
        <section id="partnersSection" className="sectionMargin">
          <Partners />
        </section>

        {/* /////////////// FOOTER ////////////// */}
        {/* Footer */}
        <footer id="footerSection" className="">
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
