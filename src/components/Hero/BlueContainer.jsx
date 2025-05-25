import React from "react";
import deneme from "../../assets/images/deneme.svg";

const BlueContainer = () => {
  return (
    <div
      style={{
        width: "957px",
        height: "456px",
        position: "absolute",
        top: "394px",
        left: "253px",
        zIndex:2022,
      }}
    >
      {/* Resim burada */}
      <img
        src={deneme}
        alt="Deneme"
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
};

export default BlueContainer;
