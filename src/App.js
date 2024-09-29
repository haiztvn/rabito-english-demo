import React, { useState } from "react";
import { Link, animateScroll as scroll } from 'react-scroll';
import Navbar from "./component/Navbar";
import Footer from "./page/footer";
import Section1 from "./page/section1";
import Section2 from "./page/section2";
import Section3 from "./page/section3";
import Section4 from "./page/section4";
function App() {
  return (
    <div>
      <Navbar />
      <main id="main" className="container">
        <section>
          <Section1 />
        </section >
        <section id="watch">
          <Section2 />
        </section>
        <section id="live">
          <Section3 />
        </section>
        <section id="pronunciation">
          <Section4 />
        </section>
        <Footer />
      </main>

    </div>

  );
}

export default App;
