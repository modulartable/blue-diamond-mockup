import "./App.css";
import Nav from "./Nav";
import Logo from "./Logo";
import { useState } from "react";
import Home from "./Home";
import doctor from "./pexels-karolina-grabowska-4021775.jpg";
import love from "./pexels-karolina-grabowska-4386466.jpg";
import paramedic from "./pexels-mikhail-nilov-8943075.jpg";
import { HashRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import News from "./News";
import Footer from "./Footer";

function App() {
  const [index, setIndex] = useState(0);

  const carousel = [love, doctor, paramedic];

  const [image, setImage] = useState(carousel[index]);

/*
  Sets the carousel forward by setting the index state and image number 
State +1 depending on the current position. 
*/

  const carouselForward = () => {
    if (index === 2) {
      setIndex(0);
      setImage(carousel[index]);
    } else {
      setIndex(index + 1);
      setImage(carousel[index]);
    }
  };

  /*
Sets the carousel backward by setting the index sate and image number
State -1 depending on the current position
  */

  const carouselBackward = () => {
    if (index === 2) {
      setIndex(1);
      setImage(carousel[index]);
    } else if (index === 0) {
      setIndex(2);
      setImage(carousel[index]);
    } else {
      setIndex(index - 1);
      setImage(carousel[index]);
    }
  };

  return (
    <HashRouter>
      <div className="App">
        <div id="header">
          <Logo />
          <Nav />
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                image={image}
                carouselForward={carouselForward}
                carouselBackward={carouselBackward}
              />
            }
          />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="news" element={<News />} />
          <Route path="contact" element={<Contact />} />
        </Routes>

        <div id="footer">
<Footer />
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
