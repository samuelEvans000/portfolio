import React from "react";
import "./Achievements.css";

const Achievements = () => {
  return (
    <div className="achieve">
      <h1 className="title">ACHIEVEMENTS</h1>
      <div className="achieveLine" />

      <div className="achieve-container">
        <a target="_blank" href="https://drive.google.com/file/d/1AM6fJ5kiqcUPjyDIJO-dXv0pQ1pd3Rex/view?usp=sharing">
          <div className="achBox">
            <div className="achBox-img">
              <img src="/assets/hack1.png" />
            </div>
            <div className="achBox-text">
              <h4>Hackathon Winner at Marwadi university</h4>
            </div>
          </div>
        </a>
        <a target="_blank" href="https://drive.google.com/file/d/1AKWXdDEh21rAkADMGwxuXbbGdudpohjl/view?usp=sharing">
          <div className="achBox">
            <div className="achBox-img">
              <img src="/assets/hack2.png" />
            </div>
            <div className="achBox-text">
              <h4>Hackathon Winner at St. Franscis college</h4>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Achievements;
