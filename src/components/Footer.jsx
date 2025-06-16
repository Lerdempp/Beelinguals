import React from "react";
import Logo from "../assets/icons/Logo1.svg";
import TwitterIcon from "../assets/icons/twitter.svg";
import FacebookIcon from "../assets/icons/face.svg";
import LinkedInIcon from "../assets/icons/linkedin.svg";
import InstagramIcon from "../assets/icons/insta.svg";

const commonTextStyle = {
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "20px",
  letterSpacing: "-0.084px",
  margin: "0",
};

const createColumn = (title, items) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "12px",
      }}
    >
      <p
        style={{
          ...commonTextStyle,
          color: "var(--gray-400, #9CA3AF)",
          fontSize: "14px",
          fontWeight: "400",
          lineHeight: "20px",
          margin: "0",
        }}
      >
        {title}
      </p>
      {items.map((item, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "4px", // İkon ve yazı arasındaki boşluk
            cursor: "pointer",
          }}
        >
          {item.icon && (
            <img
              src={item.icon}
              alt={`${item.text} icon`}
              style={{ width: "20px", height: "20px" }}
            />
          )}
          <p
            style={{
              ...commonTextStyle,
              color: "var(--gray-600, #4B5563)",
            }}
          >
            {item.text}
          </p>
        </div>
      ))}
    </div>
  );
};

const Footer = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "24px",
        width: "1152px",
        paddingTop: "32px",
        paddingBottom: "0",
        borderTop: "1px solid #E5E7EB",
        boxSizing: "border-box",
        margin: "0 auto",
      }}
    >
      {/* Top Container */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "36px",
          width: "100%",
          height: "152px",
          alignSelf: "stretch",
        }}
      >
        {/* Left Area */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "64px",
            marginRight: "24px",
            flex: "1 0 0",
            width: "268px",
            height: "152px",
            position: "relative",
          }}
        >
          {/* Logo ve Metin Container */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0px",
              position: "absolute",
              top: "0px",
              marginLeft: "-71px",
            }}
          >
            {/* Logo */}
            <img
              src={Logo}
              alt="Logo"
              style={{
                width: "180px",
                height: "32px",
              }}
            />
            {/* Beelinguals Metni */}
            <span
              style={{
                color: "#F9AA01",
                fontSize: "28px",
                fontWeight: "bold",
                lineHeight: "32px",
                marginLeft: "-60px",
              }}
            >
              Beelinguals
            </span>
          </div>
          {/* Second Child */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "8px",
              alignSelf: "stretch",
              position: "absolute",
              bottom: "0px",
            }}
          >
            <p
              style={{
                alignSelf: "stretch",
                color: "var(--gray-600, #4B5563)",
                fontSize: "16px",
                fontWeight: "500",
                lineHeight: "24px",
                letterSpacing: "-0.176px",
                margin: "0",
              }}
            >
              Start your 7-day free trial
            </p>
            <p
              style={{
                alignSelf: "stretch",
                color: "var(--gray-400, #9CA3AF)",
                fontSize: "12px",
                fontWeight: "400",
                lineHeight: "16px",
                margin: "0",
              }}
            >
              Beelinguals ile dil öğrenme yolculuğunuza başlayın.
              <br />
              Pratik alıştırmalar ve zengin kaynaklarla
              <br />
              becerilerinizi hızla geliştirin.
            </p>
          </div>
        </div>

        {/* Right Area */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            width: "824px",
            height: "152px",
            paddingLeft: "36px",
          }}
        >
          {createColumn("Product", [
            { text: "Enterprise Solutions" },
            { text: "Threat Detection" },
            { text: "Threat Detection" },
            { text: "Cloud Security" },
          ])}
          {createColumn("Resources", [
            { text: "Customer Support" },
            { text: "Technical Guides" },
            { text: "Developer Tools" },
            { text: "Security Updates" },
          ])}
          {createColumn("Company", [
            { text: "Meet Our Team" },
            { text: "Newsroom" },
            { text: "Partnerships" },
            { text: "Careers" },
          ])}
          {createColumn("Socials", [
            { text: "Instagram", icon: InstagramIcon },
            { text: "X (Twitter)", icon: TwitterIcon },
            { text: "LinkedIn", icon: LinkedInIcon },
            { text: "Facebook", icon: FacebookIcon },
          ])}
          {createColumn("Others", [
            { text: "Privacy Policy" },
            { text: "Terms & Conditions" },
          ])}
        </div>
      </div>

      {/* Bottom Container */}
      <div
        style={{
          display: "flex",
          padding: "32px 0px",
          alignItems: "center",
          gap: "12px",
          width: "1152px",
          alignSelf: "stretch",
          borderTop: "1px solid #E5E7EB",
        }}
      >
        <p
          style={{
            color: "var(--slate-500, #64748B)",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "16px",
            letterSpacing: "-0.084px",
            margin: "0",
          }}
        >
          ©2024 Virenet, All rights reserved.
        </p>

        <div
          style={{
            display: "flex",
            padding: "6px",
            alignItems: "center",
            gap: "2px",
            borderRadius: "8px",
            border: "1px solid rgba(255, 255, 255, 0.06)",
            backgroundColor: "#CBD5E1",
            cursor: "pointer",
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
            <p
              style={{
                color: "var(--text-strong, #FFF)",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "20px",
                margin: "0",
              }}
            >
              Any help?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
