import "./Home.css";
import React, { useEffect, useState } from "react";
import Tech from "../Tech/Tech";
import Projects from "../Projects/Projects";
import { Element } from "react-scroll";
import Achievements from "../Achievements/Achievements";
import Contact from "../Contact/Contact";

const Home = () => {
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    setIsFlipping(true);
    const timer = setTimeout(() => {
      setIsFlipping(false);
    }, 2000); // Match the duration of your CSS animation

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home">
      <Element name="home" className="element">
        <div className="intro">
          <div className="introText">
            <h1>
              Hello, <br></br> My name is <br></br>
              <span className="name">Vincent Samuel Kesari</span>
              <br></br>I am Frontend Developer
            </h1>
          </div>
          <div className={`profile ${isFlipping ? "flipping" : ""}`}>
            <img src="/assets/dev.png" />
          </div>
        </div>
      </Element>

      <Element className="element" name="about">
        <div className="about">
          <h1 className="title">ABOUT ME</h1>
          <div className="aboutLine" />
          <p>
            {" "}
            I am a passionate and accomplished Frontend developer with a strong
            drive to learn and excel. Winning two national-level hackathons has
            not only showcased my technical skills but also demonstrated my
            ability to thrive under pressure, collaborate effectively, and solve
            complex problems. Constantly staying updated with the latest
            industry trends, I actively engage in self-directed learning and
            online courses. Aside from technical expertise, I value effective
            communication and teamwork. I thrive in collaborative environments,
            appreciating diverse perspectives and actively contributing to
            create exceptional solutions.
          </p>
          {/* <br></br> */}
          <p>
            My ultimate goal as a Frontend developer is to leverage technology
            to make a positive impact on people's lives. Whether it's developing
            intuitive interfaces, optimizing website performance, or tackling
            real-world challenges, I am committed to continuous growth and
            creating remarkable solutions. Feel free to contact me or drop me a
            message! I'd love to connect and discuss exciting opportunities or
            collaborations.
          </p>
        </div>
      </Element>

      <Element className="element" name="tech">
        <Tech />
      </Element>

      <Element className="element" name="projects">
        <Projects />
      </Element>

      <Element className="element" name="achieve">
        <Achievements/>
      </Element>

      <Element className="element" name="contact">
        <Contact/>
      </Element>
    </div>
  );
};

export default Home;
