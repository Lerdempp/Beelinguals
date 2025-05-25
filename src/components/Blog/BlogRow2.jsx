import React from "react";
import { useNavigate } from "react-router-dom";
import resim from "../../assets/images/oo.svg";

const BlogRow2 = () => {
  const navigate = useNavigate();

  // Yönlendirme fonksiyonu
  const handleImageClick = (path) => {
    navigate(path); // Belirtilen path'e yönlendirme
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "30px",
        width: "368px", // Inspect'teki genişlik
        height: "674px", // Inspect'teki yükseklik
        cursor:"pointer",
      }} 
      onClick={() => handleImageClick("/blog-details")} // Tıklanınca yönlendirme

    >
      {/* 1. Blog Container */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          alignSelf: "stretch",
          padding: "0px 6px 6px 6px", // Inspect'teki padding değerleri
          height: "322px", // İç yükseklik
          borderRadius: "16px",
          border: "1px solid var(--gray-100, #F3F4F6)", // Border rengi
          background: "var(--gray-50, #F9FAFB)", // Arka plan rengi
        }}
      >
        {/* Text Area */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: "16px 10px",
            width: "336px", // Inspect'teki genişlik
            height:"160px",
            borderRadius: "16px",
            boxSizing: "border-box",
          }}
        >
          {/* Information Container */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              alignSelf: "stretch",
              padding: "12px 10px",
              width: "336px", // İç genişlik
              height: "16px", // İç yükseklik
              boxSizing: "border-box",
            }}
          >
            {/* SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
            >
              <circle cx="4" cy="4" r="4" fill="#EA580C" />
            </svg>

            {/* Information Text */}
            <span
              style={{
                color: "var(--gray-500, #6B7280)",
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "16px",
              }}
            >
              6 minutes read
            </span>
          </div>
          {/* Text Container */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "4px",
              width: "auto",
              height: "auto",
              padding: "12px 10px",
              boxSizing: "border-box",
            }}
          >
            {/* Başlık */}
            <span
              style={{
                alignSelf: "stretch",
                color: "#000",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "24px",
                letterSpacing: "-0.176px",
              }}
            >
              Our free design system has reached <br /> over 10k!
            </span>

            {/* Açıklama */}
            <span
              style={{
                alignSelf: "stretch",
                color: "var(--gray-500, #6B7280)",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "20px",
                letterSpacing: "-0.084px",
                whiteSpace: "nowrap", // Satır kaymasını engeller
              }}
            >
              Lorem impsum dolor sit amet dummy amet lottor <br /> ximpsu
            </span>
          </div>
        </div>
        {/* Image Area Container */}
        <div
          style={{
            flex: "1 0 0",
            alignSelf: "stretch",
            width: "356px", // İç genişlik
            height: "162px", // İç yükseklik
            marginTop:"-7px",
          }}
        >
          {/* Resim */}
          <img
            src={resim}
            alt="Oğlan"
            style={{
            }}
          />
        </div>
      </div>
       {/* 1. Blog Container */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          alignSelf: "stretch",
          padding: "0px 6px 6px 6px", // Inspect'teki padding değerleri
          height: "322px", // İç yükseklik
          borderRadius: "16px",
          border: "1px solid var(--gray-100, #F3F4F6)", // Border rengi
          background: "var(--gray-50, #F9FAFB)", // Arka plan rengi
        }}
      >
        {/* Text Area */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: "16px 10px",
            width: "336px", // Inspect'teki genişlik
            borderRadius: "16px",
            boxSizing: "border-box",
          }}
        >
          {/* Information Container */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              alignSelf: "stretch",
              padding: "12px 10px",
              width: "336px", // İç genişlik
              height: "16px", // İç yükseklik
              boxSizing: "border-box",
            }}
          >
            {/* SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
            >
              <circle cx="4" cy="4" r="4" fill="#EA580C" />
            </svg>

            {/* Information Text */}
            <span
              style={{
                color: "var(--gray-500, #6B7280)",
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "16px",
              }}
            >
              6 minutes read
            </span>
          </div>
          {/* Text Container */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "4px",
              width: "auto",
              height: "auto",
              padding: "12px 10px",
              boxSizing: "border-box",
            }}
          >
            {/* Başlık */}
            <span
              style={{
                alignSelf: "stretch",
                color: "#000",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "24px",
                letterSpacing: "-0.176px",
              }}
            >
              Our free design system has reached <br /> over 10k!
            </span>

            {/* Açıklama */}
            <span
              style={{
                alignSelf: "stretch",
                color: "var(--gray-500, #6B7280)",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "20px",
                letterSpacing: "-0.084px",
                whiteSpace: "nowrap", // Satır kaymasını engeller
              }}
            >
              Lorem impsum dolor sit amet dummy amet lottor <br /> ximpsu
            </span>
          </div>
        </div>
        {/* Image Area Container */}
        <div
          style={{
            flex: "1 0 0",
            alignSelf: "stretch",
            width: "356px", // İç genişlik
            height: "162px", // İç yükseklik
            marginTop:"-15px",
          }}
        >
          {/* Resim */}
          <img
            src={resim}
            alt="Oğlan"
            style={{
            }}
          />
        </div>
      </div>
      
    </div>
  );
};

export default BlogRow2;
