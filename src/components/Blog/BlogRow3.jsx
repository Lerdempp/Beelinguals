import React from "react";
import { useNavigate } from "react-router-dom";
import resim from "../../assets/images/oo.svg";

const BlogRow3 = () => {
  const navigate = useNavigate();

  // Yönlendirme fonksiyonu
  const handleImageClick = (path) => {
    navigate(path); // Belirtilen path'e yönlendirme
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        alignSelf: "stretch",
        gap: "24px",
        width: "956px",
        height: "323px",
      }}
    >
      {/* 1. Blog Container */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          alignSelf: "stretch",
          padding: "0px 6px 6px 6px",
          height: "316px",
          width: "368px",
          borderRadius: "16px",
          border: "1px solid var(--gray-100, #F3F4F6)",
          background: "var(--gray-50, #F9FAFB)",
        cursor:"pointer",

        }}
      onClick={() => handleImageClick("/blog-details")} // Tıklanınca yönlendirme

      >
        {/* Text Area */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: "16px 10px",
            width: "336px",
            height: "160px",
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
              width: "336px",
              height: "16px",
              boxSizing: "border-box",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
            >
              <circle cx="4" cy="4" r="4" fill="#EA580C" />
            </svg>
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
            <span
              style={{
                alignSelf: "stretch",
                color: "var(--gray-500, #6B7280)",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "20px",
                letterSpacing: "-0.084px",
                whiteSpace: "nowrap",
              }}
            >
              Lorem impsum dolor sit amet dummy amet lottor <br /> ximpsu
            </span>
          </div>
        </div>
        <div
          style={{
            flex: "1 0 0",
            alignSelf: "stretch",
            width: "356px",
            height: "162px",
            marginTop: "-7px",
            cursor: "pointer",
          }}
        >
          <img src={resim} alt="Oğlan" />
        </div>
      </div>

      {/* 2. Blog Container */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          alignSelf: "stretch",
          padding: "0px 6px 6px 6px",
          height: "316px",
          width: "564px",
          borderRadius: "16px",
          border: "1px solid var(--gray-100, #F3F4F6)",
          background: "var(--gray-50, #F9FAFB)",
          cursor:"pointer",
        }}
        onClick={() => handleImageClick("/blog-details")} // Tıklanınca yönlendirme

      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: "16px 10px",
            width: "532px",
            borderRadius: "16px",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              alignSelf: "stretch",
              padding: "12px 10px",
              width: "336px",
              height: "16px",
              boxSizing: "border-box",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
            >
              <circle cx="4" cy="4" r="4" fill="#EA580C" />
            </svg>
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
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "4px",
              width: "532px",
              height: "auto",
              padding: "12px 10px",
              boxSizing: "border-box",
            }}
          >
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
              Our free design system has reached over 10k!
            </span>
            <span
              style={{
                alignSelf: "stretch",
                color: "var(--gray-500, #6B7280)",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "20px",
                letterSpacing: "-0.084px",
                whiteSpace: "nowrap",
              }}
            >
              Lorem impsum dolor sit amet dummy amet lottor ximpsu
            </span>
          </div>
        </div>
        <div
          style={{
            marginTop: "-20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "stretch",
            flex: "1 0 0",
            border: "3px solid #FFF",
            background: "#FFF",
          }}
        >
          <img
            src={resim}
            alt="Oğlan"
            style={{
              width: "552px",
              height: "178px",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogRow3;
