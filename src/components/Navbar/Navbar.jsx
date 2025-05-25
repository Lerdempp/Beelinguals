import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/icons/Logo1.svg";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const linkStyle = (active) => ({
    color: active ? "#000" : "rgba(0, 0, 0, 0.7)",
    fontSize: "14px",
    fontWeight: active ? "500" : "400",
    lineHeight: "20px",
    cursor: "pointer",
    textDecoration: "none",
  });

  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        width: "100%",
        padding: "24px 141px",
        boxSizing: "border-box",
      }}
    >
      {/* Logo (Solda Sabit) */}
      <img
        src={Logo}
        alt="Beelinguals Logo"
        style={{
          position: "absolute",
          left: "141px",
          height: "40px",
        }}
      />

      {/* Navbar Menu (Ortada) */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "32px",
        }}
      >
        <Link to="/" style={linkStyle(isActive("/"))}>
          Home
        </Link>
        <Link to="/sheets" style={linkStyle(isActive("/sheets"))}>
          Translation Sheets
        </Link>
        <Link to="/words" style={linkStyle(isActive("/words"))}>
          Terminology Exercises
        </Link>
        <Link to="/#blog-section" style={linkStyle(isActive("/"))}>
          Blog
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
