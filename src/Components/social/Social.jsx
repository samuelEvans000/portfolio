import React from "react";
import { Link } from "react-router-dom";
import "./Social.css";

const Social = () => {
  return (
    <div className="social">
      <Link target="_blank" to="https://github.com/samuelEvans000">
        <div className="sicon1">
          <img src="/assets/git.png" />
        </div>
      </Link>
      <Link target="_blank" to="https://www.linkedin.com/in/vincent-samuel-kesari-41b97b224/">
        <div className="sicon2">
          <img src="/assets/linkedin.png" />
        </div>
      </Link>

      <Link target="_blank" to="https://x.com/KVincentSamuel2">
        <div className="sicon3">
          <img src="/assets/x.png" />
        </div>
      </Link>

      <Link target="_blank" to="https://www.instagram.com/samuel_evans_000/">
        <div className="sicon4">
          <img src="/assets/insta.png" />
        </div>
      </Link>
    </div>
  );
};

export default Social;
