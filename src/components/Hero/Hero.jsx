import React from "react";
import StarIcon from "../../assets/icons/Star.svg";
import StarIcon2 from "../../assets/icons/Star2.svg";
import group from "../../assets/icons/Group.svg";
import vector1 from "../../assets/icons/Vector1.svg";
import vector2 from "../../assets/icons/Vector2.svg";
import group1 from "../../assets/icons/Group1.svg";
import group4 from "../../assets/icons/Group4.svg";
import "./Hero.css";
import RedContainer from "./RedContainer"; // Yeni bileşeni import ettik
import BlueContainer from "./BlueContainer"; // Yeni bileşeni import ettik


const Hero = () => {
  return (
    <div
      style={{
        width: "1424px",
        height: "808px",
        flexShrink: "0",
        borderRadius: "32px",
        background: "#D7ECFF",
        boxShadow:
          "0px -4px 50px -27px rgba(0, 124, 236, 0.53) inset, -2px -4px 19.9px 0px #EEF4FA inset, 2px 4px 6.1px 0px #EEF4FA inset",
        margin: "auto",
        position: "relative",
        overflow:"hidden"
      }}
    >
      <RedContainer /> {/* Ayrı bileşeni burada kullandık */}
      <BlueContainer /> {/* Ayrı bileşeni burada kullandık */}

      {/* Group */}
      <div
        style={{
          width: "1164.446px",
          height: "1113.377px",
          flexShrink: "0",
          position: "absolute",
          top: "-76px",
          left: "141px",
        }}
      >
        {/* Ellipse2 */}
        <div className="radius"></div>

        {/* Ellipse3 */}
        <div className="radius2"></div>

        {/* Star Icon */}
        <img
          src={StarIcon}
          alt="Star Icon"
          style={{
            flexShrink: "0",
            fill: "#FFF",
            stroke: "#8BDBFC",
            strokeWidth: "4.013px",
            filter: "drop-shadow(0px 5.061px 14.297px rgba(161, 210, 255, 0.48))",
            position: "absolute",
            top: "493px",
            left: "1095px",
          }}
        />

        {/* Group Icon */}
        <img
          src={group}
          alt="Group Icon"
          style={{
            flexShrink: "0",
            position: "absolute",
            top: "114px",
            left: "514px",
          }}
        />
        {/* Star Icon2 */}
        <img
          src={StarIcon2}
          alt="Star Icon"
          style={{
            flexShrink: "0",
            fill: "#FFF",
            stroke: "#8BDBFC",
            strokeWidth: "4.013px",
            filter: "drop-shadow(0px 5.061px 14.297px rgba(161, 210, 255, 0.48))",
            position: "absolute",
            top: "655px",
            right: "1095px",
          }}
        />
        {/* Group1 */}
        <img
          src={group1}
          alt="Group1"
          style={{
            flexShrink: "0",
            filter: "drop-shadow(0px 5.061px 14.297px rgba(161, 210, 255, 0.48))",
            position: "absolute",
            top: "170px",
            right: "986px",
          }}
        />
        {/* Group4 */}
        <img
          src={group4}
          alt="Group1"
          style={{
            flexShrink: "0",
            filter: "drop-shadow(0px 5.061px 14.297px rgba(161, 210, 255, 0.48))",
            position: "absolute",
            top: "314px",
            right: "160px",
          }}
        />
        {/* Vector1 */}
        <img
          src={vector1}
          alt="Vector1"
          style={{
            flexShrink: "0",
            filter: "drop-shadow(0px 5.061px 14.297px rgba(161, 210, 255, 0.48))",
            position: "absolute",
            stroke: "#FFF",
            strokeWidth: "2.007px",
            top: "329px",
            right: "924px",
          }}
        />
        {/* Vector2 */}
        <img
          src={vector2}
          alt="Vector2"
          style={{
            flexShrink: "0",
            filter: "drop-shadow(0px 5.061px 14.297px rgba(161, 210, 255, 0.48))",
            position: "absolute",
            stroke: "#FFF",
            strokeWidth: "2.007px",
            top: "153px",
            right: "130px",
          }}
        />
      </div>
    </div>
  );
};

export default Hero;
