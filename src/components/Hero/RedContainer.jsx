import React from "react";
import { useNavigate } from "react-router-dom";

const RedContainer = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        width: "510px",
        flexDirection: "column",
        alignItems: "center",
        height: "320px",
        flexShrink: "0",
        position: "absolute",
        top: "90px",
        left: "457px",
        gap: "12px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          alignSelf: "stretch",
          gap: "16px",
        }}
      >
        <div
          style={{
            gap: "4px",
            width: "217px",
            height: "20px",
            display: "flex",
            padding: "8px 12px",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "40px",
            border: "1px solid #FFF",
            background: "rgba(255, 255, 255, 0.40)",
            boxShadow:
              "0px -4px 12px 0px #FFF inset, 0px 4px 7.7px -2px rgba(170, 215, 255, 0.50)",
          }}
        >
          <span
            style={{
              color: "#181818",
              textAlign: "center",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "20px",
              letterSpacing: "-0.084px",
            }}
          >
            Planning, tracking and sheets
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
            alignSelf: "stretch",
          }}
        >
          <span
            style={{
              color: "#000",
              textAlign: "center",
              fontSize: "56px",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "64px",
              letterSpacing: "-0.084px",
            }}
          >
            More production less dreaming
          </span>
          <span
            style={{
              alignSelf: "stretch",
              color: "rgba(0, 0, 0, 0.80)",
              textAlign: "center",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "480",
              lineHeight: "24px",
              letterSpacing: "-0.176px",
            }}
          >
            No more wishing - with intuitive features and smart organization,
            your goals are closer than ever
          </span>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "16px",
          width: "456px",
          height: "52px",
          boxSizing: "border-box",
        }}
      ></div>
      <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
        <div
          onClick={() => navigate("/words")}
          style={{
            display: "flex",
            width: "220px",
            padding: "12px",
            justifyContent: "center",
            alignItems: "center",
            gap: "2px",
            borderRadius: "27px",
            border: "1px solid #FFF",
            background: "#FFF",
            boxShadow:
              "0px 0px 14.3px 0px rgba(255, 255, 255, 0.20) inset, 0px -2px 10.1px -2px rgba(255, 255, 255, 0.89) inset",
            cursor: "pointer",
            zIndex: 9999,
          }}
        >
          <div
            style={{
              display: "flex",
              padding: "0px 4px",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <div
              style={{
                color: "#000",
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "28px",
                letterSpacing: "-0.27px",
              }}
            >
              Terminology Sheets
            </div>
          </div>
        </div>

        <div
          onClick={() => navigate("/sheets")}
          style={{
            display: "flex",
            width: "220px",
            padding: "12px",
            justifyContent: "center",
            alignItems: "center",
            gap: "2px",
            borderRadius: "27px",
            border: "1px solid #646464",
            background: "#171717",
            boxShadow:
              "0px 0px 14.3px 0px rgba(255, 255, 255, 0.20) inset, 0px -2px 10.1px -2px rgba(255, 255, 255, 0.89) inset",
            cursor: "pointer",
            zIndex: 9999,
          }}
        >
          <div
            style={{
              display: "flex",
              padding: "0px 4px",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <div
              style={{
                color: "#FFF",
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "28px",
                letterSpacing: "-0.27px",
              }}
            >
              Translation Sheets
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RedContainer;