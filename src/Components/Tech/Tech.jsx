import React from "react";
import "./Tech.css";

const Tech = () => {
  return (
    <div className="tech">
      <h1 className="title">TECH STACK</h1>
      <div className="Techline" />
      <div className="stack">
        <div className="sub-titles">
          <h2>Programming Languages</h2>
        </div>
        <div className="languages">
          <img src="/assets/html.png" />
          <img src="/assets/css.png" />
          <img src="/assets/js.png" />
          <img src="/assets/python.png" />
        </div>
        <div className="sub-titles">
          <h2>FrameWork's</h2>
        </div>
        <div className="languages">
          <img src="/assets/react.png" />
          <img src="/assets/next.png" />
          <img src="/assets/node.png" />
          <img src="/assets/express.png" />
          <img src="/assets/mui.png" />
          <img src="/assets/bootstrap.png" />
        </div>
        <div className="sub-titles">
          <h2>DataBase</h2>
        </div>
        <div className="languages">
          <img src="/assets/mongodb.png" />
        </div>
      </div>
    </div>
  );
};

export default Tech;
